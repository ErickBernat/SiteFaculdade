import { salvarTurma } from "../repository/turmaRepository.js";

export default async function salvarTurmaService(turma) {
    let id = await salvarTurma(turma)
    return id
}