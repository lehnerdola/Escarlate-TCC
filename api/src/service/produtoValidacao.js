import { buscarArtistaPorId } from "../repository/artistasRepository.js";

export async function validarProduto(produto){

    if (produto.nome == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (produto.tamanho == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
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


}