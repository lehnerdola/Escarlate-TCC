import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../../Components/Usuario/menuMinhaConta/index.js'
import { verPerfil, AlterarUsu, enviarImagemUsuario, buscarImagem } from '../../../api/usuarioAPI'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import BotaoADM from '../../Components/Adm/Button/index.js'

import storage from 'local-storage'

export default function EditarConta(){

    const id = storage('cliente-logado').id_usuario
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCPF] = useState();
    const [telefone, setTelefone] = useState();
    const [imagem, setImagem] = useState();


    async function carregarPerfil() {
        const r = await verPerfil(id);
        setNome(r[0].nome);
        setEmail(r[0].email);
        setCPF(r[0].cpf);
        setTelefone(r[0].telefone);
        setImagem(r[0].imagem_usuario);

    }

    useEffect(() =>{
        carregarPerfil();
    }, [])
    

    async function salvarClickPerfil() {
        try {
            if (!imagem) {
                const alterar = await AlterarUsu(id, nome, email, cpf, telefone);
                toast.dark('Perfil alterado com sucesso!', {
                    icon: () =>  <img src="./lightning.png" width={35}/>
                })    
            }
            else{
            const alterar = await AlterarUsu(id, nome, email, cpf, telefone);
            if (typeof (imagem) == 'object') {
                await enviarImagemUsuario(id, imagem)
            }
               
                toast.dark('Perfil alterado com sucesso!', {
                    icon: () =>  <img src="./lightning.png" width={35}/>
                })
            } 
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }


    function escolherimg() {
        document.getElementById('image').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem);
        }
    }

    return(
        <main className='div-conta'>
            <ToastContainer/>
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

        <nav className='div-editar-conta' >
            <Menu/>          
            <div className='informacao-usuario-editar-conta'>

            <div style={{ marginBottom:'2rem', marginRight:'15rem'}} onClick={escolherimg}>

            <input type='file' id='image'  onChange={e => setImagem(e.target.files[0])} className='form_input'/>

            {imagem &&
            <img src={mostrarImagem()} alt='img' style={{ borderRadius:'150px', width:"180px", height:"180px", objectFit:"cover"}}/> 
            }

            {!imagem &&
            <img src={'../../../../assets/images/Group 61.png'} width={150} className='imagem-cad-usuario' alt='img'/>
            }
            </div>

                <div className='alig-itens-usuario'>
                <p className='usuario'>Nome completo:<span style={{color:'#A83F37'}}>*</span></p>
                <input  className='input' type='text' value={nome} onChange={e => setNome(e.target.value)} />

                <p className='usuario'>Email:<span style={{color:'#A83F37'}}>*</span></p>
                <input  className='input' type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <p className='usuario'>CPF:<span style={{color:'#A83F37'}}>*</span></p>
                <input  className='input' type='text' value={cpf} onChange={e => setCPF(e.target.value)}/>
                
                <p className='usuario'>Número de telefone:<span style={{color:'#A83F37'}}>*</span></p>
                <input className='input' type='text' value={telefone} onChange={e => setTelefone(e.target.value)} />
                
                </div>
                <div className='botao' onClick={salvarClickPerfil}>
                <BotaoADM nome='Salvar alterações'/>
                </div>
                
            </div>

        </nav>
        </main>
    )
}
