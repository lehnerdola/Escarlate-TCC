import '../../../../Common.scss';
import MenuADM from '../../../Components/Adm/menu/'
import './index.scss';
import BotaoADM from '../../../Components/Adm/Button/' 
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { listarCategorias, listarArtistas, enviarImagemProduto, buscarImagem, AlterarProduto, buscarPorId,cadastrarProduto } from '../../../../api/adminAPI.js';
import storage from 'local-storage'
export default function CadProdutos()
{
    const [idArtista, setIdArtista] = useState();   
    const [artistas, setArtistas] = useState([]);

    const [idCategoria, setIdCategoria] = useState();   
    const [categorias, setCategorias] = useState([]);

    const [catSelecionadas, setCatSelecionadas] = useState([]);

    const [nome, setNome] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [preco, setPreco] = useState('');
    const [id, setId] = useState(0);
    
    const { idParam } = useParams();

   
      const [imagem, setImagem] = useState();
    const [quantidade, setQuantidade] = useState('');

    async function salvar() {
        try {
            
            if(id===0)
            {

            const r =  await cadastrarProduto(idArtista,nome, tamanho, disponivel, preco, quantidade, catSelecionadas);
            await enviarImagemProduto(imagem, r.id)
            alert('produto cadastrado')

            setId(r.id);
             }

             else{
                await AlterarProduto(id, idArtista,nome, tamanho, disponivel, preco, quantidade, catSelecionadas)
                await enviarImagemProduto(id, imagem);
             }
             alert('projeto alterado')
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

function novoClick() {
    setId(0);
    setNome('');
    setTamanho('');
    setDisponivel('');
    setPreco('');   
    setImagem();
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
        <div>
                        <MenuADM/>

        <div className='cad-prod'>

            <nav className='nav-cad-prod'>
            <h1 className='tit-cad-prod'>Cadastre seu produto</h1>

              <div className='content-nav-cad-prod'>

                    <input type='file' id='img' onChange={e => setImagem(e.target.files[0])} className='form_input'/>
                   
                    {imagem &&
                    <img src={mostrarImagem()}/> 
                    }

                <div onClick={escolherImagem}>
                    {!imagem &&
                    <img src={'../../../../assets/images/Group 61.png'} width={250} className='imagem-cadastro-produto' />
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
                    <input className='input-cad-prod' value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
                    <p>Categoria do produto:</p>
                    <select className='input-cad-prod' value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                        

                    {categorias.map(item =>
                    <option value={item.id}>{item.categoria}</option>
                    )};
                    </select>
                    <div className='cat-conteiner'>
                            {catSelecionadas.map(id =>
                            <div className='cat-selecionada'>
                                {buscarNomeCategoria(id)}
                            </div>
                        )}
                    </div>
                    <button  onClick={adicionarCategoria} className='botao-adm-1'>+</button> 

                    <p>Artista:</p>
                    <select className='input-cad-prod' value={idArtista} onChange={(e) => setIdArtista(e.target.value)}>

                    {artistas.map(item =>
                    <option value={item.id}>{item.artista}</option>
                    )};

                    </select>

                    <button  onClick={salvar} className='botao-adm-2'>Salvar</button>
                    <button onClick={novoClick}>Novo</button>

                </aside>
              </div>

            </nav>
        </div>
        </div>
    )
}