export async function validarArtista(artista){

    if (artista.nome == undefined || artista.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (artista.descricao == undefined || artista.descricao == '') {
        throw new Error('Tamanho do produto é obrigatório!');
    }
    
}