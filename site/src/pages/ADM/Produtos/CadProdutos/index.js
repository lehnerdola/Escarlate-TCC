import '../../../../Common.scss';
import MenuADM from '../../../Components/Adm/menu/'
import './index.scss';
import addimgft from '../../../../assets/images/Group 61.png';
import BotaoADM from '../../../Components/Adm/Button/' 
import { useState } from 'react';
import { cadastrarProduto } from '../../../../api/adminAPI';
import storage from 'local-storage'

export default function CadProdutos()
{

    const [artista, setArtista] = useState(0);
    const [categoria, setCategoria] = useState(0);
    const [nome, setNome] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [disponivel, setDisponivel] = useState(false);
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');
    const [qtd, setQtd] = useState('');

    async function salvarClick(){
        try {
            const usuario = storage('adm-logado').id;
            const r = await cadastrarProduto(artista, categoria, nome, tamanho, disponivel, preco, qtd, usuario) 

            alert('produto cadastrado!')
        } catch (err) {
            alert(err.message)
        }
    }

    return(
        <div className='cad-prod'>
            <MenuADM/>

            <nav className='nav-cad-prod'>
            <h1 className='tit-cad-prod'>Cadastre seu produto</h1>

              <div className='content-nav-cad-prod'>
                <img src={addimgft} width={250}/>
                <aside className='aside-cad-prod'>
                    <p>Nome do produto</p>
                    <input value={nome} onChange={e => setNome(e.target)}/>
                    <p>Preço do produto</p>
                    <input value={preco} onChange={e => setPreco(e.target.value)}/>
                    <p>Disponível?</p>
                    <input type='checkbox' checked={disponivel} onChange={e => setDisponivel(e.target.checked)}/>
                    <p>Tamanhos disponíveis</p>
                    <input value={tamanho} onChange={e => setTamanho(e.target.value)}/>
                    <p>Quantidade</p>
                    <input value={qtd} onChange={e => setQtd(e.target.value)}/>
                    <p>Categoria do produto</p>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value={1}>Poster</option>
                    </select>
                    <select value={artista} onChange={(e) => setArtista(e.target.value)}>
                    <option value={1}></option>
                    </select>
                    <select>
                    <option></option>
                    </select>
                    <BotaoADM nome ='SALVAR' />
                    <button onClick={salvarClick}>Salvar</button>
                </aside>
              </div>

            </nav>
        </div>
    )
}