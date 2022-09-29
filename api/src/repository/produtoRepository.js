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

export async function inserirImagemProduto(imagem, id){
    const c = 
    `
    UPDATE tb_produto
    SET img_produto      = ?
    WHERE id_produto     = ?
    `;
  const [resp] = await con.query(c, [imagem, id]);
  return resp.affectedRows;
}

export async function alterarProduto(id, produto){
    const comando = 
    `
    update tb_produto
   set id_artista     = ?,
       nm_produto     = ?,
       ds_tam         = ?, 
       bt_disponivel  = ?,
       vl_preco       = ?,
       qtd_produto    = ?
 where id_produto     = ?; 
    `
    const [resp] = await con.query(comando, [produto.idArtista, produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.quantidade, id]);

    return resp.affectedRows;
}

export async function consultarTodosProdutos(){
    const comando = 
    `
    select 
    id_produto id,
    nm_artista artista,
    nm_produto nome,
    ds_tam tamanho,
    bt_disponivel disponivel,
    vl_preco preco,
    qtd_produto quantidade,
    img_produto imagem
    from tb_produto
    join tb_artista on tb_produto.id_artista = tb_artista.id_artista;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function consultarProdutosPorId(id){
    const comando = 
    `
    SELECT 
       id_produto	    id,
       id_artista       artista,
       nm_produto       nome,
       ds_tam           tamanho,
       bt_disponivel    disponivel,
       vl_preco         preco,
       qtd_produto      quantidade,
       img_produto      imagem
  FROM tb_produto
  WHERE id_produto = ? 
  `;
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}