import BotaoADM from "../../../Components/Adm/Button";
import MenuADM from "../../../Components/Adm/menu";
import { listarArtistas } from "../../../../api/adminAPI";
import { Link } from "react-router-dom";
import '../../Produtos/TodosProdutos/index.scss' 
import { useState, useEffect } from "react";
import {toast, ToastContainer} from 'react-toastify';

export default function Artistas(){

    const [artistas, setArtistas] = useState([]);
 
    async function carregarTodosArtistas(){
        const r = await listarArtistas();
        setArtistas(r);
    }

    useEffect(() => {
        setTimeout(() => {
            carregarTodosArtistas();
        })
    }, []);

    return(
        <div>
        <MenuADM/>
        <ToastContainer/>

        <div className='produtos-adm'>
            

            <div className='content-produtos-adm'>

                <div className="align-itens-produtos">
                <h1 className='tit-produtos'>Todos os Artistas</h1>
                <Link to='/CadArtistas' >
                <BotaoADM nome='Adicionar Novo Artista'/>
                </Link>
                </div>
                {artistas.map( item =>
                <div className="conf-card">
                <div className='cardpah'>
                <img src=""/>
                <div className='txt-cardpah'>
                <p className='txt-conf-cardpah'>{item.nome}</p>
               
                <p className='txt-conf-cardpah'>{item.descricao}</p>
                <p className='txt-conf-cardpah'></p>
                <p className='txt-conf-cardpah-underline'></p>
                </div>
                <div className='bt-card-pah'>
                    <div  >
                    <BotaoADM nome='EXCLUIR ARTISTA'/>
                </div>
                <div>      
                <BotaoADM nome='EDITAR ARTISTA'/>
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