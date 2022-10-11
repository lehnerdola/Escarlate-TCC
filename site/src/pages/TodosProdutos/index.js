import './index.scss'
import {motion, AnimatePresence} from 'framer-motion'
import { todosProdutos, buscarProdutoPorNome, buscarPorId } from '../../api/adminAPI.js';
import { useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PopUp from '../Components/Usuario/popup';


export default function TodosProdutos(){

    const [produtos, setProdutos]= useState([]);
    const [produto, setProduto] = useState({});
    const [filtro, setFiltro] = useState('');

    const [modal, setModal] = useState(false);
    const { idParam } = useParams();
    const navigate= useNavigate();

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    async function carregarProdutoId(){
        const resp = await buscarPorId(idParam);
        setProduto(resp);
    }

    function abrirInfo(id){
        navigate(`/TodosProdutos/${id}`)
    }

    
    async function carregarTodosProdutos() {
        const resp = await todosProdutos();
        setProdutos(resp);
    }
        
    async function Filtrar(){
        const resp = await buscarProdutoPorNome(filtro);
        return setProdutos(resp);
    }

    useEffect(() => {
        setTimeout(() => {
            carregarTodosProdutos();
        })
    }, []);


    useEffect(() => {
        Filtrar();
    },[produtos])


    useEffect(() => {
        carregarProdutoId();
    }, [])

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
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
             </div>
        </header>
  
  
     
       <div className='todos-prod'>
            <h1 className='titulo-todosprodutos' >Conheça nossos <span style={{color:"#A83F37"}}> produtos</span></h1>
            <h2 style={{fontFamily:"Cinzel-Regular", color:"#A83F37", fontWeight:'100' }}>Mais vendidos,   canecas,   camisetas,   posters ...</h2>
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
                <div onClick={toggleModal} className="overlay">
                <motion.div
                animate={{opacity:[0,1], }}
                transition={{delay:0.5, type:'spring'}}
                >
                <div className="modal-content">
                    <PopUp produto={produto}/>
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