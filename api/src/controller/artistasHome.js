import { Router } from "express";
import { listarArtistasHome } from "../repository/artistasRepository.js";

const server = Router();

server.get('/artistas', async (req, resp) => {
    try{
        const r = await listarArtistasHome();
        resp.send(r);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})