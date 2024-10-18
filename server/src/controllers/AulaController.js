//Importando funções do AulaModel
import { createAula, deleteAula, readAulas, updateAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController criarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    //Tentando criar aula
    try {
        const [status, resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarAulas(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController mostrarAulas');

    //Tentando mostrar aulas
    try {
        const [status, resposta] = await readAulas();
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function atualizarAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController atualizarAula');

    //Criando constante com a requisição
    const aula = req.body;
    const { id } = req.params;

    //Tentando mostrar aulas
    try {
        const [status, resposta] = await updateAula(aula, id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function excluirAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController excluirAula');

    //Criando constante com a requisição
    const { id } = req.params;

    //Tentando deletar aula
    try {
        const [status, resposta] = await deleteAula(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}