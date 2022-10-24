import { Link } from "react-router-dom";
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import CardPAH from '../../Components/Adm/Card/index.js'
export default function MeusCartoes(){
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

        <nav className="div-conta">
        <Menu/>
        <div className="ifos-cartao">
        <div className="align-itens-cartao">
        <div className='cardpah'>
        <div className='txt-cardpah'>
        <p className='txt-conf-cardpah'>cartão de crédito com final:</p>
        <p className='txt-conf-cardpah'>9090</p>
        <p className='txt-conf-cardpah'>valid.</p>
        <p className='txt-conf-cardpah-underline'>09090</p>
        </div>
        <div className='bt-card-pah'>
        </div>
        </div>
        </div>
        </div>
        
        <button>Adicionar Novo Cartão</button>
        </nav>
        </main>
        
    )
}