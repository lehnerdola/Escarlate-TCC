import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {Link, useNavigate} from 'react-router-dom'

import './index.scss';
import '../../../Common.scss';

import logo from '../../../assets/images/Captura de Tela (2).png'
import CardHome from '../../Components/Adm/CardHome';
import queen from '../../../assets/images/Queen.jpg';
import album from '../../../assets/images/Screenshot_20220806-195359-947 3.png';
import perfil from '../../../assets/images/1659575103611 1.png';
import produtos from '../../../assets/images/🦆 icon _box seam_.png';

import sair from '../../../assets/images/Vector.png';

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
                <h1 className='tit-tela-inicial-adm'>Seja bem-vindo! </h1>
            
            <div className='cards-adm'>
                
                <CardHome img={queen} nome='Visualizar Artistas' />
                <CardHome img={album} nome='Visualizar Músicas' />
                <CardHome img={perfil} nome='Visualizar Clientes'/>
                <CardHome nome='Visualizar Pedidos'/>
                <Link to='/Produtos' className='conf-card-produto'>
                <CardHome img={produtos} nome='Visualizar Produtos'/>
                </Link> 
            </div>
            </div>
           
          
        </div>
    )
}