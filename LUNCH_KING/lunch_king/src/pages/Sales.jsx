// CSS
import "./Sales.css"
//ÍCONES
import { ImCart } from "react-icons/im";
import { FaAddressCard,FaCcMastercard,FaCcDiscover } from "react-icons/fa";
import { FaMoneyBillWave,FaPix } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi"
import { HiMiniCreditCard } from "react-icons/hi2";
import { RiVisaFill } from "react-icons/ri";
import { SiNubank } from "react-icons/si";

const Sales = () => {

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

                    <label> {/* DINHEIRO */}
                        <input type="radio" className="radio-payment"
                        value="MONEY"
                        />
                        <GiMoneyStack className="icon-money-payment"/>
                        <span>DINHEIRO</span>
                    </label>
                    <label> {/* CARTÃO */}
                        <input type="radio" className="radio-payment"
                        value="CARD"
                        />
                        <HiMiniCreditCard  className="icon-card-payment"/>
                        <span>CARTÃO</span>
                        <RiVisaFill  className="icon-card-visa"/>
                        <FaCcMastercard className="icon-card-mastercard"/>
                        <SiNubank className="icon-card-nubank"/>
                        <FaCcDiscover className="icon-card-discover"/>
                    </label>
                    <label> {/* PIX */}
                        <input type="radio" className="radio-payment"
                        value="PIX"
                        />
                        <FaPix className="icon-pix-payment"/>
                        <span>PIX</span>
                    </label>

                </div>

            </div>

        </form>

    </div>

  )

}

export default Sales