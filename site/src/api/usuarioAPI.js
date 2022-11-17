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

export async function enviarImagemUsuario(id, imagem){
    const formData = new FormData();
    formData.append('imagem', imagem);

    const resposta = await api.put(`/usuario/${id}/imagem`, formData, {
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

export async function AlterarUsu( id, nome, email, cpf, telefone){
    const resp = await api.put (`/alterarperfil/${id}`, {
        nome,
        email, 
        cpf, 
        telefone
    })
    return resp.data
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`;
}      


export async function listarCartoes(id){
    const r = await api.get(`/usuario/cartao/${id}`);
    return r.data
}

export async function ListarPedidosUsuario(id){
    const resp = await api.get('/usuario/pedido/' + id);
    return resp.data
}

export async function listarCartoesPorId(id){
    const r = await api.get(`/cartao/${id}`);
    return r.data
}

export async function EditarCartaoUser(id, nomeCartao,numero,cvv,vencimento){
    const r = await api.put (`/usuario/cartao/${id}`, {
        nomeCartao, numero, cvv, vencimento
    });
    return r.data;
}

export async function removerCartao(id) {
	const resposta = await api.delete(`/usuario/cartao/${id}`);
	return resposta.status;
}

export async function ArtistaProduto(id){
    const r = await api.get(`/artista/${id}/produto`);
    return r.data
}

export async function cancelarPedido(id){
    const r = api.put(`/cancelarCompra/${id}`)
    return r.status;
}
