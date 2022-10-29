import './index.scss';

export default function ReportarCliente(cliente){
    return(
        <main>
            <div className='popup'>
                <h2> tem certeza de que deseja reportar {cliente.nome} ? </h2>
                <img className='img' src={'../assets/images/Spam.png'} alt="" width={90} />
                <button className='btts'> Sim </button>
                <button bttn> Não </button>
            </div>
        </main>
    )
}