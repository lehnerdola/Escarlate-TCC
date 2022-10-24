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
            <div className='infos-usuario'>
            {usuario.map(item =>
            <div>
                <img  src={`http://localhost:5000/${item.imagem_usuario}`} alt='imagem que não vaii'/>
                <h1 className='usuario'>nome: {item.nome}</h1>
                <h1 className='usuario'>email: {item.email}</h1>
                <h1 className='usuario'>CPF: {item.cpf}</h1>
                <h1 className='usuario'>telefone: {item.telefone}</h1>
            </div>
                    
                )}
            </div>
        </nav>
        </main>
    )
}