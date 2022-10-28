import './index.scss';
export default function CardArtista(){
    function exibir(imagem){
        if(!imagem)
            return `/artista-padrao.png`;
        else 
            return `${API_URL}/${imagem}`;
    }

    return(
        <main> 
            <div className='column-img'>
                <img className='img' src={exibir(props.item.imagem)} width={210} />
            </div>
        </main>
    )
}