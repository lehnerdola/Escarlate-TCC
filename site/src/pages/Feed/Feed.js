import { Link, useNavigate, useParams } from "react-router-dom";
import './feed.scss';
import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";
import { listarArtistas, todosProdutos, buscarImagem, listarTodasMusicas } from "../../api/adminAPI.js";
import { API_URL } from '../../api/config';
import Item from '../Components/carousel/item.js';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Storage from 'local-storage'
import PopUp from "../Components/Usuario/popup";

export default function Feed() {

    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState({});
    const [artistas, setArtistas] = useState([])
    const [hits, setHits] = useState([])

    const [modal, setModal] = useState(false);

    const {idParam} = useParams();

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }

    function abrirInfo(id) {
        navigate('/Feed/' + id)
    }

    function abrirInfoArtista(){
        navigate('/ArtistaProd/' + idParam)
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 480, itemsToShow: 1.4 },
        { width: 750, itemsToShow: 2.4, itemsToScroll: 2 },
        { width: 1100, itemsToShow: 3.4, itemsToScroll: 3 },
        { width: 1560, itemsToShow: 4.4, itemsToScroll: 4 }
    ];


    async function carregarTodosProdutos() {
        const resp = await todosProdutos();
        setProdutos(resp);
    }

    async function carregarTodosHits(){
        const resp = await listarTodasMusicas();
        setHits(resp)
    }

    async function carregarTodosArtistas() {
        const resp = await listarArtistas();
        setArtistas(resp)
    }

    function abrirLink(){
         
    }

    const navigate = useNavigate();

    function sairClick() {
        Storage.remove('cliente-logado');
        navigate('/login')
    }

    useEffect(() => {
        carregarTodosProdutos();
        carregarTodosArtistas();
        carregarTodosHits();
    }, []);

    useEffect(() => {
        if (!Storage('cliente-logado')) {
            navigate('/login')
        }
    }, [])

    return (
        <main>
            <header className='header'>

                <div className='sub-header-1'>
                    <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf' onClick={sairClick} />
                    <h2 className='nome-page'>Início</h2>
                </div>
                <div>

                </div>
                <div className='sub-header-2'>
                    <Link to='/MinhaConta'>
                        <img src={'../../../../assets/images/user.png'} className='conf-img-header' />
                    </Link>

                    <Link to='/Carrinho'>
                        <img src={'../../../../assets/images/cart.png'} className='conf-img-header' />
                    </Link>
                </div>
            </header> <div className="feed">

                <section className="sec-top-hits">
                    <h1 className="tit">TOP HITS</h1>
                </section>
                <div className="div-top-hits">
                <Carousel breakPoints={breakPoints}>
                {hits.map(item =>
                    <section className='musicas'>
                        <a style={{textDecoration:'none'}} href={item.link}>
                        <img src={buscarImagem(item.imagem)} alt=''/>

                        <h1> {item.nomeMusica}</h1>
                        <h1> {item.nomeArtista}</h1>
                        </a>
                        
                    </section>
                 )}
                </Carousel>
                </div> 


                <section className="sec-top-hits">
                    <Link to='/NossosArtistas'>
                        <h1 className="tit">NOSSOS ARTISTAS</h1>
                    </Link>
                    <div className="div-top-hits">
                    <p></p>
                    </div>
                </section>

                <Carousel breakPoints={breakPoints}>
                    {artistas.map(item =>
                        <div className="div-artistas">
                            <motion.img className="img-artista"
                                onClick={() => abrirInfoArtista(item.idParam)}
                                whileHover={{ scale: 1 }}
                                onHoverStart={e => {}}
                                onHoverEnd={e => {}}
                                whileTap={{ scale: 0.8 }}
                                src={buscarImagem(item.imagem)} 
                                width={150}/> 
                        </div>
                    )}
                </Carousel>
 
                <section className="sec-top-hits">
                    <Link to='/TodosProdutos' className="tit">
                        <h1>NOSSOS PRODUTOS</h1>
                    </Link>


                    <div className="div-top-hits">
                         
                    <Carousel breakPoints={breakPoints}>


{produtos.map(item =>
    <div>

        <section className='produtos'>

            <motion.div className='align-prod' onClick={toggleModal}>
                <motion.img

                    whileHover={{ scale: 1.1, border: 'red 1PX' }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }}
                    src={buscarImagem(item.imagem)}
                    width={170} className="btn-modal"
                    onClick={() => abrirInfo(item.id)} />

           </motion.div>

        </section>
    </div>




)}
</Carousel>

                    </div>
                    {modal && (
                                <div className="modal">
                                    <div className="overlay">
                                        <motion.div
                                            animate={{ opacity: [0, 1], }}
                                            transition={{ delay: 0.5, type: 'spring' }}
                                        >
                                            <div className="modal-content">
                                                <PopUp produto={produto} />
                                                <button onClick={toggleModal} className='botao-voltar'> voltar</button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            )}
                </section>
            </div>
        </main>
    )
}