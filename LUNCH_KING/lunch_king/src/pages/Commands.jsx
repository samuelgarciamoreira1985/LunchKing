//REACT
import { Tooltip } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useContext, useState, useRef } from "react"
import {ItensCommandContext} from "../context/FilterItensCommand"
import { useRequests } from "../hooks/useRequests"
// CONTEXT
import { CartContext } from "../context/ItensCartContext"
//CSS
import "./Commands.css"
//ÍCONES
import { PiMotorcycleFill } from "react-icons/pi"
import { FaCartArrowDown,FaShoppingCart } from "react-icons/fa"
import { FaNotesMedical,FaCandyCane } from "react-icons/fa6"
import { MdLunchDining, MdCreateNewFolder, MdDelete } from "react-icons/md" 
import { GiFrenchFries,GiSlicedBread,GiStairsCake } from "react-icons/gi"
import { RiDrinks2Fill } from "react-icons/ri"
import { ImArrowRight,ImArrowLeft  } from "react-icons/im"
import { TiCancel } from "react-icons/ti"
import { BiSolidSave } from "react-icons/bi"
import { GrUpdate } from "react-icons/gr"

const url = "http://localhost:3000/commands"

const Commands = () => {

    const { data: commands } = useRequests(url)

    const { item,setItem } = useContext(CartContext)

    const { indexItemCommand,setIndexItemCommand } = useContext(ItensCommandContext)

    const [colorStatusCommand,setColorStatusCommand] = useState(1) // COR DO STATUS DA COMANDA
    const [hourCommand,setHourCommand] = useState("")

    const [valueColorConsumption,setValueColorConsumption] = useState("") // VALOR DO CONSUMO

    const tableCommandRef = useRef(null) // REF DA MESA DA COMANDA...

    const [typeConumptionCommand,setTypeConsumptionCommand] = useState("") // TIPO DE CONSUMO - [REQUEST]
    const [tableCommand,setTableCommand] = useState("") // MESA - [REQUEST]

    const [disableTableCommand,setDisableTableCommand] = useState(true) // ESTADO - ATIVA E DESATIVA MESA 

    const checkValue = (valueSaleComm) => {
        const decimalPart = valueSaleComm.toString().split(".")[1] || ''
        const numberDecimal = decimalPart.length
        if (numberDecimal === 1)
        return numberDecimal + "0"    
      }

    //TIPO DE CONSUMO
    const changeTableCommand = (e) => {
        setTypeConsumptionCommand(e.target.value)
        console.log("Consumo: " + e.target.value)
        if (e.target.value === "LOCAL"){
            setDisableTableCommand(false)
            setValueColorConsumption("LOCAL_COLOR")
            setTableCommand("")
            tableCommandRef.current.focus()
        }
        else if (e.target.value === "DELIVERY"){
            setDisableTableCommand(true)
            setValueColorConsumption("DELIVERY_COLOR")
            setTableCommand("00")
        }
    }
    //---------------------

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
                                value="LOCAL"
                                checked={typeConumptionCommand === "LOCAL"}
                                onChange={changeTableCommand}
                                />
                                <FaCartArrowDown className="icon-type-consumption"/>
                                <span className="span-pers" style={{color:valueColorConsumption === "LOCAL_COLOR" ? "#7076f4" : "black",textShadow:valueColorConsumption === "LOCAL_COLOR" ? ".5px .5px 1px black" : ""}}>CONSUMO NO LOCAL</span>
                            </label>

                            <label className="type-consumption">{/* DELIVERY */}
                                <input type="radio"
                                value="DELIVERY"
                                checked={typeConumptionCommand === "DELIVERY"}
                                onChange={changeTableCommand}
                                />
                                <PiMotorcycleFill className="icon-type-consumption"/>
                                <span className="span-pers" style={{color:valueColorConsumption === "DELIVERY_COLOR" ? "#7076f4" : "black",textShadow:valueColorConsumption === "DELIVERY_COLOR" ? ".5px .5px 1px black" : ""}}>DELIVERY</span>
                            </label>
                        </div>
                    </div>
                    <label className="initial-field"> {/* ID DE COMANDA */}
                        <span className="span-normal">MESA</span>
                        <input type="text"
                        className="form-command-input-text"
                        style={{width:"85px",textAlign:"center"}}
                        id="id-table-command"
                        name="n-table-command"
                        value={tableCommand}
                        ref={tableCommandRef}
                        disabled={disableTableCommand}
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
                                    <p>{item != 0 ? item : ""}</p>
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

                                {/* BOTÕES DE NAVEGAÇÃO - GESTÃO DE COMANDAS */} 
                                <div className="buttons-navigation-command">
                                    <button type="button"><MdCreateNewFolder className="icon-buttons-navigation"/>Novo</button>
                                    <button type="button"><TiCancel className="icon-buttons-navigation"/>Cancelar</button>
                                    <button type="button"><BiSolidSave className="icon-buttons-navigation"/>Salvar</button>
                                </div>
                                {/* -------------------------------------------------- */} 

                                {/* INÍCIO - LISTA DE COMANDAS CADASTRADAS */} 

                                <div className="list-commands-container">
                                    
                                    <ul className="list-registers-commands">
                                        {commands && commands.map((itemCommand) => (
                                            <li className="item-listRegister-command" key={itemCommand.idCommand}>
                                              
                                                <div className="list-initial-registers">
                                                    <div className="initial-command-register">
                                                        <p className="title-initial">Registro</p>
                                                        <p className="desc-initial">{itemCommand.idCommand}</p>
                                                    </div>
                                                    <div className="initial-command-register">
                                                        <p className="title-initial">Tipo de Consumo</p>
                                                        <p className="desc-initial">{itemCommand.typeConsumption}</p>
                                                    </div>
                                                    <div className="initial-command-register">
                                                        <p className="title-initial">Número da Mesa</p>
                                                        <p className="desc-initial">{itemCommand.tableCommand}</p>
                                                    </div>
                                                </div>

                                                <div className="cart-itens-command">
                                                    <FaShoppingCart className="icon-cart-itens-command"/>
                                                    <p className="desc-cart-itens-command">CARRINHO</p>
                                                </div>

                                                <div className="group-itens-list-register">
                                                    {itemCommand.itensCommand.map((itemComm) => (
                                                    <div className="subgroup-itemComm-commands" key={itemComm.idItem}>
                                                        <img src={itemComm.photoItem} alt="foto do produto" />
                                                    <div className="subgroup-itemComm-values">
                                                    <p>{itemComm.descriptionItem}</p>
                                                    <p>{itemComm.amountItem} un</p>
                                                    <p style={{color: "red",fontWeight: "bolder"}}>R$ {checkValue(itemComm.valueSaleItem) ? itemComm.valueSaleItem + "0" : itemComm.valueSaleItem}</p>
                                                </div>
                                             </div>
                                            ))}
                                                </div>

                                                <div className="list-finally-registers">

                                                    <div className="finally-list-registers-commands">
                                                        <p className="title-finally-item-command">Valor Total</p>
                                                        <p className="desc-finally-item-command">R$ {checkValue(itemCommand.valueCommand) ? itemCommand.valueCommand + "0" : itemCommand.valueCommand}</p>
                                                    </div>

                                                    <div className="finally-list-registers-commands">
                                                        <p className="title-finally-item-command">Data</p>
                                                        <p className="desc-finally-item-command">{itemCommand.dateCommand}</p>
                                                    </div>

                                                    <div className="finally-list-registers-commands">
                                                        <p className="title-finally-item-command">Hora</p>
                                                        <p className="desc-finally-item-command">{itemCommand.hourCommand}</p>
                                                    </div>

                                                    <div className="finally-list-registers-commands">
                                                        <p className="title-finally-item-command">Situação</p>
                                                        <p className="status-style-command" style={{backgroundColor: itemCommand.statusCommand === "PENDENTE" ? "#ff0000" : "#018a01",color:"#ddd" }}>{itemCommand.statusCommand}</p>
                                                    </div>

                                                    <div className="buttons-del-update-groupCommands">
                                                        <button className="btn-update-command" type="button"><GrUpdate className="icon-updateButton-command"/></button>
                                                        <button className="btn-del-command" type="button"><MdDelete className="icon-deleteButton-command"/></button>
                                                    </div>

                                                </div>

                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                {/* FIM - LISTA DE COMANDAS CADASTRADAS */} 
                        </div>
                        
                    </div>
                          {/* FIM - ITENS DA COMANDA*/}          

         </form>
    </div>

  )
}

export default Commands