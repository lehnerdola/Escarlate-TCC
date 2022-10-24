import './index.scss'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function Menu(props){

    const [menuselecionado, setMenuselecionado] = useState('home');  
    const navigate = useNavigate();

    async function editarConta(id){
        navigate(`/EditarConta`)
    }

    function selecionarMenu(menu){
        setMenuselecionado(menu);
    } 

    return(
        <div className='menu'>
            <Link to ='/MinhaConta'>
                <div className='align-itens-menu'> 
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Minha conta</p>  
                </div>
                </div>
            </Link>
            <div onClick={editarConta} className='align-itens-menu'>
                <Link to='/EditarConta'>
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Editar perfil</p>  
                </div>
                </Link> 
            </div>
            <Link to='/AlterarSenha'>
                <div className='align-itens-menu'> 
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Alterar senha</p>  
                </div>
                </div>
            </Link>
            <Link to='/MeusCartoes'>
                <div className='align-itens-menu'> 
                <div className='menu-itens'>
                <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Meus cartões</p>  
                </div>
                </div>
            </Link>
            
            <div className='align-itens-menu'> 
            <div className='menu-itens'>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Meus pedidos</p>  
            </div>
            </div>
            <div className='align-itens-menu'> 
            <div className='menu-itens'>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Compras feitas</p>  
            </div>
            </div>
            <Link to ='/Feed'>
            <img src={'../../../../assets/images/Vector.png'} width={20} className='exit-icon' alt=''/>
            </Link>
            </div>
    
    )
}