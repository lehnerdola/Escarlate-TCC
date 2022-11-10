import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import storage from 'local-storage'
import { Link } from "react-router-dom";
import '../../Produtos/CadProdutos/index.scss' 
import {cadastrarArtista, enviarImagemArtista, buscarImagem, listarCategoriasArtistas, listarCategoriasMusicais, salvarArtista, AlterarArtista, listarArtistasPorId} from '../../../../api/adminAPI.js'
import { useState, useEffect } from "react";
import {confirmAlert} from 'react-confirm-alert';
import {toast, ToastContainer} from 'react-toastify';

export default function CadArtistas (){
    const [idCategoriaMusical, setIdCategoriaMusical] = useState();
    const [categoriaMusical, setCategoriaMusical] = useState([]);

    const [idCategoriaArtista, setIdCategoriaArtista] = useState();
    const [categoriaArtista, setCategoriaArtista] = useState([]);

    const [id, setId] = useState(0);
    const { idParam } = useParams();

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState();

    async function salvarArtistaClick(){

        try {
            if(id === 0)
            {
            const novoArtista = await salvarArtista(idCategoriaMusical, idCategoriaArtista, nome, descricao);
            await enviarImagemArtista(imagem, novoArtista.id);
            setId(novoArtista.id)
            toast.dark('artista cadastrado')  
            }
            else
            {
            await AlterarArtista(idParam,idCategoriaMusical, idCategoriaArtista, nome, descricao);
            if(typeof(imagem)== 'object'){
            await enviarImagemArtista(imagem, idParam)
            }
            toast.dark('artista alterado')  

          }

        } 
        catch (err) {
         toast.error(err.response.data.erro);
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

    useEffect(() => {
        if(idParam){
            carregarArtista();
        }
        if(!storage('adm-logado')){
            navigate('/LoginADM')
        }
        carregarCategoriasArtistas();
        carregarCategoriasMusicais();
    },[])

     function novoClick(){
        setId(0)
        setNome('')
        setDescricao('')
        setIdCategoriaArtista(0)
        setIdCategoriaMusical(0)
     }   

     async function carregarArtista(){
        const r = await listarArtistasPorId(idParam);
        setNome(r.nome)
        setDescricao(r.descricao)
        setIdCategoriaArtista(r.categoria)
        setIdCategoriaMusical(r.categoriamusical)
        setImagem(r.imagem)

        setId(r.id);
    }

    
    return(
        <div>
         <MenuADM/>

    <div className='cad-prod'>
        <ToastContainer/>

    <nav className='nav-cad-prod'>
    <h1 className='tit-cad-prod' style={{marginTop:"1em", marginLeft:"2em"}}> {id === 0 ? 'Cadastre' : 'Altere'} seu artista</h1>

      <div className='content-nav-cad-prod'>

      <div onClick={escolherImagem}>

            <input type='file' id='img'  onChange={e => setImagem(e.target.files[0])} className='form_input'/>

            {imagem &&
            <img src={mostrarImagem()} alt='img' style={{width:"200px", height:"200px", objectFit:"cover"}}/> 
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
            <div className='align-bt-cadprod'>
            <button  className='botao-adm-2' onClick={salvarArtistaClick}>Salvar</button>
            <button className='botao-adm-2' onClick={novoClick}>Novo</button>
            </div>
                 </aside>
                </div>
            </nav>
         </div>
        </div>
    )
}