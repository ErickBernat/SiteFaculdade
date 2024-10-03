import { listarAno } from "../repository/turmaRepository.js";

export default async function buscaTurmaAnoService(ano) {
    let turma = await listarAno(ano);
    
    return turma
}