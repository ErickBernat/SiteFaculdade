import { alterarTurma } from "../repository/turmaRepository.js";

export default async function alteraTurmaService(turma, id) {
    await alterarTurma(turma, id)
}