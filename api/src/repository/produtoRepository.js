import { con } from "./connection.js";

export async function salvarProduto(produto){
    const comando =
    `
    insert into tb_produto(id_artista, id_categoria, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto)
    values(?,?,?,?,?,?,?)                        
    `
    const [resp] = await con.query(comando, [produto.idArtista, produto.idCategoria, produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.quantidade]);

    return resp.insertId;
};

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
       id_categoria   = ?,
       nm_produto     = ?,
       ds_tam         = ?, 
       bt_disponivel  = ?,
       vl_preco       = ?,
       qtd_produto    = ?
 where id_produto     = ?;
    `
    const [resp] = await con.query(comando, [produto.idArtista, produto.idCategoria,produto.nome, produto.tamanho, produto.disponivel,  produto.preco, produto.quantidade, id]);
    return resp.affectedRows;
}

export async function consultarTodosProdutos(){
    const comando = 
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
    join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria;
`
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function consultarProdutosPorId(id){
    const comando = 
    `
    SELECT 
       id_produto	    id,
       tb_produto.id_artista       artista,
       nm_artista       nomeartista,
       id_categoria     categoria,
       nm_produto       nome,
       ds_tam           tamanho,
       bt_disponivel    disponivel,
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
export async function excluirProduto(id){
    const comando = 
    `
    delete from tb_produto
    where id_produto = ?
    `
    const [resposta] = await con.query  (comando, [id])

    return resposta.affectedRows;
}


export async function buscarProdutoPorNome(nome){
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
}