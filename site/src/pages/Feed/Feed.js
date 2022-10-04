import { Link } from "react-router-dom";
import Header from "../Components/Usuario/header/index.js";
import hayloft from '../../assets/images/Screenshot_20220806-195359-947 3.png';
import metallica from '../../assets/images/Screenshot_20220806-195839-596 1.png';
import yungblud from '../../assets/images/Screenshot_20220806-195653 1.png';
import artista1 from  '../../assets/images/Ellipse 4.png';
import artista2 from  '../../assets/images/Ellipse 5.png'; 
import artista3 from  '../../assets/images/Ellipse 6.png'; 
import caneca from '../../assets/images/CANECA-removebg-preview 1.png'
import blusa from '../../assets/images/BLUSA-removebg-preview 1.png'
import poster from '../../assets/images/POSTER 1.png'


import './feed.scss';

export default function Feed(){

return(
<main> 
<Header nome='Início'/>
 <div className="feed">

    <section className="sec-top-hits">
    <h1>TOP HITS</h1>    
    <div className="div-top-hits">
        <div className="sub-div-top-hits">
            <img src={hayloft} className='conf-img-feed-music'/>
            <h2 className="tit-musica">HAYLOFT II</h2>
            <p className="tit-musica">MOTHER MOTHER</p>
        </div>
        <div className="sub-div-top-hits">
        <img src={metallica}  className='conf-img-feed-music'/>
            <h2 className="tit-musica">MASTER OF PUPPETS</h2>
            <p className="tit-musica">METALLICA</p>
        </div>
        <div className="sub-div-top-hits">
        <img src={yungblud}  className='conf-img-feed-music'/>
            <h2 className="tit-musica">MEMORIES</h2>
            <p className="tit-musica">YUNGBLUB, WILLOW</p>
        </div>
    </div>
   
    </section>
     
    <section className="sec-top-hits">
    <h1>NOSSOS ARTISTAS</h1>    
    <div className="div-top-hits">
       <img src={artista1} className='conf-img-feed-music'/> 
       <img src={artista2} className='conf-img-feed-music'/> 
       <img src={artista3} className='conf-img-feed-music'/> 
    </div>
    </section>

    <section className="sec-top-hits">
    <Link to='/TodosProdutos'>  
    <h1>NOSSOS PRODUTOS</h1>   
    </Link>   
    <div className="div-top-hits">
       <img src={caneca} className='conf-img-feed-music'/> 
       <img src={blusa} className='conf-img-feed-music'/> 
       <img src={poster} className='conf-img-feed-music'/> 
    </div>
    </section>
 </div>
 </main>   
)
}