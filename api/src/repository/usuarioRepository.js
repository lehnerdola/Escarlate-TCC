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

export async function verificarEmail(email){
    const c =
    `
    select ds_email email
    from tb_usuario
    where ds_email = ? 
    `;
    const [resp] = await con.query(c, [email]);
    return resp[0];
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

export async function verPerfil (id){
    const resposta =
    `
    select 
    id_usuario  		 as id,
    nm_usuario         	 as nome,
    ds_email			 as email,
    ds_senha			 as senha,
    ds_cpf_usuario		as cpf,
    ds_telefone			as telefone
    from tb_usuario
    where id_usuario = ?    
    `;
    const [c] = await con.query (resposta, [id])
    return c;
}


   

