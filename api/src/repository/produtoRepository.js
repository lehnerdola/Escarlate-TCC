import { con } from "./connection.js";

export async function salvarProduto(produto) {
    const comando =
        `
    insert into tb_produto(id_artista, id_categoria, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto)
    values(?,?,?,?,?,?,?)                        
    `
    const [resp] = await con.query(comando, [produto.idArtista, produto.idCategoria, produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.quantidade]);

    return resp.insertId;
};

export async function inserirImagemProduto(imagem, id) {
    const c =
        `
    UPDATE tb_produto
    SET img_produto      = ?
    WHERE id_produto     = ?
    `;
    const [resp] = await con.query(c, [imagem, id]);
    return resp.affectedRows;
}

export async function alterarProduto(id, produto) {
    const comando =
        `
    update tb_produto
   set id_artista     = ?,
       id_categoria   = ?,
       nm_produto     = ?,
       ds_tam         = ?, 
       bt_disponivel  = ?,
       vl_preco       = ?,
       qtd_produto    = ?
 where id_produto     = ?;
    `
    const [resp] = await con.query(comando, [produto.idArtista, produto.idCategoria, produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.quantidade, id]);
    return resp.affectedRows;
}

export async function consultarTodosProdutos() {
    const comando =
        `
    select 
    id_produto id,
    nm_categoria categoria,
    nm_produto nome,
    tb_artista.id_artista       nomeartista,
    ds_tam tamanho,
    bt_disponivel disponivel,
    vl_preco preco,
    qtd_produto quantidade,
    img_produto imagem
    from tb_produto
    join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
    join tb_artista on tb_produto.id_artista = tb_artista.id_artista

`
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function consultarProdutosPorId(id) {
    const comando =
        `
    SELECT 
       id_produto	    id,
       id_categoria     categoria,
       nm_produto       nome,
       ds_tam           tamanho,
       bt_disponivel    disponivel,
       nm_artista       nomeartista,
       vl_preco         preco,
       qtd_produto      quantidade,
       img_produto      imagem
  FROM tb_produto
 join tb_artista on tb_produto.id_artista = tb_artista.id_artista
  WHERE id_produto = ? 

  `;
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}
export async function excluirProduto(id) {
    const comando =
        `
    delete from tb_produto
    where id_produto = ?
    `
    const [resposta] = await con.query(comando, [id])

    return resposta.affectedRows;
}

export async function buscarProdutoPorNome(nome) {
    const c =
        `
    select 
    id_produto id,
    nm_categoria categoria,
    nm_artista artista,
    nm_produto nome,
    ds_tam tamanho,
    bt_disponivel disponivel,
    vl_preco preco,
    qtd_produto quantidade,
    img_produto imagem
    from tb_produto
    join tb_artista on tb_produto.id_artista = tb_artista.id_artista
    join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
    where nm_produto like ?;

    `;
    const [resp] = await con.query(c, [`%${nome}%`]);
    return resp;
};

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

export async function inserirPagamento(id, novoPagamento) {
    const c =
        `
    insert into tb_pag_cartao
    (
        id_pedido,
        id_usuario,
        nm_cartao,
        nr_cartao,
        cvv_cartao,
        dt_vencimento,
        ds_forma_pagamento
        
    )
    values(?,?,?,?,?,?,?)
    `

    const [info] = await con.query(c, [id, novoPagamento.idUsuario,  novoPagamento.nomeCartao, novoPagamento.numeroCartao, novoPagamento.codSeguranca, novoPagamento.vencimento, novoPagamento.formaPagamento]);

    return info;
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


export async function CancelarCompraUsuario(){
const c = `
    
`
}

export async function listarCompras(id) {
    const comando = `
    select id_usuario   id,
    FLOOR(COUNT(tb_pedido.id_usuario) / 3) as 'compras'
    FROM tb_pedido
    where id_usuario = ?

    `
    const [linhas] = await con.query(comando, [id])
    return linhas
}

export async function cardClientesADM() {
    const comando = `
    select
        id_usuario      id,
        nm_usuario		nome,
        ds_email		email
        from tb_usuario

    `
    const [linhas] = await con.query(comando)
    return linhas
}

