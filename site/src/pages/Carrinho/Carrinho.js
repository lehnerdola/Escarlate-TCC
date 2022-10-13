import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../Common.scss' 
import './carrinho.scss'
import Storage from 'local-storage'
import { buscarPorId } from "../../api/adminAPI";
import CarrinhoItem from "../Components/Usuario/carrinhoitem/carrinhoitem";
export default function Carrinho(){

  const [itens, setItens] = useState([]);

  async function carregarCarrinho(){
    let carrinho = Storage('carrinho');
    if(carrinho) {

      let temp = [];

      for(let produto of carrinho){
        let p = await buscarPorId(produto.id);

        temp.push( {
          produto: p,
          quantidade: produto.quantidade
        })
      }
      setItens(temp);
    }
  }

  function removerItem(id){
    let carrinho = Storage('carrinho');
    carrinho = carrinho.filter(item => item.id != id);

    Storage('carrinho', carrinho);
    carregarCarrinho();
  }

  function carregarValorTotal(){
    let total = 0;
    for (let item of itens){
      total = total + item.produto.info.preco * item.quantidade;    
    }
    return total;
  }

  useEffect(() => {
      carregarCarrinho();
  }, [])

return(
 <main className="corzinha-cart">
    <header className="header">
    <div className='sub-header-1'>
        <Link to='/feed'>
        <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf' alt="img"/>
        </Link>
             <h2 className='nome-page'>Carrinho de Compras</h2>
             </div>   
             <div>
            
             </div>
             <div className='sub-header-2'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header' alt="img"/>
             </div>
    </header>
    <div className="main-cart">

    {itens.map(item => 
      
      <CarrinhoItem item={item} removerItem={removerItem} carregarCarrinho={carregarCarrinho}/>
  )}

    <section className="align-itens-row-total-itens">

    <div className="align-itens-column-total-itens">
    <h1>Total de itens</h1>
    <p>{itens.length} itens</p>
    </div>

    <div className="align-itens-column-total-itens">
    <h1>Valor total:</h1>
    <p>R${carregarValorTotal()}</p>
    </div>

    <button>Continuar Pedido</button>

    </section>
    </div>

    
 </main>
)
}