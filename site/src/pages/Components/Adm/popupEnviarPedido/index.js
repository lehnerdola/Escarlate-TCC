
import './index.scss'

export default function PopUpEnviarPedido({item:{idPedidoItem}}){


    return(
        <main className='enviar-pedido-popup'>
            <img src={'../assets/images/Group 69.png'}/>
            <p className="txt-popup-pedido">Pedido <span>enviado</span> com sucesso!</p>
        </main>
    )
}