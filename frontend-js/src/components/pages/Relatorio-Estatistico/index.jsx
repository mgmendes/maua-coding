import { useEffect, useState } from "react";

const RelatorioEstatistico = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    async function obterRegistros() {
      const response = await fetch(
        "http://localhost:8000/relatorios-estatisticos"
      );
      const data = await response.json();

      setRegistros(data);
    }

    obterRegistros().catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-[80vh] max-w-screen-lg mx-auto px-6 lg:px-0 flex flex-col items-start justify-start gap-6 py-12">
        <h2 className="font-bold text-2xl">
          Relatório Estatístico de Utilização
        </h2>

        <table>
          <thead className="text-xs font-bold">
            <tr>
              <th className="w-12 text-center border-b border-b-neutral-600">
                ID
              </th>
              <th className="w-52 px-6 border-b border-b-neutral-600 text-left">
                Data Criação
              </th>
              <th className="text-left border-b border-b-neutral-600 px-6">
                Tokens para Prompt
              </th>
              <th className="text-left border-b border-b-neutral-600 px-6">
                Tokens para Resposta
              </th>
              <th className="text-left border-b border-b-neutral-600 px-6">
                Total de Tokens
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {registros.map((registro) => (
              <tr key={registro.id}>
                <td className="py-2 text-center">{registro.id}</td>
                <td className="py-2 px-6 text-left">{registro.created_at}</td>
                <td className="py-2 px-6 text-center">
                  {registro.prompt_tokens}
                </td>
                <td className="py-2 px-6 text-center">
                  {registro.completion_tokens}
                </td>
                <td className="py-2 px-6 text-center">
                  {registro.total_tokens}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="text-xs font-bold">
            <tr>
              <td
                className="py-2 bg-neutral-100 border-t-2 border-t-neutral-800 text-center"
                colSpan={2}
              >
                TOTALIZAÇÃO
              </td>
              <td className="py-2 bg-neutral-100 border-t-2 border-t-neutral-800 text-center">
                {registros.reduce(
                  (acc, cur) => (acc = acc + cur.prompt_tokens),
                  0
                )}
              </td>
              <td className="py-2 bg-neutral-100 border-t-2 border-t-neutral-800 text-center">
                {registros.reduce(
                  (acc, cur) => (acc = acc + cur.completion_tokens),
                  0
                )}
              </td>
              <td className="py-2 bg-neutral-100 border-t-2 border-t-neutral-800 text-center">
                {registros.reduce(
                  (acc, cur) => (acc = acc + cur.total_tokens),
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RelatorioEstatistico;
