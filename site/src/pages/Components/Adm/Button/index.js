import './index.scss'

export default function BotaoADM(props){
    return(
        <div>
            <button className='botao-adm'><p>{props.nome}</p></button>
        </div>
    )
}