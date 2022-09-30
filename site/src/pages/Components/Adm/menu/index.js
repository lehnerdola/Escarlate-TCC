import './index.scss'
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function MenuADM(props){

    const [menuselecionado, setMenuselecionado] = useState('home');   

    function selecionarMenu(menu){
        setMenuselecionado(menu);
    } 

    return(
        <div className='menu'>
            <div className='menu-adm'>
            <img className='logo-cad-prod' src={'../../../../assets/images/Captura de Tela (2).png'} width={155}/>

            <div className='menu-itens'>
            <img/>
            <Link to='/TelaInicial' className='link-config-txt' onClick={ () => selecionarMenu('home')}>
            <p className='txt-menu-adm'>Home</p>  
            </Link> 
            <img/>
            <p className='txt-menu-adm'>Artistas</p>
            <img/>
            <p className='txt-menu-adm'>Músicas</p>
            <img/>
            <p className='txt-menu-adm'>Clientes</p>
            <img/>
            <p className='txt-menu-adm'>Pedidos</p>
            <img/>
            <Link to='/Produtos' className='link-config-txt' onClick={ () => selecionarMenu('produtos')}>
            <p className='txt-menu-adm'>Produtos</p>
            </Link>
            </div>
            <img src={'../../../../assets/images/Vector.png'} width={20} className='exit-icon'/>
            </div>
        </div>
    )
}