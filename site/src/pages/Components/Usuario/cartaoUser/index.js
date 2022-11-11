import './index.scss'
import Cards from 'react-credit-cards'
import { useEffect, useState } from 'react'
import { listarCartoes, removerCartao } from '../../../../api/usuarioAPI'
import storage from 'local-storage'
import {toast, ToastContainer} from 'react-toastify';
import BotaoADM from "../../../Components/Adm/Button";
import { Link, useNavigate } from 'react-router-dom'

export default function CartaoCard() {
    const [cartao, setCartao] = useState([])

    const navigate = useNavigate();

    async function VerCartoes() {
        if (storage('cliente-logado')) {
            const id = storage('cliente-logado').id_usuario
            const resposta = await listarCartoes(id)
            setCartao(resposta)
        }
    }

    function alterarCartao(id){
        navigate(`/Editarcartao/${id}`)
    }

    async function deletarCartao(id) {
        const resposta = await removerCartao(id);
        VerCartoes();
        toast.success("🔥 Cartão " + " removido!");
    }
    
    useEffect(() => {
        VerCartoes();
    }, [])

    return (
<main>
    <ToastContainer/>
     {cartao.map(item =>
        <nav className="div-cartao">
            <div className="ifos-cartao">
                <div className="align-itens-cartao">
                        <Cards
                            number={item.numero.substr(0, 4)}
                            name={item.nomeCartao}
                            cvc={item.cvv}
                            expiry={item.vencimento}
                        />
                </div>
                <div className='BT-CARD'>
                    <div onClick={() => alterarCartao(item.id)}>
                     <Link to ='/EditarCartao'>
                    <BotaoADM nome='EDITAR CARTÃO'/>
                    </Link>   
                    </div>
                    <div onClick={() => deletarCartao(item.id)}>
                    <BotaoADM nome='EXCLUIR CARTÃO'/>
                    </div>
                
                </div>
                
            </div>
            
        </nav>
            )}
        </main>

    )
}