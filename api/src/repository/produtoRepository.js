import { con } from "./connection.js";

export async function salvarProduto(produto){
    const comando =
    `
    insert into tb_produto(id_artista, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto)
    values(?,?,?,?,?,?)                        
    `
    const [resp] = await con.query(comando, [produto.idArtista, produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.quantidade]);

    return resp.insertId;
};

export async function salvarProdutoCategoria(idProduto, idCategoria){
    const comando =
    `
    insert into tb_produto_categoria(id_produto, id_categoria)
    values(?,?)
    `;

    const [resp] = await con.query(comando, [idProduto, idCategoria])
}
