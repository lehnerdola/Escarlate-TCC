import { Router } from "express";
import multer from 'multer';
import { buscarArtistaPorId } from "../repository/artistasRepository.js";

import { salvarProduto, inserirImagemProduto, alterarProduto, excluirProduto, consultarTodosProdutos, consultarProdutosPorId } from "../repository/produtoRepository.js";
import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";
import { validarProduto } from "../service/produtoValidacao.js";

const server = Router();
const upload = multer({ dest: 'storage/produtos' })


server.post('/admin/produto', async (req,resp) => {
    try {
         const produto = req.body;

         await validarProduto(produto);

         const idProduto = await salvarProduto(produto);
                  
         resp.send({
            id: idProduto
         });
   } 
    catch (err) {
       return  resp.status(400).send({
             erro: err.message
         });
    } 
  });

  server.put('/produto/:id/imagem', upload.single('imagem') , async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await inserirImagemProduto(imagem, id);
        if (resposta != 1) {
            throw new Error('UEPAAAA, deu erro!')
        }

        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/alterar/:id' , async (req, resp) => {
    try {
        const {id} = req.params;
        const produto = req.body;
        console.log(produto);
        await validarProduto(produto);

        const resposta = await alterarProduto(id,produto);
        if(resposta != 1){
            throw new Error('O produto não pode ser alterado!');
        }
        else {
            resp.status(204).send()
        }

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/produto', async (req, resp) => {
    try {
        const resposta = await consultarTodosProdutos();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
} )

server.get('/produto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await consultarProdutosPorId(id);
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.delete('/produto/:id', async (req,resp) => {
    try {
        const {id} = req.params;
        const resposta = await excluirProduto(id);

        if(resposta != 1){
            throw new Error('Não foi possivel deletar o produto') 
        }
         resp.status(204).send()
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

  export default server;