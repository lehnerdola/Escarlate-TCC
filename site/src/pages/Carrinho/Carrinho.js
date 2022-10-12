import { Link } from "react-router-dom";
import '../../Common.scss' 
import './carrinho.scss'
export default function Carrinho(){

return(
 <main>
    <header className="header">
    <div className='sub-header-1'>
        <Link to='/feed'>
        <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf' alt="img"/>
        </Link>
             <h2 className='nome-page'>Carrinho de Compras</h2>
             </div>   
             <div>
            
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header' alt="img"/>
             </div>
    </header>
    
    <nav className="carrinho">
    <div className="prod-caixa">
        <div className="itens">
            <div className="div-prod1">
            <img src={'../../../../assets/images/CANECA-removebg-preview 1.png'} className='conf-img-header' alt="img" width={150}/>
            <p className="nome">Caneca Metallica 450ml cor branca</p>
            </div>

            <div className="infos-prod">
                <div className="info">
                <p className="nome">Valor</p>
                <p className="nome">R$ 0,00</p>
                </div>
                <div className="info">
                <p className="nome">Quantidade</p>
                <p className="nome">1</p>
                </div>
                <div className="info">
                <p className="nome">Apagar</p>
                <img src={'../../../../assets/images/trash.png'} className='conf-img-header' width={100} alt="img"/>
                </div >
            </div>
        </div>
       
    </div>
    </nav>
         
 </main>
)
}