// CSS
import "./MainHeader.css"
//IMAGENS
import logoSystemMainHeader from "../../assets/images/logo-system.png"

const MainHeader = () => {

  return (

    <div className="main-header-container">
        <div className="icon-header">
            <a href=""><img src={logoSystemMainHeader} alt="Ícone do sistema" /></a>
        </div>

            <form className="form-inputs-search">
                <fieldset>
                    <legend>Selecione um padrão de busca</legend>
                    <select name="n-search-options" id="id-search-options">
                        <option value="userHeaderMain">USUÁRIOS</option>
                        <option value="productHeaderMain">PRODUTOS</option>
                        <option value="commandHeaderMain">COMANDAS</option>
                        <option value="saleHeaderMain">VENDAS</option>
                    </select>
                    <input type="text"
                    id="id-search-fast"
                    name="n-search-fast"
                    placeholder="Digite o valor da pesquisa..."
                    required
                    max={50}
                    min={1}
                    />
                    <input type="submit" id="id-btn-buscar" value="Buscar"/>
                </fieldset>
            </form>
        </div>

  )
}

export default MainHeader