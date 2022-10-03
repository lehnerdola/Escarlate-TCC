import { Link, useNavigate } from "react-router-dom";
import './login.scss';
import { useRef, useState, useEffect } from "react";
import {storage} from 'local-storage'
import { loginUsuario } from "../../api/usuarioAPI.js";
import LoadingBar from "react-top-loading-bar";

import stayhome from '../../assets/images/image_processing20200408-11472-15bdle1-removebg-preview 1.png';
import logo from '../../assets/images/Captura de Tela (2).png';
import cobra from '../../assets/images/1659570118266 1.png';

export default function Login(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const ref = useRef();

  const navigate = useNavigate();

  async function entrarClick() {
    try{
      ref.current.continuousStart();
		setCarregando(true);
    const r = await loginUsuario(email,senha);

      setTimeout(() => {
				ref.current.complete();
			}, 2400);
			setTimeout(() => {
				navigate("/Feed");
			}, 3000);
      
  } catch (err){ 
    ref.current.complete();
			setCarregando(false);
    if (err.response.status === 401){
      setErro(err.response.data.erro);
    }
  }
  }

return(
 <div>
 <LoadingBar color="#b22222" ref={ref}/>

    <main className="page-login">
    <section className="sec-1-login">
        <div className="tit-login">
            <h1 className="txt-1-login">BEM VINDO, <span className='txt-align-login'>DE VOLTA</span></h1>
                   </div>
        <img src={stayhome} width={350}/>
    </section>

    <section className="sec-2-login">
       <div className="info-sec-2">
       <img src={logo} width={170}/>

       <div className='input-login-div'>
       <p className="txt-input-login">Email: <span className="cor">*</span></p>
       <input type='text' className="input-login" value={email}  onChange={e => setEmail(e.target.value)}/>
       <p className="txt-input-login">Senha: <span className="cor">*</span></p>
       <input type='password' className="input-login" value={senha}  onChange={e => setSenha(e.target.value)} />
       </div>

       <div className="div-txt-login">
        <div>        
        <p className="txt-login-div">Não se cadastrou?</p>
        <Link to='/Cadastro'> 
        <span className="login-cor">Cadastre-se</span>
        </Link>
        </div>
       <button className="bt-login-usuario" ><p className="txt-bt-login-usuario" onClick={entrarClick}>Login</p></button>

       </div>
       <p>{erro}</p>

       </div> 
    <div className='div-adm-login'>
    <img src={cobra} className='img-cobra'/>
    <Link to='/LoginADM'>
    <p className='txt-login-div'>Sou <span className='login-cor'>Adm</span></p>
    </Link>
    </div>   
    </section>
 </main>
 </div>
)
}