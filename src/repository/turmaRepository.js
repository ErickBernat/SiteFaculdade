import con from "./conection.js";

export async function salvarTurma(turma){
    let comando = `
    insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
                                values (?,?,?,?,?,?)
    `
   let resposta = await con.query(comando, [turma.nome, turma.curso, turma.ano, turma.capacidade, turma.ativo, turma.inclusao])
   let info = resposta[0];
   
   let idturma = info.insertId;
    return idturma;
}

export async function listar() {
    const comando = `
   select   id_turma        id,
            nm_turma        nome,
            ds_curso        curso,
            nr_ano_letivo   anoLetivo,
            qtd_capacidade  capacidade,
            bt_ativo        ativo,
            dt_inclusao     inclusao

   from tb_turma
    `

    let [registros] = await con.query(comando);
    return registros;
}

export async function deletar(id) {
    const comando =`delete from tb_turma where id_turma =?`
    await con.query(comando,[id]);
}


export async function procurarId(id) {
    const comando =` select   
            id_turma        id,
            nm_turma        nome,
            ds_curso        curso,
            nr_ano_letivo   anoLetivo,
            qtd_capacidade  capacidade,
            bt_ativo        ativo,
            dt_inclusao     inclusao 
            from tb_turma where id_turma =?`
    let [registro] = await con.query(comando,[id]);
    return registro;
}

export async function listarAno(ano) {
    const comando = `
   select   id_turma        id,
            nm_turma        nome,
            ds_curso        curso,
            nr_ano_letivo   anoLetivo,
            qtd_capacidade  capacidade,
            bt_ativo        ativo,
            dt_inclusao     inclusao
   from tb_turma where nr_ano_letivo = ?
    `

    let [registro] = await con.query(comando, [ano]);
    return registro;
}

export async function listarCurso(obj) {
    const comando = `
   select   id_turma        id,
            nm_turma        nome,
            ds_curso        curso,
            nr_ano_letivo   anoLetivo,
            qtd_capacidade  capacidade,
            bt_ativo        ativo,
            dt_inclusao     inclusao
    from tb_turma where nr_ano_letivo=? and ds_curso  =?;
    `

    let [registro] = await con.query(comando,[obj.ano, obj.curso]);
    return registro;
}


export async function alterarTurma(turma, id) {
    const comando = `
   update  tb_turma 
        set     nm_turma = ?,
                ds_curso = ?,
                nr_ano_letivo  = ?,
                qtd_capacidade  = ?,
                bt_ativo  = ?,
                dt_inclusao  = ?
         where id_turma=? 
    `

    let registro = await con.query(comando,[turma.nome, turma.curso,turma.ano,turma.capacidade,turma.ativo,turma.inclusao,id]);
    let info = registro[0];
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}
