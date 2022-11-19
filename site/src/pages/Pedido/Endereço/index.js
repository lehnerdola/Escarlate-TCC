import {motion} from 'framer-motion';
import {Link}from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { listarEnderecos, salvarEndereco } from '../../../api/usuarioAPI.js'
import BotaoADM from '../../Components/Adm/Button/index.js'
import Storage from 'local-storage'
import './index.scss'
import { useEffect, useState } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Endereco(){

  const [enderecos, setEnderecos] = useState([]);
  const [nomeRemetente, setNomeRemetente] =  useState('');
  const [estado, setEstado] =  useState('');

  const [cidade, setCidade] =  useState('');
  const [bairro, setBairro] =  useState('');
  const [blocoapt, setBlocoapt] =  useState('');
  const [logradouro, setLogradouro] =  useState('');
  const [complemento, setComplemento] =  useState('');
  const [numeroEndereco, setNumeroEndereco] =  useState('');
  const [numeroCep, setNumeroCep] =  useState('');

  async function salvarEnderecoUsuario(){
    try {
    const id = Storage('cliente-logado').id_usuario;
    const r = await salvarEndereco(id, nomeRemetente, estado, cidade, bairro, blocoapt, logradouro,complemento,numeroEndereco,numeroCep);
    toast.dark('endereco cadastrado')
    } catch (err) {
      toast.error(err.response.data.erro);
    }
    
  }


  async function carregarEnderecos(){
    const id =Storage('cliente-logado').id_usuario;
    const r = await listarEnderecos(id);
    setEnderecos(r)
  }

  useEffect(() => {
    carregarEnderecos();
  },[])

    return(
        <main className='endereço'>
          <ToastContainer/>
            <header className='header'>
             <div className='sub-header-1'>
                <Link to='/Feed'>
                <motion.img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf'
                whileHover={{ scale: 1.1}}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                />
                </Link>
             </div>   
             <div>
           
             </div>
            <p className='pag-ender'>Efetuando pagamento (1/2)</p>
        </header>
        <section className='align-row-endereco'>
        <main className='align-center-input'>
        <form className='inputs-sec' >
        <label>
        <p className='nome-input'>Nome Remetente: <span style={{color: 'red'}}>*</span></p>
        <input className='input-M' value={nomeRemetente} onChange={e => setNomeRemetente(e.target.value)}/>
        </label>    
        <label className='align-inputs-row-cpf'>
        <label>
        <p className='nome-input'>CEP: <span style={{color: 'red'}}>*</span></p>
        <input className='input' type='text'value={numeroCep} onChange={e => setNumeroCep(e.target.value)}/>
        </label>
        </label> 
        <label className='align-inputs-row'>
        <label>    
        <p className='nome-input'>Estado:</p>
        <input  className='input' value={estado} onChange={e => setEstado(e.target.value)}/>
        </label>
        <label>
        <p className='nome-input'>Cidade:</p>
        <input className='input' onChange={e => setCidade(e.target.value)}/>
        </label>
        <label>
        <p className='nome-input'>Bairro:</p>
        <input  className='input'value={bairro} onChange={e => setBairro(e.target.value)}/>
        </label>
        </label> 
        <label>
        <p className='nome-input'>Rua:</p>
        <input className='input-M' value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
        </label>
        <label className='align-inputs-row-cpf'>
        <label>    
        <p className='nome-input'>N° Residencial: <span style={{color: 'red'}}>*</span></p>
        <input className='input' value={numeroEndereco} onChange={e => setNumeroEndereco(e.target.value)}/>
        </label>
        <label>
        <p className='nome-input'>Complemento:</p>
        <input className='input'/>
        </label>
        </label> 
        <label className='align-inputs-row-cpf' value={complemento} onChange={e => setComplemento(e.target.value)}>
        <label>    
        <p className='nome-input'>Bloco do apartamento:</p>
        <input className='input' value={blocoapt} onChange={e => setBlocoapt(e.target.value)}/>
        </label>
        </label>
        <label>
        </label>
        </form>
        <div className='bt-endereço'>
        <div onClick={salvarEnderecoUsuario}>
        <BotaoADM nome='Salvar endereço'/>
        </div>
        <div>
        <Link to='/Pagamento'>
        <BotaoADM nome='Continuar Pagamento'/>
        </Link>  
        </div>
        </div>
        
        </main>
             </section>
        </main>
    )
}