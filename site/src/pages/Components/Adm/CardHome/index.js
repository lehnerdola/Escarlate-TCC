import './index.scss'
import { motion } from 'framer-motion'

export default function CardHome(props){
    return(
        <motion.div className="card-home" 
        whileHover={{borderColor:'#89221b',border:2, scale:1.1} }    
        >
            <img src={props.img} className='conf-img-card'/>
            <p className='txt-card-adm'>{props.nome}</p>
        </motion.div>
    )

}