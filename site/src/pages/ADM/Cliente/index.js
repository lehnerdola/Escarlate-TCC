import MenuADM from '../../Components/Adm/menu/index'
import './index.scss'

export default function Clientes(){
    return(
        <main>
        <MenuADM/>
        <main className='main-clientes'>
            <section className='content-clientes'>
            <h1>Clientes</h1>
            <section className='align-caixas'>            
                <div className='caixa-clientes'>
                <img src='../../../assets/images/Queen.jpg' width={80} style={{borderRadius:"50px"}}/>
                <div>
                <p>Ana Júlia</p>
                <p>naju@gmail.com</p>
                <p>SP, Avenida Paulista</p>
                </div>
                <div>
                <p>Compras feitas</p>
                <p>2(total)</p>
                </div>
                
            </div>
             <div className='caixa-clientes'>
                <img src='../../../assets/images/Queen.jpg' width={80} style={{borderRadius:"50px"}}/>
                <div>
                <p>Ana Júlia</p>
                <p>naju@gmail.com</p>
                <p>SP, Avenida Paulista</p>
                </div>
                <div>
                <p>Compras feitas</p>
                <p>2(total)</p>
                </div>
            </div>
            <div className='caixa-clientes'>
                <img src='../../../assets/images/Queen.jpg' width={80} style={{borderRadius:"50px"}}/>
                <div>
                <p>Ana Júlia</p>
                <p>naju@gmail.com</p>
                <p>SP, Avenida Paulista</p>
                </div>
                <div>
                <p>Compras feitas</p>
                <p>2(total)</p>
                </div>
            </div>
            <div className='caixa-clientes'>
                <img src='../../../assets/images/Queen.jpg' width={80} style={{borderRadius:"50px"}}/>
                <div>
                <p>Ana Júlia</p>
                <p>naju@gmail.com</p>
                <p>SP, Avenida Paulista</p>
                </div>
                <div>
                <p>Compras feitas</p>
                <p>2(total)</p>
                </div>
            </div>
            </section>
            </section>

        </main>
        </main>

    )
}
