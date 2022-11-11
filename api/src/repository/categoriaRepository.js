import { con } from "./connection.js";

export async function listarCategoriasProduto() {
    const comando = 
    `
    select 
    id_categoria         as id,
    nm_categoria         as categoria
    from tb_categoria
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function listarCategoriasMusicais(){
    const c = `
    select 
    id_artista_categoria_musical   as id,
    ds_categoria_musical         as categoria
    from tb_artista_categoria_musical;
    `
    const [linhas] = await con.query(c);
    return linhas;
}

export async function listarArtistasCategorias(){
    const c = `
    select 
    id_artista_categoria   as id,
    ds_categoria         as categoriaartista
    from tb_artista_categoria
    `
    const [linhas] = await con.query(c);
    return linhas;
}

export async function buscarProdCategoriaPorId(id) {
    const comando = `
    select
    id_produto as idProduto,	
    tb_produto.id_categoria         as id,
    tb_categoria.nm_categoria         as categoria
    from tb_produto
    join tb_categoria on tb_categoria.id_categoria = tb_categoria.id_categoria
    where tb_categoria.id_categoria = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}