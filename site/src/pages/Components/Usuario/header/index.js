import './index.scss'
import { useState } from 'react';
import { buscarProdutoPorNome } from '../../../../api/adminAPI.js';

export default function Header(props){
    const [produtos, setProdutos]= useState([]);
    const [filtro, setFiltro] = useState('');

       async function Filtrar(){
        const resp = await buscarProdutoPorNome(filtro);
        return setProdutos(resp);
    }

    return(
        <header className='header'>
             <div className='sub-header-1'>
             <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
             <h2 className='nome-page'>{props.nome}</h2>
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
    )
}