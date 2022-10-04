import './index.scss'
import Header from '../Components/Usuario/header/index.js'

export default function TodosProdutos(){
    return(
        <main className='todos-prod'>
            <Header/>
            <div className='faixa-1-todos-prod'>
            <h1>Conheça nossos produtos</h1>
            <h2>Mais vendidos   canecas   camisetas   posters ...</h2>
            </div>
        </main>
    )
}