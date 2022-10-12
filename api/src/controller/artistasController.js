
import { alterarArtista, listarArtistas, salvarArtista, salvarImagemArtista } from "../repository/artistasRepository.js";
import {validarArtista} from '../service/validarArtista.js'

import { Router } from "express";
import multer from 'multer';

const server = Router();
const upload = multer({ dest: 'storage/artista' })

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

server.post('/admin/artista', async (req, resp) =>{ 
    try {
        const artista = req.body;
        const idArtista = salvarArtista(artista);

        await validarArtista(artista)

        console.log(artista)

        resp.send({
            id: idArtista
        });
    } catch (err) {
        return  resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/admin/artista/:id' , async (req,resp) => {
    try {
        
        
        const {id} = req.params;
        const artista = req.body;

        const resposta = await alterarArtista(id,artista);
        if(resposta != 1){
            throw new Error('O artista não pode ser alterado!');
        }
        else {
            resp.status(204).send()
        }
       
    } catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
})

server.put('/artista/:id/imagem', upload.single ('imagem'), async (req, resp) =>{
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await salvarImagemArtista(imagem, id);
        
        if (resposta != 1) {
            throw new Error('imagem não pode ser inserida, tente novamente')
        }
        
        
        resp.status(204).send()

    } catch (err) {
        resp.status(400).send({
            
        }
        )
    } 
})

export default server;