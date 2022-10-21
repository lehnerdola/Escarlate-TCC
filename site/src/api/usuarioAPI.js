import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
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

export function buscarImagemUsuario(imagem){
    return `${api.getUri()}/${imagem}`
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