// REACT
import { useState, useRef, useEffect } from "react"
import { useSearch } from "../hooks/useSearch.jsx"
// CSS
import "./Products.css"
// ÍCONES
import { MdLunchDining, MdCreateNewFolder  } from "react-icons/md" 
import { GiFrenchFries, GiSlicedBread, GiStairsCake  } from "react-icons/gi"
import { FaCandyCane } from "react-icons/fa6"
import { RiDrinks2Fill } from "react-icons/ri"
import { IoSearchCircleSharp } from "react-icons/io5"
import { GrUpdate } from "react-icons/gr"
import { TiCancel } from "react-icons/ti"
import { BiSolidSave } from "react-icons/bi"
import { AiOutlineClear } from "react-icons/ai"
// IMAGENS
import photo_product from "../assets/images/products_photo.png"

const url = "http://localhost:3000/products"

const Products = () => {

  const [valueSaleProduct, setValueSaleProduct] = useState("")
  const { data: products } = useSearch(url)

  // INÍCIO - GESTÃO DE FOTOS DOS PRODUTOS
    const [photoProduct, setPhotoProduct] = useState(null)
    const inputPhotoProduct = useRef(null)
    const [indexPhotoProduct, setIndexPhotoProduct] = useState(false)

    const clickButtonPhoto = () => { 
      inputPhotoProduct.current.click()
    }

    const handleOpenPhotoProduct = (e) => {
      const filePhotoProduct = e.target.files[0]
      if (filePhotoProduct){
        const readerPhotoProduct = new FileReader()
        readerPhotoProduct.onload = (e) => {
          setPhotoProduct(e.target.result)
          setIndexPhotoProduct(true)
        }
        readerPhotoProduct.readAsDataURL(filePhotoProduct)
        console.log("foto" + filePhotoProduct)
      }
    }

    const clickButtonClearPhoto = (e) => {
      e.preventDefault()
      setIndexPhotoProduct(false)
    }

  // FIM - GESTÃO DE FOTOS DOS PRODUTOS

  // INÍCIO - FUNÇÃO PARA USO DE MÁSCARA DE VALOR DE VENDA
  const checkValue = (valueSale) => {
        const decimalPart = valueSale.toString().split(".")[1] || ''
        const numberDecimal = decimalPart.length
        if (numberDecimal === 1)
        return numberDecimal + "0"
      }
  // FIM - FUNÇÃO PARA USO DE MÁSCARA DE VALOR DE VENDA

  // INÍCIO - VALIDAÇÃO DE INPUT DE VALOR DE VENDA
  const validDigits = (textDigited) => {
    return textDigited.replace(/[^0-9.]/g, "")
  }

  const ChangeMaskValueSale = (e) => {
    const updateTextDigited = validDigits(e.target.value)
    setValueSaleProduct(updateTextDigited)
  }
  // FIM - VALIDAÇÃO DE VALOR DE VENDA

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
              value={valueSaleProduct}
              onChange={(e) => ChangeMaskValueSale(e)}
              required
              />
              <span className="info-sale-product">* Digite o valor do produto</span>
            </label>

            {/* INÍCIO - FOTO DE PRODUTOS */}
            <div className="group-photo-products">
                <input type="file" className="area-photo-product"
                id="photo-open-product"
                accept="image/png, image/jpeg"
                onChange={handleOpenPhotoProduct}
                ref={inputPhotoProduct}
                style={{ display: 'none' }}
                />
                {!indexPhotoProduct && <img className="area-photo-product" src={photo_product} alt="foto carregada" />}
                {indexPhotoProduct && <img className="area-photo-product" src={photoProduct} alt="foto carregada" />}
              <button onClick={clickButtonPhoto}><IoSearchCircleSharp className="icon-button-photo"/> Procurar</button>
              <button onClick={clickButtonClearPhoto}><AiOutlineClear className="icon-button-photo"/> Limpar</button>
            </div>
            {/* FIM - FOTO DE PRODUTOS */}

            {/* INÍCIO - BARRA DE AÇÕES - PRODUTOS */}
              <div className="group-actions-products">
                  <button type="button"><MdCreateNewFolder className="icon-actions-products"/> Novo</button>
                  <button type="button"><GrUpdate className="icon-actions-products"/> Alterar</button>
                  <button type="button"><TiCancel className="icon-actions-products"/> Cancelar</button>
                  <button type="button"><BiSolidSave className="icon-actions-products"/> Salvar</button>
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
              {products && products.map((items) => (
                <tr key={items.idProduct}>
                     <td>{items.idProduct}</td> 
                     <td>{items.descriptionProduct}</td> 
                     <td>{items.typeProduct}</td> 
                     <td>R$ {checkValue(items.valueSaleProduct) ? items.valueSaleProduct + "0" : items.valueSaleProduct}</td> 
                </tr>
              ))}
                
            </tbody>
            </table>
        </div>

    </div>

  )
}

export default Products