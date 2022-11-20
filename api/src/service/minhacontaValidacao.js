export default function validarconta(id, usuario){
   
    if(id < 1){
      throw new Error('Usuario inexistente!');
    }
    if (usuario.nome == null || usuario.nome == '' || usuario.nome == undefined) {
        throw new Error('Nome do usuario é obrigatório!');
    }
    if (usuario.email == null || usuario.email == '' || usuario.email == undefined) {
        throw new Error('Email do usuario é obrigatório!');
    }
    if( usuario.cpf.length > 11 ){
      throw new Error('CPF invalido');
    }
    if(usuario.telefone.length > 11 ){
      throw new Error('Número de telefone invalido');
    }
}