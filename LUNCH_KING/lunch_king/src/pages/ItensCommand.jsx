//REACT
import { useContext, useEffect } from "react"
import {ItensCommandContext} from "../context/FilterItensCommand"
// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"
// CSS
import "./ItensCommand.css"

const url = "http://localhost:3000/products"

const ItensCommand = () => {

    const { data: itemProducts, getProductsType } = useSearch(url)

    const { indexItemCommand,setIndexItemCommand } = useContext(ItensCommandContext)

    useEffect(() => {
        getProductsType(url,indexItemCommand)
      },[indexItemCommand])

  return (

    <div className="itens-command-container">
        <ul className="general-list-itens-command">
            {itemProducts && itemProducts.map((itemProdComm) => (
                
                    <li className="item-list-command" key={itemProdComm.idProduct}>
                        <div className="photo-product-item-command"><img src={itemProdComm.photoProduct} alt="foto do produto" /></div>
                        <div className="item-list-command-secound">
                            <p>{itemProdComm.descriptionProduct}</p>
                            <p style={{color:"red"}}>R$ {itemProdComm.valueSaleProduct}</p>
                            <button>ADICIONAR</button>
                        </div>
                    </li>
                  
            ))}
        </ul>
    </div>

  )
}

export default ItensCommand