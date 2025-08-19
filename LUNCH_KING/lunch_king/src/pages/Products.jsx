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

  // 0- SEM OPERAÇÃO 1-NOVO 2-ALTERAR 3-DELETAR 4-CANCELAR 5-SALVAR
  const [indexOpProducts, setIndexOpProducts] = useState(0) 
  // **************************************************************

  const [btnNewProduct, setBtnNewProduct] = useState(false)
  const [btnCancelProduct, setBtnCancelProduct] = useState(true)
  const [btnSaveProduct, setBtnSaveProduct] = useState(true)
  const [btnSearchPhotoProduct,setBtnSearchPhotoProduct] = useState(true)
  const [btnClearPhotoProduct,setBtnClearPhotoProduct] = useState(true)
  const [rbLunchTypeProduct,setRbLunchTypeProduct] = useState(true)
  const [rbPortionTypeProduct,setRbPortionTypeProduct] = useState(true)
  const [rbPastryTypeProduct,setRbPastryTypeProduct] = useState(true)
  const [rbDessertTypeProduct,setRbDessertTypeProduct] = useState(true)
  const [rbIndustrialTypeProduct,setRbIndustrialTypeProduct] = useState(true)
  const [rbDrinkTypeProduct,setRbDrinkTypeProduct] = useState(true)

  const [typeProduct,setTypeProduct] = useState("")

  const inputIdProduct = useRef(null)
  const inputDescriptionProduct = useRef(null)
  const inputValueSaleProduct = useRef(null)

  const [colorNewProducts, setColorNewProducts] = useState("#0044ffcb")
  const [colorCancelProducts, setColorCancelProducts] = useState("#0044ff96")
  const [colorSaveProducts, setColorSaveProducts] = useState("#0044ff96")
  const [colorSearchPhotoProducts,setColorSearchPhotoProducts] = useState("#0044ff96")
  const [colorClearPhotoProducts,setColorClearPhotoProducts] = useState("#0044ff96")
  const [colorRbLunchTypeProduct,setColorRbLunchTypeProduct] = useState("#000")

  const [cursorNewProduct, setCursorNewProduct] = useState("pointer")
  const [cursorCancelProduct, setCursorCancelProduct] = useState("default")
  const [cursorSaveProduct, setCursorSaveProduct] = useState("default")
  const [cursorSearchPhotoProduct,setCursorSearchPhotoProduct] = useState("default")
  const [cursorClearPhotoProduct,setCursorClearPhotoProduct] = useState("default")

    const changeTypeProduct = (e) => {
        setTypeProduct(e.target.value)
        //console.log("valor: " + e.target.value)
    }

    // 0 - ATIVO, 1 - INATIVO, 2 - CURSOR PONTEIRO, 3 - CURSOR PADRÃO, 4 - HOVER ATIVO
    const optionsProducts = ["#0044ffcb","#0044ff96","pointer","default","#7076f4"] 

    const handleClickNewProduct = () => { // BOTÃO - NOVO PRODUTO
     if (btnNewProduct == false){
        setIndexOpProducts(1)
        setBtnNewProduct(true)
        setBtnCancelProduct(false)
        setBtnSaveProduct(false)
        setBtnSearchPhotoProduct(false)
        setBtnClearPhotoProduct(false)
        setColorNewProducts(optionsProducts[1]) 
        setColorCancelProducts(optionsProducts[0])
        setColorSaveProducts(optionsProducts[0])
        setColorSearchPhotoProducts(optionsProducts[0])
        setColorClearPhotoProducts(optionsProducts[0])
        setCursorNewProduct(optionsProducts[3])
        setCursorCancelProduct(optionsProducts[2])
        setCursorSaveProduct(optionsProducts[2])
        setCursorSearchPhotoProduct(optionsProducts[2])
        setCursorClearPhotoProduct(optionsProducts[2])

        // TIPO DE PRODUTOS
        setRbLunchTypeProduct(false)
        setRbPortionTypeProduct(false)
        setRbPastryTypeProduct(false)
        setRbDessertTypeProduct(false)
        setRbIndustrialTypeProduct(false)
        setRbDrinkTypeProduct(false)

        setColorRbLunchTypeProduct(optionsProducts[4])

        inputIdProduct.current.focus()
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
                ref={inputIdProduct}
                disabled={indexOpProducts == 1 ? false : true}
                required
                />
              </label>
              <label> {/* DESCRIÇÃO DE PRODUTOS */}
                <span className="span-normal" style={{marginLeft: "-7px"}}>Descrição:</span>
                <input type="text" style={{marginLeft: "8px",width: "400px"}}
                id="id-description-product"
                name="n-description-product"
                ref={inputDescriptionProduct}
                disabled={indexOpProducts == 1 ? false : true}
                required
                />
              </label>
         

            {/* INÍCIO - TIPOS DE PRODUTOS */}
            <h4>SELECIONE UMA CATEGORIA PARA CADASTRAR O PRODUTO</h4>
            <div className="group-type-products">
              <label className="type-product" style={{backgroundColor: typeProduct === "LANCHES" ? "#b3b3b4ff" : "#cfcecb"}}>
                <input type="radio" 
                value="LANCHES"
                checked={typeProduct === "LANCHES"}
                onChange={changeTypeProduct}
                disabled={indexOpProducts == 1 ? false : true}
                />
                <MdLunchDining className="icon-type-product" />
                <span>LANCHES</span>
              </label>
              
              <label className="type-product" style={{backgroundColor: typeProduct === "PORÇÕES" ? "#b3b3b4ff" : "#cfcecb"}}>
                <input type="radio" 
                value="PORÇÕES"
                checked={typeProduct === "PORÇÕES"}
                onChange={changeTypeProduct}
                disabled={indexOpProducts == 1 ? false : true}
                />
                <GiFrenchFries className="icon-type-product"/>
                <span>PORÇÕES</span>
              </label>

              <label className="type-product" style={{backgroundColor: typeProduct === "PASTÉIS" ? "#b3b3b4ff" : "#cfcecb"}}>
                <input type="radio" 
                value="PASTÉIS"
                checked={typeProduct === "PASTÉIS"}
                onChange={changeTypeProduct}
                disabled={indexOpProducts == 1 ? false : true}
                />
                <GiSlicedBread className="icon-type-product"/>
                <span>PASTÉIS</span>
              </label>
              
              <label className="type-product" style={{backgroundColor: typeProduct === "SOBREMESAS" ? "#b3b3b4ff" : "#cfcecb"}}>
                <input type="radio" 
                value="SOBREMESAS"
                checked={typeProduct === "SOBREMESAS"}
                onChange={changeTypeProduct}
                disabled={indexOpProducts == 1 ? false : true}
                />
                <GiStairsCake className="icon-type-product"/>
                <span>SOBREMESAS</span>
              </label>

              <label className="type-product" style={{backgroundColor: typeProduct === "INDUSTRIAIS" ? "#b3b3b4ff" : "#cfcecb"}}>
                <input type="radio" 
                value="INDUSTRIAIS"
                checked={typeProduct === "INDUSTRIAIS"}
                onChange={changeTypeProduct}
                disabled={indexOpProducts == 1 ? false : true}
                />
                <FaCandyCane className="icon-type-product"/>
                <span>INDUSTRIAIS</span>
              </label>
              
              <label className="type-product" style={{backgroundColor: typeProduct === "BEBIDAS" ? "#b3b3b4ff" : "#cfcecb"}}>
                <input type="radio" 
                value="BEBIDAS"
                checked={typeProduct === "BEBIDAS"}
                onChange={changeTypeProduct}
                disabled={indexOpProducts == 1 ? false : true}
                />
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
              ref={inputValueSaleProduct}
              disabled={indexOpProducts == 1 ? false : true}
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
              <button style={{backgroundColor: colorSearchPhotoProducts, cursor: cursorSearchPhotoProduct}} disabled={btnSearchPhotoProduct} onClick={clickButtonPhoto}><IoSearchCircleSharp className="icon-button-photo"/> Procurar</button>
              <button style={{backgroundColor: colorClearPhotoProducts, cursor: cursorClearPhotoProduct}} disabled={btnClearPhotoProduct} onClick={clickButtonClearPhoto}><AiOutlineClear className="icon-button-photo"/> Limpar</button>
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