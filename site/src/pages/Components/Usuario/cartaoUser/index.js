import './index.scss'
import Cards from 'react-credit-cards'
import { useEffect, useState } from 'react'
import { listarCartoes, removerCartao } from '../../../../api/usuarioAPI'
import storage from 'local-storage'
import {toast, ToastContainer} from 'react-toastify';
import BotaoADM from "../../../Components/Adm/Button";

export default function CartaoCard() {
    const [cartao, setCartao] = useState([])

    async function VerCartoes() {
        if (storage('cliente-logado')) {
            const id = storage('cliente-logado').id_usuario
            console.log(id)
            const resposta = await listarCartoes(id)
            setCartao(resposta)
        }
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
                    <div>
                    <BotaoADM nome='EDITAR CARTÃO'/>
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