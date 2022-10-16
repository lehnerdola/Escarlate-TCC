export default function CardEndereco({ item:{nomeRemetente, estado, cidade, bairro, blocoapt, logradouro,complemento,numeroEndereco,numeroCep} }){
    return(
        <div>
            
        <div className='meus-enderecos'>
        <h1>{nomeRemetente}</h1>
        <p>{estado}</p>
        <p>{cidade}</p>
        <p>{bairro}</p>
        <p>{logradouro}</p>
        </div>
        </div>
    )
}