
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import { verPerfil } from '../../../api/usuarioAPI'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import storage from 'local-storage'

export default function EditarConta(){
   // const id = storage('cliente-logado').id_usuario
    const [usuario, setUsuario] = useState([]);
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, seCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, seEmail] = useState('');
    const [imagem, setImagem] = useState('');
    const [id, setId] = useState();

    const { idParam } = useParams();

    async function carregarPerfilUsuario() {
        const resp = await verPerfil(id);
        setUsuario(resp) 
    }

    useEffect(() => {
        if(idParam){
            carregarPerfilUsuario();
        }
    }, [])

    useEffect(()=>{
            carregarPerfilUsuario();
    }, [])

    return(
        <main className='div-conta'>
            <header className='header'>
             <div className='sub-header-1'>
             <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'/>
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
            <div className='infos-usuario'>
            {usuario.map(item =>
            <div>
                <h1 className='usuario'>nome: {item.nome}</h1>
                <h1 className='usuario'>email: {item.email}</h1>
                <h1 className='usuario'>CPF: {item.cpf}</h1>
                <h1 className='usuario'>telefone: {item.telefone}</h1>
            </div>
                    
                )}
            </div>
        </nav>
        </main>
    )
}
