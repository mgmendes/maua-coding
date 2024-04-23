import { createContext } from "react";

const data = {
  tema: "",
  disciplina: "",
  escolaridade: "",
  dificuldade: "",
  numeroQuestoesAlternativas: 5,
  numeroQuestoesDissertativas: 5,
};

export const DataContext = createContext(data);
