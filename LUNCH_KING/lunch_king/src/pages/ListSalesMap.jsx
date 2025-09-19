// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"
//CSS
import "./ListSalesMap.css"

const url = "http://localhost:3000/sales"

const ListSalesMap = () => {

    const { data: listSales } = useSearch(url)

  return (

    <div className='list-container-sales'>
        <h2>VENDAS</h2>

        <ul className="general-list-sales">
            
        </ul>

    </div>

  )
}

export default ListSalesMap