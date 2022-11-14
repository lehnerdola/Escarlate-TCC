use Escarlate;

-- listar todas tabelas
show tables;

-- tb_admin login
desc tb_admin_login;
drop table tb_admin_login;

-- tb_artista
desc tb_artista;
drop table tb_artista;

-- tb_categoria_muscial
desc tb_categoria_musical;
drop table tb_categoria_musical;
alter table tb_categoria_musical 
      add constraint 
      foreign key (id_artista)
      references tb_artista(id_artista);

-- tb_artista_categoria
desc tb_artista_categoria;
drop table tb_artista_categoria;


-- tb_produto
desc tb_produto;
drop table tb_produto;

-- tb_produto_categoria
desc tb_produto_categoria;
drop table tb_produto_categoria;

-- tb_usuario
desc tb_usuario;
drop table tb_usuario;

-- tb_usuario_endereco
desc tb_usuario_endereco;
drop table tb_usuario_enedereco;

-- tb_pedido
desc tb_pedido;
drop table tb_pedido;

-- tb_pedido_item
desc tb_pedido_item;
drop table tb_pedido_item;

-- tb_pag_cartao
desc tb_pag_cartao;
drop table tb_pag_cartao;

-- tb_pag_boleto
desc tb_pag_boleto;
drop table tb_pag_boleto;

-- Cadastro admin
insert into tb_admin_login
        values (1, '544200038-80', '1234');

-- Login admin
select * from tb_admin_login
       where nr_cpf = ?
       and ds_senha = ?;         

-- login usuario 
insert into tb_usuario 
        values (1, 'Bruno', 'bruno1234@gmail.com', '1234', '000000000-00', '11 99569-4528');

-- cadastrar endereço de usuário
insert into tb_usuario_endereco
        values (1, 1, 'Rua tchurosbango tchurosbago', 'Mansão verde', 174, 04550-120);
        
-- alterar dados de usuário
update tb_usuario
   set nm_usuario       = ?,
       ds_usuario       = ?,
	   ds_senha         = ?,
       ds_cpf_usuario   = ?,
       ds_telefone      = ?
 where id_usuario       = ?;
 
-- alterar endereço do usuario
update tb_usuario_endereco
   set id_usuario         = ?,
       ds_logradouro      = ?,
	   ds_complemento     = ?,
       nr_endereco        = ?,
       nr_cep             = ?
 where id_usuario_end     = ?;

-- consultar todos usuários
select * from tb_usuario;

 -- cadrastar nova categoria musical
insert into tb_artista_categoria_musical(ds_categoria_musical)
	    values ('Heavy metal');
    
-- cadrastar nova categoria de artista
insert into tb_artista_categoria(ds_categoria)
		values('banda');

-- cadastrar novo artista
insert into tb_artista (id_artista_categoria_musical, id_artista_categoria, nm_artista, ds_artista, img_artista)
        values(1, 1,'MELICAAA', 'Metallia é uma banda norte-americana de heavy metal. O seu repertório inclui instrumentos e musicalidade agressiva. O Metallica formou-se em 1981.', '');        
                
	-- inserir imagem artista
	UPDATE tb_artista
    SET img_artista      = 'basjlaskdvhjsdv'
    WHERE id_artista     = 5;
    
     select 
    id_artista_categoria   as id,
    ds_categoria         as categoria
    from tb_artista_categoria;
    
-- alterar dados do artista 
update tb_artista
   set nm_artista      = 'Mellatica',
	   id_artista_categoria_musical = 1,
        id_artista_categoria = 1,
       ds_artista      = 'é isso ai',
	   img_artista     = 'https://m.facebook.com/tribute.mellatica/'
 where id_artista      = 4;
                
-- consultar todos artistas
select * from tb_artista;

-- consultar artista por ID
select * 
  from tb_artista
 where id_artista = 4;
 
-- consultar artistas por nome
select *
 from tb_artista
where nm_artista like '%m%';

-- consultar artistas por categoria
select *
  from tb_artista 
 where id_artista_categoria = 1;
 
 insert into tb_categoria(nm_categoria)
values ('cv cisto vivve');
 
-- cadastrar novo prod
insert into tb_produto(id_artista, id_categoria, nm_produto, ds_tam, bt_disponivel, vl_preco, qtd_produto, img_produto) 
        values ( 1, 1, 'Metallica poster Master of Puppets', '20cm x 29,7cm', true, '0,00', 1, 'https://www.europosters.pt/posters/metallica-master-of-puppets-v20848');

-- consultar todos prod
select * from tb_produto;

-- consultar produtos por ID
select * 
  from tb_produto
 where id_produto = 1;
 
-- consultar prod por nome
select *
  from tb_produto
 where nm_produto like '%m%';
 
-- consultar prod por categoria 
select *
  from tb_produto
 where id_produto_categoria = 1;
 
-- consultar prod por disponibilidade 
select *  
  from tb_produto
 where bt_disponivel = true;
 
 -- listar todas categorias de prod
 select * from tb_produto_categoria;

-- add novo pedido 
insert into tb_pedido 
		values (1, 1, 1, 'Boleto bancário', ('2022-12-31'), 'Aguardando efetuação do pagamento', 3, 65.5);

-- alterar pedido
update tb_pedido
   set id_usuario         = ?,
       id_usuario_end     = ?,
       tp_pagamento       = ?, 
       dt_pedido          = ?,
       ds_status          = ?,
       qtd_produto        = ?,
       vl_total           = ?
 where id_pedido      = ?; 

-- consultar todos pedidos
select * from tb_pedido;

-- consultar pedidos por ID
select * 
  from tb_pedido
 where id_pedido = ?;
 
-- consultar pedidos por usuario
select * 
  from tb_pedido
 where id_usuario = ?;
 
-- consultar pedidos por endereço
select *
  from tb_pedido
 where id_usuario_end = ?;
 
-- consultar pedidos por tipo de pagamento
select *
  from tb_pedido
 where tp_pagamento = ?;

-- consulatr pedido por status
select *
  from tb_pedido
 where ds_status = ?;

-- add novo item ao pedido
insert into tb_pedido_item(id_pedido, id_produto)
        values(1, 1);

-- alterar items do pedido
update tb_pedido_item
   set id_pedido   = ?,
       id_produto  = ?
 where id_pedido_item = ?;
 
 -- listar todos items
 select * from tb_pedido_item;
 
 -- consultar item por ID
select *
  from tb_pedido
 where id_pedido = ?;
 
-- consultar item por pedido
select * 
  from tb_pedido_item
 where id_pedido = ?;
 
-- consultar item por prod
select *
  from tb_pedido_item
 where id_produto = ?;
 
-- add novo cartao
insert into tb_pag_cartao(id_pedido, nm_cartao, nr_cartao, cvv_cartao, dt_vencimento)
		values(1, 'MasterCard', 5467145464784789, 435, 2027-09-23);
        
-- alterar info do cartao
update tb_pag_cartao
   set id_pedido       = ?,
       nm_cartao       = ?,
       nr_cartao       = ?,
       cvv_cartao      = ?,
       dt_vencimento   = ?
 where id_pag_cartao   = ?;
 
delete from tb_produto
where id_artista = 3;

show tables;

drop table tb_produto_categoria;

select * from tb_produto;
select * from tb_categoria;
select * from tb_artista;

delete from tb_artista
where id_artista_categoria = 1; 

select tb_artista.id_artista 					id,
	   nm_artista							      	nome,
       ds_artista							 descricao,
       img_artista								imagem
  from tb_artista
inner join tb_categoria on tb_artista.id_artista_categoria = tb_categoria.id_artista_categoria
 left join img_artista on img_artista.id_artista = tb_artista.id_artista
    group
       by tb_artista.id_artista,
       nm_artista,
       ds_artista,
       id_artista_categoria;

-- consultar pedidos entregues 
select 
    id_pedido_item                      idPedidoItem,
    tb_pedido_item.id_pedido            idPedido,
    tb_pedido.id_usuario_end            idEndereco,
    tb_pedido_item.id_produto           idProduto,
    nm_produto                          nomeProduto,
    img_produto                         imagem,
    tb_pedido_item.qtd_produto          quantidade,
    vl_produto                          valorProduto,
    tp_pagamento                        tipoPagamento,
    ds_logradouro                       rua,
    nm_remetente                        nomeRemetente,    
    nr_endereco                         numero,
    tp_frete                            tipoFrete,
    vl_frete                            valorFrete,
    cod_notafiscal                      notaFiscal,
    dt_pedido                           dataPedido,
    ds_status                           statusPedido
    from tb_pedido_item
    join tb_pedido on tb_pedido_item.id_pedido = tb_pedido.id_pedido 
    join tb_usuario_endereco on tb_pedido.id_usuario_end = tb_usuario_endereco.id_usuario_end
    join tb_produto on tb_pedido_item.id_produto = tb_produto.id_produto
    where ds_status = 'Pedido enviado com sucesso!';

  -- consultar pedidos cancelados
select 
    id_pedido_item                      idPedidoItem,
    tb_pedido_item.id_pedido            idPedido,
    tb_pedido.id_usuario_end            idEndereco,
    tb_pedido_item.id_produto           idProduto,
    nm_produto                          nomeProduto,
    img_produto                         imagem,
    tb_pedido_item.qtd_produto          quantidade,
    vl_produto                          valorProduto,
    tp_pagamento                        tipoPagamento,
    ds_logradouro                       rua,
    nm_remetente                        nomeRemetente,    
    nr_endereco                         numero,
    tp_frete                            tipoFrete,
    vl_frete                            valorFrete,
    cod_notafiscal                      notaFiscal,
    dt_pedido                           dataPedido,
    ds_status                           statusPedido
    from tb_pedido_item
    join tb_pedido on tb_pedido_item.id_pedido = tb_pedido.id_pedido 
    join tb_usuario_endereco on tb_pedido.id_usuario_end = tb_usuario_endereco.id_usuario_end
    join tb_produto on tb_pedido_item.id_produto = tb_produto.id_produto
    where ds_status = 'Pedido cancelado!'