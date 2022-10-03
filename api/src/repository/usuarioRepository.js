import {con} from './connection.js'

export async function cadastrarUsuario(usuario){
    const c =
    `
    insert into tb_usuario(nm_usuario, ds_email, ds_senha)
    values(?,?,?)
    `
    const [resp] = await con.query(c, [usuario.nome, usuario.email, usuario.senha]);

    return resp.insertId;
}

export async function loginUsuario(email, senha) {
    const c =
    `
    select * 
    from tb_usuario
    where ds_email = ?
    and ds_senha = ?
    `;
    const [resp] = await con.query(c, [email, senha]);
    return resp[0];
}

   

