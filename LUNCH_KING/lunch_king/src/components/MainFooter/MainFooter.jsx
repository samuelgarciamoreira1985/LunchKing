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

        <div className="social-media-footer">                    
                     <div className="social-details">
                         <a href="#">
                             <FaWhatsappSquare className="icon-social"/>
                         </a>
                         <a href="#">
                             <BsFacebook className="icon-social"/>
                         </a>
                         <a href="#">
                             <FaSquareInstagram className="icon-social"/>
                         </a>
                         <a href="#">
                             <TiSocialTwitter className="icon-social"/>
                         </a>
                     </div>
        </div>

        <div className="system-map-footer"> 
            <h3>Mapa do sistema</h3>
            <a href="#">Usuários</a>
            <Link to="/listproducts">Produtos</Link>
            <Link to="/listcommands">Comandas</Link>
            <a href="#">Vendas</a>
        </div>

        <div className="contact-footer">
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
        </div>

    </div>

  )
}

export default MainFooter