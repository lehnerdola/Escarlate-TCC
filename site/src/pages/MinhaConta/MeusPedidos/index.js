
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { verPerfil, ListarPedidosUsuario ,cancelarPedido} from '../../../api/usuarioAPI';
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import PedidosUser from "../../Components/Usuario/pedidosUser/index.js";
import storage from 'local-storage';
import './index.scss';

export default function MeusPedidos(){
    const id = storage('cliente-logado').id_usuario

    const [usuario, setUsuario] = useState([]);
    const navigate = useNavigate();
    const [pedido, setPedido] = useState([]);

    async function CarregarPedidos(){
        const resp = await ListarPedidosUsuario(id)
        setPedido(resp)
    }



    async function carregarPerfilUsuario() {
        const resp = await verPerfil(id);
        setUsuario(resp) 
    }

    useEffect(()=>{
            CarregarPedidos();
            carregarPerfilUsuario();
    }, [])


    return(
        <main className="meus-pedidos">
            
            <header className='header'>
                <div className='sub-header-1'>
                <Link to='/Feed'>
                <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>   
                </Link>
                <h1 className='nome-page'>Minha Conta</h1>
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