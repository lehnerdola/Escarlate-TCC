import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../Produtos/CadProdutos/index.scss' 
import {cadastrarArtista, enviarImagemArtista, buscarImagem, listarCategoriasArtistas, listarCategoriasMusicais, salvarArtista, AlterarArtista} from '../../../../api/adminAPI.js'
import { useState, useEffect } from "react";
import {confirmAlert} from 'react-confirm-alert';
import {toast} from 'react-toastify';

export default function CadArtistas (){
    const [idCategoriaMusical, setIdCategoriaMusical] = useState();
    const [categoriaMusical, setCategoriaMusical] = useState([]);

    const [idCategoriaArtista, setIdCategoriaArtista] = useState();
    const [categoriaArtista, setCategoriaArtista] = useState([]);

    const [id, setId] = useState(0);
    const { idParam } = useParams();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState();

    async function salvarArtistaClick(){

        try {
            if(id === 0)
            {
            const novoArtista = await salvarArtista(idCategoriaMusical, idCategoriaArtista, nome, descricao);
            await enviarImagemArtista(imagem, novoArtista.id);
        
            alert('artista cadastrado')  
            setId(novoArtista.id)
            }
            else
            {
            await AlterarArtista(idCategoriaMusical, idCategoriaArtista, nome, descricao);
        
            if(typeof(imagem)== 'object')
            {
            await enviarImagemArtista(imagem, idParam)
            } 
            alert('artista alterado')
          }
        } 
        catch (err) {
         alert(err.response.data.erro);
        }
        
    }

    function escolherImagem(){
        document.getElementById('img').click();
    }    
    
    function mostrarImagem(){
        if( typeof (imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }
        else{
            return buscarImagem(imagem)
        }
    }

    async function carregarCategoriasArtistas() {
        const r = await listarCategoriasArtistas();
        setCategoriaArtista(r);
    } 

    async function carregarCategoriasMusicais() {
        const r = await listarCategoriasMusicais();
        setCategoriaMusical(r);
    }
    
    useEffect(() =>{
      carregarCategoriasArtistas();
      carregarCategoriasMusicais();
    }, [])

    

    return(
        <div>
         <MenuADM/>

    <div className='cad-prod'>

    <nav className='nav-cad-prod'>
    <h1 className='tit-cad-prod' > Cadastre seu artista</h1>

      <div className='content-nav-cad-prod'>

      <div onClick={escolherImagem}>

            <input type='file' id='img' onChange={e => setImagem(e.target.files[0])} className='form_input'/>

            {imagem &&
            <img width={250} src={mostrarImagem()} alt='img'/> 
            }

            {!imagem &&
            <img src={'../../../../assets/images/Group 61.png'} width={250} className='imagem-cadastro-produto' alt='img'/>
            }
            </div>

        <aside className='aside-cad-prod'>
            <p>Nome do artista:</p>
            <input className='input-cad-prod' value={nome} onChange={e => setNome(e.target.value)}/>

            <p>Descrição do artista:</p>
            <input className='input-cad-prod' value={descricao} onChange={e => setDescricao(e.target.value)}/>
            
            <p>Categoria do artista:</p>
            <select className='input-cad-prod'  value={idCategoriaArtista} onChange={(e) => setIdCategoriaArtista(e.target.value)}>
            <option selected disabled hidden>Selecione</option>
                
            {categoriaArtista.map(item =>
             <option value={item.id}>{item.categoriaartista}</option>
            )};
            </select>
            

            <p>Categoria musical:</p>
            <select className='input-cad-prod'  value={idCategoriaMusical} onChange={(e) => setIdCategoriaMusical(e.target.value)}>
            <option selected disabled hidden>Selecione</option>
            
            {categoriaMusical.map(item =>
             <option value={item.id}>{item.categoria}</option>
            )};

            </select>
            <div>
            <button  className='botao-adm-2' onClick={salvarArtistaClick}>Salvar</button>
            <button className='botao-adm-2' >Novo</button>
                    </div>
                 </aside>
                </div>
            </nav>
         </div>
        </div>
    )
}