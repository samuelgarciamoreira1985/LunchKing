// REACT
import { useState } from "react";
// CSS
import "./Sales.css"
//ÍCONES
import { ImCart } from "react-icons/im";
import { FaAddressCard,FaCcMastercard,FaCcDiscover } from "react-icons/fa";
import { FaMoneyBillWave,FaPix } from "react-icons/fa6";
import { GiMoneyStack,GiReceiveMoney,GiPayMoney   } from "react-icons/gi"
import { HiMiniCreditCard } from "react-icons/hi2";
import { RiVisaFill } from "react-icons/ri";
import { SiNubank } from "react-icons/si";

const Sales = () => {

    const [typePaymentMoney,setTypePaymentMoney] = useState("") // RADIO BUTTON - TIPO DE PAGAMENTO  - MONEY
    const [indexTypePaymentMoney,setIndexTypePaymentMoney] = useState(1) // ÍNDICE DE CONTROLE DE PAGAMENTO - MONEY
    const [typePaymentCard,setTypePaymentCard] = useState("") // RADIO BUTTON - TIPO DE PAGAMENTO  - CARD
    const [indexTypePaymentCard,setIndexTypePaymentCard] = useState(1) // ÍNDICE DE CONTROLE DE PAGAMENTO - CARD

    // FUNÇÕES - TIPOS DE PAGAMENTOS
    const changeTypePaymentMoney = (e) => { // FUNÇÃO - DINHEIRO
        if (indexTypePaymentMoney === 1){
            setTypePaymentMoney("ATIVADO")
            setIndexTypePaymentMoney(2)
        } 
        else if (indexTypePaymentMoney === 2){
            setTypePaymentMoney("DESATIVADO")
            setIndexTypePaymentMoney(1)
        }    
        
    }

    const changeTypePaymentCard= (e) => { // FUNÇÃO - CARTÂO
        if (indexTypePaymentCard === 1){
            setTypePaymentCard("ATIVADO")
            setIndexTypePaymentCard(2)
        } 
        else if (indexTypePaymentCard === 2){
            setTypePaymentCard("DESATIVADO")
            setIndexTypePaymentCard(1)
        }    
    }
    // FIM - FUNÇÕES - TIPOS DE PAGAMENTOS

  return (

    <div className="container-sales">
        <h2>VENDAS</h2>

        <form className="form-register-sales">

            <div className="input-initial-sales"> 
                <label>
                    <span>REGISTRO: </span>
                    <input type="text" style={{width:"80px"}}
                    id="id-id-sale"
                    name="n-id-sale"
                    required
                    />
                </label>

                <label>
                    <span>CONSUMO: </span>
                    <input type="text" style={{width:"150px"}} 
                    id="id-consumption-sale"
                    name="n-consumption-sale"
                    required
                    />
                </label>

                <label>
                    <span>MESA: </span>
                    <input type="text" style={{width:"80px"}}
                    id="id-table-sale"
                    name="n-table-sale"
                    required
                    />
                </label>
            </div>

            {/* -------------------COMMAND ITEMS--------------------- */}
            <div className="command-items-sales">
                <div className="title-commmand-items-sales">
                    <p><ImCart className="icon-items-command-sales"/> PRODUTOS DA COMANDA</p>
                </div>
                <div className="items-command-sales">

                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="data-address-sales">
                <div className="title-data-address-sales">
                    <p><FaAddressCard className="icon-address-sales"/> DADOS DE ENDEREÇO</p>
                </div>
                
                <div className="address-initial">
                    <label>
                        <span>CEP: </span>
                        <input type="text" style={{width:"130px",textAlign:"center"}}
                        id="id-cep-address"
                        name="n-cep-address"
                        required
                        />
                    </label>
                    <label>
                        <span>LOGRADOURO: </span>
                        <input type="text" style={{width:"400px",textAlign:"center"}}
                        id="id-road-address"
                        name="n-road-address"
                        required
                        />
                    </label>
                    <label>
                        <span>NÚMERO: </span>
                        <input type="text" style={{width:"70px",textAlign:"center"}}
                        id="id-number-address"
                        name="n-number-address"
                        required
                        />
                    </label>
                </div>

                <div className="address-finally">
                    <label>
                        <span>BAIRRO </span>
                        <input type="text" style={{width:"200px",textAlign:"center"}}
                        id="id-hood-address"
                        name="n-hood-address"
                        required
                        />
                    </label>
                    <label>
                        <span>CIDADE </span>
                        <input type="text" style={{width:"250px",textAlign:"center"}}
                        id="id-city-address"
                        name="n-city-address"
                        required
                        />
                    </label>
                    <label>
                        <span>ESTADO </span>
                        <input type="text" style={{width:"150px",textAlign:"center"}}
                        id="id-state-address"
                        name="n-state-address"
                        required
                        />
                    </label>
                    <label>
                        <span>UF </span>
                        <input type="text" style={{width:"70px",textAlign:"center"}}
                        id="id-uf-address"
                        name="n-uf-address"
                        required
                        />
                    </label>
                    <label>
                        <span>REGIÃO </span>
                        <input type="text" style={{width:"130px",textAlign:"center"}}
                        id="id-region-address"
                        name="n-region-address"
                        required
                        />
                    </label>
                </div>
            </div> {/* ------------------------------------------------------ */}

            <div className="data-invoicing-sales">
                <div className="title-data-invoicing-sales">
                    <p><FaMoneyBillWave className="icon-invoicing-sales"/> DADOS DE FATURAMENTO</p>
                </div>

                <div className="data-payment-sales"> {/* PAGAMENTOS */}

                    <div className="click-type-payment">
                        <label> {/* DINHEIRO */}
                            <input type="radio" className="radio-payment"
                            value={typePaymentMoney}
                            checked={typePaymentMoney === "ATIVADO"}
                            onChange={changeTypePaymentMoney}
                            onClick={changeTypePaymentMoney}
                            />
                            <GiMoneyStack className="icon-money-payment"/>
                            <span style={{userSelect:"none"}}>DINHEIRO</span>
                        </label>
                        {typePaymentMoney === "ATIVADO" ? <div className="hide-click-type-payment-money">
                            <label>
                                <span>VALOR TOTAL R$</span>
                                <input type="text" style={{textAlign:"center",width:"100px"}}
                                id="id-total-money"
                                name="n-total-money"
                                disabled={true}
                                required
                                />
                            </label>
                            <label>
                                <span>VALOR DE ENTRADA R$</span>
                                <input type="text" style={{textAlign:"center",width:"100px"}}
                                id="id-input-money"
                                name="n-input-money"
                                required
                                />
                            </label>
                            <label>
                                <span>TROCO R$ </span>
                                <input type="text" style={{textAlign:"center",width:"100px"}}
                                id="id-change-money"
                                name="n-change-money"
                                required
                                />
                            </label>
                        </div> : ""}
                        
                    </div> {/* FIM - DINHEIRO */}

                    <div className="click-type-payment">
                        <label> {/* CARTÃO */}
                            <input type="radio" className="radio-payment"
                            value={typePaymentCard}
                            checked={typePaymentCard === "ATIVADO"}
                            onChange={changeTypePaymentCard}
                            onClick={changeTypePaymentCard}
                            />
                            <HiMiniCreditCard  className="icon-card-payment"/>
                            <span style={{userSelect:"none"}}>CARTÃO</span>
                            <RiVisaFill  className="icon-card-visa"/>
                            <FaCcMastercard className="icon-card-mastercard"/>
                            <SiNubank className="icon-card-nubank"/>
                            <FaCcDiscover className="icon-card-discover"/>
                        </label>
                        {typePaymentCard === "ATIVADO" ? <div style={{height:"90px"}} className="hide-click-type-payment-card">
                                    <div className="hide-card-one" style={{border:"1px solid white",borderRadius:"10px",paddingRight:"5px",paddingTop:"3px",paddingBottom:"4px",height:"80px"}}>
                                        <label className="hide-card-radio">
                                            <input type="radio"
                                            />
                                            <GiReceiveMoney className="icon-hide-type-card"/>
                                            <span style={{marginBottom:"30px"}}>CRÉDITO</span>
                                        </label>
                                        <label className="hide-card-radio">
                                                <input type="radio"
                                                />
                                                <GiPayMoney className="icon-hide-type-card"/>
                                                <span style={{marginBottom:"30px"}}>DÉBITO</span>
                                        </label>
                                    </div>

                                    <div className="flags-card">
                                            <label>
                                                <input type="radio" 
                                                
                                                />
                                                <RiVisaFill className="icon-flags"/>                                               
                                            </label>
                                            <label>
                                                <input type="radio" 
                                                
                                                />
                                                <FaCcMastercard className="icon-flags"/>                                             
                                            </label>
                                            <label>
                                                <input type="radio" 
                                                
                                                />
                                                <SiNubank className="icon-flags"/>                                              
                                            </label>
                                            <label>
                                                <input type="radio" 
                                                
                                                />
                                                <FaCcDiscover className="icon-flags"/>                                              
                                            </label>
                                    </div>
                               

                                <div className="hide-card-initial"> {/* NOME,NÚMERO */}
                                    <label className="hide-card-initial-span">
                                        <span>NOME</span>
                                        <input type="text" style={{width:"370px",textAlign:"center"}}
                                        id="id-name-card"
                                        name="n-name-card"
                                        />
                                    </label>
                                    <label className="hide-card-initial-span">
                                        <span>NÚMERO</span>
                                        <input type="text" style={{width:"200px",textAlign:"center"}}
                                        id="id-number-card"
                                        name="n-number-card"
                                        />
                                    </label>
                                </div>

                                    <div className="hide-card-finally"> {/* CPF/CNPJ,BANDEIRA,VALID,COD/SEGURANÇA */}
                                        <label className="hide-card-finally-span">
                                            <span>CPF/CNPJ</span>
                                            <input type="text" style={{width:"150px",textAlign:"center"}}
                                            id="id-cpfcnpj-card"
                                            name="n-cpfcnpj-card"
                                            />
                                        </label>
                                        <label className="hide-card-finally-span">
                                            <span>VALIDADE</span>
                                            <input type="text" style={{width:"100px",textAlign:"center"}}
                                            id="id-expiration-card"
                                            name="n-expiration-card"
                                            />
                                        </label>
                                        <label className="hide-card-finally-span">
                                            <span>SEGURANÇA</span>
                                            <input type="text" style={{width:"80px",textAlign:"center"}}
                                            id="id-cvcCwCard-card"
                                            name="n-cvcCwCard-card"
                                            />
                                        </label>
                                    </div>
                        </div> : ""}
                    </div> {/* FIM - CARTÃO */}

                    <div className="click-type-payment">
                        <label> {/* PIX */}
                            <input type="radio" className="radio-payment"
                            value="PIX"
                            />
                            <FaPix className="icon-pix-payment"/>
                            <span>PIX</span>
                        </label>
                    </div>

                </div>

            </div>

            <div className="data-finally-sales"> 
                <label>
                    <span>DATA: </span>
                    <input type="text" style={{width:"120px",textAlign:"center"}}
                    id="id-date-sale"
                    name="n-date-sale"
                    disabled={true}
                    required
                    />
                </label>

                <label>
                    <button type="button">HORA</button>
                    <input type="text" style={{width:"110px",textAlign:"center"}} 
                    id="id-hour-sale"
                    name="n-hour-sale"
                    disabled={true}
                    required
                    />
                </label>

                <label>
                    <button type="button">SITUAÇÃO</button>
                    <input type="text" style={{width:"130px",textAlign:"center",backgroundColor:"#ff0000",color:"#ddd"}}
                    id="id-status-sale"
                    name="n-status-sale"
                    value="PENDENTE"
                    disabled={true}
                    required
                    />
                </label>
            </div>

        </form>

    </div>

  )

}

export default Sales