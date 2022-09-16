import { Link } from "react-router-dom";

import './loginADM.scss'

export default function LoginADM(){

return(
 <div>
    <nav className="f1-loginADM">

        <div className="login">

        <img src="./images/belha sem fundo 1.png" width={400}/>

        <div className="infos">

            <img className="logo" src="./images/Captura de Tela (2).png" width={200} height={60} />
            <div>
            <p className="info-adm">CPF:</p>
            <input className="input-adm"/>
            <p className="info-adm">Senha:</p>
            <input className="input-adm"/>

            </div>
            <button className="botao-login-adm">
                <p className="bt-login-adm">Login</p>
            </button>

        </div>

        </div>

    </nav>
 </div>
)
}