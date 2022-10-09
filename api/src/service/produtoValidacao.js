import { buscarArtistaPorId } from "../repository/artistasRepository.js";
import { buscarProdCategoriaPorId } from "../repository/categoriaRepository.js";

export async function validarProduto(produto){

    if (produto.nome == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (produto.tamanho == undefined || produto.tamanho == '') {
        throw new Error('Tamanho do produto é obrigatório!');
    }
    else if ((produto.preco == undefined) || produto.preco == '') {
        throw new Error('Preço do produto é obrigatório!');
    }
    else if (produto.disponivel == undefined) {
        throw new Error('Disponibilidade é obrigatória!');
    }

    const artista = await buscarArtistaPorId(produto.idArtista);
    if (artista == undefined) {
        throw new Error('Artista inválido');
    }

    const categoria = await buscarProdCategoriaPorId(produto.idCategoria);
    if(categoria == undefined){
        throw new Error('categoria inválida');
    }
}