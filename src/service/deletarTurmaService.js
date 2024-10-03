import { deletar } from "../repository/turmaRepository.js";
import { procurarId } from "../repository/turmaRepository.js";

export default async function deletaTurmaService(id) {
    let turma =  await procurarId(id)
    await deletar(id);

    return turma
}