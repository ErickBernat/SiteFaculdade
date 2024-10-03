import nodemon from "nodemon";
import { salvarTurma } from "../repository/turmaRepository.js";
import { listar } from "../repository/turmaRepository.js";
import { listarAno } from "../repository/turmaRepository.js";
import { listarCurso } from "../repository/turmaRepository.js";
import { deletar } from "../repository/turmaRepository.js";
import { procurarId } from "../repository/turmaRepository.js";
import { alterarTurma } from "../repository/turmaRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/turma',async (req, resp) => {
    let turma = req.body;
    let id = await salvarTurma(turma)
    resp.send({
        id: id
    })
})

endpoints.get('/turma',async (req, resp) => {
    let turmas = await listar();
    
    resp.send({turmas})
})

endpoints.get('/turma/busca/ano',async (req, resp) => {
    let ano = req.query.ano
    let turma = await listarAno(ano);
    
    resp.send({turma})
})

endpoints.get('/turma/:ano/curso',async (req, resp) => {
    let obj ={
        ano: req.params.ano,
        curso: req.query.curso
    }
    console.log(obj.ano)
    console.log(obj.curso)
    let turma = await listarCurso(obj);
    
    resp.send({turma})
})

endpoints.delete('/turma/:id', async (req, resp)=>{
    let id = req.params.id;
    let turma=  await procurarId(id)
    await deletar(id);
    resp.send({
        TurmaDeletada: turma
    })
})

endpoints.put('/turma/:id', async (req, resp)=>{
    let id = req.params.id;
    let turma= req.body
    await alterarTurma(turma, id)
    resp.status(204).send();
})



export default endpoints;