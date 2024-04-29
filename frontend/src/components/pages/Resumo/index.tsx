import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { DataContextType } from "../../../context/interface";

const Resumo = () => {
  const { data } = useContext(DataContext) as DataContextType;

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-[80vh] max-w-screen-lg mx-auto px-6 lg:px-0 flex flex-col items-start justify-center gap-6 py-12">
        <h2 className="font-bold text-2xl">
          Confirme os dados de sua pesquisa:
        </h2>

        <pre>{JSON.stringify(data, null, 2)}</pre>

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
                <td className="px-6 py-2 text-xl font-bold">{data.exemplo}</td>
              </tr>
              <tr>
                <td className="w-80 py-2">Número de Questões Alternativas</td>
                <td className="px-6 py-2 text-xl font-bold">
                  {data.numeroQuestoesAlternativas}
                </td>
              </tr>
              <tr>
                <td className="w-80 py-2">Número de Questões Dissertativas</td>
                <td className="px-6 py-2 text-xl font-bold">
                  {data.numeroQuestoesDissertativas}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resumo;
