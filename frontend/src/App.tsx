import { useState } from "react";
import { disciplinas, nivelDificuldade, nivelEscolaridade } from "./data";

function App() {
  const [numeroQuestoesDissertativas, setNumeroQuestoesDissertativas] =
    useState(5);
  const [numeroQuestoesAlternativas, setNumeroQuestoesAlternativas] =
    useState(5);
  const [numeroQuestoes] = useState(
    numeroQuestoesAlternativas + numeroQuestoesDissertativas
  );

  const [tema, setTema] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [dificuldade, setDificuldade] = useState("");

  const data = {
    tema,
    disciplina,
    escolaridade,
    dificuldade,
    numeroQuestoesAlternativas,
    numeroQuestoesDissertativas,
    numeroQuestoes,
  };

  console.log(data);

  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-emerald-500 from-30% to-neutral-200 to-30% pb-24">
        <div className="w-full max-w-screen-lg mx-auto py-12">
          <h1 className="text-xl font-bold mb-4">Gerador de Avaliações</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            minus expedita eligendi sint voluptates ea, facere repudiandae
            blanditiis ab quasi explicabo quam officiis, perferendis commodi
            nobis! Repellendus inventore nobis odio assumenda fugiat ut eos? Hic
            sed reprehenderit eius quia delectus sapiente itaque, dignissimos
            quidem aut fugiat architecto magnam ullam repudiandae.
          </p>
        </div>

        <div className="w-full max-w-screen-lg bg-white mx-auto p-6">
          <h2>Informações da Avaliação</h2>

          <div className="w-full flex flex-col gap-12 items-center justify-center">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="tema" className="text-sm font-bold">
                Tema da Avaliação
              </label>
              <input
                type="text"
                id="tema"
                name="tema"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                className="px-4 py-4 border border-neutral-700 rounded-md text-base"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="tema" className="text-sm font-bold">
                Disciplina
              </label>
              <select
                className="px-4 py-4 border border-neutral-700 rounded-md text-base"
                onChange={(e) => setDisciplina(e.target.value)}
              >
                <option value="none">Selecione...</option>
                {disciplinas.map((item) => (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="escolaridade" className="text-sm font-bold">
                Nível de Escolaridade
              </label>
              <select
                className="px-4 py-4 border border-neutral-700 rounded-md text-base"
                onChange={(e) => setEscolaridade(e.target.value)}
              >
                <option>Selecione...</option>
                {nivelEscolaridade.map((item) => (
                  <option key={item.id} value={item.serie}>
                    {item.serie}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="dificuldade" className="text-sm font-bold">
                Dificuldade
              </label>
              <select
                className="px-4 py-4 border border-neutral-700 rounded-md text-base"
                onChange={(e) => setDificuldade(e.target.value)}
              >
                <option>Selecione...</option>
                {nivelDificuldade.map((item) => (
                  <option key={item.id}>{item.nivel}</option>
                ))}
              </select>
            </div>

            <div className="w-full flex flex-col gap-2">
              <p>Explicar porque uma pergunta de exemplo é importante</p>
              <label htmlFor="exemplo" className="text-sm font-bold">
                Insira uma pergunta de exemplo
              </label>
              <textarea
                className="px-4 py-4 border border-neutral-700 rounded-md text-base"
                id="exemplo"
              />
            </div>

            <div className="w-full flex items-center gap-6">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="dissertativas">Dissertativas</label>
                <input
                  type="number"
                  className="px-4 py-4 border border-neutral-700 rounded-md text-base"
                  onChange={(e) =>
                    setNumeroQuestoesDissertativas(Number(e.target.value))
                  }
                  min={0}
                  max={numeroQuestoes - numeroQuestoesAlternativas}
                  defaultValue={numeroQuestoesDissertativas}
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="alternativas">Alternativas</label>
                <input
                  type="number"
                  className="px-4 py-4 border border-neutral-700 rounded-md text-base"
                  onChange={(e) =>
                    setNumeroQuestoesAlternativas(Number(e.target.value))
                  }
                  min={0}
                  max={numeroQuestoes - numeroQuestoesDissertativas}
                  defaultValue={numeroQuestoesAlternativas}
                />
              </div>
            </div>

            <button className="w-full bg-slate-800 text-white py-3 rounded-md">
              Gerar Avaliação
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full bg-neutral-800 text-white py-12">
        <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between gap-6">
          <div className="flex flex-col items-start">
            <span className="text-base">
              Pós Graduação Instituto Mauá de Tecnologia
            </span>
            <span className="text-base">2024 - Fullstack Developer</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-sm">Componentes</span>
            <ul>
              <li className="text-base">Brayan Oliveira da Silva</li>
              <li className="text-base">Márcio Guimarães Mendes</li>
              <li className="text-base">Vitor Giannaccini Tito da Silva</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
