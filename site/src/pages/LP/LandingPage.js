import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { listarArtistasHome } from '../../api/usuarioAPI.js';
import { useState, useEffect } from 'react';
import '../../Common.scss';
import './lp.scss';
import CardArtista from '../Components/Usuario/cardArtista';
import Rodape from '../Components/Usuario/Rodape';

export default function LandingPage() {
   const [ artistas, setArtistas ] = useState([]);

   async function listar(){
      const r = await listarArtistasHome();
      setArtistas(r);
   }

   useEffect(() => {
      listar();
   }, [])

   return (
      <section className="section-mae">
         <header className="cabeçalho-lp"> 

         <motion.img src={'../../assets/images/Group 1.png'} width={200} height={60}
            whileHover={{ scale: 1.3 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}/>

            <div className="botao-cabeçalho-lp">
           < Link to = '/login' >
            <button className="bt-login">
            <p className="bt-login-txt"> Login </p> 
            </button>
            </Link>
            
            <Link to='/Cadastro'>
            <button className="bt-cadastro">
            <p className="bt-cadastro-txt">Cadastre-se</p>
            </button>
            </Link>
            </div>

         </header>
         
         <nav className="faixa-1-lp">

         <div className="sub-div-1-lp">
         <motion.h1
         className="titulo-1-lp"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, y:[-100,0]}}
         transition={{ delay: 0, duration: 1 }}
         >
         Bem vindos,
         <h2 className="titulo-2-lp">AO SUBMUNDO!</h2>
         </motion.h1>
         <div className="text-desc0">
         <p className="txt-1-lp">Apenas 
         <span className="cor-txt"> você </span> 
         pode decidir o que te destrói, 
         então afie sua 
         <span className="cor-txt"> lámina </span>
         e proteja seu 
         <span className="cor-txt"> coração </span>
         </p>
         </div>
         </div>

         <motion.img src={'../../assets/images/zyro-image.png'} width={500}
         animate={{rotate:360}}
         transition={{ease:"linear", delay:0, duration:2, type:"spring"}}
         />
         </nav>

         <nav className="faixa-2-lp">

<div className="sub-div-2-lp">

   <div className="texto-f2-lp">
   <motion.img src={'../../assets/images/idols.png'} width={310}/>
      <div className="texto-1-f2-lp">
      <h2  className="titulo-3-lp"> O que é uma pessoa se não as <span className="cor-txt">marcas</span> que deixa para trás? </h2>
      <p className="txt-f2-lp">Porquê a felicidade é breve, mas a história é duradoura e, no fim, todo mundo quer ser lembrado.</p>
      </div>
      
   </div>
<div className="desc-icons">
   <div className="desc-lp">
      <div className="desc">
         <img className="icon" src={'../../assets/images/moon.png'} width={250}/>
         <p className="txt-desc">
         Descubra os hits dos seus artistas favoritos
         </p>
      </div>

      <div className="desc">
         <img className="icon2" src={'../../assets/images/triangleicon.png'} width={250}/>
         <p className="txt-desc">
         Maior acessibilidade a produtos originais do seu ídolo do rock
         </p>
      </div>

      <div className="desc">
         <img className="icon3" src={'../../assets/images/hearticon.png'} width={250}/>
         <p className="txt-desc">
         Todos os lançamentos e pré-vendas exclusivas aqui!
         </p>
      </div>
      </div>
      
   </div>

</div>

</nav>

<section className="faixa-3">
   <div className="div-f3">
      <img className="img-f3" src={'../../assets/images/kingofrock.png'} width={420}/>
      <h3 className="txt-f3"> 
      Escarlate é uma produtora musical especializada no Rock e na realização de sonhos  
      </h3>
      <h3 className="txt1-f3"> 
      Dos nossos marujos em busca de uma voz para serem encantados 
      </h3>      
      <h3 className="txt2-f3"> 
      Escarlate é a produtora mais desenvolvida no Brasil, e rumores dizem ser a melhor ja vista! 
      Aqui seus sonhos se tornam realidade 
      </h3>
   </div>
</section>

<nav className="faixa-4">
<div className="sub-div-4">
   <div className="txt-1-f4">
      <h1 className="titulo-f4">
      SOBRE NOSSOS ARTISTAS
      </h1>

      <h2 className="subtitulo-f4">
      Todos os hits do momento você encontra aqui
      </h2>
      <p className="txt-f4">
         As maiores estrelas do rock voce encontra aqui
      </p>
      <p className="txt2-f4"> 
         Conheça nossos artistas
      </p>
   </div>

   <div className="artistas-f4">
      <div>
         {artistas.map(item =>
            <CardArtista item={item}/> 
         )}
      </div>

   </div>
</div>
</nav>

<section className="faixa-5">
   <div>
      <img className="img-f5" src={'../../assets/images/knife.png'} />
      <h1 className="tit-f5"> Sobre nós: </h1>
      <p className="txt-f5"> 
      Fundada em 2022, a Escarlate nasceu de uma conversa entre amigos que que queriam resgatar os bons tempos do Rock N' Roll. A Escarlate é uma produtora musical especializada no rock e suas vertentes, que organiza shows e turnês por todo o Brasil, com foco no estado de São Paulo e redondezas
      </p>
   </div>
</section>

<section className="faixa-6">
   <div>
      <img className="img-f6" src={'../../assets/images/faquinha.png'} />
      <img className="img2-f6" src={'../../assets/images/ampulheta.png'} />
      <img className="img3-f6" src={'../../assets/images/rosa.png'} />
      <img className="img4-f6" src={'../../assets/images/rosa.png'} />
      <img className="img5-f6" src={'../../assets/images/rosa.png'} />
      <img className="img6-f6" src={'../../assets/images/rosa.png'} />
      <p className="txt-f6">
      Reconhecida como umas das principais produtoras do Brasil, nossa prioridade é oferecer o máximo em qualidade ao público e aos profissionais envolvidos.
      </p>
   </div>
</section>

<section className="faixa-7">
   <div>
      <img className="img-f7" src={'../../assets/images/stayhm.png'} />
      <p className="txt-f7">
      Sabemos da velocidade da informação hoje em dia e do quão rápido a música está mudando, por isso contamos com uma equipe de produtores musicais, engenheiros e assistentes totalmente qualificados, atualizados e prontos pra qualquer tipo de projeto que envolva uma coisa em especial: música boa. 
      </p>
      <p className="txt1-f7">
      A Escarlate já realizou inúmeros shows em vários lugares do Brasil, promovendo intercâmbio cultural e oferecendo aos amantes da música a possibilidade de ver, ao vivo, espetáculos com artistas de diversas nacionalidades e diferente estilos do Rock.
      </p>
   </div>
</section>

<section className="faixa-8">
   <div className="div-f8">
      <p className="txt-f8">
      O objetivo é proporcionar ao fã sempre uma experiência musical memorável, montando uma integração com as bandas com agendamento de shows e incluindo espaços novos no cenário paulistano, auxiliando na programação, produção e divulgação. Nosso lema é  “Não deixar o Rock morrer nunca.”
      </p>
   </div>
</section>

<footer>
   <Rodape />
</footer>

      </section>
   )
}