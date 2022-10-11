import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopUp(props){
    
    return(
        <div>
            <h1 >{props.produto.nome}</h1>
            <h2 >{props.produto.preco}</h2>

        </div>
    )
}