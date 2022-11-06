import { con } from "./connection.js";


export async function listarArtistas() {
    const c =
     `
        select id_artista     as id,
        id_artista_categoria_musical as categoriamusical,
        id_artista_categoria as categoria,
        nm_artista           as artista,
        ds_artista           as descricao,
        img_artista          as imagem
        from tb_artista
    `
    const [linhas] = await con.query(c);
    return linhas;
}

export async function salvarArtista(artista){
    const cad = `insert into tb_artista (id_artista_categoria_musical, id_artista_categoria, nm_artista, ds_artista)
    values(?, ?, ?, ?)`
    const [resposta] = await con.query(cad, [artista.idCategoriaMusical, artista.idCategoriaArtista, artista.nome, artista.descricao]);

    artista.id = resposta.insertId;
    return artista;
}

export async function alterarArtista(id, artista){
    const c = 
    `
   update tb_artista
   set id_artista_categoria_musical = ?,
       id_artista_categoria         = ?,
       nm_artista                   = ?,
       ds_artista                   = ?
   where id_artista                 = ?
    `
    const [resposta] = await con.query(c, [artista.idCategoriaMusical, artista.idCategoriaArtista, artista.nome, artista.descricao, id]);

    return resposta.affectedRows;
}

export async function salvarImagemArtista (imagem, id){
    const c = `
    UPDATE tb_artista
    SET img_artista      = ?
    WHERE id_artista     = ?
    `;

    const [resposta] = await  con.query(c, [imagem, id]);
    return resposta.affectedRows;
}

export async function buscarArtistaPorId(id) {
    const c = `
        select id_artista                   as id,
               id_artista_categoria_musical as categoriamusical,
               id_artista_categoria         as categoria,
               nm_artista                   as nome,
               ds_artista                   as descricao, 
               img_artista                  as imagem    

          from tb_artista
         where id_artista = ?
    `

    const [linhas] = await con.query(c, [id]);
    return linhas[0];
}

export async function removerArtista(id){
    const c = 
    `
    delete from tb_artista
    where id_artista = ?
    `

    const [resposta] = await con.query (c, [id])
    return resposta.affectedRows;
}

export async function listarTodosProdutosArtista(){
    const c = 
    `
    select
    tb_artista.id_artista idArtista,
    tb_artista.nm_artista nomeArtista,
    tb_artista.ds_artista descricaoArtista,
    tb_artista.img_artista imagemArtista,
    tb_produto.id_produto idProduto,
    tb_produto.img_produto imagemProduto,
    tb_produto.nm_produto nomeProduto
    from tb_artista
    inner join tb_produto on tb_produto.id_produto = tb_produto.id_produto
    where tb_produto.id_artista = tb_artista.id_artista
    `
    const [resposta] = await con.query (c)
    return resposta;
}

export async function listarProdutosArtista(id){
    const c = 
    `
    select
    tb_artista.id_artista idArtista,
    tb_artista.nm_artista nomeArtista,
    tb_artista.ds_artista descricaoArtista,
    tb_artista.img_artista imagemArtista,
    tb_produto.id_produto idProduto,
    tb_produto.img_produto imagemProduto,
    tb_produto.nm_produto nomeProduto
    from tb_artista
    inner join tb_produto on tb_produto.id_produto = tb_produto.id_produto
    WHERE tb_artista.id_artista = ?
    and tb_produto.id_artista = tb_artista.id_artista
    `
    const [resposta] = await con.query (c, [id])
    return resposta;
}

export async function listarArtistasHome(){
    const c = `
            select tb_artista.id_artista 			id,
            nm_artista								nome,
            ds_artista								descricao,
            img_artista								imagem
        from tb_artista
        inner join tb_categoria on tb_artista.id_artista_categoria = tb_categoria.id_artista_categoria
        left join img_artista on img_artista.id_artista = tb_artista.id_artista
            group
            by tb_artista.id_artista,
            nm_artista,
            ds_artista,
            id_artista_categoria 
              `

    const [registros] = await con.query(c);
    return registros;
}
