import '../../../../Common.scss';
import MenuADM from '../../../Components/Adm/menu/'
import './index.scss';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { listarCategorias, listarArtistas, enviarImagemProduto, buscarImagem, AlterarProduto, buscarPorId, cadastrarProduto } from '../../../../api/adminAPI.js';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function CadProdutos() {
    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);

    const [idArtista, setIdArtista] = useState();
    const [artistas, setArtistas] = useState([]);

    const [nome, setNome] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState();
    const [quantidade, setQuantidade] = useState('');

    const [id, setId] = useState(0);


    const { idParam } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        if (idParam) {
            carregarProduto();
        }
        carregarCategorias();
        carregarArtistas();
    }, [])

    async function carregarProduto() {
        const r = await buscarPorId(idParam);
        
        setIdArtista(r.info.artista);
        setIdCategoria(r.info.categoria);

        setNome(r.info.nome);
        setTamanho(r.info.tamanho);
        setDisponivel(r.info.disponivel);
        setPreco(r.info.preco);
        setImagem(r.info.imagem);
        setQuantidade(r.info.quantidade);

        setId(r.info.id);
    }


    async function salvar() {
        try {

            if (id === 0) {

                const r = await cadastrarProduto(idArtista, idCategoria, nome, tamanho, disponivel, preco, quantidade);
                await enviarImagemProduto(imagem, r.id)
                toast.dark('produto cadastrado')

                navigate('/Produtos')

                setId(r.id);
            }

            else {
                await AlterarProduto(idArtista, idCategoria, nome, tamanho, disponivel, preco, quantidade, idParam);
                if (typeof (imagem) == 'object') {
                    await enviarImagemProduto(imagem, idParam)
                }
                toast.dark('produto alterado!')
            }
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    function escolherImagem() {
        document.getElementById('img').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem)
        }
    }

    function novoClick() {
        setId(0);
        setNome('');
        setTamanho('');
        setDisponivel('');
        setQuantidade('');
        setPreco('');
        setImagem();
    }

    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r)
    }

    async function carregarArtistas() {
        const r = await listarArtistas();
        setArtistas(r);
    }


    useEffect(() => {
        carregarCategorias();
        carregarArtistas();
    }, [])

    return (
        <div>
            <MenuADM />

            <div className='cad-prod'>
                <ToastContainer />


                <nav className='nav-cad-prod'>
                    <h1 className='tit-cad-prod' style={{ marginTop: "1em", marginLeft: "2em" }}>{id === 0 ? 'Cadastre' : 'Altere'} seu produto</h1>

                    <div className='content-nav-cad-prod'>
                        <div onClick={escolherImagem}>

                            <input type='file' id='img' onChange={e => setImagem(e.target.files[0])} className='form_input' />

                            {imagem &&
                                <img width={250} src={mostrarImagem()} alt='img' />
                            }

                            {!imagem &&
                                <img src={'../../../../assets/images/Group 61.png'} width={250} className='imagem-cadastro-produto' alt='img' />
                            }
                        </div>

                        <aside className='aside-cad-prod'>
                            <p>Nome do produto:</p>
                            <input className='input-cad-prod' value={nome} onChange={e => setNome(e.target.value)} />

                            <p>Preço do produto:</p>
                            <input className='input-cad-prod' value={preco} onChange={e => setPreco(e.target.value)} />

                            <p>Disponível?</p>
                            <input className='input-cad-prod' type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />

                            <p>Tamanhos disponíveis:</p>
                            <input className='input-cad-prod' value={tamanho} onChange={e => setTamanho(e.target.value)} />

                            <p>Quantidade:</p>
                            <input className='input-cad-prod' value={quantidade} onChange={e => setQuantidade(e.target.value)} />

                            <p>Categoria do produto:</p>
                            <select className='input-cad-prod' value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                                <option selected disabled hidden>Selecione</option>


                                {categorias.map(item =>
                                    <option value={item.id}>{item.categoria}</option>
                                )};
                            </select>


                            <p>Artista:</p>
                            <select className='input-cad-prod' value={idArtista} onChange={(e) => setIdArtista(e.target.value)}>
                                <option selected disabled hidden>Selecione</option>
                                {artistas.map(item =>
                                    <option value={item.id}>{item.artista}</option>
                                )};

                            </select>
                            <div className='align-bt-cadprod'>
                                <button onClick={salvar} className='botao-adm-2'>Salvar</button>
                                <button className='botao-adm-2' onClick={novoClick}>Novo</button>
                            </div>
                        </aside>
                    </div>

                </nav>
            </div>
        </div>
    )
}