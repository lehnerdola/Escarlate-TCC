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
      insert into tb_produto(id_artista, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto) 
      values (?, ?, ?, ?, ?, ?)
      `;
      const [resp] = await con.query(c, [produto.IdArtista,  produto.nome, produto.tamanho, produto.disponivel, produto.preco, produto.qtd]);
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

 export async function salvarProdutoCategoria(idProduto, idCategoria) {
     const comando = `
         insert into tb_produto_categoria (id_categoria, id_produto)
                                   values (?, ?)
     `
 
     const [resp] = await con.query(comando, [idCategoria, idProduto])
 }