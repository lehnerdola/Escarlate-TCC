import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Storage from 'local-storage'
import './index.scss'
import { buscarPorId } from "../../../../api/adminAPI";
import BotaoADM from "../../Adm/Button";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function PopUp(props){

    const [produto, setProduto] = useState({info: {}})
   
    const {id} = useParams();

    async function carregarPagina(){
        const r = await buscarPorId(id) 
        setProduto(r)
    }

    useEffect(() => {
        carregarPagina()
    }, [])
  
    function adicionarAoCarrinho(){
        let carrinho = [];
        console.log(carrinho)
        if(Storage('carrinho')){
            carrinho = Storage('carrinho')
        }
        console.log(carrinho)
        

        if(!carrinho.find(item => item.id === id)){
            carrinho.push({
                id: id,
                quantidade: 1

            })
            
          
            Storage('carrinho', carrinho);
            toast.success('🛒 Item adicionado ao carrinho')
            
        }
    }
    
    
    return(
        <main className='pop-up' >
            <ToastContainer/>
            <img src={`http://localhost:5000/${produto.info.imagem}`} className='img-popup'/>
            <div className="align-itens-popup">

            <h1 className="nome-prod-popup">{produto.info.nome}</h1>
            <div className="align-itens-2-popup">
            <div className="align-itens-3-popup">
            <h2 >R${produto.info.preco}</h2>
           
            </div>
            <p>{produto.info.disponivel ? 'Disponivel!': 'Esgotado'}</p>
            </div>
            <div className="borda"/>
            <div>
            <h3 className="align-itens-4-pop-up">Descrição do produto:</h3>
            <p>Tamanho(s): {produto.info.tamanho}</p>
            <p>Artista: {produto.info.nomeartista}</p>
            </div>
            <div className="align-itens-5-popup">
            <div onClick={adicionarAoCarrinho}>
            <BotaoADM nome='Adicionar ao carrinho'/>
          </div>
            <div>
            <BotaoADM nome='Comprar'/>
            </div>
            </div>
            </div>

        </main>
    )
}