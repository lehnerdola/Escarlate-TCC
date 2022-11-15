import { Link, useNavigate } from "react-router-dom";
import './login.scss';
import { useRef, useState, useEffect } from "react";
import Storage from 'local-storage'
import { loginUsuario } from "../../api/usuarioAPI.js";
import LoadingBar from "react-top-loading-bar";
import {motion} from 'framer-motion';


export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [icon, setIcon] = useState('/assets/images/icons8-ocultar-30.png');
  const [type, setType] = useState('password');
  const [isopen, setIsopen] = useState(false);

  const [carregando, setCarregando] = useState(false);
  

  const navigate = useNavigate();
  const ref = useRef();

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

  async function entrarClick() {
    ref.current.continuousStart();
    setCarregando(true);
    try {
     
      const r = await loginUsuario(email, senha);
      Storage('cliente-logado', r)

      setTimeout(() => {
        navigate("/Feed");
      }, 3000);

    } catch (err) {
      ref.current.complete();
      setCarregando(false);
      if (err.response.status === 401) {
        setErro(err.response.data.erro);
      }
    }
  }

 

  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const btn = document.querySelector("#send");
      btn.click();
    }
  })

  return (
    <div>
      <LoadingBar color="#b22222" ref={ref} />

      <main className="page-login">
        <section className="sec-1-login">
          <div className="tit-login">
            <h1 className="txt-1-login">BEM VINDO, <span className='txt-align-login'>DE VOLTA</span></h1>
          </div>
          <img className="sthm" src={'../../assets/images/image_processing20200408-11472-15bdle1-removebg-preview 1.png'} width={440} />
        </section>

        <section className="sec-2-login">
          <div className="info-sec-2">
            <img className="logo-login" src={'../../assets/images/Captura de Tela (2).png'} width={170} />

            <div className='input-login-div'>
              <p className="txt-input-login">Email: <span className="cor">*</span></p>
              <input type='text' className="sinput-login" value={email} onChange={e => setEmail(e.target.value)} />
              <p className="txt-input-login">Senha: <span className="cor">*</span></p>
              <input className="sinput-login"  required="required" type={type} id="pass" value={senha}  onChange={e => setSenha(e.target.value)}/>
              <motion.img src={icon} onClick={handleToogle}className='sconf-olho'  animate={isopen ? "open" : "closed"} variants={variants} width={26}/> 
            </div>

            <div className="div-txt-login">
              <div>
                <p className="txt-login-div">Não se cadastrou?</p>
                <Link to='/Cadastro'>
                  <span className="login-cor">Cadastre-se</span>
                </Link>
              </div>
              <button className="bt-login-usuario" onClick={entrarClick}  disabled={carregando}><p className="txt-bt-login-usuario" id='send'>Login</p></button>

            </div>
            <p>{erro}</p>

          </div>
          <div className='div-adm-login'>
            <img src={'../../assets/images/1659570118266 1.png'} className='img-cobra' />
            <Link to='/LoginADM'>
              <p className='txt-login-div-adm'>Sou <span className='login-cor-adm'>Adm</span></p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}