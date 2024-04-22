import { useState } from "react";

import { disciplinas, nivelDificuldade, nivelEscolaridade } from "../../data";
import FormularioDescricao from "../Formulario-Descricao";

const Formulario = () => {
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

  const labelStyles = "text-base font-bold mb-1";

  console.log(data);

  return (
    <form className="w-full flex flex-col gap-12 items-center justify-center">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="tema" className={labelStyles}>
          Tema da Avaliação
        </label>
        <FormularioDescricao>Adicionar uma breve descrição</FormularioDescricao>
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
        <label htmlFor="tema" className={labelStyles}>
          Disciplina
        </label>
        <FormularioDescricao>Adicionar uma breve descrição</FormularioDescricao>
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
        <label htmlFor="escolaridade" className={labelStyles}>
          Nível de Escolaridade
        </label>
        <FormularioDescricao>Adicionar uma breve descrição</FormularioDescricao>
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
        <label htmlFor="dificuldade" className={labelStyles}>
          Dificuldade
        </label>
        <FormularioDescricao>Adicionar uma breve descrição</FormularioDescricao>
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
    </form>
  );
};

export default Formulario;