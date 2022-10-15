import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import { Navigate, useNavigate } from "react-router-dom";
import { todosProdutos, removerProduto } from "../../../../api/adminAPI.js";
import { Link } from "react-router-dom";
import './index.scss'
import { useState, useEffect } from "react";
import {confirmAlert} from 'react-confirm-alert';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Produtos(){

    const navigate = useNavigate();

    const [produtos, setProdutos]= useState([]);

    async function carregarTodosProdutos() {
        const resp = await todosProdutos();
        setProdutos(resp);
    }

    useEffect(() => {
        setTimeout(() => {
            carregarTodosProdutos();
        })
    }, []);

    async function editarProduto(id){
        navigate(`/alterar/${id}`)
    }

    async function deletarProduto(id, nome) {
		const resposta = await removerProduto(id, nome);
			carregarTodosProdutos();
			toast.success("🔥 Produto " + nome + " removido!");
}


    return(
        <div>
        <MenuADM/>
        <ToastContainer/>

        <div className='produtos-adm'>
            

            <div className='content-produtos-adm'>

                <div className="align-itens-produtos">
                <h1 className='tit-produtos'>Todos os Produtos</h1>
                <Link to='/CadProdutos' >
                <BotaoADM nome='Adicionar Novo Produto' />
                </Link>
                </div>
                
                {produtos.map(item =>
                <div className="conf-card">
                <div className='cardpah'>
                <img src={`http://localhost:5000/${item.imagem}`} width={170}/>
                <div className='txt-cardpah'>
                <p className='txt-conf-cardpah'>{item.nome}</p>
                <p className='txt-conf-cardpah'>{item.preco}</p>
                <p className='txt-conf-cardpah'>{item.disponivel ? 'Disponivel!': 'Esgotado'}</p>
                <p className='txt-conf-cardpah-underline'>{item.tamanho}</p>
                </div>
                <div className='bt-card-pah'>
                    <div onClick={() => deletarProduto(item.id, item.nome)} >
                    <BotaoADM nome='EXCLUIR PRODUTO'/>
                </div>
                <div onClick={() => editarProduto(item.id)}>      
                <BotaoADM nome='EDITAR PRODUTO'/>
                </div> 
                </div>

                </div>
            </div>
                
                )}


            </div>
        </div>
        </div>
    )
}