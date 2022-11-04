import './index.scss'
import Cards from 'react-credit-cards'
import { useEffect, useState } from 'react'
import { listarCartoes } from '../../../../api/usuarioAPI'
import storage from 'local-storage'
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

    useEffect(() => {
        VerCartoes();
    }, [])
    return (
<main>
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


            </div>
        </nav>
                    )}
        </main>

    )
}