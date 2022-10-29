import { Link, useNavigate } from "react-router-dom";
import './feed.scss';
import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";
import { listarArtistas, todosProdutos, buscarImagem } from "../../api/adminAPI.js";
import { API_URL } from '../../api/config';
import Item from '../Components/carousel/item.js';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Storage from 'local-storage'
import PopUp from "../Components/Usuario/popup";

export default function Feed() {

    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState({});
    const [artista, setArtista] = useState([])

    const [modal, setModal] = useState(false);

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

    async function carregarTodosArtistas() {
        const resp = await listarArtistas();
        setArtista(resp)
    }

    const navigate = useNavigate();

    function sairClick() {
        Storage.remove('cliente-logado');
        navigate('/login')
    }

    useEffect(() => {
        carregarTodosProdutos();
        carregarTodosArtistas();
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
                    <div className="div-top-hits">
                        <div className="sub-div-top-hits">
                            <img src={'../../assets/images/Screenshot_20220806-195359-947 3.png'} className='conf-img-feed-music' />
                            <h2 className="tit-musica">HAYLOFT II</h2>
                            <p className="tit-musica">MOTHER MOTHER</p>
                        </div>
                        <div className="sub-div-top-hits">
                            <img src={'../../assets/images/Screenshot_20220806-195839-596 1.png'} className='conf-img-feed-music' />
                            <h2 className="tit-musica">MASTER OF PUPPETS</h2>
                            <p className="tit-musica">METALLICA</p>
                        </div>
                        <div className="sub-div-top-hits">
                            <img src={'../../assets/images/Screenshot_20220806-195653 1.png'} className='conf-img-feed-music' />
                            <h2 className="tit-musica">MEMORIES</h2>
                            <p className="tit-musica">YUNGBLUB, WILLOW</p>
                        </div>
                    </div>

                </section>

                <section className="sec-top-hits">
                    <Link to='/NossosArtistas'>
                        <h1 className="tit">NOSSOS ARTISTAS</h1>
                    </Link>
                    <div className="div-top-hits">
                    <p>aaa</p>
                    </div>
                </section>

 
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