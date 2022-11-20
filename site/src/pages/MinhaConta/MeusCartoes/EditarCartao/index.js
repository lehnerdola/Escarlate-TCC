import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {EditarCartaoUser,listarCartoesPorId } from '../../../../api/usuarioAPI.js'
import { useState, useEffect, useRef } from "react";
import Cards from 'react-credit-cards'
import './index.scss'
import 'react-credit-cards/lib/styles.scss'
import storage from 'local-storage';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function EditarCartao() {
    const idUsuario = storage('cliente-logado').id_usuario
    const [nomeCartao, setNomeCartao] = useState('');
    const [numero, setNumero] = useState('');
    const [cvv, setCvv] = useState('');
    const [id, setId] = useState(0);
    const [focus, setFocus] = useState('')

    const [vencimento, setVencimento] = useState('');

    const {idParam  } = useParams();

    async function alterarCartao(){
        try {
            const r = await EditarCartaoUser(idParam,nomeCartao, numero,cvv,vencimento);
            toast.dark('Cartão alterado com sucesso!', {
                icon: () =>  <img src="../lightning.png" width={35}/>
            })
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }
    
    async function carregarCartao() {
        const r = await listarCartoesPorId(idParam);
        setNomeCartao(r[0].nomeCartao);
        setNumero(r[0].numero);
        setCvv(r[0].cvv);
        setVencimento(r[0].vencimento);

        setId(r.id)
    }


    useEffect(() => {
    carregarCartao();
    },[])
    
    return(
        <main>
           <ToastContainer/>
        <header className='header'>
                <div className='sub-header-1'>
                    <Link to='/MeusCartoes'>
                        <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        />
                    </Link>
                </div>
                <div>

                </div>
                <p>Edite seu cartão</p>
            </header>
                <article className="editar-cartao">
              
                    <section className="editar-cartao-sec" >
                    <Cards
                    number={numero}
                    name={nomeCartao}
                    cvc={cvv}
                    expiry={vencimento}
                     />
                        <div className="inputs-editar-cartao">
                            <div className="align-num-nome">

                                <div className="align-input-cartao">
                                <p>Número do cartão:</p>
                                <input name="numero" value={numero} onChange={e => setNumero(e.target.value)} className='input-num-nome'/>
                                </div>
                                <div className="align-input-cartao">
                                <p>Nome registrado no cartão:</p>
                                <input name="nome" value={nomeCartao} onChange={e => setNomeCartao(e.target.value)} className='input-num-nome'/>
                                </div>
                            </div>
                            <div className="align-cvv-validade">
                              <div className="align-input-cartao">
                                <p>CVV:</p>
                                <input max={2} name="cvc" value={cvv} onChange={e => setCvv(e.target.value)}/>
                                </div>
                                <div className="align-input-cartao">
                                <p>Validade:</p>
                                <input name="validade"  value={vencimento} onChange={e => setVencimento(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <button onClick={alterarCartao}>Alterar Cartão</button>
                        </section>
                        
                        </article>

        </main>
        
    )
}