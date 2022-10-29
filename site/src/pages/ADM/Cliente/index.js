import MenuADM from '../../Components/Adm/menu/index';
import './index.scss';
import { useState, useEffect } from "react";

export default function Clientes(){
    const [ clientes, setClientes ] = useState([]);

    async function carregarClientes(){
        const carregarClientes = await listarTodosClientes();
        setClientes(carregarClientes);
    }

    useEffect(() => {
        carregarClientes();
    }, [])

    return(
        <main>
        <MenuADM/>
        <main className='main-clientes'>
            <section className='content-clientes'>
            <h1>Clientes</h1>
            <section className='align-caixas'>            
                <div className='caixa-clientes'>
                    {clientes.map (item =>
                          <div>
                            <img src={'../../../assets/images/cliente-padrao.png'} width={80}/>
                            <p> {item.nome} </p>
                            <p> {item.email} </p>
                            <img src={'../../../assets/images/lumi.png'} width={20}/>
                            <img src={'../../../assets/images/list.png'} width={20}/>
                            <span> 
                                <img src={'../../../assets/images/map'} width={20}/>
                                <p> {item.endereco} </p> 
                            </span>
                            <p> compras feitas {item.total} </p>
                          </div>        
                    )}
            </div>
            </section>
            </section>

        </main>
        </main>

    )
}
