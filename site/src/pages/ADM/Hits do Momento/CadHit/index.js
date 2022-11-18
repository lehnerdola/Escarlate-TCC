import MenuADM from '../../../Components/Adm/menu/'
import { buscarImagem, cadastrarMusica, enviarImagemMusica, listarArtistas, buscarMusicaPorId, alterarMusica, enviarImagemArtista} from '../../../../api/adminAPI';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { useNavigate, useParams } from 'react-router-dom';

export default function CadHit(){

    const [idArtista, setIdArtista] = useState();
    const [artista, setArtista] = useState([]);

    const [nomeMusica, setNomeMusica] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState();

    const [id, setId] = useState(0);
    const { idParam } = useParams();

    useEffect(() => {
        if(idParam){
            carregarMusica();
        }
        if(!storage('adm-logado')){
            navigate('/LoginADM')
        }
        carregarArtistas();
    }, [])

    const navigate = useNavigate();


    async function carregarMusica(){
        const r = await buscarMusicaPorId(idParam);
        setIdArtista(r.idArtista)

        setNomeMusica(r.nomeMusica);
        setLink(r.link);
        setImagem(r.imagem);

        setId(r.id)
    }


    async function salvarMusica(){
        try {
            if(id === 0){
            const r = await cadastrarMusica(idArtista, nomeMusica, link);
            await enviarImagemMusica(imagem, r.id)
            setId(r.id)
            toast.dark('Música cadastrada!')

        }
        else{
           await alterarMusica(id, idArtista, nomeMusica, link);
           if(typeof(imagem)== 'object'){
            await enviarImagemArtista(imagem, id)
        } 
        toast.dark('Música alterada!')
        }

        }
         catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    async function carregarArtistas(){
        const r = await listarArtistas();
        setArtista(r)
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

    function novoClick(){
      setId(0)
      setNomeMusica('')
      setLink('')
      setImagem()
    }

   
    return(
        <div>
        <MenuADM/>

        <div className='cad-prod'>
        <ToastContainer/>


            <nav className='nav-cad-prod'>
            <h1 className='tit-cad-prod' style={{marginTop:"1em", marginLeft:"2em"}}>Hits do Momento</h1>

              <div className='content-nav-cad-prod'>
              <div onClick={escolherImagem}>

                    <input type='file' id='img' className='form_input'
                    onChange={e => setImagem(e.target.files[0])}/>
                   
                    {imagem &&
                    <img width={250} src={mostrarImagem()} alt='img'/> 
                    }

                    {!imagem &&
                    <img src={'../../../../assets/images/Group 61.png'} width={250} className='imagem-cadastro-produto' alt='img'/>
                    }
                </div>

                <aside className='aside-cad-prod'>
                    <p>Nome da música:</p>
                    <input className='input-cad-prod'
                    value={nomeMusica} onChange={e => setNomeMusica(e.target.value)}/>

                    <p>Link da música (Spotify):</p>
                    <input className='input-cad-prod'
                     value={link} 
                     onChange={e => setLink(e.target.value)}
                    />

                    <p>Artista:</p>
                    <select className='input-cad-prod' value={idArtista} onChange={(e) => setIdArtista(e.target.value)}>
                    <option selected disabled hidden>Selecione</option>
                    {artista.map (item =>     
                    <option value={item.id}>{item.artista}</option>
                    )}

                    </select>
                <div className='align-bt-cadprod'>
                    <button className='botao-adm-2' onClick={salvarMusica}>Salvar</button>
                    <button className='botao-adm-2' onClick={novoClick}>Novo</button>
            </div>
                </aside>
              </div>

            </nav>
        </div>
        </div>
    )
}
