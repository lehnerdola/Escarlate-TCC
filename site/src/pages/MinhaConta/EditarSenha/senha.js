import { Link } from "react-router-dom"
import BotaoADM from '../../Components/Adm/Button/index.js'
import Menu from "../../Components/Usuario/menuMinhaConta/index.js"
import './senha.scss'

export default function Senha(){
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

    <nav className='div-editar-conta' >
        <Menu/>          
        <div className='informacao-usuario-editar-senha'>
            <div className='alig-itens-usuario'>
            <p className='usuario'>Senha atual:<span style={{color:'#A83F37'}}>*</span></p>
            <input  className='input' type='text'/>
            <p className='usuario'>Nova senha:<span style={{color:'#A83F37'}}>*</span></p>
            <input  className='input' type='text'/>
            </div>
            <div className='botao'>
            <BotaoADM nome='Salvar alterações'/>
            </div>
            
        </div>

    </nav>
    </main>
    )
}