
import './index.scss'

export default function PopUpEnviarPedido({item:{idPedidoItem}}){


    return(
        <main className='enviar-pedido'>
            <img src={'../assets/images/Group 69.png'}/>
            <p className="txt-popup-pedido">Pedido enviado com sucesso!</p>
        </main>
    )
}