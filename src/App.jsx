import React, { useMemo, useState } from "react";
import { ALL_QUESTIONS, ENEM_YEARS, STUDY_CONTENT } from "./data";

const C = {
  bg: "#07111f",
  panel: "#0e1b2d",
  panel2: "#13243a",
  line: "#27415f",
  text: "#edf6ff",
  muted: "#a9bdd4",
  accent: "#22d3a6",
  accent2: "#ffb454",
  danger: "#ff6b6b",
  info: "#55b9ff"
};

const styles = {
  app: {
    minHeight: "100vh",
    background: `linear-gradient(160deg, ${C.bg} 0%, #0c1a2b 45%, #15271f 100%)`,
    color: C.text,
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  },
  shell: { maxWidth: 1120, margin: "0 auto", padding: "20px" },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 5,
    backdropFilter: "blur(14px)",
    background: "rgba(7, 17, 31, 0.86)",
    borderBottom: `1px solid ${C.line}`
  },
  nav: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap"
  },
  brand: { fontWeight: 900, letterSpacing: 0, cursor: "pointer", fontSize: 20 },
  hero: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
    gap: 18,
    alignItems: "stretch",
    margin: "24px 0"
  },
  heroMain: {
    minHeight: 310,
    border: `1px solid ${C.line}`,
    borderRadius: 8,
    padding: 28,
    background:
      "linear-gradient(135deg, rgba(34,211,166,0.18), rgba(85,185,255,0.12)), radial-gradient(circle at 85% 20%, rgba(255,180,84,0.20), transparent 28%), #0e1b2d"
  },
  heroAside: {
    border: `1px solid ${C.line}`,
    borderRadius: 8,
    padding: 20,
    background: "rgba(14, 27, 45, 0.9)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14
  },
  card: {
    border: `1px solid ${C.line}`,
    borderRadius: 8,
    background: "rgba(14, 27, 45, 0.94)",
    padding: 18
  },
  button: {
    border: `1px solid ${C.line}`,
    background: C.panel2,
    color: C.text,
    borderRadius: 8,
    padding: "11px 14px",
    fontWeight: 800,
    cursor: "pointer"
  },
  primary: {
    border: "1px solid rgba(34,211,166,0.65)",
    background: C.accent,
    color: "#062018",
    borderRadius: 8,
    padding: "12px 16px",
    fontWeight: 900,
    cursor: "pointer"
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    border: `1px solid ${C.line}`,
    borderRadius: 999,
    padding: "6px 10px",
    color: C.muted,
    fontSize: 13,
    margin: "0 6px 6px 0"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    border: `1px solid ${C.line}`,
    borderRadius: 8,
    padding: "12px 14px",
    color: C.text,
    background: "#091525",
    outline: "none"
  }
};

function Button({ children, onClick, primary = false, disabled = false, style = {} }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...(primary ? styles.primary : styles.button),
        opacity: disabled ? 0.55 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style
      }}
    >
      {children}
    </button>
  );
}

function Tag({ children }) {
  return <span style={styles.pill}>{children}</span>;
}

function Chat({ topic }) {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    {
      role: "assistant",
      text: "Pode mandar sua duvida de Biologia. Eu respondo com foco no ENEM e posso montar resumo, analogia, mapa mental em texto ou questao comentada."
    }
  ]);
  const [loading, setLoading] = useState(false);

  async function send() {
    const message = msg.trim();
    if (!message || loading) return;

    const nextChat = [...chat, { role: "user", text: message }];
    setChat(nextChat);
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, topic })
      });
      const data = await res.json();
      setChat([...nextChat, { role: "assistant", text: data.reply || "Nao consegui responder agora." }]);
    } catch {
      setChat([...nextChat, { role: "assistant", text: "Nao consegui conectar com a IA agora. Confira a chave OPENAI_API_KEY no Vercel." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ ...styles.card, marginTop: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0 }}>Tutor inteligente</h2>
          <p style={{ color: C.muted, margin: "6px 0 0" }}>Tire duvidas, peca explicacoes e treine raciocinio de prova.</p>
        </div>
        <Tag>IA</Tag>
      </div>

      <div style={{ display: "grid", gap: 10, margin: "18px 0", maxHeight: 360, overflow: "auto" }}>
        {chat.map((item, i) => (
          <div
            key={`${item.role}-${i}`}
            style={{
              justifySelf: item.role === "user" ? "end" : "start",
              maxWidth: "88%",
              padding: 12,
              borderRadius: 8,
              background: item.role === "user" ? "rgba(34,211,166,0.16)" : "rgba(85,185,255,0.12)",
              border: `1px solid ${item.role === "user" ? "rgba(34,211,166,0.45)" : "rgba(85,185,255,0.35)"}`,
              whiteSpace: "pre-wrap",
              lineHeight: 1.55
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 10 }}>
        <input
          aria-label="Mensagem para o tutor"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Ex.: explique eutrofizacao como cai no ENEM"
          style={styles.input}
        />
        <Button primary onClick={send} disabled={loading}>{loading ? "..." : "Enviar"}</Button>
      </div>
    </section>
  );
}

function Home({ onChooseYear, onStartAll }) {
  return (
    <>
      <section style={styles.hero}>
        <div style={styles.heroMain}>
          <Tag>Biologia completa para o Ensino Medio</Tag>
          <h1 style={{ fontSize: 48, lineHeight: 1.02, margin: "22px 0 14px", letterSpacing: 0 }}>
            BioENEM
          </h1>
          <p style={{ fontSize: 18, color: C.muted, maxWidth: 680, lineHeight: 1.65 }}>
            Conteudo organizado por ano, revisao por tema, simulados comentados e um tutor de IA para transformar duvidas em explicacoes claras.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
            <Button primary onClick={() => onChooseYear(3)}>Revisar para o ENEM</Button>
            <Button onClick={onStartAll}>Simulado geral</Button>
          </div>
        </div>
        <aside style={styles.heroAside}>
          <h2 style={{ marginTop: 0 }}>Cobertura</h2>
          <p style={{ color: C.muted, lineHeight: 1.55 }}>
            Citologia, bioquimica, microbiologia, botanica, genetica, evolucao, fisiologia, zoologia, ecologia, biotecnologia e saude publica.
          </p>
          <div>
            {ENEM_YEARS.map((y) => <Tag key={y}>ENEM {y}</Tag>)}
          </div>
        </aside>
      </section>

      <section style={styles.grid}>
        {STUDY_CONTENT.map((item) => (
          <article key={item.year} style={styles.card}>
            <Tag>{item.year}o ano</Tag>
            <h2>{item.title}</h2>
            <p style={{ color: C.muted, minHeight: 68, lineHeight: 1.55 }}>{item.description}</p>
            <Button primary onClick={() => onChooseYear(item.year)} style={{ width: "100%" }}>
              Entrar
            </Button>
          </article>
        ))}
      </section>
    </>
  );
}

function Dashboard({ selectedYear, onBack, onStudy, onSim, onGeneral }) {
  const content = STUDY_CONTENT.find((item) => item.year === selectedYear);
  const totalModules = content.topics.reduce((sum, topic) => sum + topic.modulos.length, 0);

  return (
    <section>
      <Button onClick={onBack}>Voltar</Button>
      <div style={{ ...styles.card, marginTop: 16 }}>
        <Tag>{content.title}</Tag>
        <h1 style={{ marginBottom: 8 }}>{content.description}</h1>
        <p style={{ color: C.muted }}>{content.topics.length} temas, {totalModules} modulos e simulado comentado.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <Button primary onClick={onStudy}>Estudar trilha</Button>
          <Button onClick={() => onSim(selectedYear)}>Simulado do ano</Button>
          <Button onClick={onGeneral}>Simulado geral</Button>
        </div>
      </div>
      <div style={{ ...styles.grid, marginTop: 14 }}>
        {content.topics.map((topic) => (
          <article key={topic.id} style={styles.card}>
            <h2>{topic.titulo}</h2>
            <p style={{ color: C.muted, lineHeight: 1.55 }}>{topic.resumo}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Study({ selectedYear, onBack, onAsk }) {
  const content = STUDY_CONTENT.find((item) => item.year === selectedYear);
  const [activeTopic, setActiveTopic] = useState(content.topics[0].id);
  const topic = content.topics.find((item) => item.id === activeTopic);

  return (
    <section>
      <Button onClick={onBack}>Voltar</Button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 14, marginTop: 16 }}>
        <aside style={styles.card}>
          <h2 style={{ marginTop: 0 }}>Temas</h2>
          <div style={{ display: "grid", gap: 8 }}>
            {content.topics.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTopic(item.id)}
                style={{
                  ...styles.button,
                  textAlign: "left",
                  borderColor: item.id === activeTopic ? C.accent : C.line,
                  background: item.id === activeTopic ? "rgba(34,211,166,0.14)" : C.panel2
                }}
              >
                {item.titulo}
              </button>
            ))}
          </div>
        </aside>

        <main style={styles.card}>
          <Tag>{content.title}</Tag>
          <h1>{topic.titulo}</h1>
          <p style={{ color: C.muted, lineHeight: 1.65 }}>{topic.resumo}</p>
          {topic.modulos.map((modulo, index) => (
            <article key={modulo.titulo} style={{ borderTop: `1px solid ${C.line}`, paddingTop: 18, marginTop: 18 }}>
              <Tag>Modulo {index + 1}</Tag>
              <h2>{modulo.titulo}</h2>
              <p style={{ lineHeight: 1.7 }}>{modulo.teoria}</p>
              <p style={{ color: C.muted, lineHeight: 1.7 }}>{modulo.aprofundamento}</p>
              <div>{modulo.enem.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
              <Button onClick={() => onAsk(`${topic.titulo}: ${modulo.titulo}`)} style={{ marginTop: 12 }}>
                Perguntar ao tutor
              </Button>
            </article>
          ))}
        </main>
      </div>
    </section>
  );
}

function Simulado({ questions, onBack, onFinish }) {
  const [curr, setCurr] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [history, setHistory] = useState([]);
  const q = questions[curr];

  function next() {
    const record = { ...q, userSel: selected, isCorrect: selected === q.correct };
    const nextHistory = [...history, record];
    if (curr + 1 >= questions.length) {
      onFinish(nextHistory);
      return;
    }
    setHistory(nextHistory);
    setCurr(curr + 1);
    setSelected(null);
    setAnswered(false);
  }

  if (!q) {
    return (
      <section style={styles.card}>
        <h1>Nenhuma questao encontrada</h1>
        <Button onClick={onBack}>Voltar</Button>
      </section>
    );
  }

  return (
    <section style={styles.card}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <Button onClick={onBack}>Sair</Button>
        <Tag>Questao {curr + 1} de {questions.length}</Tag>
      </div>
      <div style={{ marginTop: 18 }}>
        <Tag>{q.year_ref}</Tag>
        <Tag>{q.topic}</Tag>
        <Tag>{q.difficulty}</Tag>
        <h1 style={{ lineHeight: 1.35 }}>{q.question}</h1>
      </div>
      <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
        {q.options.map((option, i) => {
          const isRight = answered && i === q.correct;
          const isWrong = answered && selected === i && i !== q.correct;
          return (
            <button
              key={option}
              onClick={() => !answered && setSelected(i)}
              style={{
                ...styles.button,
                textAlign: "left",
                borderColor: isRight ? C.accent : isWrong ? C.danger : selected === i ? C.info : C.line,
                background: isRight
                  ? "rgba(34,211,166,0.18)"
                  : isWrong
                    ? "rgba(255,107,107,0.16)"
                    : selected === i
                      ? "rgba(85,185,255,0.16)"
                      : C.panel2
              }}
            >
              {String.fromCharCode(65 + i)}. {option}
            </button>
          );
        })}
      </div>
      {!answered ? (
        <Button primary disabled={selected === null} onClick={() => setAnswered(true)} style={{ marginTop: 18 }}>
          Confirmar
        </Button>
      ) : (
        <div style={{ marginTop: 18, borderTop: `1px solid ${C.line}`, paddingTop: 18 }}>
          <h2 style={{ color: selected === q.correct ? C.accent : C.danger }}>
            {selected === q.correct ? "Resposta correta" : "Resposta incorreta"}
          </h2>
          <p style={{ color: C.muted, lineHeight: 1.65 }}>{q.explanation}</p>
          <Button primary onClick={next}>{curr + 1 === questions.length ? "Ver resultado" : "Proxima"}</Button>
        </div>
      )}
    </section>
  );
}

function Results({ history, onRestart, onReview }) {
  const correct = history.filter((item) => item.isCorrect).length;
  const percent = Math.round((correct / Math.max(history.length, 1)) * 100);

  return (
    <section>
      <div style={styles.card}>
        <Tag>Resultado</Tag>
        <h1>{correct} de {history.length} acertos ({percent}%)</h1>
        <p style={{ color: C.muted }}>Revise os comentarios e transforme os erros em prioridade de estudo.</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Button primary onClick={onRestart}>Novo simulado</Button>
          <Button onClick={onReview}>Voltar aos estudos</Button>
        </div>
      </div>
      <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
        {history.map((item, index) => (
          <article key={`${item.id}-${index}`} style={styles.card}>
            <Tag>{item.year_ref}</Tag>
            <Tag>{item.topic}</Tag>
            <h2>{index + 1}. {item.question}</h2>
            <p style={{ color: item.isCorrect ? C.accent : C.danger }}>
              Sua resposta: {item.userSel === null ? "sem resposta" : item.options[item.userSel]}
            </p>
            <p>Correta: {item.options[item.correct]}</p>
            <p style={{ color: C.muted }}>{item.explanation}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedYear, setSelectedYear] = useState(1);
  const [simQuestions, setSimQuestions] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatTopic, setChatTopic] = useState("Biologia ENEM");

  const totalQuestions = useMemo(() => ALL_QUESTIONS.all.length, []);

  function chooseYear(year) {
    setSelectedYear(year);
    setScreen("dash");
  }

  function makeSim(year = selectedYear) {
    const pool = year === "all" ? ALL_QUESTIONS.all : ALL_QUESTIONS[year] || [];
    const amount = Math.min(10, pool.length);
    const questions = [...pool].sort(() => Math.random() - 0.5).slice(0, amount);
    setSimQuestions(questions);
    setScreen("sim");
  }

  function finishSim(history) {
    setResultHistory(history);
    setScreen("res");
  }

  function askTutor(topic) {
    setChatTopic(topic);
    setChatOpen(true);
  }

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <span style={styles.brand} onClick={() => setScreen("home")}>BioENEM</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <Tag>{totalQuestions} questoes autorais</Tag>
            <Button onClick={() => setChatOpen((open) => !open)}>Tutor IA</Button>
          </div>
        </nav>
      </header>

      <div style={styles.shell}>
        {screen === "home" && <Home onChooseYear={chooseYear} onStartAll={() => makeSim("all")} />}
        {screen === "dash" && (
          <Dashboard
            selectedYear={selectedYear}
            onBack={() => setScreen("home")}
            onStudy={() => setScreen("study")}
            onSim={makeSim}
            onGeneral={() => makeSim("all")}
          />
        )}
        {screen === "study" && (
          <Study
            selectedYear={selectedYear}
            onBack={() => setScreen("dash")}
            onAsk={askTutor}
          />
        )}
        {screen === "sim" && (
          <Simulado
            questions={simQuestions}
            onBack={() => setScreen("dash")}
            onFinish={finishSim}
          />
        )}
        {screen === "res" && (
          <Results
            history={resultHistory}
            onRestart={() => makeSim("all")}
            onReview={() => setScreen("study")}
          />
        )}
        {chatOpen && <Chat topic={chatTopic} />}
      </div>
    </div>
  );
}
