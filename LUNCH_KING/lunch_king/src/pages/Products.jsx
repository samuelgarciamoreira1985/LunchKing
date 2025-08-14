// REACT
import { useState, useRef, useEffect } from "react"
import { useSearch } from "../hooks/useSearch.jsx"
// CSS
import "./Products.css"
// ÍCONES
import { MdLunchDining, MdCreateNewFolder, MdDelete   } from "react-icons/md" 
import { GiConsoleController, GiFrenchFries, GiSlicedBread, GiStairsCake  } from "react-icons/gi"
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
  const [idProduct, setIdProduct] = useState("")
  const { data: products } = useSearch(url)

  // INÍCIO - HABILITAR E DESABILITAR BOTÕES DE NAVEGAÇÃO
  const [btnNewProduct, setBtnNewProduct] = useState(false)

  const [colorNewProducts, setColorNewProducts] = useState("#0044ffcb")
  const [colorCancelProducts, setColorCancelProducts] = useState("#0044ff96")
  const [colorSaveProducts, setColorSaveProducts] = useState("#0044ff96")
  const [cursorNewProduct, setCursorNewProduct] = useState("pointer")
  const [cursorCancelProduct, setCursorCancelProduct] = useState("default")
  const [cursorSaveProduct, setCursorSaveProduct] = useState("default")

  const [btnCancelProduct, setBtnCancelProduct] = useState(true)
  const [btnSaveProduct, setBtnSaveProduct] = useState(true)
    // 0 - ATIVO, 1 - INATIVO, 2 - CURSOR PONTEIRO, 3 - CURSOR PADRÃO
    const optionsProducts = ["#0044ffcb","#0044ff96","pointer","default"] 

    const handleClickNewProduct = () => { // BOTÃO - NOVO PRODUTO
     if (btnNewProduct == false){
        setBtnNewProduct(true)
        setBtnCancelProduct(false)
        setBtnSaveProduct(false)
        setColorNewProducts(optionsProducts[1]) 
        setColorCancelProducts(optionsProducts[0])
        setColorSaveProducts(optionsProducts[0])
        setCursorNewProduct(optionsProducts[3])
        setCursorCancelProduct(optionsProducts[2])
        setCursorSaveProduct(optionsProducts[2])
     }
    }

  // FIM - HABILITAR E DESABILITAR BOTÕES DE NAVEGAÇÃO

  // INÍCIO - GESTÃO DE FOTOS DOS PRODUTOS
    const [photoProduct, setPhotoProduct] = useState(null)
    const inputPhotoProduct = useRef(null)
    const [indexPhotoProduct, setIndexPhotoProduct] = useState(false)

    const clickButtonPhoto = () => { 
      inputPhotoProduct.current.click()
      console.log("valor:" + btnNewProduct)
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

  // INÍCIO - VALIDAÇÃO DE INPUT DE ID
  const validDigitsId = (textDigitedId) => {
    return textDigitedId.replace(/[^0-9]/g, "")
  }

  const ChangeMaskIdProduct = (e) => {
    const updateTextDigitedId = validDigitsId(e.target.value)
    setIdProduct(updateTextDigitedId)
  }
  // FIM - VALIDAÇÃO DE ID

  return (

    <div className='container-products'> 
        <h2>GESTÃO DE PRODUTOS</h2>
        <form className="form-register-products">
           
              <label> {/* ID DE PRODUTOS */}
                <span className="span-normal" style={{marginLeft: "-186px"}}>Id:</span>
                <input type="text" style={{marginLeft: "7px", width: "100px"}}
                id="id-id-product"
                name="n-id-product"
                value={idProduct}
                onChange={(e) => ChangeMaskIdProduct(e)}
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
                  <button type="button" style={{backgroundColor: colorNewProducts, cursor: cursorNewProduct}} disabled={btnNewProduct} onClick={handleClickNewProduct} ><MdCreateNewFolder className="icon-actions-products"/> Novo</button>
                  <button type="button" style={{backgroundColor: colorCancelProducts, cursor: cursorCancelProduct}} disabled={btnCancelProduct}><TiCancel className="icon-actions-products"/> Cancelar</button>
                  <button type="button" style={{backgroundColor: colorSaveProducts, cursor: cursorSaveProduct}} disabled={btnSaveProduct}><BiSolidSave className="icon-actions-products"/> Salvar</button>
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
                     <td className="line-update-product"><button className="btn-del-update-product"><GrUpdate className="icon-update-product"/></button></td>
                     <td className="line-del-product"><button className="btn-del-update-product"><MdDelete className="icon-delete-product"/></button></td>
                </tr>
              ))}
                
            </tbody>
            </table>
        </div>

    </div>

  )
}

export default Products