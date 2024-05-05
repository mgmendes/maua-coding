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

  const [errors, setErrors] = useState({});

  const { saveData } = useContext(DataContext);

  const navigator = useNavigate();

  const handleForm = async (e) => {
    const { id, value } = e.currentTarget;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSaveData = async () => {
    if (formData.tema === "")
      return setErrors((prevErrors) => ({
        ...prevErrors,
        tema: "Campo obrigatório",
      }));
    if (formData.disciplina === "" || formData.disciplina === undefined)
      return setErrors((prevErrors) => ({
        ...prevErrors,
        disciplina: "Selecione uma disciplina",
      }));
    if (formData.escolaridade === "" || formData.escolaridade === undefined)
      return setErrors((prevErrors) => ({
        ...prevErrors,
        tema: "Selecione um nível de escolaridade",
      }));
    if (formData.dificuldade === "" || formData.dificuldade === undefined)
      return setErrors((prevErrors) => ({
        ...prevErrors,
        tema: "Selecione um nível de dificuldade",
      }));

    // INSERE LOG NO BANCO DE DADOS
    await fetch("http://localhost:3000/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensagem: `${
          new Date(Date.now()).toUTCString() +
          " - " +
          formData.tema +
          " | " +
          formData.disciplina +
          " | " +
          formData.escolaridade +
          " | " +
          formData.dificuldade +
          " | " +
          formData.exemplo
        }`,
      }),
    });

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

          {errors.tema && <span className="text-red-500">{errors.tema}</span>}
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
          {errors.disciplina && (
            <span className="text-red-500">{errors.disciplina}</span>
          )}
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
          {errors.escolaridade && (
            <span className="text-red-500">{errors.escolaridade}</span>
          )}
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
          {errors.dificuldade && (
            <span className="text-red-500">{errors.dificuldade}</span>
          )}
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
