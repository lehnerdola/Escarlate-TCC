import './conta.scss'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'

import { verPerfil } from '../../../api/usuarioAPI'
import { useEffect, useState } from 'react'
import storage from 'local-storage'


export default function MinhaConta(){

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

    
    return(
        <main className='div-conta'>
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

        <nav>
        <Menu/>         

            {usuario.map(item =>
 
            <div className='informacao-usuario'>
            <img  src={`http://localhost:5000/${item.imagem_usuario}`} alt='' className='img-user'/>

            <div className='div-informacoes'>
                <h1 className='usuario'>Nome: {item.nome}</h1>
                <h1 className='usuario'>Email: {item.email}</h1>
                <h1 className='usuario'>CPF: {item.cpf}</h1>
                <h1 className='usuario'>Telefone: {item.telefone}</h1>
            </div>
                    
            </div>
            )}

        </nav>
        </main>
    )
}