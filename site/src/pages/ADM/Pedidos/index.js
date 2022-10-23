import './index.scss'
import MenuADM from '../../Components/Adm/menu';
import BotaoADM from '../../Components/Adm/Button'

export default function Pedidos() {
    return (
        <div>
            <MenuADM />

            <main className='pedidos'>
                <section className='sec-1-pedidos'>
                    <h1>Pedidos</h1>
                    <div className='align-txt-sec-1'>
                        <p>Todos Pedidos</p>
                        <p>Pedidos Enviados</p>
                        <p>Pedidos Cancelados</p>
                    </div>
                </section>

                <section className='sec-2-pedidos'>

                <article className='card-pedidos'>

                 <div className='div-column-1-card'>
                   <div className='div-id'><img src={'../../assets/images/🦆 icon _tag_.png'}/><p>ID: <span>4948</span></p></div>
                  
                   <div className='align-cartao-cliente'>
                   <div className='div-cartao-cliente'><img src={'../../assets/images/🦆 icon _Payment_.png'}/> <span>Cartão</span></div> 
                   <div className='div-cliente'><img src={'../../assets/images/🦆 icon _people_ (1).png'}/><span className='align-nmcliente'>Ana Júlia</span></div> 
                   </div>
                 </div>

                 <div className='div-column-2-card'>
                       <h2>Poster Metallica</h2>
                      <div className='align-qtd-data'><p>Qtd: 1</p> <p>24/08/2022</p></div>  
                      <div className='align-localizacao'><img  src={'../../assets/images/🦆 icon _address_.png'}/> <p>Av.Paulista,1550</p></div>
                 </div>

                 <img src={'../../assets/images/POSTER 1.png'} className='img-card-pedido'/>

                 <div className='botao-pedido'>
                    <div className='enviar-pedido'><img src={'../../assets/images/🦆 icon _truck check outline_.png'}/> <BotaoADM nome='Enviar Pedido'/></div>
                    <div className='cancelar-pedido'><img src={'../../assets/images/Group 68.png'}/> <BotaoADM nome='Cancelar Pedido'/></div>
                 </div>

                </article>

                </section>

            </main>

                      

        </div>

    )
}