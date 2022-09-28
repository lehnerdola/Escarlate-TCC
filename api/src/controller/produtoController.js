import { Router } from "express";
import multer from 'multer';
import { buscarArtistaPorId } from "../repository/artistasRepository.js";
import {inserirImagemProduto} from "../repository/produtoRepository.js"
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

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


  export default server;