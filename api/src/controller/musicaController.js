import {Router} from "express";
import multer from 'multer';
import { cadastrarMusica, alterarImagemMusica, alterarMusica, consultarTodasMusicas, apagarMusica, consultarMusicaPorId } from "../repository/musicaRepository.js";

const server = Router();
const upload = multer({ dest: 'storage/musica' })

server.post('/musica' , async (req, resp) => {
    try 
    {
        const musica = req.body;

        const idMusica = await cadastrarMusica(musica);

        resp.send(idMusica)
    } 
    
    catch (err) {
    return  resp.status(400).send
    ({
    erro: err.message
    });    
    }
   
})

server.put('/musica/:id' , async (req,resp) => {
    try {
        const { id } = req.params;
        const musica = req.body;

        const idMusica = await alterarMusica(id, musica);
        console.log(musica)
        if(idMusica!= 1){
            throw new Error('A música não pode ser alterada!');
        }
        else {
            resp.status(204).send()
        }
        
    } catch (err) {
        
    }
})

server.put('/musica/imagem/:id', upload.single ('imagem') , async (req,resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const enviarImagem = await alterarImagemMusica(imagem, id);
        
        if (enviarImagem != 1) {
            throw new Error('imagem não pode ser inserida, tente novamente')
        }
        
        resp.status(204).send()

    } 
    catch (err)
    {
        return  resp.status(400).send
        ({
        erro: err.message
        });       
    }
})

server.get('/musica', async (req,resp) => {
    try 
    {
    const artista = await consultarTodasMusicas();
    resp.send(artista);

    } 
    catch (err)
    {
    return  resp.status(400).send
    ({
    erro: err.message
    });      
    }
      
});

server.get('/musica/:id', async (req,resp) => {
    try
    {
        const id = Number(req.params.id);

        const resposta = await consultarMusicaPorId(id);

        resp.send(resposta)
    } catch (err)
    {
        return  resp.status(400).send
        ({
        erro: err.message
        });    
    }
})



server.delete('/musica/:id', async (req,resp) => {
    try {
        const { id } = req.params;

        const deletarMusica = await apagarMusica(id);
        console.log(deletarMusica)

        if(deletarMusica != 1){
            throw new Error('Não foi possivel deletar o produto') 
        }
        

        resp.status(204).send()

    } 
    catch (err)
    {
        return  resp.status(400).send
        ({
        erro: err.message
        });             
    }
})

export default server;