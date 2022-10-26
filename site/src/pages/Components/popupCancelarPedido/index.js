import './index.scss'
import BotaoADM from '../Adm/Button/index'
import { useState } from 'react';

export default function PopUpCancelarPedido(){
    const [modal, setModal] = useState(false);


    return(
        <main className='enviar-pedido'>
            <img src={'../assets/images/cancelar.png'}/>
            <p className="txt-popup-pedido">Tem certeza de que deseja <span>cancelar</span> o pedido 1?</p>
            <div>
            <button>Não</button>
            <button>Sim</button>
            </div>
        </main>
    )
}