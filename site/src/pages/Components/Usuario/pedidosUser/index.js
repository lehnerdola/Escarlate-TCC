import BotaoADM from '../../Adm/Button'
import { motion } from 'framer-motion'
import './index.scss'

export default function PedidosUser() {
    return (
        <nav className="nav-pedidos-itens">
        <div className="info-pedido">
         <div className='align-img-pedido'>   
         <img src='../assets/images/CANECA-removebg-preview 1.png'/>

         <div className='img-pedido'>
            <p>Caneca Metallica 450ml</p>
         <p>Ver informações do produto:</p>
         </div>
         
         </div>
         <div className="align-itens-pedidos-user">
         <div className='txt-cardcart'>
         <div className='situacao-pedido'>
         <p className='txt-conf'>Situação do pedido:</p>
         <p className='txt-conf-pedidos'>Aguardando pagamento!</p>
         </div>
         <div className='cod-notafiscal'>
         <p className='txt-conf'>Código da nota fiscal:</p>
         <p className='txt-conf-pedidos'>0205050</p>
         </div>   
         <div className='valor-compra'>
         <p className='txt-conf'>Valor da compra:</p>
         <p className='txt-conf-pedidos'>R$50,00</p>
         </div>   
         </div>
         <motion.button className='bt-cancelar-compra'
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
        >
          Cancelar compra
         </motion.button>

         </div>
         </div>
         </nav>
    )
}