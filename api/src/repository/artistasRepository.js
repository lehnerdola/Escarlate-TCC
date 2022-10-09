import { con } from "./connection.js";

export async function listarArtistas() {
    const c =
     `
        select id_artista     as id,
        id_artista_categoria_musical 
        as categoriamusical,
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
    const [resposta] = await con.query(cad, [artista.idCategoriaMusical, artista.idCategoria, artista.nome, artista.descricao]);

    return resposta.insertId;
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
        select id_artista              as id,
               nm_artista              as artista
          from tb_artista
         where id_artista = ?
    `

    const [linhas] = await con.query(c, [id]);
    return linhas[0];
}


