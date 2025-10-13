// REACT
import { Link } from "react-router-dom"
// CSS
import "./MainFooter.css"
// ÍCONES
import { TiSocialTwitter } from "react-icons/ti"
import { BsFacebook } from "react-icons/bs"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaWhatsappSquare } from "react-icons/fa"
import { RiMailSendFill } from "react-icons/ri"
import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

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
            <fieldset style={{border:"2px solid white",borderRadius:"10px"}}>
                <form className="form-contact-footer">
                    <h3>Envie para um contato</h3>
                    <div className="container-name-email">
                        <label>
                             <FaUserAlt className="icon-form-name"/>
                            <input type="text"
                            id="id-name-contact"
                            name="n-name-contact"
                            placeholder="Digite o nome..."
                            required
                            max={50}
                            min={1}
                            />
                
                        </label>
                        <label>
                            <MdEmail className="icon-form-email"/>
                            <input type="text"
                            id="id-email-contact"
                            name="n-email-contact"
                            placeholder="Digite o email..."
                            required
                            />
                
                        </label>
                         <button id="btn-enviar-contato"><RiMailSendFill /> Enviar</button>
                    </div>
                </form>
            </fieldset>
        </div>

    </div>

  )
}

export default MainFooter