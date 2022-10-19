import BotaoADM from "../../../Components/Adm/Button";
import MenuADM from "../../../Components/Adm/menu";
import { listarArtistas, buscarImagem, deletarArtista } from "../../../../api/adminAPI";
import { Link, useNavigate } from "react-router-dom";
import '../../Produtos/TodosProdutos/index.scss' 
import './index.scss'
import { useState, useEffect } from "react";
import {toast, ToastContainer} from 'react-toastify';

export default function Artistas(){

    const [artistas, setArtistas] = useState([]);
    const [mostrarDesc, setMostrarDesc] = useState(false);

    const navigate = useNavigate();
 
    async function carregarTodosArtistas(){
        const r = await listarArtistas();
        setArtistas(r);
    }

    function editarArtista(){
        
    }

    async function removerArtista(id, artista){

        const deletar = await deletarArtista(id, artista);
        carregarTodosArtistas();
        toast.success("🔥 Artista " + artista + " removido!");
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
                <img  style={{width:"150px", height:"150px", objectFit:"cover"}} src={buscarImagem(item.imagem)}/>
                <div className='txt-cardpah'>
                <p className='txt-conf-cardpah'>{item.artista}</p>
                <p onClick={() => setMostrarDesc(!mostrarDesc)} className='txt-conf-cardpah' style={{textDecoration:"underline", textDecorationColor:"#A83F37"}}>Ver Descrição</p>
                {mostrarDesc === true &&
                <div>
                <p className='txt-conf-desc'>{item.descricao}</p>
                </div>
                }    
                <p className='txt-conf-cardpah'></p>
                <p className='txt-conf-cardpah-underline'></p>
                </div>
                <div className='bt-card-pah'>
                 <div onClick={() => removerArtista(item.id, item.artista)}>
                    <BotaoADM nome='EXCLUIR ARTISTA'/>
                </div>
                <div>
                <div >        
                <BotaoADM nome='EDITAR ARTISTA'/>
                </div> 
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