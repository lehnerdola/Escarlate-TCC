import { API_URL } from './config.js';

import axios from 'axios';
const api = axios.create({
    baseURL: API_URL
});

export async function Logar(cpf,senha){
    const r = await api.post('/admin/login' , {
        cpf: cpf,
        senha: senha
    })
    return r.data;
}

export async function cadastrarProduto( idArtista, idCategoria, nome, tamanho, disponivel, preco, quantidade ) {
	const r = await api.post('/admin/produto', 
    { idArtista, 
      idCategoria,
      nome, 
      tamanho, 
      disponivel, 
      preco, 
      quantidade,
    });
	return r.data;
}

export async function listarCategorias() {
    const r = await api.get('/produto/categoria');
    return r.data;
}

export function buscarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}   

export async function enviarImagemProduto(imagem, id){
    const formData = new FormData();
    formData.append('imagem', imagem);

    const resposta = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function todosProdutos(){
    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function buscarProdutoPorNome(nome){
    const resposta = await api.get(`/produto/buscar?nome=${nome}`);
    return resposta.data;
}

export async function buscarPorId(id){
    const resposta =  await api.get(`/produto/${id}`);
    return resposta.data 
}

export async function AlterarProduto(idArtista, idCategoria, nome, tamanho, disponivel, preco, quantidade, id){
    const resposta = await api.put(`/alterar/${id}`, 
    {
        idArtista,
        idCategoria,
        preco, 
        nome, 
        tamanho, 
        disponivel, 
        quantidade,
    })
    return resposta.data;

}

export async function removerProduto(id) {
	const resposta = await api.delete(`/produto/${id}`);
	return resposta.status;
}

export async function salvarArtista(idCategoriaMusical, idCategoriaArtista, nome, descricao){
    const r = await api.post('/admin/artista' , {
        idCategoriaMusical, 
        idCategoriaArtista, 
        nome, 
        descricao
    });
    return r.data;
}

export async function AlterarArtista(id,idCategoriaMusical, idCategoria, nome, descricao){
    const resposta = await api.put(`/admin/artista/${id}`, 
    {
        idCategoriaMusical, 
        idCategoria, 
        nome, 
        descricao
    });
    return resposta.data;
}

export async function enviarImagemArtista(imagem,id){
    const formData = new FormData();
    formData.append('imagem', imagem);

    const resposta = await api.put(`/artista/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function listarArtistas() {
    const r = await api.get('/artistas');
    return r.data;
}

export async function listarArtistasPorId(id){
    const r = await api.get(`/artista/${id}/produto`);
    return r.data;
}

export async function listarTodosProdutosArtista() {
    const r = await api.get('/artista/produto');
    return r.data;
}


export async function listarCategoriasArtistas() {
    const r = await api.get('/artista/categoria');
    return r.data;
}

export async function listarCategoriasMusicais() {
    const r = await api.get('/artista/categoriamusical');
    return r.data;
}

export async function deletarArtista(id){
    const r = await api.delete(`/artista/${id}`)
    return r.status
}

export async function cadastrarMusica(idArtista,nomeMusica,link){
    const r = await api.post('/musica',
     {
        idArtista,
        nomeMusica,
        link
    });
    return r.data;
}

export async function alterarMusica(id,idArtista,nomeMusica,link){
    const r = await api.put(`/musica/${id}`,
    {
       idArtista,
       nomeMusica,
       link
   });
   return r.data;
}

export async function enviarImagemMusica(imagem,id){
    const formData = new FormData();
    formData.append('imagem', imagem);

    const resposta = await api.put(`/musica/imagem/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function listarTodasMusicas(){
    const r = await api.get('/musica')
    return r.data;
}

export async function apagarMusica(id){
    const r = await api.delete(`/musica/${id}`)
    return r.status
}

export async function buscarMusicaPorId(id){
    const r = await api.get(`/musica/${id}`);
    return r.data;
}

export async function listarPedidos() {
    const r = await api.get('/pedidos');
    return r.data;
}

export async function listarPedidosEntregues() {
    const r = await api.get('/pedidos/entregues');
    return r.data;
}

export async function listarPedidosCancelados() {
    const r = await api.get('/pedidos/cancelados');
    return r.data;
}

export async function enviarPedido(id){
    const r = api.put('/enviarPedido/' + id)
    return r.data;
}