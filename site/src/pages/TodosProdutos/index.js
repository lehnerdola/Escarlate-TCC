import './index.scss'
import Header from '../Components/Usuario/header/index.js';
import { todosProdutos, buscarProdutoPorNome } from '../../api/adminAPI.js';
import { useEffect,useState } from 'react';

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

    return(
        <main>
      <header className='header'>
             <div className='sub-header-1'>
             <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
             </div>   
             <div>
             <input type='text' className='input-busca' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
             <button className='lupa-conf' onClick={Filtrar}><img src={'../../../../assets/images/search.png'} className='lupa' /></button>
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
             </div>
        </header>
        <div className='todos-prod'>
            <h1>Conheça nossos produtos</h1>
            <h2>Mais vendidos   canecas   camisetas   posters ...</h2>
            <div className='faixa-1-todos-prod'>
           
            {produtos.map (item =>
            <section className='produtos'>
                <div className='align-prod'>
                <img src={`http://localhost:5000/${item.imagem}`} width={170}/>
                <p>{item.nome}</p>
                </div>
            </section>
             )}

            </div>
        </div>
        </main>
    )
}