import { listarCategoriasProduto, listarArtistasCategorias, listarCategoriasMusicais, buscarProdCategoriaPorId, listarCategoriasMusicaisPorid } from "../repository/categoriaRepository.js";

import { Router } from "express";
const server = Router();


server.get('/produto/categoria', async (req, resp) => {
    try {
        const linhas = await listarCategoriasProduto();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produto/categoria/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const categoria = await buscarProdCategoriaPorId(id);
        resp.send(categoria)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/artista/categoria', async (req, resp) => {
    try {
        const linhas = await listarArtistasCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/artista/categoriamusical', async (req, resp) => {
    try {
        const linhas = await listarCategoriasMusicais();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/artista/categoriamusical/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const linhas = await listarCategoriasMusicaisPorid(id);
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;