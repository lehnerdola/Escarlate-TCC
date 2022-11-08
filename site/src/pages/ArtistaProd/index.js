import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {buscarProdutoPorNome, listarTodosProdutosArtista } from "../../api/adminAPI.js";
import { motion } from "framer-motion";
import './index.scss'

export default function ArtistaProd(){
    const [artista, setArtista]= useState([]);
    const [produtos, setProdutos]= useState([]);
    const [filtro, setFiltro] = useState('');

    const {idParam} = useParams();

    async function carregarPagina(){
        const r = await listarTodosProdutosArtista(idParam) 
        console.log(r)
        setArtista(r)
    }

    async function Filtrar(){
        const resp = await buscarProdutoPorNome(filtro);
        return setProdutos(resp);
    }


    useEffect(() => {
        carregarPagina();
    }, []);

    return(
        <main className="artistaprod">
            <header className='header'>
             <div className='sub-header-1'>
                <Link to='/Feed'>
                <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                whileHover={{ scale: 1.1}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                />
                </Link>
             </div>   
             <div>
             <input type='text' className='input-busca' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
             <button className='lupa-conf' onClick={Filtrar}><img src={'../../../../assets/images/search.png'} className='lupa' id='send'/></button>
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                <Link to ='/Carrinho'>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
                </Link>
             </div>
        </header>

        {artista.map (item =>
        <article className="faixa-1-artistaprod">
        <section className="section-1-artista-prod">
        <img src={`http://localhost:5000/${item.artista.imagemArtista}`}className='img-artista'/> 
        <div className="txt-artistaprod">
        <h1 className="tit-artistaprod"> {item.artista.nomeArtista}</h1>
        <p className="desc-artista">{item.artista.descricaoArtista}</p>
        </div>   
        </section>
        <section className="sec-artista-prod">
        <h1>NOSSOS PRODUTOS</h1>   
        <div className="div-artista-prod">
       <img src={`http://localhost:5000/${item.produtos.imagemProduto}`} alt="" width={150} height={150}/>
        </div>
        </section>
     </article>
     )}
          
        </main>
    )
}