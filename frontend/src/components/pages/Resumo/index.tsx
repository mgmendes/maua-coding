import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Resumo = () => {
  const data = useContext(DataContext);

  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-[80vh] max-w-screen-lg mx-auto flex flex-col items-start justify-center gap-6 py-12">
        <h2 className="font-bold text-2xl">Gerador de Avaliações</h2>

        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
};

export default Resumo;
