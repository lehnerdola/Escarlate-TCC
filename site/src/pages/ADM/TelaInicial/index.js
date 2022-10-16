import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {Link, useNavigate} from 'react-router-dom'

import './index.scss';
import '../../../Common.scss';
import CardHome from '../../Components/Adm/CardHome';

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
                <img src={'../../../assets/images/Captura de Tela (2).png'} width={150} className='logo-conf'/>
                <motion.img 
                 onClick={sairClick} src={'../../../assets/images/Vector.png'} className='exit-icon'
                 whileHover={{ scale: 1.2 }}
                 onHoverStart={e => {}}
                 onHoverEnd={e => {}}
                />
            </div>
            <div>
                <h1 className='tit-tela-inicial-adm'>Seja bem-vindo! </h1>
            
            <div className='cards-adm'>
                <Link to='/TodosArtistas'>
                <CardHome img={'../../../assets/images/Queen.jpg'} nome='Visualizar Artistas' />
                </Link>
                <Link to='/HitsDoMomento'>
                <CardHome img={'../../../assets/images/Screenshot_20220806-195359-947 3.png'} nome='Visualizar Músicas' />
                </Link>
                <CardHome img={'../../../assets/images/1659575103611 1.png'} nome='Visualizar Clientes'/>
                <CardHome nome='Visualizar Pedidos'/>
                <Link to='/Produtos' className='conf-card-produto'>
                <CardHome img={'../../../assets/images/🦆 icon _box seam_.png'} nome='Visualizar Produtos'/>
                </Link> 
            </div>
            </div>
           
          
        </div>
    )
}