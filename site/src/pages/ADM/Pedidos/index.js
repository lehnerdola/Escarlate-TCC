import './index.scss'
import { useState, useEffect } from 'react';
import PopUpEnviarPedido from '../../Components/Adm/popupEnviarPedido/index';
import { toast, ToastContainer } from 'react-toastify';
import PopUpCancelarPedido from '../../Components/popupCancelarPedido';
import caminhao from '../../../assets/images/caminhao.png'
import caminhaoCancelar from '../../../assets/images/Group 70.png'
import MenuADM from '../../Components/Adm/menu';
import storage from 'local-storage'
import { motion } from 'framer-motion';
import BotaoADM from '../../Components/Adm/Button'
import { listarPedidos, buscarImagem, enviarPedido, cancelarPedido } from '../../../api/adminAPI.js';
import { useNavigate } from 'react-router-dom';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [modalEnviar, setModalEnviar] = useState(false);
    const [modalCancelar, setModalCancelar] = useState(false);

    
    function abrirModal(id) {
        navigate('/Pedidos/' +id)
    }

    async function enviarPedidoClick(id) {
        const pedido = await enviarPedido(id);

        carregarTodosPedidos();
    }

    async function cancelarPedidoClick(id) {
        const pedido = await cancelarPedido(id);
        carregarTodosPedidos();
    }

    const toggleModal = () => {
        setModalEnviar(!modalEnviar);
    };

    const toggleModalCancelar = () => {
        setModalCancelar(!modalCancelar);
    };

    async function carregarTodosPedidos() {
        const r = await listarPedidos();
        setPedidos(r);
    }
    const navigate = useNavigate();


    useEffect(() => {
        if (!storage('adm-logado')) {
            navigate('/LoginADM')
        }
        carregarTodosPedidos();
    }, [])
    return (
        <div>
            <MenuADM />

            <main className='pedidos'>
                <section className='sec-1-pedidos'>
                    <h1>Pedidos</h1>
                    <div className='align-txt-sec-1'>
                        <p>Todos Pedidos</p>
                        <p>Pedidos Enviados</p>
                        <p>Pedidos Cancelados</p>
                    </div>
                </section>

                <section className='sec-2-pedidos'>
                    {pedidos.map(item =>

                        <article className='card-pedidos'>

                            <div className='div-column-1-card'>
                                <div className='div-id'><img src={'../../assets/images/🦆 icon _tag_.png'} /><p>ID: <span>{item.idPedido}</span></p></div>

                                <div className='align-cartao-cliente'>
                                    <div className='div-cartao-cliente'><img src={'../../assets/images/🦆 icon _Payment_.png'} /> <span>
                                        {item.tipoPagamento}</span></div>
                                    <div className='div-cliente'><img src={'../../assets/images/🦆 icon _people_ (1).png'} /><span className='align-nmcliente'>{item.nomeRemetente}</span></div>
                                </div>
                            </div>

                            <div className='div-column-2-card'>
                                <h2>{item.nomeProduto}</h2>
                                <div className='align-qtd-data'><p>Qtd: {item.quantidade}</p> <p>Data: {item.dataPedido.substr(0, 10)}</p></div>
                                <div className='align-localizacao'><img src={'../../assets/images/🦆 icon _address_.png'} /> <p>{item.rua}, {item.numero}</p></div>
                            </div>

                            <img src={buscarImagem(item.imagem)} className='img-card-pedido' />

                            <div className='botao-pedido-adm'>
                                <div className='enviar-pedido' onClick={toggleModal}>
                                    <img src={caminhao} className='caminhao-enviado' />
                                    <div onClick={() => enviarPedidoClick(item.idPedido)}>
                                        <button className='bt-pedido-enviar'>Enviar Pedido</button>
                                    </div>
                                    {modalEnviar && (
                                        <div className="modal-enviar-pedido">
                                            <div className="overlay-enviar-pedido">
                                                <motion.div
                                                    animate={{ opacity: [0, 1], }}
                                                    transition={{ delay: 0.5, type: 'spring' }}
                                                >
                                                    <div className="modal-content-enviar-pedido">
                                                        <PopUpEnviarPedido item={item} />
                                                        <button onClick={toggleModal} className='botao-voltar'> </button>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className='cancelar-pedido' onClick={toggleModalCancelar}>
                                    <img src={caminhaoCancelar} className='caminhao-enviado' />
                                    <div onClick={() => abrirModal(item.idPedido)}>
                                        <BotaoADM nome='Cancelar Pedido' />
                                    </div>
                                    {modalCancelar && (
                                        <div className="modal-enviar-pedido">
                                            <div className="overlay-enviar-pedido">
                                                <motion.div
                                                    animate={{ opacity: [0, 1], }}
                                                    transition={{ delay: 0.5, type: 'spring' }}
                                                >
                                                    <div className="modal-content-enviar-pedido">
                                                        <PopUpCancelarPedido  />
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                        </article>
                    )}

                </section>

            </main>



        </div>

    )
}
