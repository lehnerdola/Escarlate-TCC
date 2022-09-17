import React from 'react';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

import LandingPage from './pages/LP/LandingPage';
import Login from './pages/Login e Cadastro/Login';
import Cadastro from './pages/Login e Cadastro/Cadastro';
import Feed from './pages/Feed/Feed';
import Carrinho from './pages/Carrinho/Carrinho';
import Pagamento from './pages/Pagamento/Pagamento';
import LoginADM from './pages/ADM/Login/loginADM';
import CadProduto from './pages/ADM/Produtos/cadProd';

export default function Index(){
    return(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<LandingPage/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/LoginADM' element={<LoginADM/>} />
    <Route exact path='/cadProduto' element={<CadProduto/>}/>   
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  );
};