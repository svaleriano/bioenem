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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ reply: "Use uma requisicao POST para conversar com o tutor." });
    return;
  }

  const { message, topic } = req.body || {};

  if (!message || typeof message !== "string") {
    res.status(400).json({ reply: "Envie uma pergunta para o tutor." });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(200).json({
      reply:
        "O tutor IA ainda nao esta configurado. No Vercel, adicione a variavel OPENAI_API_KEY em Settings > Environment Variables e faca um novo deploy."
    });
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.3",
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
      res.status(200).json({
        reply:
          data.error?.message ||
          "A IA retornou um erro. Confira a chave OPENAI_API_KEY e o modelo configurado em OPENAI_MODEL."
      });
      return;
    }

    res.status(200).json({
      reply: extractText(data) || "Recebi sua pergunta, mas nao consegui montar a resposta agora."
    });
  } catch {
    res.status(500).json({ reply: "Nao consegui conectar com a IA agora. Tente novamente em instantes." });
  }
}
