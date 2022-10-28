import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pedidofinal.scss';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Rodape from '../Components/Usuario/Rodape';

export default function PedidoFinal(){



    return(
        <main className="pagamentofinal">
         <header className='header'>
             <div className='sub-header-1'>
                <Link to='/Feed'>
                <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                whileHover={{ scale: 1.1}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                />
                </Link>
             </div>  
                <div>
                    <p className='pagamento-name'>Pagamento finalizado</p>
                </div>

             </header>
             <div>
                <h4 className='msg'>
                    Parabéns seu pedido foi finalizado com sucesso!
                </h4>
             </div>
                <div className='rodape'>        
                <footer>
                <Rodape />
                </footer>
                </div>  

             </main>
    )

    
}

