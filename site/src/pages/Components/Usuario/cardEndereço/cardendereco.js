import { useEffect, useState } from "react";
import { listarEnderecos, removerEndereco } from "../../../../api/usuarioAPI";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function CardEndereco({ item:{id,nomeRemetente, estado, cidade, bairro, blocoapt, logradouro,complemento,numeroEndereco,numeroCep} }){
    
    const [enderecos, setEnderecos] = useState([]);

    async function deletarEndereco(id) {
	const resposta = await removerEndereco(id);
	carregarEnderecos();
	toast.success("Endereço removido!");
}


    async function carregarEnderecos(){
    const id =Storage('cliente-logado').id_usuario;
    const r = await listarEnderecos(id);
    setEnderecos(r)
  }

    useEffect(() => {
        carregarEnderecos();
    },[])

    return(
        <div>
        <ToastContainer/>
        <div className='meus-enderecos'>
        <div onClick={() => deletarEndereco(id)}> 
        <img src={'../assets/images/trash.png'} width={30} />
        <p></p>    
        </div>
        <h1>{nomeRemetente}</h1>
        <p>{estado}</p>
        <p>{cidade}</p>
        <p>{bairro}</p>
        <p>{logradouro}</p>
        </div>
        </div>
    )
}