// CSS
import "./MainHeader.css"

const MainHeader = () => {

  return (

    <div className="main-header-container">
        <div className="icon-header">
            <img src="#" alt="Ícone do sistema" />
        </div>

        <div className="search-main">

            <form className="form-inputs-header">
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
                <input type="submit" value="Buscar"/>
            </form>
        </div>

    </div>

  )
}

export default MainHeader