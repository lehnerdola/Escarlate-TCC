import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../Produtos/CadProdutos/index.scss' 
import {cadastrarArtista, enviarImagemArtista, buscarImagemArtista, listarArtistasCategorias, listarCategoriasMusicais} from '../../../../api/adminAPI.js'
import { useState, useEffect } from "react";
import {confirmAlert} from 'react-confirm-alert';
import {toast} from 'react-toastify';

export default function CadArtistas (){

    const [idCategoriaMusical, setidCategoriaMusical] = useState();
    const [categoriasmusicais, setCategoriasmusicais] = useState([]);
    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);
    


    async function salvar (){
        try {
            if (id === 0 ) {
                const resposta = await cadastrarArtista(idCategoriaMusical, idCategoria, nome, descricao);
                await enviarImagemArtista(imagem, resposta.id)
                alert('artista cadastrado')
            }

            else{
                alert('o artista não pode ser alterado pq a função ainda não existe')
            }

        } catch (err) {
            alert(Response.status);
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
    return buscarImagemArtista(imagem)
}
}

function novoClick() {
    setId(0);
    setNome('');
    setDescricao('');   
    setImagem();
}

    async function carregarCategorias() {
        const r = await listarArtistasCategorias();
        setCategorias(r);
    } 

    async function carregarCategoriasMusicais() {
        const r = await listarCategoriasMusicais();
        setCategoriasmusicais(r);
    }


    useEffect(() => {
        carregarCategorias();
        carregarCategoriasMusicais();
    }, [])
    

    return(
        <div>
         <MenuADM/>
             <div className='cadastrar'>

                 <nav className='nav-cadastrar'>
                    <h1 className='tit-cadastrar'> {id === 0 ? 'Cadastre' : 'Altere'} Artistas </h1>

                    <div className='content-nav-cadastrar'>
                        <div onClick={escolherImagem}>
                        <input type='file' id='img' onChange={e => setImagem(e.target.files[0])} className='form_input'/>
                   
                        {imagem &&
                        <img width={250} src={mostrarImagem()} alt='img'/> 
                        }

                        {!imagem &&
                        <img src={'../../../../assets/images/Group 61.png'} width={250} className='imagem-cadastro' alt='img'/>
                        }
                    </div>

                        <aside className='aside-cadastrar'>
                            <p>Nome do artista: </p>
                            <input className='input-cadastrar' value={nome} onChange={e => setNome(e.target.value)} />

                            <p>Descrição do artista: </p>
                            <input className='input-cadastrar' value={descricao} onChange={e => setDescricao(e.target.value)}/>

                            <p>Categoria musical:</p>
                            <select className='input-cad-prod' value={idCategoriaMusical} onChange={(e) => setidCategoriaMusical(e.target.value)}>
                            <option selected disabled hidden>Selecione</option>

                            {categoriasmusicais.map(item =>
                            <option value={item.id}>{item.categoria}</option>
                            )};
                            </select>

                            <p>Categoria do artista:</p>
                            <select className='input-cad-prod' value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                            <option selected disabled hidden>Selecione</option>

                            {categorias.map(item =>
                            <option value={item.id}>{item.categoria}</option>
                            )};
                            </select>

                            
                            <div>
                                    <button className='botao-adm-2' onClick={salvar}>Salvar</button>
                                    <button className='botao-adm-2' onClick={novoClick}>Novo</button>
                            </div>
                        </aside>
                    </div>

                </nav>
             </div>
        </div>
    )
}