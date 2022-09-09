import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import './lp.scss'

export default function LandingPage() {

   return (
      <section className="section-mae">
         <header className="cabeçalho-lp"> 

            <img src="./images/Group 1.png" width={200} height={60}/>

            <div className="botao-cabeçalho-lp">
            <button className="bt-login">
            <p className="bt-login-txt">Login</p>
            </button>
            <button className="bt-cadastro">
            <p className="bt-cadastro-txt">Cadastre-se</p>
            </button>
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

         <motion.img src="./images/zyro-image.png" width={500}
         animate={{rotate:360}}
         transition={{ease:"linear", delay:0, duration:2, type:"spring"}}
         />
         </nav>

         <nav className="faixa-2-lp">

            <div className="sub-div-2-lp">

               <img src="./images/IDOLS-removebg-preview (1) 1.png"/>

               <div className="texto-f2-lp">

                  <h2  className="titulo-3-lp"> O que é uma pessoa, se não as marcas que deixa para trás? </h2>
                  <p className="txt-f2-lp">Porquê a felicidade é breve, mas a história é duradoura e, no fim, todo mundo quer ser lembrado.</p>
               </div>

               <div className="desc-f2">
                  <div className="desc">
                     <img src="./images/chapeuemaozinha-removebg-preview (1) 1.png"/>
                     <p className="txt-desc">
                     Ouça suas músicas favoritas ao vivo aqui!
                     </p>
                  </div>

                  <div className="desc">
                     <img src="./images/vamp sem fundo 1.png"/>
                     <p className="txt-desc">
                     Maior acessibilidade a produtos originais do seu ídolo do rock.
                     </p>
                  </div>

                  <div className="desc">
                     <img src="./images/Project_1-removebg-preview (1) 1.png"/>
                     <p className="txt-desc">
                     Todos os lançamentos e pré-vendas exclusivas aqui 
                     </p>
                  </div>

                  
               </div>

            </div>

         </nav>

      </section>
   )
}