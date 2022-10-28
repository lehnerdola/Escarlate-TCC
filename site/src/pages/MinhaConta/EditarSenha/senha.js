import { Link } from "react-router-dom"
import BotaoADM from '../../Components/Adm/Button/index.js'
import Menu from "../../Components/Usuario/menuMinhaConta/index.js"
import { AltSenha } from "../../../api/usuarioAPI.js"
import { motion } from "framer-motion"
import Storage from 'local-storage'
import './senha.scss'
import { useState } from "react"
import { ToastContainer ,toast } from "react-toastify"

export default function Senha(){

    const [senha, setSenha] = useState();
    const [senhaNova, setSenhaNova] = useState();
    const [icon, setIcon] = useState('/assets/images/icons8-ocultar-30.png');
    const [type, setType] = useState('password');
    const [isopen, setIsopen] = useState(false);

    const handleToogle=() => {
        if(type=== "password"){
            setIcon('/assets/images/icons8-visível-30.png')
            setType('text')
            setIsopen(true)
        }
        else{
            setIcon('/assets/images/icons8-ocultar-30.png')
            setType('password')
            setIsopen(false)
        }
    }

    const variants = {
        open: {opacity: [0,1], y:[-1,0], duration:1},
        closed:{opacity: [0,1], y:[2,0]}
    }
    
    async function AlterarSenha(){
        try {
            let id = Storage('cliente-logado').id_usuario
            await AltSenha(id, senha, senhaNova)
            toast.success('senha alterada')
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    return(
        <main className='div-conta'>
        <ToastContainer/>
        <header className='header'>
         <div className='sub-header-1'>
         <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
         <h2 className='nome-page'>Minha Conta</h2>
         </div>   
         <div>
        
         </div>
         <div className='sub-header-2'>
            <Link to='/Carrinho'>
            <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
            </Link>
         </div>
    </header>

    <nav className='div-editar-conta' >
        <Menu/>          
        <div className='informacao-usuario-editar-senha'>
            <div className='alig-itens-usuario'>
            <p className='usuario'>Senha atual:<span style={{color:'#A83F37'}}>*</span></p>
            <input  className='input' type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
            <p className='usuario'>Nova senha:<span style={{color:'#A83F37'}}>*</span></p>
            <input  className='input' value={senhaNova} onChange={e => setSenhaNova(e.target.value)} required="required" type={type} id="pass"/>
            <motion.img src={icon} onClick={handleToogle}className='conf-olho-senha'  animate={isopen ? "open" : "closed"} variants={variants}/> 

            </div>
            <div className='botao' onClick={AlterarSenha}>
            <BotaoADM nome='Salvar alterações'/>
            </div>
            
        </div>

    </nav>
    </main>
    )
}