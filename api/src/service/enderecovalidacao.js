import {TodosUsuarios} from '../repository/usuarioRepository.js'

export async function ValidarEndereco(endereco){
    if (endereco.nomeRemetente == undefined || endereco.nomeRemetente == '') {
        throw new Error('Nome do remetente é obrigatório!');
    }
    else if ((endereco.numeroCep == undefined) || endereco.numeroCep == '' ) {
        throw new Error('Número do CEP é obrigatório!');
    }
    else if (endereco.estado == undefined || endereco.estado == '') {
        throw new Error('Nome do estado é obrigatório!');
    }
    else if (endereco.cidade == undefined || endereco.cidade == '') {
        throw new Error('Nome da cidade é obrigatória!');
    }
    else if (endereco.bairro == undefined || endereco.bairro == '') {
        throw new Error('Nome do bairro é obrigatório!');
    }
    else if (endereco.logradouro == undefined || endereco.logradouro == '') {
        throw new Error('Nome da rua é obrigatório!');
    }
    else if (endereco.numeroEndereco == undefined || endereco.numeroEndereco == '') {
        throw new Error('Número residencial é obrigatório!');
    }

    
}