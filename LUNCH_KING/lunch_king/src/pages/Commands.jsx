//REACT
import { Tooltip } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useContext, useState, useRef, useEffect } from "react"
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
import { BsFillCartDashFill } from "react-icons/bs"

const url = "http://localhost:3000/commands"

const Commands = () => {

    const { data: commands } = useRequests(url)

    const { item,setItem,countAmount,setCountAmount,totalAmount,setTotalAmount } = useContext(CartContext)

    const { indexItemCommand,setIndexItemCommand } = useContext(ItensCommandContext)

    const [colorStatusCommand,setColorStatusCommand] = useState("PENDENTE") // COR DO STATUS DA COMANDA
    const [hourCommand,setHourCommand] = useState("")
    const [valueColorConsumption,setValueColorConsumption] = useState("") // VALOR DO CONSUMO
    const tableCommandRef = useRef(null) // REF DA MESA DA COMANDA...

    // REQUESTS 
    const [idCommand,setIdCommand] = useState("") // ID - [REQUEST]
    const [typeConsumptionCommand,setTypeConsumptionCommand] = useState("") // TIPO DE CONSUMO - [REQUEST]
    const [tableCommand,setTableCommand] = useState("") // MESA - [REQUEST]
    // FIM - REQUESTS

    // ESTADOS - ATIVA E DESATIVA  
    const [disableTableCommand,setDisableTableCommand] = useState(true)
    const [disableIdCommand,setDisableIdCommand] = useState(true)
    const [btnNewCommand,setBtnNewCommand] = useState(false)
    const [btnCancelCommand,setBtnCancelCommand] = useState(true)
    const [btnSaveCommand,setBtnSaveCommand] = useState(true)

    const roundNumber = (numberTotal, roundParam) => {
        let numTotal = Math.pow(10, roundParam)
        return Math.trunc(numberTotal * numTotal) / numTotal
    }

    const removeRoundItem = (idItemRemoveRound) => {
        const itemValueTotalremove = item.find(itemR => itemR.idItemCart === idItemRemoveRound)
        if (itemValueTotalremove){
            const totalRemove = itemValueTotalremove.valueSaleItemCart * itemValueTotalremove.amountItemCart
            const calcRemoveTotal = totalAmount - totalRemove
            const AmountTotal = roundNumber(calcRemoveTotal, 2)
            if (AmountTotal <=0)
                setTotalAmount(0)
                else
                setTotalAmount(AmountTotal)
        }
    }

    const removeItem = (idItemRemove) => { // BOTÃO REMOVER ITEM INDIVIDUAL
            removeRoundItem(idItemRemove)

            const newItemCommand = item.filter(itemComm => itemComm.idItemCart !== idItemRemove)
            setItem(newItemCommand)
        }

    useEffect(() => {
        setItem([])
        setTotalAmount(0)
    },[])

    const handleClearCart = () => { // LIMPAR CARRINHO DE COMPRAS

        if (item.length === 0 ){
            swal({
           icon: "error",
           title: "REI DOS LANCHES",
           text: "O carrinho de compras já está vazio!"
            })  
        }
        else {
            swal("Deseja realmente limpar o carrinho de compras?", {
            closeOnClickOutside: false,
            dangerMode: true,
            closeOnEsc: false,
            icon: "warning",
            title: "REI DOS LANCHES",
            buttons: {
              confirmar: {
                text: "Sim",
                value: "sim",
                className: "swal-cancelar-sim",
              },
              cancelar: {
                text: "Não",
                value: "nao",
                className: "swal-cancelar-nao"
              },
              
              },
          })
          .then((value => {
            if (value === "sim") {
              setItem([])
              setTotalAmount(0)
              swal({
               closeOnClickOutside: false,
               icon: "success",
               title: "REI DOS LANCHES",
               text: "Carrinho de compras limpardo com sucesso!"
                })  
              }
          }))   
        }
       
    }

    const checkValue = (valueSaleComm) => {
        const decimalPart = valueSaleComm.toString().split(".")[1] || ''
        const numberDecimal = decimalPart.length
        if (numberDecimal === 1)
        return numberDecimal + "0"    
      }

    //TIPO DE CONSUMO
    const changeTableCommand = (e) => {
        setTypeConsumptionCommand(e.target.value)
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
        if (colorStatusCommand === "PENDENTE")
            setColorStatusCommand("FINALIZADO")
        else if (colorStatusCommand === "FINALIZADO")
            setColorStatusCommand("PENDENTE")
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

    // INÍCIO - VALIDAÇÃO DE INPUT DE ID
    const validDigitsId = (textDigitedId) => {
        return textDigitedId.replace(/[^0-9]/g, "")
    }

    const ChangeMaskIdCommand = (e) => {
    const updateTextDigitedId = validDigitsId(e.target.value)
    setIdCommand(updateTextDigitedId)
    }
  // FIM - VALIDAÇÃO DE ID

    const ChangeMaskTableCommand = (e) => {
        const updateTextDigitedTable = validDigitsId(e.target.value)
        setTableCommand(updateTextDigitedTable)
    }

    // **************************************
    // BOTÕES DE NAVEGAÇÃO - NOVO,CANCELAR,SALVAR

    // 0 - ATIVO, 1 - INATIVO, 2 - CURSOR PONTEIRO, 3 - CURSOR PADRÃO, 4 - ELEMENTO ATIVADO
    // 5 - ELEMENTO DESATIVADO
    const optionsCommands = ["#0044ffcb","#0044ff96","pointer","default","fill","none"]

    const handleClickNewCommand = () => { // BOTÃO - NOVO COMANDA**
         if (btnNewCommand == false) {
            
        }   
    }

    //*********FIM - BOTÕES DE NAVEGAÇÃO****** */

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
                        style={{width:"85px",textAlign:"center"}}
                        id="id-id-command"
                        name="n-id-command"
                        onChange={(e) => ChangeMaskIdCommand(e)}
                        value={idCommand}
                        disabled={disableIdCommand}
                        required
                        />
                    </label>
                    {/* TIPO DE CONSUMO */}
                    <div className="group-type-consumption-command">
                        
                        <div className="subgroup-type-consumption-command">
                            <label className="type-consumption">{/* CONSUMO NO LOCAL */}
                                <input type="radio"
                                value="LOCAL"
                                checked={typeConsumptionCommand === "LOCAL"}
                                onChange={changeTableCommand}
                                />
                                <FaCartArrowDown className="icon-type-consumption"/>
                                <span className="span-pers" style={{color:valueColorConsumption === "LOCAL_COLOR" ? "#7076f4" : "black",textShadow:valueColorConsumption === "LOCAL_COLOR" ? ".5px .5px 1px black" : ""}}>CONSUMO NO LOCAL</span>
                            </label>

                            <label className="type-consumption">{/* DELIVERY */}
                                <input type="radio"
                                value="DELIVERY"
                                checked={typeConsumptionCommand === "DELIVERY"}
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
                        onChange={(e) => ChangeMaskTableCommand(e)}
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
                                    <Tooltip title="Clique aqui para deletar todos os ítens do carrinho!">
                                    <BsFillCartDashFill className="icon-selection-clear-cart" onClick={handleClearCart}/></Tooltip> 
                                    <ul className="list-cart">
                                        {item.map((itemC) => (
                                            <li key={itemC.idItemCart}>
                                                <img src={itemC.photoItemCart} alt="" />
                                                <div className="list-cart-itens">
                                                    <p>{itemC.descItemCart}</p>
                                                    <p>x {itemC.amountItemCart}</p>
                                                    <p style={{color: "red",fontWeight: "bolder"}}>R$ {checkValue(itemC.valueSaleItemCart) ? itemC.valueSaleItemCart + "0" : itemC.valueSaleItemCart}</p>
                                                    <button type="button" onClick={() => removeItem(itemC.idItemCart)}>REMOVER</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                             {/* ÍNICIO - VALORES FINAIS DA COMANDA*/}
                              <div className="group-finally-command">
                                        <label className="finally-command-single">
                                            <span>VALOR TOTAL</span>
                                            <input type="text"
                                            className="form-command-input-text"
                                            style={{width:"108px",backgroundColor:"#c40000ff",color:"#fffbfbff",fontWeight:"400",textAlign:"center"}}
                                            id="id-amount-command"
                                            name="n-amount-command"
                                            disabled={true}
                                            value={checkValue(totalAmount) ? "R$ " + totalAmount + "0" : "R$ " + totalAmount}
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
                                            style={{width:"153px", backgroundColor:colorStatusCommand === "PENDENTE" ? "#ff0000" : "#018a01", color:"#ddd", textAlign:"center",fontWeight:"500"}}
                                            value={colorStatusCommand === "PENDENTE" ? "PENDENTE" : "FINALIZADO"}
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
                                    <button type="button" disabled={btnNewCommand} onClick={handleClickNewCommand} ><MdCreateNewFolder className="icon-buttons-navigation"/>Novo</button>
                                    <button type="button" disabled={btnCancelCommand}><TiCancel className="icon-buttons-navigation"/>Cancelar</button>
                                    <button type="button"  disabled={btnSaveCommand}><BiSolidSave className="icon-buttons-navigation"/>Salvar</button>
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