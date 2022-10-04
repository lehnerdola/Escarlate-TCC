import './index.scss'

export default function Header(props){
    return(
        <header className='header'>
             <div className='sub-header-1'>
             <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
             <h2 className='nome-page'>{props.nome}</h2>
             </div>   
             <div>
             <input type='text' className='input-busca'/>
             <button className='lupa-conf'><img src={'../../../../assets/images/search.png'} className='lupa' /></button>
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
             </div>
        </header>
    )
}