import { API_URL } from './config.js'

import axios from 'axios';
const api = axios.create({
    baseURL: API_URL
});


export async function cadastrarUsuario(nome,email,senha) {
	const r = await api.post('/usuario', 
    {
        nome,
        email,
        senha
    });
	return r.data;
}

export async function loginUsuario(email,senha){
    const r = await api.post('/usuario/login' , {
        email,
        senha
    })
    return r.data;
}

export async function verPerfil(id) {
    const resposta = await api.get(`/usuario/${id}`);
    return resposta.data; 
}

export async function enviarImagemUsuario(imagem, id){
    const formData = new FormData();
    formData.append('image', imagem);

    const resposta = await api.put(`/usuario/${id}/image`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}



export async function salvarEndereco(idUsuario,nomeRemetente, estado, cidade, bairro, blocoapt, logradouro,complemento,numeroEndereco,numeroCep){
    const r = await api.post('/usuario/' + idUsuario +'/endereco',
     {idUsuario,
     nomeRemetente, 
     estado, 
     cidade, 
     bairro, 
     blocoapt, 
     logradouro,
     complemento,
     numeroEndereco,
     numeroCep})
     
     return r.data;
}

export async function listarEnderecos(idUsuario){
    const r = await api.get('/usuario/' + idUsuario + '/endereco');
    return r.data
}

export async function removerEndereco(id) {
	const resposta = await api.delete(`/endereco/${id}`);
	return resposta.status;
}

export async function salvarNovoPedido(idUsuario, novoPedido){
    const r = await api.post('/pedido/' + idUsuario, novoPedido);
    return r.data;
}

export async function listarArtistasHome(){
    const r = await api.get('/artistas');
    return r.data;
}

export async function AltSenha(id, senha, senhaNova){
    const r = await api.put('/alterarsenha/' + id, {
        senha,
        senhaNova
    })
    return r.data;
}