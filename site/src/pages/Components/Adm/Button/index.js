import './index.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function BotaoADM(props){

    return(
        <div >
            <motion.button className='botao-adm'
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            ><p>{props.nome}</p></motion.button>
        </div>
    )
}