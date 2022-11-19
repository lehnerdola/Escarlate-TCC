import './index.scss'
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function MenuADM(props){

    const [menuselecionado, setMenuselecionado] = useState('home');   

    function selecionarMenu(menu){
        setMenuselecionado(menu);
    } 

    return(
        <div className='adm-menu'>
            <div className='menu-adm'>
            <img className='logo-cad-prod' alt='' src={'../../../../assets/images/Captura de Tela (2).png'} width={155}/>

            <div className='menu-itens'>
            <div className='align-itens-menu'>  
            <img alt='' src={'../assets/images/🦆 icon _home_.png'} width={18} height={18}/>
            <Link to='/TelaInicial' className='link-config-txt' onClick={ () => selecionarMenu('home')}>
            <p className='txt-menu-adm' style={{marginRight:"0.5em"}}>Home</p>  
            </Link> 
            </div>
            <div className='align-itens-menu'>
            <img alt=''src={'../assets/images/🦆 icon _box seam_ (1).png'} width={18} height={18} style={{marginLeft:"0.5em"}}/>
            <Link to='/Produtos' className='link-config-txt' onClick={ () => selecionarMenu('produtos')}>
            <p className='txt-menu-adm' style={{marginLeft:"0.1em"}}>Produtos</p>
            </Link>  
            </div>
            <Link to='/TodosArtistas' className='link-config-txt'>
            <div className='align-itens-menu'>
            <img alt='' src={'../assets/images/🦆 icon _music artist_.png'} width={18} height={18}  style={{marginLeft:"0.2em"}}/>
            <p className='txt-menu-adm'>Artistas</p>
            </div>
            </Link>
            <Link to='/HitsDoMomento' className='link-config-txt'>
            <div className='align-itens-menu'>
            <img alt='' src={'../assets/images/🦆 icon _headphone music alt_.png'} width={18} height={18}  style={{marginLeft:"0.2em"}}/>
            <p className='txt-menu-adm'>Músicas</p>
            </div>
            </Link>   
            <Link to ='/Pedidos' className='link-config-txt'>
            <div className='align-itens-menu' >
            <img alt='' src={'../assets/images/Carrinho.png'} width={18} height={18}  style={{marginLeft:"0.2em"}}/>
            <p className='txt-menu-adm'>Pedidos</p>
            </div> 
            </Link>
            </div>
            <Link to ='/LoginADM' className='link-config-txt'>
            <img src={'../../../../assets/images/Vector.png'} width={20} className='exit-icon' alt=''/>
            </Link>
            </div>
        </div>
    )
}