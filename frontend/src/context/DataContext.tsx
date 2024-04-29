import React, { createContext, useState } from "react";
import { DataContextType, IData } from "./interface";

export const DataContext = createContext<DataContextType | null>(null);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IData>({
    tema: "Trigonometria" as string,
    disciplina: "Matemática" as string,
    escolaridade: "9o Ano Ensino Fundamental" as string,
    dificuldade: "Fácil" as string,
    exemplo: "Exemplo de questão dissertativa." as string,
    numeroQuestoesAlternativas: 5,
    numeroQuestoesDissertativas: 5,
  });

  const saveData = (data: IData) => {
    const newData: IData = {
      tema: data.tema,
      disciplina: data.disciplina,
      escolaridade: data.escolaridade,
      dificuldade: data.dificuldade,
      exemplo: data.exemplo,
      numeroQuestoesAlternativas: data.numeroQuestoesAlternativas,
      numeroQuestoesDissertativas: data.numeroQuestoesDissertativas,
    };
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, saveData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
