//CSS
import "./Commands.css"
//ÍCONES
import { PiMotorcycleFill } from "react-icons/pi"
import { FaCartArrowDown } from "react-icons/fa"

const Commands = () => {

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

         </form>
    </div>

  )
}

export default Commands