// ÍCONES
import { FaShoppingCart } from "react-icons/fa";

//CSS
import "./NavMainHeader.css"

const NavMainHeader = () => {

  return (

    <div className="nav-main-container">
        <div className="nav-details">
          <a href="#" id="first-nav"><FaShoppingCart />Produtos</a>
          <a href="#">Comandas</a>
          <a href="#">Vendas</a>
          <a href="#">Ajuda</a>
          <a href="#" id="last-nav">Quem somos</a>
        </div>
    </div>
    
  )
}

export default NavMainHeader