import { Link } from "react-router-dom";
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import 'react-credit-cards/lib/styles.scss'
import Cards from 'react-credit-cards'
import './cartoes.scss'
import CartaoCard from "../../Components/Usuario/cartaoUser/index.js";


export default function MeusCartoes(){
    return(
        

        <main className="cartao">

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
        <div className="align-cartao-card">
           
            <CartaoCard/>
        </div>

        

        </main>
        
    )
}