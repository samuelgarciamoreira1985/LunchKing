// REACT
import { Link } from "react-router-dom"
// CSS
import "./MainFooter.css"
// ÍCONES
import { IoArrowRedoSharp } from "react-icons/io5";

const MainFooter = () => {

  return (

    <div className="footer-main-container">

        
        <div className="system-map-footer"> 
            <fieldset className="field-Rel">
                <h3>Relatórios do sistema</h3>
                <div className="list-rel-system">
                    <Link to="/listproducts" className="link-rel-system">Produtos</Link>
                    <Link to="/listcommands" className="link-rel-system">Comandas</Link>
                    <Link to="/listsales" className="link-rel-system">Vendas</Link>
                </div>
            </fieldset>
        </div>

        <div className="contact-footer">  
            <IoArrowRedoSharp className="icon-contact"/>
                <h3>Envie para um contato</h3>
        </div>

    </div>

  )
}

export default MainFooter