import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { disciplinas, nivelDificuldade, nivelEscolaridade } from "../../data";
import FormularioDescricao from "./Formulario-Descricao";
import FormularioCabecalho from "./Formulario-Cabecalho";
import { DataContext } from "../../context/DataContext";

const Formulario = () => {
  const [formData, setFormData] = useState();
  const { data, saveData } = useContext(DataContext);

  const [numeroQuestoes] = useState(
    data.numeroQuestoesAlternativas + data.numeroQuestoesDissertativas
  );

  const navigator = useNavigate();

  const handleForm = async (e) => {
    const { id, value } = e.currentTarget;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSaveData = async (e, formData) => {
    e.preventDefault();

    console.log(formData);

    const response = await fetch("http://localhost:3000/gerador-avaliacoes", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    if (!response.ok) {
      alert("Erro ao enviar dados");
      throw new Error("Erro ao enviar dados");
    } else {
      saveData(formData);
      navigator("/resumo");
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-md border border-neutral-300">
      <FormularioCabecalho />

      <form
        className="w-full flex flex-col gap-4 items-center justify-center"
        onSubmit={(e) => handleSaveData(e, formData)}
      >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="tema" className="text-base font-bold mb-1">
            Tema da Avaliação
          </label>
          <FormularioDescricao>
            Adicionar uma breve descrição
          </FormularioDescricao>
          <input
            type="text"
            id="tema"
            name="tema"
            onChange={handleForm}
            className="px-4 py-4 border border-neutral-700 rounded-md text-base"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="disciplina" className="text-base font-bold mb-1">
            Disciplina
          </label>
          <FormularioDescricao>
            Adicionar uma breve descrição
          </FormularioDescricao>
          <select
            className="px-4 py-4 border border-neutral-700 rounded-md text-base"
            id="disciplina"
            onChange={handleForm}
          >
            <option value={undefined}>Selecione...</option>
            {disciplinas.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="escolaridade" className="text-base font-bold mb-1">
            Nível de Escolaridade
          </label>
          <FormularioDescricao>
            Adicionar uma breve descrição
          </FormularioDescricao>
          <select
            id="escolaridade"
            className="px-4 py-4 border border-neutral-700 rounded-md text-base"
            onChange={handleForm}
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
          <label htmlFor="dificuldade" className="text-base font-bold mb-1">
            Dificuldade
          </label>
          <FormularioDescricao>
            Adicionar uma breve descrição
          </FormularioDescricao>
          <select
            id="dificuldade"
            className="px-4 py-4 border border-neutral-700 rounded-md text-base"
            onChange={handleForm}
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
            id="exemplo"
            className="px-4 py-4 border border-neutral-700 rounded-md text-base"
            onChange={handleForm}
          />
        </div>

        <div className="w-full flex items-center gap-6">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="numeroQuestoesDissertativas">Dissertativas</label>
            <input
              id="numeroQuestoesDissertativas"
              type="number"
              className="px-4 py-4 border border-neutral-700 rounded-md text-base"
              onChange={handleForm}
              min={0}
              max={numeroQuestoes - data.numeroQuestoesAlternativas}
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="numeroQuestoesAlternativas">Alternativas</label>
            <input
              id="numeroQuestoesAlternativas"
              type="number"
              className="px-4 py-4 border border-neutral-700 rounded-md text-base"
              onChange={handleForm}
              min={0}
              max={numeroQuestoes - data.numeroQuestoesDissertativas}
            />
          </div>
        </div>

        <button
          disabled={formData === undefined ? true : false}
          className="w-full bg-neutral-800 text-white py-3 rounded-md hover:bg-neutral-700 transition-all duration-300 mt-6 disabled:bg-neutral-200"
        >
          Gerar Avaliação
        </button>
      </form>
    </div>
  );
};

export default Formulario;
