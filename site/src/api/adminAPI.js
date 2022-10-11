import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
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

export async function listarArtistas() {
    const r = await api.get('/artistas');
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