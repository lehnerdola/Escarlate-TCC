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
        setTimeout(() => {
            carregarPerfilUsuario();
        }, 9000000)
    }, [])
    

    return(
        <main>
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
            <div >
            {usuario.map(item =>
                    <h1>{item.nome}</h1>
                )}
            </div>
        </nav>
        </main>
    )
}