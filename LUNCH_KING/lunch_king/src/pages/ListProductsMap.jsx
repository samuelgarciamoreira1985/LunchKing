// HOOKS
import { useState } from "react"
// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"

const url = "http://localhost:3000/products"

const ListProductsMap = () => {

  const { data: itemProduct } = useSearch(url)

  return (

    <div>
        <h2>Lista de Usuários</h2>
        <ul>
          {itemProduct && itemProduct.map((product) => (
            <li key={product.idProduct}>
            Descrição: {product.descriptionProduct}
            Valor: R$ {product.valueSaleProduct}
           
            </li>
          ))}
        </ul>
    </div>

  )
}

export default ListProductsMap