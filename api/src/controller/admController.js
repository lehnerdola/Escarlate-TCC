import { adminLogin, cadastrarProduto, inserirImagemProduto } from "../repository/admRepository.js";

import { Router } from "express";
const server = Router();

import multer from 'multer';
const upload = multer({ dest: 'storage/produtos' })

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
     })
server.post('/admin/cadproduto' , async (req,resp) =>{
     try {
          const novoProduto = req.body;

          const produtoInserido = await cadastrarProduto(novoProduto);
          resp.send(produtoInserido);
     } catch (err) {
          resp.status(400).send({
               erro: err.message
           })
     }
})    

server.put('/produto/:id/img', upload.single('img') , async (req, resp) => {
     try {
         const { id } = req.params;
         const imagem = req.file.path;
 
         const resposta = await inserirImagemProduto(imagem, id);
         if (resposta != 1) {
             throw new Error('UEPAAAA, deu erro!')
         }
 
         resp.status(204).send();
     } catch (err) {
         resp.status(400).send({
             erro:err.message
         })
     }
 })

export default server;