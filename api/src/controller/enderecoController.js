import { Router } from "express";
import { listarEnderecos, salvarEndereco } from "../repository/enderecoRepository.js";

const server = Router();

server.get('/usuario/:id/endereco', async (req,resp) => {
    try 
    {
        const id = req.params.id;

        const r = await listarEnderecos(id);


        resp.send(r)

    } catch (err) {
     resp.status(404).send({
        erro: err.message
     })   
    }
})
  
server.post('/usuario/:id/endereco', async (req,resp) => {
    try {
        const id = req.params.id;

        const endereco = req.body;

        const r = await salvarEndereco(id,endereco)

        resp.status(204).send()
        
    } catch (err) {
     resp.status(404).send({
        erro: err.message
     })   
    }
})
  
export default server;