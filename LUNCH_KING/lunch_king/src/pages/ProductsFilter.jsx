//REACT
import { useContext } from "react"
import { FilterProdContext } from "../Context/FilterProductsContext"

const ProductsFilter = () => {

    const { indexFilterProducts,setIndexFilterProducts } = useContext(FilterProdContext)

  return (

    <div>
        <h1>FILTRO DE PRODUTOS</h1>
        <h3>{indexFilterProducts}</h3>
    </div>

  )
}

export default ProductsFilter