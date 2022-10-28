import { Link } from "react-router-dom";
import './index.scss';

export default function Rodape(){
    

    return(
        <footer>
            <nav className='nav-rdp'>
                <h1 className='tit'> Páginas </h1>
                <Link to='/Carrinho' href='/Carrinho'> Carrinho de Compras </Link>
                <Link to='/' href='/LandingPage'> Home </Link>
                <Link to='/Artistas' href='/TodosArtistas'> Conheça nossos Artistas </Link>
            </nav>

            <div className='pag-rdp'>
                <h1 className='tit1'> Pagamentos </h1>
                <img className="pag" src={'../../assets/images/pag.png'} />
            </div>

            <div className='ctt-rdp'>
                <h1 className='tit2'> Contatos </h1>
                <p> (11) 99999-9999 </p>
                <p> suporteEscarlate@gmail.com </p>
            </div>

            <hr/>

            <div>
             <Link to='/' href='/LandingPage'>
                <img className='logo' src={'../../assets/images/logoRdp.png'} width={110} />
             </Link>
               <img className="rds" src={'../../assets/images/redessociais.png'} />
            </div>
        </footer>
    )
}
