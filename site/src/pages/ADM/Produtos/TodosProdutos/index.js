import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import { Navigate, useNavigate } from "react-router-dom";
import { todosProdutos, removerProduto } from "../../../../api/adminAPI.js";
import { Link } from "react-router-dom";
import './index.scss'
import { useState, useEffect } from "react";
import {confirmAlert} from 'react-confirm-alert';
import {toast} from 'react-toastify';

export default function Produtos(){
    const [produtos, setProdutos]= useState([]);

    async function carregarTodosProdutos() {
        const resp = await todosProdutos();
        console.log(resp);
        setProdutos(resp);
    }

    useEffect(() => {
        setTimeout(() => {
            carregarTodosProdutos();
        })
    }, []);

    async function deletarProduto(id, nome) {
		
						const resposta = await removerProduto(id, nome);
						carregarTodosProdutos();
						toast.success("🔥 Produto " + nome + " removido!");
			
	}


    return(
        <div>
        <MenuADM/>

        <div className='produtos-adm'>
            

            <div className='content-produtos-adm'>

                <div className="align-itens-produtos">
                <h1 className='tit-produtos'>Todos os Produtos</h1>
                <Link to='/CadProdutos'>
                <BotaoADM nome='Adicionar Novo Produto'/>
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
                <button onClick={() => deletarProduto(item.id, item.nome)}>EXCLUIR PRODUTO</button>
                <Link to = '/CadProdutos'>        
                <BotaoADM nome='EDITAR PRODUTO'/>
                </Link>
                </div>

                </div>
            </div>
                
                )}


            </div>
        </div>
        </div>
    )
}