//REACT
import { Tooltip } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useContext } from "react"
import {ItensCommandContext} from "../context/FilterItensCommand"
//CSS
import "./Commands.css"
//ÍCONES
import { PiMotorcycleFill } from "react-icons/pi"
import { FaCartArrowDown,FaShoppingCart } from "react-icons/fa"
import { FaNotesMedical,FaCandyCane } from "react-icons/fa6"
import { MdLunchDining } from "react-icons/md" 
import { GiFrenchFries,GiSlicedBread,GiStairsCake } from "react-icons/gi"
import { RiDrinks2Fill } from "react-icons/ri"
import { ImArrowRight,ImArrowLeft  } from "react-icons/im"

const Commands = () => {

    const { indexItemCommand,setIndexItemCommand } = useContext(ItensCommandContext)

    const changeIndexCommand = (fieldItem) => {
        setIndexItemCommand(fieldItem)
        console.log("valor: " + fieldItem)
    }

  return (

    <div className="container-commands">
         <h2>GESTÃO DE COMANDAS</h2>

         <form className="form-register-commands">
            {/* ID,MESA,TIPO DE CONSUMO ***********************************************/}
                <div className="group-initial-command">
                    <label className="initial-field"> {/* ID DE COMANDA */}
                        <span className="span-normal">REGISTRO</span>
                        <input type="text"
                        style={{width:"85px"}}
                        id="id-id-command"
                        name="n-id-command"
                        required
                        />
                    </label>
                    {/* TIPO DE CONSUMO */}
                    <div className="group-type-consumption-command">
                        
                        <div className="subgroup-type-consumption-command">
                            <label className="type-consumption">{/* CONSUMO NO LOCAL */}
                                <input type="radio"
                                />
                                <FaCartArrowDown className="icon-type-consumption"/>
                                <span className="span-pers">CONSUMO NO LOCAL</span>
                            </label>

                            <label className="type-consumption">{/* DELIVERY */}
                                <input type="radio"
                                />
                                <PiMotorcycleFill className="icon-type-consumption"/>
                                <span className="span-pers">DELIVERY</span>
                            </label>
                        </div>
                    </div>
                    <label className="initial-field"> {/* ID DE COMANDA */}
                        <span className="span-normal">MESA</span>
                        <input type="text"
                        style={{width:"85px"}}
                        id="id-table-command"
                        name="n-table-command"
                        required
                        />
                    </label>
                </div>
            {/* FIM ***********************************************/}

                          {/* INÍCIO - ITENS DA COMANDA*/}
                    <div className="general-group-itens-command">
                       
                        <div className="group-itens-command-selection"> {/* PRODUTOS PARA SELECIONAR */}
                             
                            <div className="area-icon-selection">
                                
                                <FaNotesMedical className="icon-selection"/>
                                <span>ESTOQUE</span>
                                
                                    <Tooltip title="Clique aqui para exibir o estoque de LANCHES!">
                                    <Link to="/commands/itenscommandhome"><MdLunchDining className="icon-selection-lunch" onClick={() => changeIndexCommand("LANCHES")}/></Link>
                                    </Tooltip>
                                    <Tooltip title="Clique aqui para exibir o estoque de PORÇÕES!">
                                    <Link to="/commands/itenscommandhome"><GiFrenchFries className="icon-selection-portion" onClick={() => changeIndexCommand("PORÇÕES")}/></Link>
                                    </Tooltip>
                                    <Tooltip title="Clique aqui para exibir o estoque de PASTÉIS!">
                                     <Link to="/commands/itenscommandhome"><GiSlicedBread className="icon-selection-pastry" onClick={() => changeIndexCommand("PASTÉIS")}/></Link>
                                    </Tooltip>
                                    <Tooltip title="Clique aqui para exibir o estoque de SOBREMESAS!">
                                     <Link to="/commands/itenscommandhome"><GiStairsCake className="icon-selection-dessert" onClick={() => changeIndexCommand("SOBREMESAS")}/></Link>
                                    </Tooltip>
                                    <Tooltip title="Clique aqui para exibir o estoque de INDUSTRIAIS!">
                                    <Link to="/commands/itenscommandhome"><FaCandyCane className="icon-selection-industrial" onClick={() => changeIndexCommand("INDUSTRIAIS")}/></Link>
                                    </Tooltip>
                                    <Tooltip title="Clique aqui para exibir o estoque de BEBIDAS!">
                                    <Link to="/commands/itenscommandhome"><RiDrinks2Fill className="icon-selection-drink" onClick={() => changeIndexCommand("BEBIDAS")}/></Link>
                                    </Tooltip> 
                            </div>
                              <Outlet/>
                        </div>

                        <div className="transition-itens-command">
                            <ImArrowRight className="iconArrow-left"/>
                            <ImArrowLeft className="iconArrow-rigth"/>
                        </div>

                        <div className="group-itens-command-cart"> {/* PRODUTOS SELECIONADOS */}
                            <div className="area-icon-selection">
                                <FaShoppingCart className="icon-selection"/>
                                <span>CARRINHO</span>
                            </div>
                        </div>
                        
                    </div>
                          {/* FIM - ITENS DA COMANDA*/}

         </form>
    </div>

  )
}

export default Commands