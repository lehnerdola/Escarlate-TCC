import { Router } from "express";
const server = Router();

import { adminLogin } from "../repository/admRepository.js";

server.post('/admin/login', async (req,resp) => {
       try {
            const {cpf, senha} = req.body;
            const resposta= await adminLogin(cpf,senha);

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