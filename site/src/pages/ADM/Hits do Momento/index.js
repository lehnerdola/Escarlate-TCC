import MenuADM from "../../Components/Adm/menu";
import BotaoADM from "../../Components/Adm/Button";
import {toast, ToastContainer} from 'react-toastify';
import '../Produtos/TodosProdutos/index.scss' 
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarTodasMusicas, buscarImagem, apagarMusica } from "../../../api/adminAPI";

export default function HitsDoMomento(){

    const [musicas, setMusicas] = useState([]);

    const navigate = useNavigate();

    async function carregarMusicas(){
        const carregarMusicas = await listarTodasMusicas();
        setMusicas(carregarMusicas)
    }

    async function deletarMusica(id,nomeMusica){
        const removerMusica = await apagarMusica(id,nomeMusica);
        carregarMusicas();
        toast.success(" Música " + nomeMusica + " Removida ")        
    }

    async function editarMusica(id){
        navigate(`/alterarmusica/${id}`)
    }

    useEffect(() => {
        carregarMusicas();
    })

    return(
        <div>
<MenuADM/>
<ToastContainer/>

<div className='produtos-adm'>
    

    <div className='content-produtos-adm'>

        <div className="align-itens-produtos">
        <h1 className='tit-produtos'>Hits do Momento</h1>
        <Link to='/CadHit' >
        <BotaoADM nome='Adicionar Novo Hit' />
        </Link>
        </div>
        
        <div className="conf-card">
        {musicas.map (item =>     
        <div className='cardpah'>
        <img style={{width:"150px", height:"150px", objectFit:"cover"}}  src={buscarImagem(item.imagem)}/>
        <div className='txt-cardpah'>
        <p className='txt-conf-cardpah'>{item.musica}</p>
        <p className='txt-conf-cardpah'>{item.nomeArtista}</p>
        <a href={item.link}><p className='txt-conf-cardpah'>Link</p></a>    
        <p className='txt-conf-cardpah-underline'></p>
        </div>
        
        <div className='bt-card-pah'>
        <div onClick={() => deletarMusica(item.id, item.nomeMusica)}>
        <BotaoADM nome='EXCLUIR MÚSICA'/>
        </div>
        <div onClick={() => editarMusica(item.id)}>      
        <BotaoADM nome='EDITAR MÚSICA'/>
        </div> 
        </div>

        </div>
        )}
    </div>
        

    </div>
</div>
</div>
)
} 

