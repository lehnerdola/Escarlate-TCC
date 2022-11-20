import { Link, Navigate, useNavigate } from "react-router-dom";
import './pagamento.scss';
import { motion } from "framer-motion";
import CardEndereco from "../Components/Usuario/popupEndereço";
import { enviarEmail, listarEnderecos, salvarNovoPedido } from '../../api/usuarioAPI.js'
import { useState, useEffect, useRef } from "react";
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'
import storage from 'local-storage';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask'

export default function Pagamento() {
    const [enderecos, setEnderecos] = useState([]);
    const [endereco, setEndereco] = useState({});
    const [frete, setFrete] = useState('');
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const [focus, setFocus] = useState('')
    const [idEndereco, setIdEndereco] = useState();
    const [idUsuario, setIdUsuario] = useState();
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [codSeguranca, setCodSeguranca] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [parcelas, setParcelas] = useState();
    const [tipo, setTipo] = useState('');
    // const [pedido, setPedido] = useState([])
    

    async function carregarEnderecos() {
        const id = storage('cliente-logado').id_usuario;
        const r = await listarEnderecos(id);
        setEnderecos(r)
    }
    const toggleModal = () => {
        setModal(!modal);
    };

    function selecionarEndereco(idEndereco) {
        const id = (
            { 'idEndereco': idEndereco }
        )
        storage.remove('ender-selecionado')
        storage('ender-selecionado', id)
        const senha = document.getElementById("faq-titulo-2");
        if (senha.checked === false) {
            senha.checked = true;
        }
        else {
            senha.checked = false
            storage.remove('ender-selecionado')
        }

    }

    if (modal) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }


    useEffect(() => {
        carregarEnderecos();
    }, [])

    

    const ref = useRef(null);

    async function salvarPedido() {
        try {
            let email = storage('cliente-logado').ds_email
            let id = storage('cliente-logado').id_usuario;

            let idEnd = storage('ender-selecionado').idEndereco
            
            let produtos = storage('carrinho');


            let nomeProduto = {
                produto:produtos[0].produto
            }
            let imagemProduto = {
                imagem: produtos[0].imagem
            }

            let nome = nomeProduto.produto
            let imagem = imagemProduto.imagem.substr(17, 32)
            
            console.log(imagem)
            const pedido = 
                {
                    frete: frete,
                    tipoPagamento: 'Cartão',
                    idEndereco: idEnd,
                    cartao: {
                        idUsuario: id,
                        nomeCartao: nomeCartao,
                        numeroCartao: numeroCartao,
                        codSeguranca: codSeguranca,
                        vencimento: vencimento,
                        parcelas: parcelas,
                        formaPagamento: tipo,
                    },
                    produtos: produtos
                }
            


            if (!storage('carrinho')) {
                toast.error('É necessário selecionar um item no carrinho')
            }
            else {

                const r = await salvarNovoPedido(id, pedido)
                navigate('/FinalizacaoPagamento')
                storage.remove('carrinho')
            }


        }
        catch (err) {
            if (!storage('ender-selecionado')) {
                toast.error('É necessário selecionar um endereço')
            }
            toast.error(err.response.data.erro)
       
        }
    }

    return (
        <main className="pagamento">
            <ToastContainer/>
            <header className='header'>
                <div className='sub-header-1'>
                    <Link to='/Feed'>
                        <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        />
                    </Link>
                </div>
                <div>

                </div>
                <p>Efetuando pagamento (2/2)</p>
            </header>
            <nav className="content-pagamento">

                <Cards
                    number={numeroCartao}
                    name={nomeCartao}
                    cvc={codSeguranca}
                    expiry={vencimento}
                    focused={focus}
                />
                <article className="align-itens-input-pag">
                    <section className="inputs-pagamento">
                        <div className="align-inputs-pagamento">
                            <div>
                                <p>Número do cartão:</p>
                                <input mask='9999 9999 9999 9999'name="numero" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} ref={ref} className='input-pag' onFocus={e => setFocus(e.target.name)}/>

                                <p>Nome registrado no cartão:</p>
                                <input name="nome" value={nomeCartao} onChange={e => setNomeCartao(e.target.value)} className='input-pag' onFocus={e => setFocus(e.target.name)}/>
                            </div>
                            <div>
                                <p>CVV:</p>
                                <InputMask max={2} mask='999' name="cvc" value={codSeguranca} onChange={e => setCodSeguranca((e.target.value))}className='input-pag' onFocus={e => setFocus(e.target.name)}/>
                                <p>Validade:</p>
                                <input name="validade" value={vencimento} onChange={e => setVencimento(e.target.value)} className='input-pag' onFocus={e => setFocus(e.target.name)}/>
                            </div>
                        </div>

                        <div className="frete-pagamento">
                            <div>
                                <p>Tipo Pagamento:</p>
                                <select value={tipo} onChange={e => setTipo(e.target.value)}>
                                    <option value={"Débito"}>Débito</option>
                                    <option value={"Crédito"}>Crédito</option>
                                </select>
                            </div>
                            <div>
                                <p>Frete:</p>
                                <select value={frete} onChange={e => setFrete(e.target.value)}>
                                    <option value={"Sedex"}>Sedex(25,00)</option>
                                    <option value={"Normal"}>Normal(15,00)</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    <div className="align-bt-pagamento">
                        <button onClick={salvarPedido} className='bt-pagamento' >Finalizar Pagamento</button>
                        <button onClick={toggleModal} className='bt-pagamento'> Selecionar Endereço</button>
                    </div>
                </article>

                <div>

                </div>
                {modal && (
                    <div className="modal">
                        <div className="overlay">
                            <motion.div
                                animate={{ opacity: [0, 1], }}
                                transition={{ delay: 0.5, type: 'spring' }}
                            >

                                <div className="modal-content-pagamento" >
                                <img onClick={toggleModal} className='botao-voltar-endereco' src="../assets/images/icons8-close-50.png"/>

                                    {enderecos.map(item =>
                                        <div onClick={() => selecionarEndereco(item.id)}>
                                            <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id === idEndereco} />
                                            <input class="trigger-input" id="faq-titulo-2" type="radio" />
                                        </div>
                                    )}
                                </div>

                            </motion.div>
                        </div>
                    </div>
                )}

            </nav>

        </main>
    )
}