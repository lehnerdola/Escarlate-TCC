import { con } from "./connection.js";

export async function inserirPedido(novoPedido) {
    const c =
        `
    insert into tb_pedido
    (
        id_usuario,
        id_usuario_end,
        tp_pagamento,
        tp_frete,
        vl_frete,
        cod_notafiscal,
        dt_pedido,
        ds_status
    )
    values(?,?,?,?,?,?,?,?)
    `

    const [info] = await con.query(c, [novoPedido.idUsuario, novoPedido.idEndereco, novoPedido.tipoPagamento, novoPedido.tipoFrete, novoPedido.valorFrete, novoPedido.notaFiscal, novoPedido.data, novoPedido.status]);
    return info.insertId;
}

export async function pedidoEnviado(id) {
    const c =
        `
    update tb_pedido
    set ds_status = 'Pedido enviado com sucesso!'
    where id_pedido = ? 
    `;

    const [resposta] = await con.query(c, [id])
    return resposta.affectedRows;
}

export async function pedidoCancelado(id) {
    const c =
        `
    update tb_pedido
    set ds_status = 'Pedido cancelado!'
    where id_pedido = ? 
    `;

    const [resposta] = await con.query(c, [id])
    return resposta.affectedRows;
}

export async function inserirPedidoItem(idPedido, idProduto, quantidade, preco) {
    const c =
        `
    insert into tb_pedido_item
    (
      id_pedido,
      id_produto,
      qtd_produto,
      vl_produto  
    )
    values(?,?,?,?)
    `
    const [info] = await con.query(c, [idPedido, idProduto, quantidade, preco]);

    return info.affectedRows;
}

export async function consultarTodosPedidos() {
    const c =
        `
    select 
    id_pedido_item                      idPedidoItem,
    tb_pedido_item.id_pedido            idPedido,
    tb_pedido.id_usuario_end            idEndereco,
    tb_pedido_item.id_produto           idProduto,
    nm_produto                          nomeProduto,
    img_produto                         imagem,
    tb_pedido_item.qtd_produto          quantidade,
    vl_produto                          valorProduto,
    tp_pagamento                        tipoPagamento,
    ds_logradouro                       rua,
    nm_remetente                        nomeRemetente,    
    nr_endereco                         numero,
    tp_frete                            tipoFrete,
    vl_frete                            valorFrete,
    cod_notafiscal                      notaFiscal,
    dt_pedido                           dataPedido,
    ds_status                           statusPedido
    from tb_pedido_item
    join tb_pedido on tb_pedido_item.id_pedido = tb_pedido.id_pedido 
    join tb_usuario_endereco on tb_pedido.id_usuario_end = tb_usuario_endereco.id_usuario_end
    join tb_produto on tb_pedido_item.id_produto = tb_produto.id_produto;
    `

    const [linhas] = await con.query(c);
    return linhas;
}

export async function consultarTodosPedidosEntregues() {
    const c =
        `
    select 
    id_pedido_item                      idPedidoItem,
    tb_pedido_item.id_pedido            idPedido,
    tb_pedido.id_usuario_end            idEndereco,
    tb_pedido_item.id_produto           idProduto,
    nm_produto                          nomeProduto,
    img_produto                         imagem,
    tb_pedido_item.qtd_produto          quantidade,
    vl_produto                          valorProduto,
    tp_pagamento                        tipoPagamento,
    ds_logradouro                       rua,
    nm_remetente                        nomeRemetente,    
    nr_endereco                         numero,
    tp_frete                            tipoFrete,
    vl_frete                            valorFrete,
    cod_notafiscal                      notaFiscal,
    dt_pedido                           dataPedido,
    ds_status                           statusPedido
    from tb_pedido_item
    join tb_pedido on tb_pedido_item.id_pedido = tb_pedido.id_pedido 
    join tb_usuario_endereco on tb_pedido.id_usuario_end = tb_usuario_endereco.id_usuario_end
    join tb_produto on tb_pedido_item.id_produto = tb_produto.id_produto;
    where ds_status = 'Pedido enviado com sucesso!'
    `
    const [linhas] = await con.query(c);
    return linhas;
}

export async function consultarTodosPedidosCancelados() {
    const c =
        `
    select 
    id_pedido_item                      idPedidoItem,
    tb_pedido_item.id_pedido            idPedido,
    tb_pedido.id_usuario_end            idEndereco,
    tb_pedido_item.id_produto           idProduto,
    nm_produto                          nomeProduto,
    img_produto                         imagem,
    tb_pedido_item.qtd_produto          quantidade,
    vl_produto                          valorProduto,
    tp_pagamento                        tipoPagamento,
    ds_logradouro                       rua,
    nm_remetente                        nomeRemetente,    
    nr_endereco                         numero,
    tp_frete                            tipoFrete,
    vl_frete                            valorFrete,
    cod_notafiscal                      notaFiscal,
    dt_pedido                           dataPedido,
    ds_status                           statusPedido
    from tb_pedido_item
    join tb_pedido on tb_pedido_item.id_pedido = tb_pedido.id_pedido 
    join tb_usuario_endereco on tb_pedido.id_usuario_end = tb_usuario_endereco.id_usuario_end
    join tb_produto on tb_pedido_item.id_produto = tb_produto.id_produto;
    where ds_status = 'Pedido cancelado!'
    `
    
    const [linhas] = await con.query(c);
    return linhas;
}

export async function inserirPagamento(novoPagamento) {
    const c =
        `
    insert into tb_pag_cartao
    (
        id_pedido,
        nm_cartao,
        nr_cartao,
        cvv_cartao,
        dt_vencimento,
        nr_parcelas,
        ds_forma_pagamento
        
    )
    values(?,?,?,?,?,?,?)
    `

    const [info] = await con.query(c, [novoPagamento.idPedido, novoPagamento.nomeCartao, novoPagamento.numeroCartao, novoPagamento.codSeguranca, novoPagamento.vencimento, novoPagamento.parcelas, novoPagamento.formaPagamento]);

    return info.affectedRows;
}
