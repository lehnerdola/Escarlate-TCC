import { listarCategoriasProduto } from "../repository/categoriaRepository.js";

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

export default server;