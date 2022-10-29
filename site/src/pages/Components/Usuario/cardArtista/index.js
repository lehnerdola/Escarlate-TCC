import { API_URL } from '../../../../api/config.js';
import './index.scss';

export default function CardArtista(props){
    function exibir(imagem){
        if(!imagem)
            return `/artista-padrao.png`;
        else 
            return `${API_URL}/${imagem}`;
    }

    return(
        <main> 
            <div className='column-img'>
                <img className='img' src={exibir(props.item.imagem)} alt="" width={210} />
            </div>
        </main>
    )
}