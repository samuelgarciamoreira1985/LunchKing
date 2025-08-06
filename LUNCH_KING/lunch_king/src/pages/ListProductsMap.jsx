// HOOKS
import { useState } from "react"
// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"
// CSS
import "./ListProductsMap.css"

const url = "http://localhost:3000/products"

const ListProductsMap = () => {

  const { data: itemProduct } = useSearch(url)

  return (

    <div id="list-products-container">
        <h2>PRODUTOS</h2>
        <ul id="general-list-products">
          {itemProduct && itemProduct.map((product) => (
            <li className="item-list-product" key={product.idProduct}>
            <img src={product.photoProduct} alt="foto do produto" />
            <p>{product.descriptionProduct}</p>
            <p>{product.typeProduct}</p>
            <p>R$ {product.valueSaleProduct}</p>
            </li>
          ))}
        </ul>
    </div>

  )
}

export default ListProductsMap