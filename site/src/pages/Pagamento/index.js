import { Link } from "react-router-dom";
import  './pagamento.scss';
import { motion } from "framer-motion";
import CardEndereco from '../Components/Usuario/cardEndereço/cardendereco.js';
import { listarEnderecos, salvarNovoPedido} from '../../api/usuarioAPI.js'
import { useState, useEffect } from "react";
import Storage from 'local-storage';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Pagamento(){
    const [enderecos, setEnderecos] =useState([]);
    const [frete, setFrete] = useState('');

    const [idEndereco, setIdEndereco] =useState();
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [codSeguranca, setCodSeguranca] = useState();
    const [vencimento, setVencimento] = useState('');
    const [parcelas, setParcelas] = useState();
    const [tipo, setTipo] = useState('');

    async function carregarEnderecos(){
        const id =Storage('cliente-logado').id_usuario;
        const r = await listarEnderecos(id);
        setEnderecos(r)
      }
    
      useEffect(() => {
        carregarEnderecos();
      },[])

    async function salvarPedido(){  
        try 
        {
            let produtos = Storage('carrinho');  
            let id = Storage('cliente-logado').id_usuario;
        
            let pedido = 
            {  
                 frete:frete,
                 idEndereco:idEndereco,
                 tipoPagamento:'Cartão',
                 cartao : {
                   nomeCartao:nomeCartao,
                   numeroCartao:numeroCartao,
                   codSeguranca:codSeguranca,
                   vencimento:vencimento,
                   parcelas:parcelas,
                   formaPagamento:tipo,
                },
                 produtos :[ 
                  
                ]
              }  
              const r = await salvarNovoPedido(id, pedido)
              toast.success('pedido realizado')
              Storage('carrinho', [])      
        } 
        catch (err) 
        {
            toast.error(err.response.data.erro)    
        }
    }
    
    return(
        <main className="pagamento">
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
            <p>Efetuando pagamento (2/2)</p>
        </header>

        <article className="align-itens-input-pag">
            <section className="inputs-pagamento">
            <div>
                <p>Número do cartão:</p>
                <input value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                <p>Nome registrado no cartão:</p>
                <input value={nomeCartao} onChange={e => setNomeCartao(e.target.value)}/>
            </div>
            <div>
                <p>CVV:</p>
                <input value={codSeguranca} onChange={e => setCodSeguranca(e.target.value)}/>
                <p>Validade:</p>
                <input value={vencimento} onChange={e => setVencimento(e.target.value)}/>
            </div>
            <div>
                <p>Tipo Pagamento:</p>
                <select value={tipo} onChange={e => setTipo(e.target.value)}>
                    <option>Débito</option>
                    <option>Crédito</option>
                </select>
            </div>
            <div>
                <p>Frete:</p>
                <select value={frete} onChange={e => setFrete(e.target.value)}>
                    <option value={"Sedex"}>Sedex(25,00)</option>
                    <option value={"Normal"}>Normal(15,00)</option>
                </select>
            </div>
            </section>
            <button onClick={salvarPedido}>Finalizar Pagamento</button>
            <div className='meus-enderecos'>
                
            {enderecos.map(item => 
            <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id === idEndereco}/>
            )}
        </div>
        </article>
 </main>
   )
}