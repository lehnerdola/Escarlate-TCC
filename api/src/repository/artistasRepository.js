import { con } from "./connection.js";

export async function listarArtistas() {
    const c =
     `
        select id_artista        as id,
               nm_artista        as artista
        from tb_artista
    `
    const [linhas] = await con.query(c);
    return linhas;
}

export async function buscarArtistaPorId(id) {
    const c = `
        select id_artista              as id,
               nm_departamento         as artista
          from tb_artista
         where id_artista = ?
    `

    const [linhas] = await con.query(c, [id]);
    return linhas[0];
}


