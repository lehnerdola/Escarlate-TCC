import './index.scss'
import {motion} from 'framer-motion'
import Header from '../Components/Usuario/header/index.js';
import { todosProdutos, buscarProdutoPorNome } from '../../api/adminAPI.js';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export default function TodosProdutos(){

    const [produtos, setProdutos]= useState([]);
    const [filtro, setFiltro] = useState('');

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
             <Link to='/Feed' className="tit"> <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf' alt='img'/> </Link>
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
            <section className='produtos'>
                <div className='align-prod'>
                <motion.img 
                whileHover={{ scale: 1.1, border:'red 1PX'}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                src={`http://localhost:5000/${item.imagem}`} width={170}/>
                <p className='nome-prod' >{item.nome}</p>
                </div>
            </section>
             )}

            </div>
        </div>
        </main>
    )
}