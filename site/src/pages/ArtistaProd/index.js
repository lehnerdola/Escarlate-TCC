import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PopUp from "../Components/Usuario/popup/index.js";
import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";

import {buscarProdutoPorNome, listarTodosProdutosArtista } from "../../api/adminAPI.js";
import { motion } from "framer-motion";
import './index.scss'

export default function ArtistaProd(){
    const [artista, setArtista]= useState([]);
    const [produtosArt, setProdutosArt] = useState([])
    const [produto, setProduto]= useState({});
    const [filtro, setFiltro] = useState('');
    const [modal, setModal] = useState(false);
    const [filtrarProduto, setFiltrarProduto] = useState([])
    
    const toggleModal = () => {
        setModal(!modal);
    };
    const {id} = useParams();
    const navigate= useNavigate();

    function abrirInfo(id){
        navigate(`/ArtistaProd/${id}`)
    }


    if(modal) {
        document.body.classList.add('active-modal')
    }
     else {
        document.body.classList.remove('active-modal')
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 480, itemsToShow: 1.4 },
        { width: 750, itemsToShow: 2.4, itemsToScroll: 2 },
        { width: 1100, itemsToShow: 3.4, itemsToScroll: 3 },
        { width: 1560, itemsToShow: 4.4, itemsToScroll: 4 }
    ];

    async function carregarPagina(){
        const r = await listarTodosProdutosArtista(id) 
        setArtista(r.artista)
        setProdutosArt(r.produtos)
        setProduto(r.produtos.idProduto)
    }

    async function Filtrar(){
        const resp = await buscarProdutoPorNome(filtro);
        setFiltrarProduto(resp);
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
        {artista.map (item =>
        <section className="section-1-artista-prod">
        <img src={`http://localhost:5000/${item.imagemArtista}`}className='img-artista-prod'/> 
        <div className="txt-artistaprod">
        <h1 className="tit-artistaprod"> {item.nomeArtista}</h1>
        <p className="desc-artista">{item.descricaoArtista}</p>
        </div>   
        </section>
        )}
        
            
        <section className="sec-artista-prod">
        <h1>PRODUTOS DO ARTISTA</h1>   
        <div className="div-artista-prod">
        <Carousel breakPoints={breakPoints}>
        {produtosArt.map (item =>
        <div onClick={toggleModal}>
       <img src={`http://localhost:5000/${item.imagemProduto}`} alt="" width={150} height={150}  onClick={() => abrirInfo(item.idProduto)}/>
       <p>{item.nomeProduto}</p>
       </div>
        )}
        </Carousel>
        </div>
        </section>
        
            {modal && (
                <div className="modal">
                <div className="overlay">
                <motion.div
                animate={{opacity:[0,1], }}
                transition={{delay:0.5, type:'spring'}}
                >
                <div className="modal-content">
                <img onClick={toggleModal} className='botao-voltar-artista-prod' src="../assets/images/icons8-close-50.png" />
                    <PopUp produto={id}/>
                  
                </div>
                </motion.div>    
                </div>
                </div>
                )}
        
     </article>
     
          
        </main>
    )
}