import { Link } from "react-router-dom";
import './index.scss';

export default function Rodape(){
    return(
        <section className='rdp'>
            <nav className='nav-rdp'>
                <h1 className='tit'> Páginas </h1>
                <Link to='/Carrinho' href='/Carrinho'> Carrinho de Compras </Link>
                <Link to='/TelaInicial' href='TelaInicial'> Tela Inicial </Link>
                <Link to='/Produtos' href='/Produtos'> Produtos </Link>
                <Link to='/Artistas' href='/Artistas'> Conheça nossos Artistas </Link>
            </nav>

            <div className='pag-rdp'>
                <h1 className='tit1'> Pagamentos </h1>
                <img src={'../../assets/images/pag.png'} />
            </div>

            <div className='ctt-rdp'>
                <h1 className='tit2'> Contatos </h1>
                <p> (11) 99999-9999 </p>
                <p> suporteEscarlate@gmail.com </p>
            </div>

            <hr/>

            <div>
            <Link to='/' href='/'>
                <img className='logo' src={'../../assets/images/logoRdp.png'} width={110} />
            </Link>
            <img src={'../../assets/images/redessociais.png'} />
            </div>
        </section>
    )
}
