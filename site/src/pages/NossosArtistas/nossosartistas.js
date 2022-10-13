import './index.scss'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect,useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listarArtistas, listarCategoriasArtistas } from '../../api/adminAPI.js'


export default function TodosProdutos(){

    const [filtro, setFiltro] = useState('');
    const [artistas, setArtistas]= useState([]);

    async function Filtrar(){
        const resp = await listarArtistas(filtro);
        return setArtistas(resp);
    }

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
             <div>
             <input type='text' className='input-busca' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
             <button className='lupa-conf' onClick={Filtrar}><img src={'../../../../assets/images/search.png'} className='lupa' id='send'/></button>
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
             </div>
        </header>



       <div className='nossosartistas'>
            <h1 >Conheça nossos <span> artistas</span></h1>
            <div className='categorias'>
            <h3>Hits do momento</h3><h3>Duo do rock</h3><h3>Solistas</h3><h3>Bandas</h3><h3>...</h3>
            </div>
         <div>
             <div className='faixa1'>
             <img src={'../../../../assets/images/bandgroup1.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup2.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup3.png'} className='artistaimg'/>
             </div>
             <div className='faixa1'>
             <img src={'../../../../assets/images/bandgroup4.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup5.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup6.png'} className='artistaimg'/>
             </div>
             <div className='faixa1'>
             <img src={'../../../../assets/images/bandgroup7.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup8.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup9.png'} className='artistaimg'/>
             </div>
             <div className='faixa1'>
             <img src={'../../../../assets/images/bandgroup10.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup11.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup12.png'} className='artistaimg'/>
             </div>
             <div className='faixa1'>
             <img src={'../../../../assets/images/bandgroup13.png'} className='artistaimg'/>
             <img src={'../../../../assets/images/bandgroup14.png'} className='artistaimg' height='210em'/>
             <img src={'../../../../assets/images/bandgroup15.png'} className='artistaimg'/>
             </div>

         </div>

              </div>
        </main>
    )
}