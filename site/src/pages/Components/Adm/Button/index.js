import './index.scss'
import { motion } from 'framer-motion'

export default function BotaoADM(props){
    return(
        <div onClick={props.click}>
            <motion.button className='botao-adm'
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            ><p>{props.nome}</p></motion.button>
        </div>
    )
}