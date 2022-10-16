import { con } from "./connection.js";

export async function cadastrarMusica(musica){
    const c = 
    `
    insert into tb_musica(id_artista,nm_musica,li_musica)
    values(?,?,?)
    `
    const [resposta] = await con.query(c, [musica.idArtista,musica.nomeMusica, musica.link]);
    musica.id = resposta.insertId;
    return musica;
};

export async function alterarImagemMusica(imagem,id){
    const c =
    `
    update tb_musica
    set img_musica  = ?
    where id_musica = ?
    `;
    const [resposta] = await con.query(c, [imagem,id]);
    return resposta.affectedRows;
}

export async function alterarMusica(id, musica){
    const c = 
    `
    update tb_musica
    set id_artista = ?,
        nm_musica  = ?,
        li_musica  = ?
    where id_musica = ?      
    `
    const [resposta] = await con.query(c, [musica.idArtista,musica.nomeMusica, musica.link, id]);
    return resposta.affectedRows;
}

export async function consultarTodasMusicas(){
    const c = 
    `
    select
    id_musica as id,
    tb_musica.id_artista as idArtista,
    nm_artista nomeArtista,
    nm_musica  as nomeMusica,
    li_musica  as link,
    img_musica as imagem
    from tb_musica  
    join tb_artista on tb_musica.id_artista = tb_artista.id_artista
    `
    const [resposta] = await con.query(c);
    return resposta;
}

export async function consultarMusicaPorId(id){
    const c = 
    `
    select
    id_musica as id,
    tb_musica.id_artista as idArtista,
    nm_artista nomeArtista,
    nm_musica  as nomeMusica,
    li_musica  as link,
    img_musica as imagem
    from tb_musica  
    join tb_artista on tb_musica.id_artista = tb_artista.id_artista
    where id_musica = ?;
    `
    const [resposta] = await con.query(c,[id]);
    return resposta[0];
}

export async function apagarMusica(id){
    const c =
    `
    delete from tb_musica
    where id_musica = ?
    `
    const [resposta] = await con.query(c, [id]);
    return resposta.affectedRows;
}