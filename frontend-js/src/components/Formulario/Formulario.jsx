import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { disciplinas, nivelDificuldade, nivelEscolaridade } from "../../data";
import FormularioCabecalho from "./Formulario-Cabecalho";
import { DataContext } from "../../context/DataContext";
import InputLabel from "../ui/InputLabel";

const Formulario = () => {
  const [formData, setFormData] = useState({
    tema: "",
    disciplina: "",
    escolaridade: "",
    dificuldade: "",
    exemplo: "",
  });

  const { saveData } = useContext(DataContext);

  console.log(formData);

  const navigator = useNavigate();

  const handleForm = async (e) => {
    const { id, value } = e.currentTarget;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSaveData = () => {
    saveData(formData);
    navigator("/resumo");
  };

  return (
    <div className="w-full bg-white p-6 rounded-md border border-neutral-300">
      <FormularioCabecalho />

      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <div className="w-full flex flex-col gap-2">
          <InputLabel title="tema" label="Tema" />

          <input
            type="text"
            id="tema"
            name="tema"
            placeholder="Insira um tema para sua avaliacão. Por exemplo, trigonometria, descobrimento do Brasil, verbos irregulares, etc."
            onChange={handleForm}
            className="px-3 py-3 border border-neutral-700 rounded-md text-sm"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <InputLabel title="disciplina" label="Disciplina" />
          <select
            className="px-3 py-3 border border-neutral-700 rounded-md text-base"
            id="disciplina"
            name="disciplina"
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
          <InputLabel title="escolaridade" label="Nível de Escolaridade" />

          <select
            id="escolaridade"
            name="escolaridade"
            className="px-3 py-3 border border-neutral-700 rounded-md text-base"
            onChange={handleForm}
          >
            <option value={undefined}>Selecione...</option>
            {nivelEscolaridade.map((item) => (
              <option key={item.id} value={item.serie}>
                {item.serie}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <InputLabel title="dificuldade" label="Dificuldade" />

          <select
            id="dificuldade"
            name="dificuldade"
            className="px-3 py-3 border border-neutral-700 rounded-md text-base"
            onChange={handleForm}
          >
            <option value={undefined}>Selecione...</option>
            {nivelDificuldade.map((item) => (
              <option key={item.id}>{item.nivel}</option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <p>
            Uma pergunta de exemplo é importante, para que a AI consiga perceber
            qual direção você espera que ela siga.
          </p>

          <InputLabel title="exemplo" label="Insira uma pergunta de exemplo" />

          <textarea
            id="exemplo"
            name="exemplo"
            className="px-3 py-3 border border-neutral-700 rounded-md text-base"
            onChange={handleForm}
          />
        </div>

        <button
          disabled={
            formData.tema === "" ||
            formData.disciplina === "" ||
            formData.escolaridade === "" ||
            formData.dificuldade === ""
              ? true
              : false
          }
          className="w-full bg-neutral-800 text-white py-3 rounded-md hover:bg-neutral-700 transition-all duration-300 mt-6 disabled:bg-neutral-200"
          onClick={handleSaveData}
        >
          Gerar Avaliação
        </button>
      </div>
    </div>
  );
};

export default Formulario;
