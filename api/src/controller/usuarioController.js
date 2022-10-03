import { Router } from "express";
import { cadastrarUsuario, loginUsuario } from "../repository/usuarioRepository.js";

const server = Router();

server.post('/usuario', async (req, resp)=> {
    try {
        const cadastro = req.body;

        const fazerCad = await cadastrarUsuario(cadastro);

        if(!cadastro.nome)
            throw new Error('Nome é obrigatório!')
        if(!cadastro.email)
            throw new Error('Email é obrigatório!')
        if(!cadastro.senha)
            throw new Error('Senha é obrigatória!')        
        

        resp.send(String(fazerCad));

        if (!fazerCad) {
            throw new Error('Credenciais inválidas');
        }
        

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }

});

server.post('/usuario/login', async (req,resp) => {
    try {
         const {email, senha} = req.body;
         const resposta= await loginUsuario(email,senha);

         if(!resposta) {
            throw new Error('Credenciais inválidas')
         } 
                  
         resp.send(resposta)

   } 
    catch (err) {
         resp.status(401).send({
             erro: err.message
         });
    } 
  });
  

export default server;