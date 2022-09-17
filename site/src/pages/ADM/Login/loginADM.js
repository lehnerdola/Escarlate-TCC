import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import './loginADM.scss'
import { Logar } from "../../../api/adminAPI.js";
import LoadingBar from 'react-top-loading-bar';
import {motion} from 'framer-motion';

import Imgvisbile from '../../../assets/images/icons8-visível-30.png';
import Imgoff from '../../../assets/images/icons8-ocultar-30.png';
import abelha from '../../../assets/images/belha sem fundo 1.png';
import logo from '../../../assets/images/Captura de Tela (2).png'


import storage from 'local-storage';

 
export default function LoginADM(){

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [icon, setIcon] = useState(Imgoff);
    const [type, setType] = useState('password');
    const [isopen, setIsopen] = useState(false);

    const variants = {
        open: {opacity: [0,1], y:[-1,0], duration:1},
        closed:{opacity: [0,1], y:[2,0]}
    }

    const handleToogle=() => {
        if(type=== "password"){
            setIcon(Imgvisbile)
            setType('text')
            setIsopen(true)
        }
        else{
            setIcon(Imgoff)
            setType('password')
            setIsopen(false)
        }
    }
   
    const navigate = useNavigate();
    const ref = useRef();

    async function entrarClick(){
       ref.current.continuousStart();
        setCarregando(true);
        try {
            
            const r = await Logar(cpf,senha)
            storage('adm-logado', r)
            
            setTimeout(() => {
                ref.current.complete();
            }, 2400);

            setTimeout(() => {
                navigate('/cadProduto');
            }, 1000);
         }
            
        catch (err) {
            ref.current.complete();
            setCarregando(false);

            if(err.response.status === 401){
                setErro(err.response.data.erro)
            }
        }
    }

return(
 <div>
    <LoadingBar color="#b22222" ref={ref}/>

    <nav className="f1-loginADM">

        <div className="login">

        <img src={abelha}width={400}/>

        <div className="infos">

            <img className="logo" src={logo} width={200} height={60} />
            <div>
            <form>
            <p className="info-adm">CPF:</p>
            <input className="input-adm" required="required" type="text" value={cpf} onChange={e => setCpf(e.target.value)}/>
            <p className="info-adm" >Senha:</p>
            <input className="input-adm"  required="required" type={type} id="pass" value={senha}  onChange={e => setSenha(e.target.value)}/>
             <motion.img src={icon} onClick={handleToogle}className='conf-olho'  animate={isopen ? "open" : "closed"} variants={variants}/> 
            </form>    
            </div>
            <button className="botao-login-adm">
                <p className="bt-login-adm" onClick={entrarClick} >Login</p>
            </button>
                <p className="txt-erro-login-adm">{erro}</p>
                
        </div>

        </div>

    </nav>
 </div>
)
}