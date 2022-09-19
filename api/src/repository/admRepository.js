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

 export async function cadastrarProduto(produto){
      const c = 
      `
      insert into tb_produto(id_artista, id_produto_categoria, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto) 
      values (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const [resp] = await con.query(c, [produto.artista, produto.categoria, produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.qtd]);
      produto.id = resp.insertId;

      return produto;
 }

 export async function inserirImagemProduto(imagem, id){
      const c = 
      `
      UPDATE tb_produto
      SET img_produto      = ?
      WHERE id_produto     = ?
      `;
    const [resp] = await con.query(c, [imagem, id]);
    return resp.affectedRows;
 }