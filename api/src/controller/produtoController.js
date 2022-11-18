import { Router } from "express";
import multer from 'multer';
import randomString from 'randomstring'
import { salvarProduto, inserirImagemProduto, alterarProduto, excluirProduto, consultarTodosProdutos, consultarProdutosPorId, buscarProdutoPorNome, inserirPedido, inserirPagamento, inserirPedidoItem, pedidoEnviado, pedidoCancelado, consultarTodosPedidos, consultarTodosPedidosEntregues, consultarTodosPedidosCancelados,
     listarCompras, cardClientesADM } from "../repository/produtoRepository.js";
import { validarCartao } from "../service/cartaoValidacao.js";
import { criarNovoPedido, gerarNotaFiscal, validarProduto } from "../service/produtoValidacao.js";
import nodemailer from 'nodemailer'
const server = Router();
const upload = multer({ dest: 'storage/produtos' })


server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;

       // await validarProduto(produto);

        const idProduto = await salvarProduto(produto);

        resp.send({
            id: idProduto
        });
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
});

server.put('/produto/:id/imagem', upload.single('imagem'), async (req, resp) => {
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
            erro: err.message
        })
    }
})

server.put('/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const produto = req.body;

        const resposta = await alterarProduto(id, produto);

        if (resposta != 1) {
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
})

server.get('/produto/buscar', async (req, resp) => {
    try {
        const { nome } = req.query;

        const resposta = await buscarProdutoPorNome(nome);
        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/produto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await consultarProdutosPorId(id);
        resp.send({
            info: resposta
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



server.delete('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await excluirProduto(id);

        if (resposta != 1) {
            throw new Error('Não foi possivel deletar o produto')
        }
        resp.status(204).send()
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/pedido/:idUsuario', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;
        const novoPedido = criarNovoPedido(idUsuario, info);
        await validarCartao(info.cartao)
        const idPedidoCriado = await inserirPedido(novoPedido);
     
        await inserirPagamento(idPedidoCriado,info.cartao);
        
        

        for (let item of info.produtos) {
            const prod = await consultarProdutosPorId(item.id);
            await inserirPedidoItem(idPedidoCriado, prod.id, item.quantidade, prod.preco)
        }


        resp.status(204).send();
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.put('/enviarPedido/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await pedidoEnviado(id);

        resp.status(204).send()
    }
    catch (err) {
       
    }

})

server.put('/cancelarPedido/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await pedidoCancelado(id);

        resp.status(204).send()
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

});

server.get('/pedidos', async (req, resp) => {
    try {
        const resposta = await consultarTodosPedidos();
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/pedidos/entregues', async (req, resp) => {
    try {
        const resposta = await consultarTodosPedidosEntregues();
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/pedidos/cancelados', async (req, resp) => {
    try {
        const resposta = await consultarTodosPedidosCancelados();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/adm/clientes', async (req, resp) => {
    try {
        const resposta = await cardClientesADM();
        const resp2 = await listarCompras(resposta.clientes.id)
        resp.send({
            clientes:resposta,
            compras:resp2
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/enviar-email', async (req, resp) =>{
    let data = req.body;
    const transport = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    secure:process.env.SECURE,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
    })
    
    const message = {
    from: process.env.EMAIL,
     to: data.email,
     subject:'Seu pedido foi um sucesso!',
     html: `
     <h1> Parabéns, seu pedido foi concluído com sucesso! </h1>
     <h2> Informações de seu pedido </h2>
     <h3> ${data.produto} </h3>
     <img src='../../storage/produtos/${data.imagem}.png'/>
     `
     
    }
    transport.sendMail(message, (error, info)=> {
        if(error){
            return resp.status(400).send('Erro, tente novamente')
        }
        return resp.status(200).send('Email enviado com sucesso!')
    })
})


export default server;