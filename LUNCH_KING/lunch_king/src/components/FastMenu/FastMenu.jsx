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

  return (

    <div className="fast-menu-container">
        <div className="icom-fast-menu">
            <img src={logoSystem} alt="icone do sistema"/>
            <h3>Cardápio</h3>
        </div>

        <div className="items-fast-menu">
            <div className="details-items-fast-menu">
                <a href="#"><img src={lunchFastMenu} alt="imagem_lanche" /></a>
                <p>Lanches</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src={portionFastMenu} alt="imagem_porções" /></a>
                <p>Porções</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src={pastriesFastMenu} alt="imagem_pastéis" /></a>
                <p>Pastéis</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src={dessertsFastMenu} alt="imagem_sobremesas" /></a>
                <p>Sobremesas</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src={industrialFastMenu} alt="imagem_indistrializados" /></a>
                <p>Industriais</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src={drinksFastMenu} alt="imagem_bebidas" /></a>
                <p>Bebidas</p>
            </div>
        </div>

    </div>

  )
}

export default FastMenu