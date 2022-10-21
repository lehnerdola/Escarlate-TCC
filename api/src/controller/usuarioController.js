import { Router } from "express";
import { alterarImagemUsuario, cadastrarUsuario, loginUsuario, verificarEmail, verPerfil } from "../repository/usuarioRepository.js";
import multer from "multer";

const upload = multer({ dest: 'storage/usuario' })
const server = Router();

server.post('/usuario', async (req, resp)=> {
    try {
        const usuario = req.body;
        
        const buscar = await verificarEmail(usuario.email);
         if(buscar){
         throw new Error('email em uso')
        }
        const fazerCad = await cadastrarUsuario(usuario);

        if(!usuario.nome)
            throw new Error('Nome é obrigatório!')
        if(!usuario.email)
            throw new Error('Email é obrigatório!')
        if(!usuario.senha)
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

server.put('/usuario/imagem/:id', upload.single ('imagem') , async (req,resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const enviarImagem = await alterarImagemUsuario(imagem, id);
        
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


server.get('/usuario/:id' , async (req, resp) => {
    try{
        const id = req.params.id;
        const resposta = await verPerfil(id);
        resp.send(resposta)

    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

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