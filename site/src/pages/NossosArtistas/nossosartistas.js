import './index.scss'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listarArtistas, buscarImagem, listarPorNome } from '../../api/adminAPI.js'


export default function TodosProdutos(){

    const [filtro, setFiltro] = useState('');
    const [artistas, setArtistas]= useState([]);
    const navigate = useNavigate()

    async function Filtrar(){
        const resp = await listarPorNome(filtro);
        return setArtistas(resp);
    }

 

    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const btn = document.querySelector("#send");
            btn.click();
        }
    })

    async function carregarTodosArtistas(){
        const r = await listarArtistas();
        setArtistas(r);
    }

    function abrirInfo(id){
        navigate('/ArtistaProd/' + id)
    }

    useEffect(() => {
       carregarTodosArtistas()
       
    }, []);

   


    return(
        <main>

         <header className='header'>
             <div>
                <Link to='/Feed'>
                <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                whileHover={{ scale: 1.2}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                />
                </Link>
             </div>  
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
             </div>
        </header>



       <div className='nossosartistas'>
        <div >
            <h1 className='h1-nossosartistas' style={{textAlign:"center"}}>Conheça nossos <span style={{fontFamily:"CinzelDecorative-Regular", color:"#A83F37"}}> artistas</span></h1>
            
             <div className='faixa1'>
            
                    {artistas.map(item => 
                    <div className='align-artista-nome-foto'>
                        <div className='align'>
                        <motion.img src={buscarImagem(item.imagem)} className='artistaimg' 
                        whileHover={{ scale: 1.1}}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        onClick={() => abrirInfo(item.id)}
                                          
                    />
                    <p className='nome-artitsa'> {item.artista}</p>
                    </div>
                    
    
                     </div>

            
             )}
        

            </div>
        </div>
        </div>
        </main>
    )
}