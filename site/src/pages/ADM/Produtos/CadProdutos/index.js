import '../../../../Common.scss';
import MenuADM from '../../../Components/Adm/menu/'
import './index.scss';
import addimgft from '../../../../assets/images/Group 61.png';
import BotaoADM from '../../../Components/Adm/Button/' 
import { useState } from 'react';
import { cadastrarProduto } from '../../../../api/adminAPI.js';
import { useEffect } from 'react';
import { listarCategorias } from '../../../../api/adminAPI.js';
import storage from 'local-storage'

export default function CadProdutos()
{

    const [artista, setArtista] = useState();
    const [idCategoria, setIdCategoria] = useState();   
    const [categorias, setCategorias] = useState([]);
    const [catSelecionadas, setCatSelecionadas] = useState([]);
    const [nome, setNome] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [preco, setPreco] = useState('');

    const [imagem, setImagem] = useState('');
    const [qtd, setQtd] = useState('');

 //   async function salvarClick(){
   //     try {
         //   const r = await cadastrarProduto(artista, nome, tamanho, disponivel, preco, qtd) 

     //       alert('produto cadastrado!')
       // } catch (err) {
     //       alert(err.message)
       // }
   // }

   function salvar() {
    alert('Categoria: ' + idCategoria  );
}

function salvarClick() {
    setIdcategoria(0);
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


    useEffect(() => {
        carregarCategorias();
    }, [])

    return(
        <div className='cad-prod'>
            <MenuADM/>

            <nav className='nav-cad-prod'>
            <h1 className='tit-cad-prod'>Cadastre seu produto</h1>

              <div className='content-nav-cad-prod'>
                <img src={addimgft} width={250}/>
                <aside className='aside-cad-prod'>
                    <p>Nome do produto:</p>
                    <input className='input-cad-prod' value={nome} onChange={e => setNome(e.target)}/>
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

                    <button  onClick={adicionarCategoria} className='input-cad-prod'>+</button> 
                       
                    <div className='cat-conteiner'>
                            {catSelecionadas.map(id =>
                            <div className='cat-selecionada'>
                                {buscarNomeCategoria(id)}
                            </div>
                        )}
                    </div>                    

                    <button  onClick={salvarClick}>Salvar</button>

                </aside>
              </div>

            </nav>
        </div>
    )
}