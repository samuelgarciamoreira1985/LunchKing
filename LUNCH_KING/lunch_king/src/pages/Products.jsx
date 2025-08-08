// CSS
import "./Products.css"
// ÍCONES
import { MdLunchDining } from "react-icons/md" 
import { GiFrenchFries, GiSlicedBread, GiStairsCake  } from "react-icons/gi"
import { FaCandyCane } from "react-icons/fa6"
import { RiDrinks2Fill } from "react-icons/ri"
import { useState } from "react"

const Products = () => {

  return (

    <div className='container-products'> 
        <h2>GESTÃO DE PRODUTOS</h2>
        <form className="form-register-products">
           
              <label> {/* ID DE PRODUTOS */}
                <span className="span-normal" style={{marginLeft: "-186px"}}>Id:</span>
                <input type="text" style={{marginLeft: "7px", width: "100px"}}
                id="id-id-product"
                name="n-id-product"
                required
                />
              </label>
              <label> {/* DESCRIÇÃO DE PRODUTOS */}
                <span className="span-normal" style={{marginLeft: "-7px"}}>Descrição:</span>
                <input type="text" style={{marginLeft: "8px",width: "400px"}}
                id="id-description-product"
                name="n-description-product"
                required
                />
              </label>
         

            {/* INÍCIO - TIPOS DE PRODUTOS */}
            <h4>SELECIONE UMA CATEGORIA PARA CADASTRAR O PRODUTO</h4>
            <div className="group-type-products">
              <label className="type-product">
                <input type="radio" value="lanches"/>
                <MdLunchDining className="icon-type-product" />
                <span>LANCHES</span>
              </label>
              
              <label className="type-product">
                <input type="radio" value="porcoes"/>
                <GiFrenchFries className="icon-type-product"/>
                <span>PORÇÕES</span>
              </label>

              <label className="type-product">
                <input type="radio" value="pasteis"/>
                <GiSlicedBread className="icon-type-product"/>
                <span>PASTÉIS</span>
              </label>
              
              <label className="type-product">
                <input type="radio" value="sobremesas"/>
                <GiStairsCake className="icon-type-product"/>
                <span>SOBREMESAS</span>
              </label>

              <label className="type-product">
                <input type="radio" value="industriais"/>
                <FaCandyCane className="icon-type-product"/>
                <span>INDUSTRIAIS</span>
              </label>
              
              <label className="type-product">
                <input type="radio" value="bebidas"/>
                <RiDrinks2Fill className="icon-type-product"/>
                <span>BEBIDAS</span>
              </label>
            </div> 
            {/* FIM - TIPOS DE PRODUTOS */}

              <label style={{paddingTop: "10px"}}> {/* VALOR DE PRODUTOS */}
              <span className="span-normal" style={{marginLeft: "-69px"}}>R$:</span>
              <input type="text" style={{marginLeft: "7px", width: "100px"}}
              id="id-sale-product"
              name="n-sale-product"
              required
              />
              <span className="info-sale-product">* Digite o valor do produto</span>
            </label>

            {/* INÍCIO - FOTO DE PRODUTOS */}
            <div className="group-photo-products">
              <img src="#" alt="foto do produto" />
              <button>Procurar</button>
            </div>
            {/* FIM - FOTO DE PRODUTOS */}

            {/* INÍCIO - BARRA DE AÇÕES - PRODUTOS */}
              <div className="group-actions-products">
                  <button type="button" className="blue-color">Novo</button>
                  <button type="button" className="green-color">Alterar</button>
                  <button type="button" className="red-color">Cancelar</button>
                  <button type="button" className="green-color">Salvar</button>
              </div>
            {/* FIM - BARRA DE AÇÕES - PRODUTOS */} 
        </form>

        {/* INÍCIO - LISTA DE PRODUTOS CADASTRADOS */} 
        <div className="list-products-container"> 
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DESCRIÇÃO</th>
                  <th>TIPO DE PRODUTO</th>
                  <th>VALOR</th>
                </tr>
              </thead>
            
            <tbody>
                <tr>
                  <td>1</td>
                  <td>COCA-COLA</td>
                  <td>BEBIDAS</td>
                  <td>R$ 3.50</td>
                </tr>
            </tbody>
            </table>
        </div>

    </div>

  )
}

export default Products