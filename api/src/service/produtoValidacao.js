import randomstring from "randomstring";
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

    const categoria = await buscarProdCategoriaPorId(produto.idCategoria);
    if(categoria == undefined){
        throw new Error('categoria inválida');
    }
}

export function gerarNotaFiscal(){
    return randomstring.generate(11)
}

export function lerValorFrete(frete){
    if(frete === 'Normal')
    return 15.0;

    else 
    return 25.0;
}

export function criarNovoPedido(idUsuario,info)
{
    let dataAtual = new Date();
    let valorFrete = lerValorFrete(info.frete);
    const notaFiscal = gerarNotaFiscal();

return{
    idUsuario: idUsuario,
    idEndereco: info.idEndereco ,
    tipoPagamento:'Cartão',
    tipoFrete: info.frete, 
    valorFrete: valorFrete, 
    notaFiscal: notaFiscal,
    data: dataAtual,
    status:'Confirmando Pagamento'
}
}