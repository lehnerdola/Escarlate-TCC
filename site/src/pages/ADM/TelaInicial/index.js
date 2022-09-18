import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import './index.scss';
import logo from '../../../assets/images/Captura de Tela (2).png'
import CardHome from '../../Components/Adm/CardHome';
import queen from '../../../assets/images/Queen.jpg'
import sair from '../../../assets/images/Vector.png'

export default function TelaInicial(){

    const navigate = useNavigate();

    const[movimento,setMovimento] = useState(0)

    const movimentoOn= () =>{
        setMovimento(movimento === 0 ? 20 : 0)
    }

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/LoginADM')
    }

    useEffect(() => {
        if(!storage('adm-logado')){
            navigate('/LoginADM')
        }
    }, [])

    return(
        <div className='tela-inicial-adm'>

            <div className='menu-adm'>
                <img src={logo} width={150} className='logo-conf'/>
                <motion.img 
                 onClick={sairClick} src={sair} className='exit-icon'
                 whileHover={{ scale: 1.2 }}
                 onHoverStart={e => {}}
                 onHoverEnd={e => {}}
                />
            </div>
            <div>
                <h1 className='tit-tela-inicial-adm'>Seja bem-vindo (nome)! </h1>
            
            <div className='cards-adm'>
                
                <CardHome img={queen} nome='Visualizar Artistas' />
                <CardHome img={queen} nome='Visualizar Músicas'/>
                <CardHome img={queen} nome='Visualizar Clientes'/>
                <CardHome img={queen} nome='Visualizar Pedidos'/>
            </div>
            </div>
           
          
        </div>
    )
}