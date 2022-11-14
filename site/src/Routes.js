import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LP/LandingPage';
import Login from './pages/Login e Cadastro/Login';
import Cadastro from './pages/Login e Cadastro/Cadastro';
import Feed from './pages/Feed/Feed';
import Carrinho from './pages/Carrinho/Carrinho';
import Pagamento from './pages/Pagamento/index';
import Produtos from './pages/ADM/Produtos/TodosProdutos';
import LoginADM from './pages/ADM/Login/loginADM';
import TelaInicial from './pages/ADM/TelaInicial/index';
import CadProdutos from './pages/ADM/Produtos/CadProdutos';
import TodosProdutos from './pages/TodosProdutos/index';
import Artistas from './pages/ADM/Artistas/TodosArtistas';
import CadArtistas from './pages/ADM/Artistas/CadArtistas';
import PopUp from './pages/Components/Usuario/popup';
import NossosArtistas from './pages/NossosArtistas/nossosartistas.js'
import MinhaConta from './pages/MinhaConta/ContaUsuario/conta.js'
import HitsDoMomento from './pages/ADM/Hits do Momento/index';
import CadHit from './pages/ADM/Hits do Momento/CadHit/index';
import Endereco from './pages/Pedido/Endereço/index';
import Clientes from './pages/ADM/Cliente/index';
import ArtistaProd from './pages/ArtistaProd/index';
import EditarConta from './pages/MinhaConta/EditarConta/index.js'
import MeusCartoes from './pages/MinhaConta/MeusCartoes/cartoes.js'
import Senha from './pages/MinhaConta/EditarSenha/senha';
import Pedidos from './pages/ADM/Pedidos';
import MeusPedidos from './pages/MinhaConta/MeusPedidos';
import FinalizarPedido from './pages/FinalPedido/pedidofinal.js';
import FinalPagamento from './pages/Pagamento/pagamentoFinal';
import EditarCartao from './pages/MinhaConta/MeusCartoes/EditarCartao/index.js'


export default function Index(){
    return(
      <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<LandingPage/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/LoginADM' element={<LoginADM/>} />
    <Route exact path='/TodosArtistas' element={<Artistas/>}/>
    <Route exact path='/TodosProdutos/:id' element={<TodosProdutos/>}/>
    <Route exact path='/Produtos' element={<Produtos/>}/>  
    <Route exact path='/Pedidos' element={<Pedidos/>}/>  
    <Route exact path='/MeusPedidos' element={<MeusPedidos/>}/>  
    <Route exact path='/CadProdutos' element={<CadProdutos/>}/>  
    <Route exact path='/CadArtistas' element={<CadArtistas/>}/> 
    <Route exact path='/alterarartista/:idParam' element={<CadArtistas/>}/>
    <Route exact path='/alterar/:idParam' element={<CadProdutos/>} />
    <Route exact path='/HitsDoMomento' element={<HitsDoMomento/>}/>
    <Route exact path='/CadHit' element={<CadHit/>}/>
    <Route exact path='/alterarmusica/:idParam' element={<CadHit/>}/>
    <Route exact path='/pedidoEnviado/:idParam' element={<Pedidos/>}/>
    <Route exact path='/TelaInicial' element={<TelaInicial/>}/>
    <Route exact path='/Cadastro' element={<Cadastro/>}/> 
    <Route exact path='/Feed' element={<Feed/>}/> 
    <Route exact path='/Feed/:id' element={<Feed/>}/> 
    <Route exact path='/TodosProdutos' element={<TodosProdutos/>}/>         
    <Route exact path='/Carrinho' element={<Carrinho/>}/> 
    <Route exact path='/NossosArtistas' element={<NossosArtistas/>}/> 
    <Route exact path='/MinhaConta' element={<MinhaConta/>}/> 
    <Route exact path='/Endereco' element={<Endereco/>}/>
    <Route exact path='/Pagamento' element={< Pagamento/>}/>
    <Route exact path='/Pagamento/:id' element={< Pagamento/>}/>
    <Route exact path='/Clientes' element={<Clientes/>}/>
    <Route exact path='/ArtistaProd' element={<ArtistaProd/>}/>
    <Route exact path='/MeusCartoes' element={<MeusCartoes/>}/>
    <Route exact path='/AlterarSenha' element={<Senha/>}/>
    <Route exact path='/finalizado' element={<FinalizarPedido/>}/>
    <Route exact path='/editarperfil' element={<EditarConta/>}/>
    <Route exact path='/alterarperfil/:id' element={<EditarConta/>}/>
    <Route exact path='/FinalizacaoPagamento' element={<FinalPagamento/>}/>
    <Route exact path='/ArtistaProd/:id' element={<ArtistaProd/>}/> 
    <Route exact path='/ArtistaProd/:id' element={<ArtistaProd/>}/>
    <Route exact path='/Editarcartao/:idParam' element={<EditarCartao/>}/>

  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  );
};