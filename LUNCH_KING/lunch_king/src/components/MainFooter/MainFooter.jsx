import "./MainFooter.css"

const MainFooter = () => {

  return (

    <div className="footer-main-container">

        <div className="social-media-footer">
            <ul>
                <li>
                    Wats Zap
                </li>
            </ul>
             <ul>
                <li>
                    Facebook
                </li>
            </ul>
             <ul>
                <li>
                    Instagram
                </li>
            </ul>
             <ul>
                <li>
                    Twitter
                </li>
            </ul>
        </div>

        <div className="system-map-footer">
            <h3>Mapa do sistema</h3>
            <a href="#">Usuários</a>
            <a href="#">Produtos</a>
            <a href="#">Comandas</a>
            <a href="#">Vendas</a>
        </div>

        <div className="contact-footer">
            <form className="form-contact-footer">
                <h3>Envie um contato</h3>
                <label>
                    <span>Nome</span>
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
                    <span>E-mail</span>
                    <input type="text" 
                    id="id-email-contact"
                    name="n-email-contact"
                    placeholder="Digite o email..."
                    required
                    />
                </label>
                <label>
                    <span>Mensagem</span>
                    <textarea 
                    name="n-mensagem" 
                    id="id-mensagem"
                    placeholder="Digite a mensagem"
                    >
                    </textarea>
                </label>
                <label id="validate-security-contact">
                    <input type="checkbox" />
                    <span>Não sou um robô</span>
                    <img src="#" alt="imagem de validação de segurança" />
                </label>

                <button id="btn-enviar-contato">Enviar</button>
            </form>
        </div>

        <div className="info-footer">

        </div>

    </div>

  )
}

export default MainFooter