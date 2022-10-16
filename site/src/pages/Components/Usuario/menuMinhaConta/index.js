import './index.scss'
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Menu(props){

    const [menuselecionado, setMenuselecionado] = useState('home');   

    function selecionarMenu(menu){
        setMenuselecionado(menu);
    } 

    return(
        <div className='menu'>
            <div className='align-itens-menu'> 
            <div className='menu-itens'>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Editar perfil</p>  
            </div>
            </div>
            <div className='align-itens-menu'> 
            <div className='menu-itens'>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Alterar senha</p>  
            </div>
            </div>
            <div className='align-itens-menu'> 
            <div className='menu-itens'>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Meus cartões</p>  
            </div>
            </div>
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
            <Link to ='/MinhaConta'>
            <img src={'../../../../assets/images/Vector.png'} width={20} className='exit-icon' alt=''/>
            </Link>
            </div>
    
    )
}