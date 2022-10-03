import React from 'react';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

import LandingPage from './pages/LP/LandingPage';
import Login from './pages/Login e Cadastro/Login';
import Cadastro from './pages/Login e Cadastro/Cadastro';
import Feed from './pages/Feed/Feed';
import Carrinho from './pages/Carrinho/Carrinho';
import Pagamento from './pages/Pagamento/Pagamento';
import Produtos from './pages/ADM/Produtos/TodosProdutos';
import LoginADM from './pages/ADM/Login/loginADM';
import TelaInicial from './pages/ADM/TelaInicial/index';
import CadProdutos from './pages/ADM/Produtos/CadProdutos';

export default function Index(){
    return(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<LandingPage/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/LoginADM' element={<LoginADM/>} />
    <Route exact path='/TelaInicial' element={<TelaInicial/>}/>
    <Route exact path='/Produtos' element={<Produtos/>}/>  
    <Route exact path='/Cadastro' element={<Cadastro/>}/> 
    <Route exact path='/Feed' element={<Feed/>}/>  
    <Route exact path='/CadProdutos' element={<CadProdutos/>}/>    
    <Route path='/alterar/:idParam' element={<CadProdutos/>} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  );
};