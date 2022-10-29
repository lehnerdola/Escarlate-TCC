import { API_URL } from ''
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { verPerfil } from '../../../api/usuarioAPI';
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import PedidosUser from "../../Components/Usuario/pedidosUser/index.js";
import storage from 'local-storage';
import './index.scss';

export default function MeusPedidos(){
    const id = storage('cliente-logado').id_usuario

    const [usuario, setUsuario] = useState([]);
    const navigate = useNavigate();

    async function carregarPerfilUsuario() {
        const resp = await verPerfil(id);
        setUsuario(resp) 
    }

    useEffect(()=>{
            carregarPerfilUsuario();
    }, [])

    useEffect(()=>{
        if(!Storage('cliente-logado')){zqaa
            navigate('/login');
        } 
    }, [])

    return(
        <main className="meus-pedidos">
            
            <header className='header'>
                <div className='sub-header-1'>
                <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
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
                {usuario.map(item =>
                    <div className='perfil-user'>
                    <img src={`http://localhost:5000/${item.imagem_usuario}`} className='ftperfil'/>

                        <div className='info-user'>
                            <h2> {item.nome} </h2>
                            <h2> {item.cpf} </h2>
                        </div>  
                    </div>
                )}

        </main>
        
    )
}