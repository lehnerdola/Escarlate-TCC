import {con} from './connection.js';

export async function adminLogin(cpf, senha) {
       const c =
       `
       select * 
       from tb_admin_login
       where nr_cpf = ?
       and ds_senha = ?
       `;
       const [resp] = await con.query(c, [cpf, senha]);
       return resp[0];
 }

 
 