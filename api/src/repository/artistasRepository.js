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
    SELECT 
    id_produto	                id,
    tb_produto.id_artista       artista,
    nm_artista       nomeartista,
    id_categoria     categoria,
    nm_produto       nome,
    ds_tam           tamanho,
    bt_disponivel    disponivel,
    vl_preco         preco,
    qtd_produto      quantidade,
    img_artista      imagem
    FROM tb_produto
    join tb_artista on tb_produto.id_artista = tb_artista.id_artista;
    `
    const [resposta] = await con.query (c)
    return resposta;
}

export async function listarProdutosArtista(id){
    const c = 
    `
    SELECT 
    id_produto	                id,
    tb_artista.id_artista       artista,
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
    WHERE tb_artista.id_artista = ? ;
    `
    const [resposta] = await con.query (c, [id])
    return resposta;
}

export async function listarArtistasHome(){
    const comando = `
            select tb_artista.id_artista 				id,
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

    const [registros] = await con.query(comando);
    return registros;
}