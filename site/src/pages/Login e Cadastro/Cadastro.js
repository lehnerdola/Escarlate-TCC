import { Link } from "react-router-dom";
import './index.scss'
import '../../Common.scss';
import { cadastrarUsuario } from "../../api/usuarioAPI.js";
import { useState, useRef } from "react";
import {toast, ToastContainer} from 'react-toastify'
import {motion} from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from "react-top-loading-bar";

export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const [icon, setIcon] = useState('/assets/images/icons8-ocultar-30.png');
    const [type, setType] = useState('password');
    const [isopen, setIsopen] = useState(false);

    const variants = {
        open: {opacity: [0,1], y:[-1,0], duration:1},
        closed:{opacity: [0,1], y:[2,0]}
    }
    
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

    const ref = useRef();

    async function SalvarClick(){
        try {
            const r = await cadastrarUsuario(nome,email,senha);
            toast.dark('cadastro efetuado com sucesso')
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

return(
 <main className="page-cadastro">
     <LoadingBar color="#b22222" ref={ref} />
    <ToastContainer/>
    <section className="sec-1-cad">
        <div className="tit-cad">
            <h1 className="txt-1-cad">BEM VINDO, </h1>
            <p className="txt-2-cad">Cadastre-se e venha descobrir 
                uma única e nova realidade, 
                feito especialmente para conectar 
                você ao seu ídolo!
            </p>
        </div>
        <img src={'../../assets/images/image_processing20200408-11472-15bdle1-removebg-preview 1.png'} width={550}/>
    </section>

    <section className="sec-2-cad">
       <div className="info-sec-2">
       <img src={'../../assets/images/Captura de Tela (2).png'} width={170}/>

       <div className='input-cad-div'>
       <p className="txt-input-cad" >Nome: <span className="cor">*</span></p>
       <input type='email' className="input-cad"value={nome} onChange={e => setNome(e.target.value)}/>
       <p className="txt-input-cad">Email: <span className="cor">*</span></p>
       <input type='email' className="input-cad" value={email} onChange={e => setEmail(e.target.value)}/>
       <p className="txt-input-cad">Senha: <span className="cor">*</span></p>
       <input className="input-cad" required="required" type={type} id="pass" value={senha}  onChange={e => setSenha(e.target.value)}/>
       <motion.img src={icon} onClick={handleToogle}className='ssconf-olho'  animate={isopen ? "open" : "closed"} variants={variants} width={26}/> 

       </div>

       <div className="div-txt-cad">
        <div>        
        <p className="txt-cad-div">Já sou do rock!</p>
        <Link to='/login'> 
        <span className="cad-cor">Login</span>
        </Link>
        </div>
       <button className="bt-cadastro-usuario" onClick={SalvarClick}><p className="txt-bt-cad-usuario">Cadastre-se</p></button>

       </div>

       </div> 
    <img src={'../../assets/images/1659570118266 1.png'} className='img-cobra'/>
    </section>
 </main>
)
}