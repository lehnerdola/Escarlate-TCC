import { useEffect, useState } from "react";
import { listarEnderecos, removerEndereco } from "../../../../api/usuarioAPI";
import './index.scss';
import {toast, ToastContainer} from 'react-toastify'
import Storage from 'local-storage'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function CardEndereco({ item:{id,nomeRemetente, estado, cidade, bairro, blocoapt, logradouro,complemento,numeroEndereco,numeroCep},  selecionar, selecionado}){
    
    const [enderecos, setEnderecos] = useState([]); 

    async function carregarEnderecos(){
    const id = Storage('cliente-logado').id_usuario;
    const r = await listarEnderecos(id);
    setEnderecos(r)
  }

  const navigate = useNavigate();
      
  function abrirInfo(id){
    navigate('/Pagamento/' + id)
}

    useEffect(() => {
        carregarEnderecos();
    },[])

    return(
        <main className="align-endereços">
            <ToastContainer/>

        <div onClick={() => selecionar(id)} className='meus-enderecos' style={{borderColor: selecionado ? '#ff8279' :'#A83F37' }} >
        <div  >
        <div> 
        </div>


        <h1>{nomeRemetente}</h1>
        <p>{estado}</p>
        <p>{cidade}</p>
        <p>{bairro}</p>
        <p>{logradouro}</p>
        </div>
        </div>


        </main>
    )
}