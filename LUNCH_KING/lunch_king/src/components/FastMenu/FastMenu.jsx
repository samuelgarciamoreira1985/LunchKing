// REACT
import { Link } from "react-router-dom"
import { useContext } from "react"
import { FilterProdContext } from "../../Context/FilterProductsContext"
//CSS
import "./FastMenu.css"
//IMAGENS
import logoSystem from "../../assets/images/logo-system.png"
import lunchFastMenu from "../../assets/images/Lunch_FastMenu.png"
import portionFastMenu from "../../assets/images/Portion_FastMenu.png"
import pastriesFastMenu from "../../assets/images/Pastries_FastMenu.png"
import dessertsFastMenu from "../../assets/images/Desserts_FastMenu.png"
import industrialFastMenu from "../../assets/images/Industrial_FastMenu.png"
import drinksFastMenu from "../../assets/images/Drinks_FastMenu.png"

const FastMenu = () => {

    const { indexFilterProducts,setIndexFilterProducts } = useContext(FilterProdContext)

    const valueFilterProducts = (valueFilter) => {
        setIndexFilterProducts(valueFilter)
        //console.log("valor do filtro: " + indexFilterProducts)
    }

  return (

    <div className="fast-menu-container">
        <div className="icom-fast-menu">
            <img src={logoSystem} alt="icone do sistema"/>
            <h3>Cardápio</h3>
        </div>

        <div className="items-fast-menu">
            <div className="details-items-fast-menu">
                <Link to="/productsfilter"><img src={lunchFastMenu} alt="imagem_lanche" onClick={() => valueFilterProducts(1)}/></Link>
                <p>Lanches</p>
            </div>
            <div className="details-items-fast-menu">
                <Link to="/productsfilter"><img src={portionFastMenu} alt="imagem_porções" onClick={() => valueFilterProducts(2)}/></Link>
                <p>Porções</p>
            </div>
            <div className="details-items-fast-menu">
                <Link to="/productsfilter"><img src={pastriesFastMenu} alt="imagem_pastéis" onClick={() => valueFilterProducts(3)}/></Link>
                <p>Pastéis</p>
            </div>
            <div className="details-items-fast-menu">
                <Link to="/productsfilter"><img src={dessertsFastMenu} alt="imagem_sobremesas" onClick={() => valueFilterProducts(4)}/></Link>
                <p>Sobremesas</p>
            </div>
            <div className="details-items-fast-menu">
                <Link to="/productsfilter"><img src={industrialFastMenu} alt="imagem_indistrializados" onClick={() => valueFilterProducts(5)}/></Link>
                <p>Industriais</p>
            </div>
            <div className="details-items-fast-menu">
                <Link to="/productsfilter"><img src={drinksFastMenu} alt="imagem_bebidas" onClick={() => valueFilterProducts(6)}/></Link>
                <p>Bebidas</p>
            </div>
        </div>

    </div>

  )
}

export default FastMenu