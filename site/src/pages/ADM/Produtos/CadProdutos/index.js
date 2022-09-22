import '../../../../Common.scss';
import MenuADM from '../../../Components/Adm/menu/'
import './index.scss';
import addimgft from '../../../../assets/images/Group 61.png';
import BotaoADM from '../../../Components/Adm/Button/' 
import { useState } from 'react';
import { cadastrarProduto } from '../../../../api/adminAPI.js';
import { useEffect } from 'react';
import { listarCategorias, listarArtistas, enviarimagem, buscarImagem } from '../../../../api/adminAPI.js';
import storage from 'local-storage'

export default function CadProdutos()
{
    const [IdArtista, setIdArtista] = useState();   
    const [artistas, setArtistas] = useState([]);

    const [idCategoria, setIdCategoria] = useState();   
    const [categorias, setCategorias] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);

    const [nome, setNome] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [preco, setPreco] = useState('');

    const [imagem, setImagem] = useState();
    const [qtd, setQtd] = useState('');

    async function salvar() {
        try {
              
            const r = cadastrarProduto(IdArtista,nome, tamanho, disponivel, preco, qtd, catSelecionadas);
        //  await enviarimagem(novoProduto, imagem);

            alert('produto cadastrado')
        }
        catch (err) {
            alert(err.message);
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

function salvarClick() {
    setIdCategoria(0);
    setCategorias('');
    setCatSelecionadas('');
    setNome('');
    setTamanho('');
    setDisponivel('');
    setPreco('');
}

    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    } 

    function adicionarCategoria() {
        const categorias = [...catSelecionadas, idCategoria];
        setCatSelecionadas(categorias);
    }

    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    } 

    async function carregarArtistas() {
        const r = await listarArtistas();
        setArtistas(r);
    }


    useEffect(() => {
        carregarCategorias();
        carregarArtistas();
    }, [])

    return(
        <div className='cad-prod'>
            <MenuADM/>

            <nav className='nav-cad-prod'>
            <h1 className='tit-cad-prod'>Cadastre seu produto</h1>

              <div className='content-nav-cad-prod'>

                <div onClick={escolherImagem}>
                    <input type='file' id='img' onChange={e => setImagem(e.target.files[0])} className='form_input'/>
                   
                    {imagem &&
                    <img src={mostrarImagem()}/> 
                    }

                    {!imagem &&
                    <img src={addimgft} width={250}/>
                    }
                </div>

                <aside className='aside-cad-prod'>
                    <p>Nome do produto:</p>
                    <input className='input-cad-prod' value={nome} onChange={e => setNome(e.target.value)}/>
                    <p>Preço do produto:</p>
                    <input className='input-cad-prod' value={preco} onChange={e => setPreco(e.target.value)}/>
                    <p>Disponível?</p>
                    <input className='input-cad-prod' type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                    <p>Tamanhos disponíveis:</p>
                    <input  className='input-cad-prod' value={tamanho} onChange={e => setTamanho(e.target.value)}/>
                    <p>Quantidade:</p>
                    <input className='input-cad-prod' value={qtd} onChange={e => setQtd(e.target.value)}/>
                    <p>Categoria do produto:</p>
                    <select className='input-cad-prod' value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>

                    {categorias.map(item =>
                    <option value={item.id}>{item.categoria}</option>
                    )};
                    </select>

                    <p>Artista:</p>
                    <select className='input-cad-prod' value={IdArtista} onChange={(e) => setIdArtista(e.target.value)}>

                    {artistas.map(item =>
                    <option value={item.id}>{item.artista}</option>
                    )};

                    </select>

                    <button  onClick={adicionarCategoria} className='input-cad-prod'>+</button> 
                       
                    <div className='cat-conteiner'>
                            {catSelecionadas.map(id =>
                            <div className='cat-selecionada'>
                                {buscarNomeCategoria(id)}
                            </div>
                        )}
                    </div>                    

                    <button  onClick={salvar}>Salvar</button>

                </aside>
              </div>

            </nav>
        </div>
    )
}