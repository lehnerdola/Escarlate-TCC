import {con} from './connection.js'

export async function listarEnderecos(idUsuario){
    const c =
    `
    select
    id_usuario_end id,
    id_usuario idUser,
    nm_remetente nomeRemetente,
    ds_estado estado,
    ds_cidade cidade,
    ds_bairro bairro,
    ds_blocoapt blocoapt,
    ds_logradouro logradouro,
    ds_complemento complemento,
    nr_endereco numeroEndereco,
    nr_cep cep

    from tb_usuario_endereco
    where id_usuario = ?
    `

    const [registros] = await con.query(c, [idUsuario]);
    return registros;
}


export async function salvarEndereco(idUsuario, endereco){
    const c =
    `
    insert into tb_usuario_endereco(id_usuario, nm_remetente, ds_estado,ds_cidade,ds_bairro, ds_blocoapt, ds_logradouro, ds_complemento, nr_endereco, nr_cep)
    values(?,?,?,?,?,?,?,?,?,?);
    `
    const [info] = await con.query(c, [idUsuario,endereco.nomeRemetente, endereco.estado, endereco.cidade, endereco.bairro, endereco.blocoapt, endereco.logradouro,endereco.complemento,endereco.numeroEndereco,endereco.numeroCep]);

    return info.insertId;
}

export async function removerEndereco(id){
    const c = 
    `
    delete from tb_usuario_endereco
    where id_usuario_end = ?;
    `
    const [resposta] = await con.query  (c, [id])

    return resposta.affectedRows;
}