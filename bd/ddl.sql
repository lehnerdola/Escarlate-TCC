
    drop table tb_produto_categoria;
    create database Escarlate;
    use Escarlate;

    create table tb_admin_login(
    id_login_admin int primary key auto_increment,
    nr_cpf varchar(50) ,
    ds_senha varchar(50) 
    );

    create table tb_artista(
    id_artista int primary key auto_increment,
    nm_artista varchar(150) ,
    ds_artista varchar(150) ,
    img_artista varchar(700) 
    );

    create table tb_categoria_musical (
    id_artista_categoria_musical int primary key auto_increment,
    ds_categoria varchar(150) 
    );

    create table tb_artista_categoria(
    id_artista_categoria int primary key auto_increment,
    id_artista int,
    id_artista_categoria_musical int,

    foreign key (id_artista) references tb_artista (id_artista),
    foreign key (id_artista_categoria_musical) references tb_categoria_musical(id_artista_categoria_musical)
    );

    create table tb_categoria(
    id_categoria int primary key auto_increment,
    nm_categoria varchar(150)
    );

    create table tb_produto(
    id_produto int primary key auto_increment,
    id_artista int,
    id_categoria int,
    nm_produto varchar(150) ,
    ds_tam varchar(20) ,
    bt_disponivel bool ,
    vl_preco varchar(50) ,
    qtd_produto int ,
    img_produto varchar(700),
    foreign key (id_artista) references tb_artista(id_artista),
    foreign key (id_categoria) references tb_categoria(id_categoria)
    );


    create table tb_usuario(
    id_usuario int primary key auto_increment,
    nm_usuario varchar(150) ,
    ds_email varchar(150) ,
    ds_senha varchar(25) ,
    ds_cpf_usuario varchar(50) ,
    ds_telefone varchar(50)
    );

    create table tb_usuario_endereco(
    id_usuario_end int primary key auto_increment,
    id_usuario int,
    ds_logradouro varchar(150) ,
    ds_complemento varchar(150),
    nr_endereco int ,
    nr_cep int ,

    foreign key (id_usuario) references tb_usuario(id_usuario)
    );

    create table tb_pedido(
    id_pedido int primary key auto_increment,
    id_usuario int,
    id_usuario_end int,
    tp_pagamento varchar(150),
    dt_pedido date,
    ds_status varchar(30),
    qtd_produto int,
    vl_total decimal(15,2),

    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_usuario_end) references tb_usuario_endereco(id_usuario_end)
    );

    create table tb_pedido_item(
    id_pedido_item int primary key auto_increment,
    id_pedido int,
    id_produto int,

    foreign key (id_pedido) references tb_pedido(id_pedido),
    foreign key (id_produto) references tb_produto(id_produto)
    );

    create table tb_pag_cartao(
    id_pag_cartao int primary key auto_increment,
    id_pedido int,
    nm_cartao varchar(150) ,
    nr_cartao int ,
    cvv_cartao int ,
    dt_vencimento date,

    foreign key (id_pedido) references tb_pedido(id_pedido)
    );

    create table tb_pag_boleto(
    id_pag_boleto int primary key auto_increment,
    id_pedido int,
    cod_boleto int,
    img_boleto varchar(700),

    foreign key (id_pedido) references tb_pedido(id_pedido)
    );