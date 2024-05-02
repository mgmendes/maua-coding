import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Resumo = () => {
  let [loading, setLoading] = useState(false);

  const { saveAvaliacao, data } = useContext(DataContext);

  const navigator = useNavigate();

  const handleSaveData = async (data) => {
    setLoading(!loading);

    const fetchData = await fetch("http://localhost:3000/gerador-avaliacoes", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!fetchData.ok) {
      alert("Erro ao enviar dados");
      console.log(fetchData);
      throw new Error("Erro ao enviar dados");
    } else {
      const { response } = await fetchData.json();
      saveAvaliacao(JSON.parse(response));

      navigator("/resultado");
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-[80vh] max-w-screen-lg mx-auto px-6 lg:px-0 flex flex-col items-start justify-center gap-6 py-12">
        {loading ? (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <span>Aguarde...</span>
            <ClipLoader
              color="#36d7b7"
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <h2 className="font-bold text-2xl">
              Confirme os dados de sua pesquisa:
            </h2>

            <div className="w-full bg-neutral-100 border border-neutral-400 rounded-md p-4">
              <table className="w-full flex items-baseline gap-4">
                <tbody>
                  <tr>
                    <td className="w-80 py-2">Tema</td>
                    <td className="px-6 py-2 text-xl font-bold">{data.tema}</td>
                  </tr>
                  <tr>
                    <td className="w-80 py-2">Disciplina</td>
                    <td className="px-6 py-2 text-xl font-bold">
                      {data.disciplina}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-80 py-2">Escolaridade</td>
                    <td className="px-6 py-2 text-xl font-bold">
                      {data.escolaridade}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-80 py-2">Dificuldade</td>
                    <td className="px-6 py-2 text-xl font-bold">
                      {data.dificuldade}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-80 py-2">Pergunta de Exemplo</td>
                    <td className="px-6 py-2 text-xl font-bold">
                      {data.exemplo}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-80 py-2">
                      Número de Questões Dissertativas
                    </td>
                    <td className="px-6 py-2 text-xl font-bold">
                      {data.numeroQuestoesDissertativas}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 text-white px-6 py-2 rounded-md"
              onClick={() => handleSaveData(data)}
            >
              Confirma o envio?
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Resumo;
