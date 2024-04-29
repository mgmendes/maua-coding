export interface IData {
  tema: string;
  disciplina: string;
  escolaridade: string;
  dificuldade: string;
  exemplo: string;
  numeroQuestoesAlternativas: number;
  numeroQuestoesDissertativas: number;
}

export type DataContextType = {
  data: IData;
  saveData: (data: IData) => void;
};
