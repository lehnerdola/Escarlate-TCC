import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../Common.scss'
import './lp.scss'

export default function LandingPage() {

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
         Bem vindo,
         <p className="titulo-2-lp">AO SUBMUNDO!</p>
         </motion.h1>

         <p className="txt-1-lp">apenas 
         <span className="cor-txt"> você </span> 
         pode decidir o que te destrói, 
         então afie sua 
         <span className="cor-txt"> lámina </span>
         e proteja seu 
         <span className="cor-txt"> coração </span>
         </p>
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

</nav>

<section className="faixa-3">
   <div className="">
      <img className="img-f3" src={'../../assets/images/kingofrock.png'} width={420}/>
      <h3 className="txt-f3"> 
      Escarlate é uma produtora usical especializada no Rock e na realização de sonhos  
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
<div className="sub-div-3">
   <div className="txt-1-f3">
      <h1 className="titulo-f3">
      SOBRE NOSSOS ARTISTAS
      </h1>

      <h2 className="subtitulo-f3">
      Todos os hits do momento você encontra aqui
      </h2>
      <p className="txt-f3">
         As maiores estrelas do rock voce encontra aqui
      </p>
      <p className="txt2-f3"> 
         Conheça nossos artistas
      </p>
   </div>

   <div className="artistas-f3">
      <div>

      </div>

   </div>
</div>
</nav>
      </section>
   )
}