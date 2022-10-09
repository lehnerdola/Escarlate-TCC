import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../Produtos/TodosProdutos/index.scss' 
import { useState, useEffect } from "react";
import {confirmAlert} from 'react-confirm-alert';
import {toast} from 'react-toastify';

export default function Artistas(){

    

    return(
        <div>
        <MenuADM/>

        <div className='comeco-adm'>
            

            <div className='content-adm'>

                <div className="align-itens">
                <h1 className='titulo'>Todos os Artistas</h1>
                <Link to='/CadProdutos'>
                <BotaoADM nome='Adicionar Novo Artista'/>
                </Link>
                </div>
                
            
                <div className="conf-card">
                <div className='cardpah'>
                <img />
                <div className='txt-cardpah'>
                <p className='txt-conf-cardpah'></p>
                <p className='txt-conf-cardpah'></p>
                <p className='txt-conf-cardpah'></p>
                <p className='txt-conf-cardpah-underline'></p>
                </div>
                <div className='bt-card-pah'>
                    <div>
                    <BotaoADM nome='EXCLUIR ARTISTA'/>
                </div>
                <div>      
                <BotaoADM nome='EDITAR ARTISTA'/>
                </div> 
                </div>

                </div>
            </div>


            </div>
        </div>
        </div>
    )

}