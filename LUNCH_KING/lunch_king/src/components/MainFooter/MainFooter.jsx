// REACT
import { Link } from "react-router-dom"
import { useState } from "react";
import Modal from "react-modal";
// CSS
import "./MainFooter.css"
// ÍCONES
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";

const MainFooter = () => {

    const [isOpenEmail,setIsOpenEmail] = useState(false) // MODAL - EMAIL

    const openModalEmail = () => {
        setIsOpenEmail(true)
    }

    const closeModalEmail = () => {
        setIsOpenEmail(false)
    }


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
                <button type="button" onClick={openModalEmail}>RECLAME AQUI !!!</button>
                <Modal
                isOpen={isOpenEmail}
                onRequestClose={closeModalEmail}
                ariaHideApp={false}
                id="modal-email-footer"
                >
                    <div className="container-modal-email">
                        <form>
                            <h2>Contatar</h2>

                            <div className="modal-name-email">
                                <label>
                                    <span>Nome</span>
                                    <input type="text"
                                    name="name-email"
                                    />
                                    <FaUserAlt className="icon-name-email"/>
                                </label>

                                <label>
                                    <span>Email</span>
                                    <input type="email"
                                    name="descricao-email"
                                    />
                                    <MdEmail className="icon-descricao-email"/>
                                </label>
                            </div>

                            <div className="modal-subject-messenger-btnSend">
                                <label className="modal-subject">
                                    <span>Assunto</span>
                                    <input type="text"
                                    name="subject-email"
                                    />
                                </label>
                                <label className="modal-messenger">
                                    <span>Mensagem</span>
                                    <textarea 
                                    name="messenger-email" 
                                    id="id-messenger-email">
                                    </textarea>
                                </label>
                                <button type="button" className="btnSendMessenger"><RiMailSendFill className="icon-btnSendMessenger"/>Enviar mensagem</button>
                            </div>

                        </form>
                    </div>
                </Modal>
        </div>

    </div>

  )
}

export default MainFooter