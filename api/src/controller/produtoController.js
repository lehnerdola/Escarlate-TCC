import { Router } from "express";
import multer from 'multer';
import { buscarArtistaPorId } from "../repository/artistasRepository.js";

import { salvarProduto, salvarProdutoCategoria } from "../repository/produtoRepository.js";
import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";
import { validarProduto } from "../service/produtoValidacao.js";

const server = Router();
const upload = multer({ dest: 'storage/produtos' })


server.post('/admin/produto', async (req,resp) => {
    try {
         const produto = req.body;

         await validarProduto(produto);

         const idProduto = await salvarProduto(produto);

        for(const idCateg of produto.categorias){
            const cat = await buscarCategoriaPorId(idCateg);

            if(cat != undefined){
                await salvarProdutoCategoria(idProduto, idCateg)
            }
        }
                  
         resp.status(204).send;
   } 
    catch (err) {
       return  resp.status(400).send({
             erro: err.message
         });
    } 
  });

  export default server;