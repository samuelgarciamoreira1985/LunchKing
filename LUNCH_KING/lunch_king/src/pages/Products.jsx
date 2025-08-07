// CSS
import "./Products.css"

const Products = () => {

  return (

    <div className='container-products'> 
        <h2>GESTÃO DE PRODUTOS</h2>
        <form className="form-register-products">
            <label> {/* ID DE PRODUTOS */}
              <span>Id:</span>
              <input type="text"
              id="id-id-product"
              name="n-id-product"
              placeholder="id do produto..."
              required
              />
            </label>

            <label> {/* DESCRIÇÃO DE PRODUTOS */}
              <span>Descrição:</span>
              <input type="text"
              id="id-description-product"
              name="n-description-product"
              placeholder="descrição do produto..."
              required
              />
            </label>

            {/* INÍCIO - TIPOS DE PRODUTOS */}
            <div className="group-type-products">
              <label>
                <input type="radio" value="lanches"/>
                <span>LANCHES</span>
              </label>
              
              <label>
                <input type="radio" value="porcoes"/>
                <span>PORÇÕES</span>
              </label>
              <label>
                <input type="radio" value="pasteis"/>
                <span>PASTÉIS</span>
              </label>
              
              <label>
                <input type="radio" value="sobremesas"/>
                <span>SOBREMESAS</span>
              </label>
              <label>
                <input type="radio" value="industriais"/>
                <span>INDUSTRIAIS</span>
              </label>
              
              <label>
                <input type="radio" value="bebidas"/>
                <span>BEBIDAS</span>
              </label>
            </div> 
            {/* FIM - TIPOS DE PRODUTOS */}

              <label> {/* VALOR DE PRODUTOS */}
              <span>Valor:</span>
              <input type="text"
              id="id-sale-product"
              name="n-sale-product"
              placeholder="valor do produto..."
              required
              />
            </label>

            {/* INÍCIO - FOTO DE PRODUTOS */}
            <div className="group-photo-products">
              <img src="#" alt="foto do produto" />
              <button>Procurar</button>
            </div>
            {/* FIM - FOTO DE PRODUTOS */}

            {/* INÍCIO - BARRA DE AÇÕES - PRODUTOS */}
              <div className="group-actions-products">

              </div>
            {/* FIM - BARRA DE AÇÕES - PRODUTOS */}

        </form>

    </div>

  )
}

export default Products