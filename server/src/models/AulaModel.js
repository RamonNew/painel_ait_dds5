import mysql from 'mysql2/promise';
import db from '../conexao.js';


export async function createAula(aula) {
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    // Ao ser acionado o metodo createAula retorna na tela
    console.log('Entrando no Model Aula');

    // Criando String com comandos sql
    const sql = `INSERT INTO aulas (
    data,
    data_hora_inicio,
    data_hora_fim,
    turma,
    instrutor,
    unidade_curricular, 
    ambiente
    ) 
    VALUES (?,?,?,?,?,?,?)`;

    // Definindo parametros para inserir no sql
    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente
    ];

    // Executando query no banco
    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Aula Cadastrada');
        return [201, 'Aula Cadastrada'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}



export async function readAulas() {
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    // Ao ser acionado o metodo createAula retorna na tela
    console.log('Entrando no Model Aula');

    // Criando String com comandos sql
    const sql = `SELECT * FROM aulas`;

    // Executando query no banco
    try {
        const [retorno] = await conexao.query(sql);
        console.log("Mostrando Aulas");
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function updateAula(aula, id) {
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    // Ao ser acionado o metodo createAula retorna na tela
    console.log('Entrando no Model Aula');

    // Criando String com comandos sql
    const sql = `UPDATE aulas SET data = ?,
    data_hora_inicio =?,
    data_hora_fim = ?,
    turma = ?,
    instrutor = ?,
    unidade_curricular = ?, 
    ambiente = ?
    WHERE id = ?
    `
    // Definindo parametros para inserir no sql
    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente,
        id
    ];

    // Executando query no banco
    try {
        const [retorno] = await conexao.query(sql,params);
        console.log("Atualizando Aula");
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function deleteAula(id){
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    // Ao ser acionado o metodo createAula retorna na tela
    console.log('Deletando no Model Aula');

    // Criando String com comandos sql
    const sql = `DELETE FROM aulas WHERE id=?`;
    
    // Definindo parametros para inserir no sql
    const params = [id];

     // Executando query no banco
     try {
        const [retorno] = await conexao.query(sql,params);
        console.log("Deletando Aula");
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showOneAula(id){
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    // Ao ser acionado o metodo createAula retorna na tela
    console.log('Mostrando uma aula Model Aula');

    // Criando String com comandos sql
    const sql = `SELECT * FROM aulas WHERE id=?`;
    
    // Definindo parametros para inserir no sql
    const params = [id];

     // Executando query no banco
     try {
        const [retorno] = await conexao.query(sql,params);
        console.log("mostrando Aula");
        return [200, retorno[0]];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}