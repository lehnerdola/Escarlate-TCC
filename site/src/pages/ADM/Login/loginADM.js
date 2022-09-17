import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import './loginADM.scss'
import { Logar } from "../../../api/adminAPI.js";
import LoadingBar from 'react-top-loading-bar'

import storage from 'local-storage';

export default function LoginADM(){

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    
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

        <img src="./images/belha sem fundo 1.png" width={400}/>

        <div className="infos">

            <img className="logo" src="./images/Captura de Tela (2).png" width={200} height={60} />
            <div>
            <p className="info-adm">CPF:</p>
            <input className="input-adm" required="required" type="email" value={cpf} onChange={e => setCpf(e.target.value)}/>
            <p className="info-adm">Senha:</p>
            <input className="input-adm"  required="required" type="ássword" value={senha} onChange={e => setSenha(e.target.value)}/>

            </div>
            <button className="botao-login-adm">
                <p className="bt-login-adm" onClick={entrarClick}>Login</p>
            </button>
                {erro}
        </div>

        </div>

    </nav>
 </div>
)
}