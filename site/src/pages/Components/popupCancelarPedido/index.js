import './index.scss'
import BotaoADM from '../Adm/Button/index'
import { listarPedidos, cancelarPedido } from '../../../api/adminAPI.js';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function PopUpCancelarPedido(){
    const [pedidos, setPedidos] = useState([]);
    const {id} = useParams()
    
    async function cancelarPedidoClick(){
        try{
            const pedido = await cancelarPedido(id);
        }
        catch(err){
            if(err.response){
                alert(err.response.data.erro)
            }
            else{
                alert(err.message)
            }
        }
    }

    async function carregarTodosPedidos() {
        const r = await listarPedidos();
        setPedidos(r);
    }

    useEffect(() => {
     
        carregarTodosPedidos();
    }, [])


    return(
        <main className='cancelar-pedido-popup'>
            <img src={'../assets/images/cancelar.png'}/>
            <p className='txt-cancelar'>Tem certeza de que deseja <span>cancelar</span> a entrega do pedido?</p>
            <div className='botoes-cancelar'>
            <button className='bt-nao'>Não cancelar</button>
        
            <button className='bt-sim' onClick={cancelarPedidoClick}>Cancelar</button>
            
            

            </div>
        </main>
    )
}