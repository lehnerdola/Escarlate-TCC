
import { Router } from "express";
import randomString from 'randomstring'
import { inserirPedido, pedidoEnviado, pedidoCancelado, inserirPedidoItem, consultarTodosPedidos,consultarTodosPedidosEntregues, consultarTodosPedidosCancelados, inserirPagamento } from '../repository/pedidoRepository.js';
import {consultarProdutosPorId} from '../repository/produtoRepository.js'

const server = Router();

server.post('/pedido/:idUsuario', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;
        const novoPedido = criarNovoPedido(idUsuario, info);

       
        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);


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

export default server;