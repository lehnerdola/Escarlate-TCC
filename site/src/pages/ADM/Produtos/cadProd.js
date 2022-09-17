import storage from 'local-storage';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export default function CadProduto(){

    const navigate = useNavigate();

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
        <div>
           <h1>aaaaaaaaaa</h1>
           <button onClick={sairClick}>SAIR</button>
        </div>
    )
}