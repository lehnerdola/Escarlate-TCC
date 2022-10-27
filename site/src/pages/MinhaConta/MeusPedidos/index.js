import { Link } from "react-router-dom";
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import PedidosUser from "../../Components/Usuario/pedidosUser/index.js";

import './index.scss'
export default function MeusPedidos(){
    return(
        
        <main className="meus-pedidos">
            
            <header className='header'>
             <div className='sub-header-1'>
             <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
             <h2 className='nome-page'>Minha Conta</h2>
             </div>   
             <div>
            
             </div>
             <div className='sub-header-2'>
             <Link to='/Carrinho'>
             <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
             </Link>
             </div>

        </header>
        <Menu/>
        <nav className="nav-pedidos">
            <PedidosUser/>
                </nav>
        
        </main>
        
    )
}