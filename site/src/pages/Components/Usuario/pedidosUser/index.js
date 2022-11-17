import BotaoADM from '../../Adm/Button'
import { motion } from 'framer-motion'
import storage from 'local-storage';
import { useState, useEffect } from 'react';
import './index.scss'
import { ListarPedidosUsuario,cancelarPedido} from '../../../../api/usuarioAPI';
import Menu from '../menuMinhaConta';
import { buscarPorId } from '../../../../api/adminAPI';
import { toast, ToastContainer } from 'react-toastify';

export default function PedidosUser() {
    const [pedido, setPedido] = useState([]);
    const [produto, setProduto] = useState([]);
    const id = storage('cliente-logado').id_usuario

    async function CarregarPedidos(){
        const resp = await ListarPedidosUsuario(id)
        setPedido(resp)
    }

    async function cancelarCompraClick(id) {
        const pedido = await cancelarPedido(id);
        CarregarPedidos();
        toast.success('Compra cancelada!')
    }


    async function CarregarInfoProduto(id){
        const resp = await buscarPorId(id)
        setProduto(resp)
    }

    useEffect(()=>{
        CarregarPedidos();
        CarregarInfoProduto();
    }, [])

    return (
        <nav className='meuspedis'>
        <ToastContainer/>
        {pedido.map (item =>

        <div className="info-pedido">
    
                
         <div className='align-img-pedido'>   
         <img src={`http://localhost:5000/${item.imagem}`}/>

         <div className='img-pedido'>
            <p>{item.nomeProduto}</p>
            <div>
            <p>Ver informações do produto:</p>
            {produto.map (item =>
                <p>{item.info.preco}</p>
                )}
            </div>
            
         </div>
         
         </div>
         <div className="align-itens-pedidos-user">
         <div className='txt-cardcart'>
         <div className='situacao-pedido'>
         <p className='txt-conf'>Situação do pedido:</p>
         <p className='txt-conf-pedidos'>{item.statusPedido}</p>
         </div>
         <div className='cod-notafiscal'>
         <p className='txt-conf'>Código da nota fiscal:</p>
         <p className='txt-conf-pedidos'>{item.notaFiscal}</p>
         </div>   
         <div className='valor-compra'>
         <p className='txt-conf'>Valor da compra:</p>
         <p className='txt-conf-pedidos'>R$50,00</p>
         </div>   
         </div>
         <div  onClick={() => cancelarCompraClick(item.idPedido)}>
         <motion.button className='bt-cancelar-compra'
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
          Cancelar compra
         </motion.button>
         </div>
  
         </div>
         
         </div>
         )}



         </nav>
    )
}