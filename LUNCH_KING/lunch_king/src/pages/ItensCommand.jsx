//REACT
import { useContext, useEffect, useState } from "react"
import {ItensCommandContext} from "../context/FilterItensCommand"
// CONTEXT
import { CartContext } from "../context/ItensCartContext"
// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"
// CSS
import "./ItensCommand.css"

const url = "http://localhost:3000/products"

const ItensCommand = () => {

    const { data: itemProducts, getProductsType } = useSearch(url)

    const { indexItemCommand,setIndexItemCommand } = useContext(ItensCommandContext)
    const { item,setItem } = useContext(CartContext)

    const [countAmount,setCountAmount] = useState(0)

    const incrementAmount = (idItem) => {
        if (idItem === 1)
        setCountAmount(countAmount+1)
    }

    const addItem = (photoItem,descriptionItem,valueSaleItem,amountItem) => {
        const listCar = [photoItem,descriptionItem,valueSaleItem,amountItem] 
        setItem(...item,listCar)
        console.log("foto:" + photoItem,"descrição:" + descriptionItem, "valor: " + valueSaleItem, "qtdade: " + amountItem)
        console.log(item)
    }

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

                            <div className="buttons-counter">
                                <button type="button" onClick={() => addItem(itemProdComm.photoProduct,itemProdComm.descriptionProduct,itemProdComm.valueSaleProduct,countAmount)}>ADICIONAR</button>
                                <div className="btn-counter">
                                    <button className="btn-counter-itens" type="button" onClick={() => incrementAmount(itemProdComm.idProduct)}>+</button>
                                    <span>{itemProdComm.idProduct === 1? countAmount : "0"}</span>
                                    <button className="btn-counter-itens" type="button">-</button>
                                </div>
                            </div>
                        </div>
                    </li>
                  
            ))}
        </ul>
    </div>

  )
}

export default ItensCommand