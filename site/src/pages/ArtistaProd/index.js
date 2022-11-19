import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PopUp from "../Components/Usuario/popup/index.js";
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
    //desmerge
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
        console.log(id)
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
        <img src={`http://localhost:5000/${item.imagemArtista}`}className='img-artista'/> 
        <div className="txt-artistaprod">
        <h1 className="tit-artistaprod"> {item.nomeArtista}</h1>
        <p className="desc-artista">{item.descricaoArtista}</p>
        </div>   
        </section>
        )}
        
            
        <section className="sec-artista-prod">
        <h1>PRODUTOS DO ARTISTA</h1>   
        <div className="div-artista-prod">
        {produtosArt.map (item =>
        <div onClick={toggleModal}>
       <img src={`http://localhost:5000/${item.imagemProduto}`} alt="" width={150} height={150}  onClick={() => abrirInfo(item.idProduto)}/>
       </div>
        )}
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
                    <PopUp produto={id}/>
                    <img onClick={toggleModal} className='botao-voltar' src="../assets/images/icons8-close-50.png"/>
                </div>
                </motion.div>    
                </div>
                </div>
                )}
        
     </article>
     
          
        </main>
    )
}