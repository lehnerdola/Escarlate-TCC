import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './index.scss'

export default function PopUp(props){
    
    return(
        <main className='pop-up'>
            <img src={`http://localhost:5000/${props.produto.imagem}`}/>
            <div className="align-itens-popup">

            <h1 className="nome-prod-popup">{props.produto.nome}</h1>
            <div className="align-itens-2-popup">
            <div className="align-itens-3-popup">
            <h2 >R${props.produto.preco}</h2>
            <h2>Quantidade:</h2>    
            </div>
            <p>{props.produto.disponivel ? 'Disponivel!': 'Esgotado'}</p>
            </div>
            <div className="borda"/>
            <div>
            <h3 className="align-itens-4-pop-up">Descrição do produto:</h3>
            <p>Tamanho(s): {props.produto.tamanho}</p>
            <p>Artista: {props.produto.artista}</p>
            </div>
            <div className="align-itens-5-popup">
            <button>Adicionar ao carrinho</button>
            <button>Comprar</button>
            </div>
            </div>

        </main>
    )
}