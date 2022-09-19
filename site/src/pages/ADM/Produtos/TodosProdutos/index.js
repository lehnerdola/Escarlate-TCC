import BotaoADM from "../../../Components/Adm/Button";
import CardPAH from "../../../Components/Adm/Card"
import MenuADM from "../../../Components/Adm/menu";
import queencamiseta from '../../../../assets/images/queen camiseta 1.png';
import { Link } from "react-router-dom";
import './index.scss'

export default function Produtos(){
    return(
        <div className='produtos-adm'>
            <MenuADM/>

            <div className='content-produtos-adm'>
                <div className="align-itens-produtos">
                <h1 className='tit-produtos'>Todos os Produtos</h1>
                <Link to='/CadProdutos'>
                <BotaoADM nome='Adicionar Novo Produto'/>
                </Link>
                </div>
                
                <CardPAH txt1='Camiseta Queen cor laranja' txt2='R$00,00' txt3='Disponível' txt4='Ver tamanhos disponíveis' img={queencamiseta} btnome='APAGAR PRODUTO' btnome2='EDITAR PRODUTO'/>

                <CardPAH txt1='Camiseta Queen cor laranja' txt2='R$00,00' txt3='Disponível' txt4='Ver tamanhos disponíveis' img={queencamiseta} btnome='APAGAR PRODUTO' btnome2='EDITAR PRODUTO'/>

            </div>
        </div>
    )
}