import './index.scss'
import BotaoADM from '../Adm/Button/index'
import { listarPedidos, cancelarPedido } from '../../../api/adminAPI.js';
import { useState,useEffect } from 'react';

export default function PopUpCancelarPedido(){
    const [pedidos, setPedidos] = useState([]);

    async function cancelarPedidoClick(id){
        const pedido = await cancelarPedido(id);
        carregarTodosPedidos();
    }

    async function carregarTodosPedidos(){
            const r = await listarPedidos();
            setPedidos(r);
   }

    useEffect(() =>{
        carregarTodosPedidos();
    },[])

    return(
        <main className='cancelar-pedido-popup'>
            <img src={'../assets/images/cancelar.png'}/>
            <p className='txt-cancelar'>Tem certeza de que deseja <span>cancelar</span> a entrega do pedido?</p>
            <div className='botoes-cancelar'>
            <button className='bt-nao'>Não cancelar</button>
            {pedidos.map (item =>
            <button className='bt-sim' onClick={() => cancelarPedidoClick(item.idPedido)}>Cancelar</button>
            )}

            </div>
        </main>
    )
}