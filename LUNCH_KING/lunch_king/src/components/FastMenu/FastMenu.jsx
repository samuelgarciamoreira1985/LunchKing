//CSS
import "./FastMenu.css"
//IMAGENS
import logoSystem from "../../assets/images/logo-system.png"
import lunchFastMenu from "../../assets/images/Lunch_FastMenu.png"


const FastMenu = () => {

  return (

    <div className="fast-menu-container">
        <div className="icom-fast-menu">
            <img src={logoSystem} alt="icone do sistema"/>
            <h3>Cardápio</h3>
        </div>

        <div className="items-fast-menu">
            <div className="details-items-fast-menu">
                <a href="#"><img src={lunchFastMenu} alt="" /></a>
                <p>Lanches</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src="#" alt="" /></a>
                <p>Porções</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src="#" alt="" /></a>
                <p>Pastéis</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src="#" alt="" /></a>
                <p>Spbremesas</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src="#" alt="" /></a>
                <p>Industriais</p>
            </div>
            <div className="details-items-fast-menu">
                <a href="#"><img src="#" alt="" /></a>
                <p>Bebidas</p>
            </div>
        </div>

    </div>

  )
}

export default FastMenu