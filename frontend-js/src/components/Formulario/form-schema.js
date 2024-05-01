import { z } from "zod";

export const schema = z.object({
  tema: z.string(),
  disciplina: z.string(),
  escolaridade: z.string(),
  dificuldade: z.string(),
  exemplo: z.string(),
  numeroQuestoesAlternativas: z.number(),
  numeroQuestoesDissertativas: z.number(),
});
