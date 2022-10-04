import './index.scss'
import logo from '../../../../assets/images/Group 1.png'
import lupa from '../../../../assets/images/search.png'
import user from '../../../../assets/images/user.png'
import cart from '../../../../assets/images/cart.png'

export default function Header(props){
    return(
        <header className='header'>
             <div className='sub-header-1'>
             <img src={logo} className='logo-header-conf'/>
             <h2 className='nome-page'>{props.nome}</h2>
             </div>   
             <div>
             <input type='text' className='input-busca'/>
             <button className='lupa-conf'><img src={lupa} className='lupa' /></button>
             </div>
             <div className='sub-header-2'>
                <img src={user} className='conf-img-header'/>
                <img src={cart} className='conf-img-header'/>
             </div>
        </header>
    )
}