import { listarCurso } from "../repository/turmaRepository.js";

export default async function buscaTurmaCursoService(obj) {
    let turma = await listarCurso(obj);

    return turma
}