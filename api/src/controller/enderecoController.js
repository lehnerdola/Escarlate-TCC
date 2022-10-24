import { Router } from "express";
import { listarEnderecos, salvarEndereco, removerEndereco } from "../repository/enderecoRepository.js";
import { ValidarEndereco } from "../service/enderecovalidacao.js";

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

        await ValidarEndereco(endereco);

        const r = await salvarEndereco(id,endereco)

        resp.status(204).send()
        
    } catch (err) {
     resp.status(404).send({
        erro: err.message
     })   
    }
});


server.delete('/endereco/:id', async (req,resp) => {
    try {
        const {id} = req.params;
        const resposta = await removerEndereco(id);

        if(resposta != 1){
            throw new Error('Não foi possivel deletar o endereço!') 
        }

         resp.status(204).send()
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})
  
export default server;