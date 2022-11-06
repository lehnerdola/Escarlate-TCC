import './conta.scss'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'

import { verPerfil } from '../../../api/usuarioAPI'
import { useEffect, useState } from 'react'
import storage from 'local-storage'


export default function MinhaConta(){

    const id = storage('cliente-logado').id_usuario

    const [usuario, setUsuario] = useState([]);
    const [ imagem, setImagem] = useState()
    const [cpf, setCPF] = useState()
    const [telefone, setTelefone] = useState()
    const navigate = useNavigate();

    async function carregarPerfilUsuario() {
        const resp = await verPerfil(id);
        setUsuario(resp) 
    }

    useEffect(()=>{
            carregarPerfilUsuario();
    }, [])

    
    return(
        <main className='div-conta'>
            <header className='header'>
             <div className='sub-header-1'>
                <Link to='/Feed'>
                <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>   
                </Link>
             
             <h2 className='nome-page'>Minha Conta</h2>
             </div>   
             <div>
            
             </div>
             <div className='sub-header-2'>
                <Link to='/Carrinho'>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
                </Link>
             </div>
        </header>

        <nav>
        <Menu/>         

            {usuario.map(item =>
 
            <div className='informacao-usuario'>
            {item.imagem_usuario &&
             <img  src={`http://localhost:5000/${item.imagem_usuario}`} alt='' className='img-user'/>
            }
            {!item.imagem_usuario &&
                <Link to='/editarperfil' >
                <p style={{marginTop:'3rem', textDecoration:'none'}}>Adicionar foto de perfil</p> 
            </Link> 
            }
            <div className='div-informacoes'>
                <h1 className='usuario'><span>Nome:</span>  {item.nome}</h1>
                <h1 className='usuario'><span>Email:</span> {item.email}</h1>
                {item.cpf &&
                    <h1 className='usuario'><span>CPF:</span> {item.cpf}</h1>
                }
                {item.telefone &&
                    <h1 className='usuario'><span>Telefone:</span> {item.telefone}</h1>
                }
                {(!item.cpf||!item.telefone) &&
                    <Link to='/editarperfil' >
                        <p style={{marginTop:'3rem', textDecoration:'none'}}>Adicionar mais informações</p>
                    </Link> 
                }
                
            </div>
                    
            </div>
            )}

        </nav>
        </main>
    )
}