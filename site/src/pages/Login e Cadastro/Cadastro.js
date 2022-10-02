import { Link } from "react-router-dom";
import './index.scss'
import '../../Common.scss';

import { cadastrarUsuario } from "../../api/usuarioAPI.js";

import stayhome from '../../assets/images/image_processing20200408-11472-15bdle1-removebg-preview 1.png';
import logo from '../../assets/images/Captura de Tela (2).png';
import cobra from '../../assets/images/1659570118266 1.png'
import { useState } from "react";

export default function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');

    async function SalvarClick(){
        try {
            const r = await cadastrarUsuario(nome,email,senha);
            alert('cadastro efetuado com sucesso')
        } catch (err) {
            alert(err.response.data.erro);
        }
    }

return(
 <main className="page-cadastro">
    <section className="sec-1-cad">
        <div className="tit-cad">
            <h1 className="txt-1-cad">BEM VINDO</h1>
            <p className="txt-2-cad">Cadastre-se e venha descobrir 
                uma única e nova realidade, 
                feito especialmente para conectar 
                você ao seu ídolo!
            </p>
        </div>
        <img src={stayhome} width={350}/>
    </section>

    <section className="sec-2-cad">
       <div className="info-sec-2">
       <img src={logo} width={170}/>

       <div className='input-cad-div'>
       <p className="txt-input-cad" >Nome: <span className="cor">*</span></p>
       <input type='email' className="input-cad"value={nome} onChange={e => setNome(e.target.value)}/>
       <p className="txt-input-cad">Email: <span className="cor">*</span></p>
       <input type='text' className="input-cad" value={email} onChange={e => setEmail(e.target.value)}/>
       <p className="txt-input-cad">Senha: <span className="cor">*</span></p>
       <input type='password' className="input-cad" value={senha} onChange={e => setSenha(e.target.value)}/>
       </div>

       <div className="div-txt-cad">
        <div>        
        <p className="txt-cad-div">Já sou do rock!</p>
        <span className="cad-cor">Login</span>
        </div>
       <button className="bt-cadastro-usuario" onClick={SalvarClick}><p className="txt-bt-cad-usuario">Cadastre-se</p></button>

       </div>

       </div> 
    <img src={cobra} className='img-cobra'/>
    </section>
 </main>
)
}