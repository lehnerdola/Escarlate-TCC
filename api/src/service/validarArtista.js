export async function validarArtista(artista){

    if (artista.nome == undefined || artista.nome == '') {
        throw new Error('Nome do artista é obrigatório!');
    }
    else if (artista.descricao == undefined || artista.descricao == '') {
        throw new Error('Descrição do artista é obrigatório!');
    }
    
}