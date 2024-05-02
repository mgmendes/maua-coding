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
  });

  const [avaliacao, setAvaliacao] = useState([]);

  const saveData = (data) => {
    const newData = {
      tema: data.tema,
      disciplina: data.disciplina,
      escolaridade: data.escolaridade,
      dificuldade: data.dificuldade,
      exemplo: data.exemplo,
      numeroQuestoesDissertativas: 3,
    };
    setData(newData);
  };

  const saveAvaliacao = (data) => {
    setAvaliacao(data);
  };

  return (
    <DataContext.Provider value={{ data, saveData, avaliacao, saveAvaliacao }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
