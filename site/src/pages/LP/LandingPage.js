import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import './lp.scss'

export default function LandingPage() {

   return (
      <div className="div-mae-lp">

         <header className="container-lp">
            <img src="../images/Group 1.png" className="img-header" />
            <div className="sub-div-lp">
               <Link to='/login'>
                  <button className="bt-login">
                     <p className="txt-bt-header">Login</p>
                  </button>
               </Link>
               <button className="bt-cadastro">
                  <p className="txt-bt-header">Cadastre-se</p>
               </button>
            </div>
         </header>

         <nav className="container-lp-1">

            <div className="sub-div-lp-1">
               <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: [-500, 0] }}
                  transition={{ delay: 0.8, duration: 2 }}
               >
                  <h1 className="txt-nav-1">Bem vindos,</h1>
               </motion.h1>
               <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: [-800, 0] }}
                  transition={{ delay: 0.9, duration: 2 }}
               >
                  <h2 className="txt-nav-2">ao submundo!</h2>
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 2 }}

               >
                  <p className="txt-nav-3">Apenas
                     <span className="span-nav"> você </span>
                     pode decidir o que te destrói,
                     então afie sua
                     <span className="span-nav"> lámina </span>
                     e proteja seu
                     <span className="span-nav"> coração </span>
                  </p>
               </motion.p>
            </div>
            <div className="div-img">
               <div className="sub-div-img">
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1, x: [-20, 0], y: [50, 0] }}
                     transition={{ delay: 0.8, duration: 2 }}
                  >
                     <img src="../images/d5h43a2-74548ae0-db39-4e8b-9336-63b99f95d263.png" className="conf-img-guitar" />
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1, x: [20, 0], y: [50, 0] }}
                     transition={{ delay: 0.8, duration: 2 }}
                  >
                     <img src="../images/d5h43a2-74548ae0-db39-4e8b-9336-63b99f95d263.png" className="conf-img-guitar-2" />
                  </motion.div>

               </div>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 2 }}
               >
                  <img src='../images/lv-0-20220806160123-unscreen.gif' className="conf-gif" />
               </motion.div>

            </div>

         </nav>

         <section className="container-lp-2">

            <div className="sub-container-faixa-2">
               <img src='../images/IDOLS-removebg-preview (1) 1.png' className="conf-idol" />

               <div className="div-txt-faixa-2">
                  <p className="txt-faixa-2">
                     O que é uma pessoa, se não as <span className="span-faixa-2">marcas</span> que deixa para trás?
                  </p>
                  <p className="txt-2-faixa-2">Porquê a felicidade é breve, mas a história é duradoura e, no fim, todo mundo quer ser lembrado.</p>
               </div>

            </div>

            <div className="sub-container-2-faixa-2">

            <div className="sub-container-img-1">   
            <img src="../images/chapeuemaozinha-removebg-preview (1) 1.png" className="conf-chapeu"/>
            <p className="txt-img-1">Ouça suas músicas favoritas ao vivo aqui</p>
            </div>

            <div className="sub-container-img-2">   
            <img src="../images/vamp sem fundo 1.png"  className="conf-vamp"/>
            <p className="txt-img-2">Maior acessibilidade a produtos originais do seu ídolo do rock</p>
            </div>

            <div className="sub-container-img-3">   
            <img src="../images/Project_1-removebg-preview (1) 1.png" className="conf-guitar"/>
            <p className="txt-img-3">Todos os lançamentos e pré-vendas exclusivas aqui </p>
            </div>

            </div>
         </section>
      </div>
   )
}