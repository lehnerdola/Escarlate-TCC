import { listarArtistas } from "../repository/artistasRepository.js";


import { Router } from "express";
const server = Router();

server.get('/artistas', async (req, resp) => {
    try {
        const l = await listarArtistas();
        resp.send(l);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;