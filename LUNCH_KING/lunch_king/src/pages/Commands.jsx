//REACT
import { Tooltip } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
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

    const [colorStatusCommand,setColorStatusCommand] = useState(1) // COR DO STATUS DA COMANDA
    const [hourCommand,setHourCommand] = useState("")

    // TROCA DE STATUS DA COMANDA
    const changeColorStatusCommand = () => {
        if (colorStatusCommand === 1)
            setColorStatusCommand(2)
        else if (colorStatusCommand === 2)
            setColorStatusCommand(1)
    } // ************************************

    // TROCA DE ÍNDICE DA COMANDA
    const changeIndexCommand = (fieldItem) => {
        setIndexItemCommand(fieldItem)
    }// ************************************

    // COLETA DE DATA E HORA DO SISTEMA
    const dateHourSystemCommand = new Date()
    const dateSystemCommand = dateHourSystemCommand.toLocaleDateString()
    const hourSystemCommand = dateHourSystemCommand.toLocaleTimeString()
    const handleHourSystemCommand = () => {
        setHourCommand(hourSystemCommand)
    }

    // **************************************

  return (

    <div className="container-commands">
         <h2>GESTÃO DE COMANDAS</h2>

         <form className="form-register-commands">
            {/* ID,MESA,TIPO DE CONSUMO ***********************************************/}
                <div className="group-initial-command">
                    <label className="initial-field"> {/* ID DE COMANDA */}
                        <span className="span-normal">REGISTRO</span>
                        <input type="text" 
                        className="form-command-input-text"
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
                        className="form-command-input-text"
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

                        <div className="finally-cart-command">
                            <div className="group-itens-command-cart"> {/* PRODUTOS SELECIONADOS */}
                                <div className="area-icon-selection">
                                    <FaShoppingCart className="icon-selection"/>
                                    <span>CARRINHO</span>
                                </div>
                            </div>
                             {/* ÍNICIO - VALORES FINAIS DA COMANDA*/}
                              <div className="group-finally-command">
                                        <label className="finally-command-single">
                                            <span>VALOR TOTAL</span>
                                            <input type="text"
                                            className="form-command-input-text"
                                            style={{width:"108px",backgroundColor:"#0055c4b2",color:"#fffbfbff",fontWeight:"400",textAlign:"center"}}
                                            id="id-amount-command"
                                            name="n-amount-command"
                                            disabled={true}
                                            required
                                            />
                                        </label>
                                        <label className="finally-command-single">
                                            <span>DATA</span>
                                            <input type="text"
                                            className="form-command-input-text"
                                            style={{width:"110px",textAlign:"center",backgroundColor:"#0055c4b2",color:"#fffbfbff",fontWeight:"400"}}
                                            value={dateSystemCommand}
                                            id="id-date-command"
                                            name="n-date-command"
                                            disabled={true}
                                            required
                                            />
                                        </label>
                                        <label className="finally-command-single">
                                            <button type="button" className="button-hour-command" onClick={handleHourSystemCommand}>HORA</button>
                                            <input type="text"
                                            className="form-command-input-text"
                                            style={{width:"100px",textAlign:"center",backgroundColor:"#0055c4b2",color:"#fffbfbff",fontWeight:"400"}}
                                            id="id-hour-command"
                                            name="n-hour-command"
                                            value={hourCommand}
                                            disabled={true}
                                            required
                                            />
                                        </label>
                                        <label className="finally-command-single">
                                            <button type="button" className="button-status-command" onClick={changeColorStatusCommand}>SITUAÇÃO</button>
                                            <input type="text"
                                            className="form-command-input-text"
                                            style={{width:"153px", backgroundColor:colorStatusCommand === 1 ? "#ff0000" : "#018a01", color:"#ddd", textAlign:"center",fontWeight:"500"}}
                                            value={colorStatusCommand === 1 ? "PENDENTE" : "FINALIZADO"}
                                            id="id-status-command"
                                            name="n-status-command"
                                            disabled={true}
                                            required
                                            />
                                        </label>
                              </div>
                              {/* FIM - VALORES FINAIS DA COMANDA*/}
                        </div>
                        
                    </div>
                          {/* FIM - ITENS DA COMANDA*/}          

         </form>
    </div>

  )
}

export default Commands