const systemPrompt = `
Voce e um professor de Biologia para alunos do Ensino Medio que estudam para o ENEM.
Responda em portugues do Brasil, com linguagem clara, acolhedora e objetiva.
Priorize raciocinio biologico, interpretacao de enunciados, relacoes com cotidiano, saude,
ambiente e tecnologia. Quando fizer sentido, organize a resposta em:
1. ideia central;
2. explicacao;
3. como isso cai no ENEM;
4. uma pergunta rapida de treino.
Nao invente dados de prova oficial. Se o aluno pedir uma questao oficial especifica,
oriente a consultar o caderno oficial do INEP e ofereca uma questao autoral semelhante.
`;

function extractText(data) {
  if (data.output_text) return data.output_text;

  const content = data.output?.flatMap((item) => item.content || []) || [];
  const text = content.find((item) => item.type === "output_text" || item.text);
  return text?.text || null;
}

function getOpenAiKey() {
  return (
    process.env.OPENAI_API_KEY ||
    process.env.OPENAI_KEY ||
    process.env.OPENAI_APIKEY ||
    process.env.OPENAI_API_TOKEN ||
    ""
  ).trim();
}

function getGeminiKey() {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    ""
  ).trim();
}

function getOpenAiModel() {
  return (process.env.OPENAI_MODEL || "gpt-4o-mini").trim();
}

function getGeminiModel() {
  return (process.env.GEMINI_MODEL || "gemini-2.5-flash-lite").trim();
}

function buildStudentPrompt(message, topic) {
  return `${systemPrompt}

Tema atual: ${topic || "Biologia ENEM"}

Duvida do aluno: ${message}`;
}

async function askGemini(message, topic) {
  const apiKey = getGeminiKey();
  const model = getGeminiModel();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: buildStudentPrompt(message, topic) }]
        }
      ],
      generationConfig: {
        temperature: 0.45,
        maxOutputTokens: 900
      }
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      ok: false,
      reply:
        data.error?.message ||
        "O Gemini retornou um erro. Confira GEMINI_API_KEY e GEMINI_MODEL no Vercel."
    };
  }

  const reply = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim();

  return {
    ok: true,
    reply: reply || "Recebi sua pergunta, mas nao consegui montar a resposta agora."
  };
}

async function askOpenAi(message, topic) {
  const apiKey = getOpenAiKey();
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: getOpenAiModel(),
      input: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Tema atual: ${topic || "Biologia ENEM"}\n\nDuvida do aluno: ${message}`
        }
      ]
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      ok: false,
      reply:
        data.error?.message ||
        "A OpenAI retornou um erro. Confira OPENAI_API_KEY e OPENAI_MODEL no Vercel."
    };
  }

  return {
    ok: true,
    reply: extractText(data) || "Recebi sua pergunta, mas nao consegui montar a resposta agora."
  };
}

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    const openAiKey = getOpenAiKey();
    const geminiKey = getGeminiKey();
    res.status(200).json({
      ok: true,
      environment: process.env.VERCEL_ENV || "local",
      provider: geminiKey ? "gemini" : openAiKey ? "openai" : "none",
      hasGeminiKey: Boolean(geminiKey),
      geminiKeyLength: geminiKey.length,
      geminiModel: getGeminiModel(),
      hasOpenAiKey: Boolean(openAiKey),
      openAiKeyLength: openAiKey.length,
      openAiModel: getOpenAiModel(),
      checkedNames: [
        "GEMINI_API_KEY",
        "GOOGLE_API_KEY",
        "OPENAI_API_KEY",
        "OPENAI_KEY",
        "OPENAI_APIKEY",
        "OPENAI_API_TOKEN"
      ]
    });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ reply: "Use uma requisicao POST para conversar com o tutor." });
    return;
  }

  const { message, topic } = req.body || {};

  if (!message || typeof message !== "string") {
    res.status(400).json({ reply: "Envie uma pergunta para o tutor." });
    return;
  }

  const geminiKey = getGeminiKey();
  const openAiKey = getOpenAiKey();

  if (!geminiKey && !openAiKey) {
    res.status(200).json({
      reply:
        `O tutor IA ainda nao esta configurado neste deploy (${process.env.VERCEL_ENV || "ambiente local"}). No Vercel, adicione GEMINI_API_KEY ou OPENAI_API_KEY em Project Settings > Environment Variables, marque Production e faca Redeploy.`
    });
    return;
  }

  try {
    const result = geminiKey
      ? await askGemini(message, topic)
      : await askOpenAi(message, topic);

    if (!result.ok) {
      res.status(200).json({ reply: result.reply });
      return;
    }

    res.status(200).json({ reply: result.reply });
  } catch {
    res.status(500).json({ reply: "Nao consegui conectar com a IA agora. Tente novamente em instantes." });
  }
};
