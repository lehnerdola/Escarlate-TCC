import { Router } from "express";
import { AdicionarImagem, alterarSenha, alterarUsuario, cadastrarUsuario, compraCancelada, EditarCartao, ExcluirCartao, listarPedidosUsuario, loginUsuario, TodosUsuarios,  VerCartoes,  VerCartoesUsuario, verificarEmail, verificarSenha, verPerfil  } from "../repository/usuarioRepository.js";
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


server.get('/usuarios', async (req, resp) => {
    try {
        const resposta = await TodosUsuarios();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.get('/usuario/:id' , async (req, resp) => {
    try{
        const id = Number(req.params.id);
        const resposta = await verPerfil(id);
        resp.send(resposta)

    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

server.put('/usuario/:id/imagem', upload.single('imagem') , async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await AdicionarImagem( imagem, id);
        if (resposta != 1) {
            throw new Error('tem alguma coisa errada ai amigão')
        }

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/alterarperfil/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const usuario = req.body;

        const resposta = await alterarUsuario(id, usuario);


        if (resposta != 1) {
            throw new Error('O usuario não pode ser alterado!');
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

server.put('/alterarsenha/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const usuario = req.body;

         
        const buscar = await verificarSenha(usuario.senha);
         if(!buscar){
         throw new Error('senha invalida')
        }

        const resposta = await alterarSenha(id, usuario);

        if (resposta != 1) {
            throw new Error('O usuario não pode ser alterado!');
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

server.get('/usuario/cartao/:id' , async (req, resp) => {
    try{
        const id = req.params.id
        const resposta = await VerCartoesUsuario(id);
        resp.send(resposta)

    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

server.get('/cartao/:id' , async (req, resp) => {
    try{
        const id = req.params.id
        const resposta = await VerCartoes(id);
        resp.send(resposta)

    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
}) 

server.delete('/usuario/cartao/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await ExcluirCartao(id);

        if (resposta != 1) {
            throw new Error('Não foi possivel deletar o cartão')
        }
        resp.status(204).send()
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/usuario/pedido/:id', async (req, resp) => {
    try {
        const id = req.params.id
        const resposta = await listarPedidosUsuario(id);
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.put('/usuario/cartao/:id', async (req,resp) => {
    try {
        const { id } = req.params;
        const cartao = req.body;

        const resposta = await EditarCartao(id, cartao);

        if (resposta != 1) {
            throw new Error('O cartao não pode ser alterado!');
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

server.put('/cancelarCompra/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await compraCancelada(id);

        resp.status(204).send()
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

});
export default server;