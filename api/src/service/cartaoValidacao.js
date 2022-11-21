export async function validarCartao( id, cartao){
    if(id < 1)

    if (cartao.nomeCartao == undefined || cartao.nomeCartao == '') {
        throw new Error('Nome do cartao é obrigatório!');
    }
    if (cartao.numeroCartao == '') {
        throw new Error('Número do cartao é obrigatório!');
    }

    if (cartao.codSeguranca == undefined || cartao.codSeguranca.length > 3) {
        throw new Error('CVV do cartao é obrigatório!');
    }
    if (cartao.vencimento == undefined || cartao.vencimento.length > 5) {
        throw new Error('Vencimento é obrigatório!');
    }

}