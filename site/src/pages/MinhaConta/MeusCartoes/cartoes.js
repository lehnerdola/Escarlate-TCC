import { Link } from "react-router-dom";
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import 'react-credit-cards/lib/styles.scss'
import './cartoes.scss'
import Storage from "local-storage";
import CartaoCard from "../../Components/Usuario/cartaoUser/index.js";
import { useEffect, useState } from "react";
import { listarCartoes } from "../../../api/usuarioAPI.js";


export default function MeusCartoes(){
    const [cartao, setCartao] = useState([])
    const id = Storage ('cliente-logado').id_usuario

    async function CarregarCartoes(){
        const r = await listarCartoes(id);
        setCartao(r)
    }

    useEffect(() => {
        CarregarCartoes()
    }, [])

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