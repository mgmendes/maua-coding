import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import { FaPrint } from "react-icons/fa";

const Resultado = () => {
  const { avaliacao } = useContext(DataContext);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-screen-lg mx-auto py-12">
        <h1 className="text-2xl font-bold mb-6">Aqui está sua avaliação:</h1>

        <div>
          {avaliacao.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-start gap-2 mb-6"
            >
              <p className="font-bold">
                Questão {index + 1}:{" "}
                <span className="font-normal">{item.enunciado}</span>
              </p>
              <p className="text-neutral-600">
                <span className="text-rose-600 font-bold">Resposta: </span>{" "}
                <span className="font-normal">{item.resposta}</span>
              </p>
            </div>
          ))}
        </div>

        <button
          className="print:hidden flex items-center justify-center gap-2 bg-rose-600 text-white text-sm hover:bg-rose-500 transition-all duration-300 px-4 py-2 rounded-md mt-12"
          onClick={() => window.print()}
        >
          <FaPrint />
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default Resultado;
