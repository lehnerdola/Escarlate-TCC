import './index.scss'
import {motion, AnimatePresence} from 'framer-motion'
import { todosProdutos, buscarProdutoPorNome, buscarPorId, listarCategorias, listarCategoriasId } from '../../api/adminAPI.js';
import { useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PopUp from '../Components/Usuario/popup';

import Storage from 'local-storage'

export default function TodosProdutos(){

    const [produtos, setProdutos]= useState([]);
    const [produto, setProduto] = useState({});
    const [filtro, setFiltro] = useState('');
    const [categorias, setCategorias] = useState([]);


    const [modal, setModal] = useState(false);
    const navigate= useNavigate();

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    }
     else {
        document.body.classList.remove('active-modal')
    }


    function abrirInfo(id){
        navigate('/TodosProdutos/' + id)
    }

    async function carregarCategorias(){
        const r = await listarCategorias();
        setCategorias(r)
    }
    async function carregarTodosProdutos() {
        const resp = await todosProdutos();
        setProdutos(resp);
    }
        
    async function Filtrar(){
        const resp = await buscarProdutoPorNome(filtro);
        return setProdutos(resp);
    }

   function recarregarPag(){
    window.location.reload()
   }

    useEffect(() => {
            carregarTodosProdutos();
            carregarCategorias();
    }, []);

    useEffect(() => {
        if (!Storage('cliente-logado')) {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        Filtrar();
    },[produtos])

    document.addEventListener("keypress", function  (e) {
        if(e.key === "Enter"){
            const btn = document.querySelector("#send");
            btn.click();
        }
    })

    return(
        <main>
         
      <header className='header'>
             <div className='sub-header-1'>
                <Link to='/Feed'>
                <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                whileHover={{ scale: 1.1}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                />
                </Link>
             </div>   
             <div>
             <input type='text' className='input-busca' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
             <button className='lupa-conf' onClick={Filtrar}><img src={'../../../../assets/images/search.png'} className='lupa' id='send'/></button>
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                <Link to ='/Carrinho'>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
                </Link>
             </div>
        </header>
  
  
     
       <div className='todos-prod'>
            <h1 className='titulo-todosprodutos' >Conheça nossos <span style={{color:"#A83F37"}}> produtos</span></h1>
            {categorias.map (item => 
            <h2 style={{fontFamily:"Cinzel-Regular", color:"#A83F37", fontWeight:'100', }} onClick={() => abrirInfo(item.id)}>{item.categoria}</h2>
            )}
            <div className='faixa-1-todos-prod'>

           
            {produtos.map (item =>
            //abre popup
            <section className='produtos' >

                <motion.div className='align-prod' onClick={toggleModal}>
                <motion.img 

                whileHover={{ scale: 1.1, border:'red 1PX'}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                src={`http://localhost:5000/${item.imagem}`} 
                width={170} className="btn-modal"
                onClick={() => abrirInfo(item.id) }/>

                <p className='nome-prod'>{item.nome}</p>

                </motion.div>
              
            </section>
            )}

                {modal && (
                <div className="modal">
                <div className="overlay">
                <motion.div
                animate={{opacity:[0,1], }}
                transition={{delay:0.5, type:'spring'}}
                >
                <div className="modal-content">
                    <PopUp produto={produto}/>
                    <Link to ='/TodosProdutos'>
                    <img onClick={toggleModal} className='botao-voltar' src="../assets/images/icons8-close-50.png"/>
                    </Link>
                </div>
                </motion.div>    
                </div>
                </div>
                )}
    
            </div>
        </div>
        </main>
    )
}