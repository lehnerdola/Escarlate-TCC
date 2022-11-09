import { Navigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify"
import './index.scss'

export default function FinalPagamento(){

    return (
        <main className="finalizacao">
            <ToastContainer />

            <header className='header'>
                <div className='sub-header-1'>
                    <Link to='/Feed'>
                        <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        />
                    </Link>
                </div>
                <div>

                </div>
                <p>Pagamento finalização</p>
            </header>
        <div className="ass">
            <h1>Pagamento finalizado com sucesso!</h1>
            <Link to='/Feed'>
            <img className="img" src={'/assets/images/beijafloo.png'} width={600} />
            </Link>
            
            </div>
        </main>
    )
        
    
}