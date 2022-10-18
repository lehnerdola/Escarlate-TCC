import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { listarProdutosArtistas, buscarProdutoPorNome } from "../../api/adminAPI.js";
import { motion } from "framer-motion";
import './index.scss'

export default function ArtistaProd(){
    const [artista, setArtista]= useState([]);
    const [produtos, setProdutos]= useState([]);
    const [filtro, setFiltro] = useState('');

    const {idParam} = useParams();

    async function carregarPagina(){
        const r = await listarProdutosArtistas(idParam) 
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

        <article className="faixa-1-artistaprod">
        <section className="section-1-artista-prod">
        <img src={'../../../../assets/images/cbe32534b5d42220e47b16a1a9c9c0dd.png'} className='img-artista'/> 
        <div className="txt-artistaprod">
        <h1 className="tit-artistaprod"> Metallica </h1>
        <p className="desc-artista">Metallica é uma banda norte-americana de heavy metal. O seu repertório inclui instrumentais e musicalidade agressiva. O Metallica se formou em 1981.</p>
        </div>   
        </section>
        <section className="sec-artista-prod">
        <h1>NOSSOS PRODUTOS</h1>   
        <div className="div-artista-prod">
        <img src={'../../assets/images/CANECA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
        <img src={'../../assets/images/BLUSA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
        <img src={'../../assets/images/metalica poster.png'} className='conf-img-feed-produto'/> 
        </div>
        <h1>NOSSOS PRODUTOS</h1>   
        <div className="div-artista-prod    ">
        <img src={'../../assets/images/CANECA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
        <img src={'../../assets/images/BLUSA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
        <img src={'../../assets/images/metalica poster.png'} className='conf-img-feed-produto'/> 
        </div>
        <h1>NOSSOS PRODUTOS</h1>   
        <div className="div-artista-prod    ">
        <img src={'../../assets/images/CANECA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
        <img src={'../../assets/images/BLUSA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
        <img src={'../../assets/images/metalica poster.png'} className='conf-img-feed-produto'/> 
        </div>
        </section>
     </article>
          
        </main>
    )
}