import nodemon from "nodemon";

import buscaTurmaService from "../service/buscaTurmaService.js"
import salvaTurmaService from "../service/salvaTurmaService.js"
import buscaTurmaAnoService from "../service/buscaTurmaAnoService.js";
import buscaTurmaCursoService from "../service/buscaTurmaCursoService.js";
import deletaTurmaService from "../service/deletarTurmaService.js";
import alteraTurmaService from "../service/alterarTurmaService.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/turma',async (req, resp) => {
    let turma = req.body;
    let id = await salvaTurmaService(turma)
    resp.send({
        id: id
    })
})

endpoints.get('/turma',async (req, resp) => {
    let turmas = await buscaTurmaService();
    resp.send({turmas})
})

endpoints.get('/turma/busca/ano',async (req, resp) => {
    let ano = req.query.ano
    let turma = await buscaTurmaAnoService(ano);
    
    resp.send({turma})
})

endpoints.get('/turma/:ano/curso',async (req, resp) => {
    let obj ={
        ano: req.params.ano,
        curso: req.query.curso
    }
    let turma = await buscaTurmaCursoService(obj);
    
    resp.send({turma})
})

endpoints.delete('/turma/:id', async (req, resp)=>{
    let id = req.params.id;
    let turmaDeletada = await deletaTurmaService(id); 
    resp.send({
        TurmaDeletada: turmaDeletada
    })
})

endpoints.put('/turma/:id', async (req, resp)=>{
    let id = req.params.id;
    let turma= req.body
    await alteraTurmaService(turma, id)
    resp.status(204).send();
})



export default endpoints;