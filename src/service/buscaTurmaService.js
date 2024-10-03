import { listar } from "../repository/turmaRepository.js";

export default async function listaTurmaService(){
   let turmas = await listar();
   return turmas;
}