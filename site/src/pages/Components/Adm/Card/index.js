import './index.scss'
import BotaoADM from '../Button'

export default function CardPAH(props){
    return(
    <div className='cardpah'>
        <img src={props.img} width={170}/>
        <div className='txt-cardpah'>
        <p className='txt-conf-cardpah'>{props.txt1}</p>
        <p className='txt-conf-cardpah'>{props.txt2}</p>
        <p className='txt-conf-cardpah'>{props.txt3}</p>
        <p className='txt-conf-cardpah-underline'>{props.txt4}</p>
        <p className='txt-conf-cardpah'>{props.txt5}</p>
        </div>
        <div className='bt-card-pah'>
        <BotaoADM nome={props.btnome}/>
        <BotaoADM nome={props.btnome2}/>
        </div>
    </div>
    )
}