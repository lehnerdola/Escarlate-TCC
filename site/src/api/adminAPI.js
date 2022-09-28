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

export async function cadastrarProduto( idArtista, nome, tamanho, disponivel, preco, quantidade ,categorias) {
	const r = await api.post('/admin/produto', { idArtista, nome, tamanho, disponivel, preco, quantidade, categorias});
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