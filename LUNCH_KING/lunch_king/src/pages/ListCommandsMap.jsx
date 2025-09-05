// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"
// CSS
import "./ListCommandsMap.css"

const url = "http://localhost:3000/commands"

export const ListCommandsMap = () => {

    const { data: itemCommand } = useSearch(url)

    const checkValue = (valueSale) => {
        const decimalPart = valueSale.toString().split(".")[1] || ''
        const numberDecimal = decimalPart.length
        if (numberDecimal === 1)
        return numberDecimal + "0"
      }

  return (

    <div id="list-commands-container">
        <h2>COMANDAS</h2>
        <ul id="general-list-commands">
          {itemCommand && itemCommand.map((command) => (
            <li className="item-list-commands" key={command.idCommand}>
                <div className="subgroup-item-initial">
                  <p style={{textDecoration: "underline"}}>{command.tableCommand}</p>
                  <p>{command.typeConsumption}</p>
                </div>

                <div className="group-item-commands">
                {command.itensCommand.map((item) => (
                  <div className="subgroup-item-commands" key={item.idItem}>
                    <img src={item.photoItem} alt="foto do produto" />
                      <div className="subgroup-item-values">
                        <p>{item.descriptionItem}</p>
                        <p>{item.amountItem} un</p>
                        <p>R$ {item.valueSaleItem}</p>
                      </div>
                    
                  </div>
                )
                )}
                </div>

                <div className="subgroup-item-finally">
                  <p>Valor Total: R$ {command.valueCommand}</p>
                  <p>Data: {command.dateCommand}</p>
                  <p>Hora: {command.hourCommand}</p>
                  <p>Situação: {command.statusCommand}</p>
                </div>

            </li>
          ))}
        </ul>
    </div>

  )
}
