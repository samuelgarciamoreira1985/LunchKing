// ÍCONES
import { FaShoppingCart } from "react-icons/fa"
import { IoClipboardSharp } from "react-icons/io5"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { MdOutlineHelp } from "react-icons/md"
import { IoIosPeople } from "react-icons/io"

//CSS
import "./NavMainHeader.css"

const NavMainHeader = () => {

  return (

    <div className="nav-main-container">
        <div className="nav-details">
          <a href="#" id="first-nav"><FaShoppingCart /> Produtos</a>
          <a href="#"><IoClipboardSharp /> Comandas</a>
          <a href="#"><RiMoneyDollarCircleFill /> Vendas</a>
          <a href="#"><MdOutlineHelp /> Ajuda</a>
          <a href="#" id="last-nav"><IoIosPeople /> Quem somos</a>
        </div>
    </div>
    
  )
}

export default NavMainHeader