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