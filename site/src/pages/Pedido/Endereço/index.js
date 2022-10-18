import {motion} from 'framer-motion';
import {Link}from 'react-router-dom';
import {useForm} from 'react-hook-form'
import CardEndereco from '../../Components/Usuario/cardEndereço/cardendereco.js';
import { listarEnderecos, salvarEndereco } from '../../../api/usuarioAPI.js'
import Storage from 'local-storage'
import './index.scss'
import { useEffect, useState } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Endereco(){

  const {register, handleSubmit, setValue, setFocus} = useForm();

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
            <p>Efetuando pagamento (1/2)</p>
        </header>
        <section className='align-row-endereco'>
        <main className='align-center-input'>
        <form className='inputs-sec' >
        <label>
        <p>Nome Remetente</p>
        <input value={nomeRemetente} onChange={e => setNomeRemetente(e.target.value)}/>
        </label>    
        <label className='align-inputs-row-cpf'>
        <label>    
        <p>CPF ou CNPJ</p>
        <input/>
        </label>
        <label>
        <p>CEP</p>
        <input type='text'value={numeroCep} onChange={e => setNumeroCep(e.target.value)}/>
        </label>
        </label> 
        <label className='align-inputs-row'>
        <label>    
        <p>Estado</p>
        <input  value={estado} onChange={e => setEstado(e.target.value)}/>
        </label>
        <label>
        <p >Cidade</p>
        <input  onChange={e => setCidade(e.target.value)}/>
        </label>
        <label>
        <p>Bairro</p>
        <input value={bairro} onChange={e => setBairro(e.target.value)}/>
        </label>
        </label> 
        <label>
        <p>Rua</p>
        <input  value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
        </label>
        <label className='align-inputs-row-cpf'>
        <label>    
        <p>N Residencial:</p>
        <input value={numeroEndereco} onChange={e => setNumeroEndereco(e.target.value)}/>
        </label>
        <label>
        <p>Complemento</p>
        <input/>
        </label>
        </label> 
        <label className='align-inputs-row-cpf' value={complemento} onChange={e => setComplemento(e.target.value)}>
        <label>    
        <p>Bloco do apartamento</p>
        <input value={blocoapt} onChange={e => setBlocoapt(e.target.value)}/>
        </label>
        <label>
        <p>Telefone para contato:</p>
        <input/>
        </label>
        </label>
        <label>
        <p>Forma de pagamento:</p>
        <select>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
        </select>
        </label>
        </form>
        <button onClick={salvarEnderecoUsuario}>Continuar</button>
        </main>
        <div className='align-meus-enderecos'>
        {enderecos.map(item => 
        <CardEndereco item={item}/>
        )}
        </div>
        </section>
        </main>
    )
}