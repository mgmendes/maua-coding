import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    tema: "",
    disciplina: "",
    escolaridade: "",
    dificuldade: "",
    exemplo: "",
    numeroQuestoesDissertativas: 3,
  });

  const saveData = (data) => {
    const newData = {
      tema: data.tema,
      disciplina: data.disciplina,
      escolaridade: data.escolaridade,
      dificuldade: data.dificuldade,
      exemplo: data.exemplo,
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

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
