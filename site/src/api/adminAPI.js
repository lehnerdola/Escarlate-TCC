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

export async function cadastrarProduto(artista, categoria, nome, tamanho, disponivel, preco, qtd, usuario) {
	const r = await api.post("/admin/cadproduto", {
		artista: artista,
		categoria: categoria,
		nome: nome,
        tamanho: tamanho,
        disponivel: disponivel,
		preco: preco,
        qtd: qtd,
	});
	return r.data;
}

export async function enviarImagemProduto(imagem, id){
    const formData = new FormData();
    formData.append('img', imagem)

    const resposta = await api.put(`/produto/${id}/img`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return resposta.status;
}