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
            <li className="item-list-command" key={command.idCommand}>
                <p>{command.tableCommand}</p>
                <p>{command.typeConsumption}</p>
                <div className="group-item-command">
                
                </div>
                <p>{command.valueCommand}</p>
                <p>{command.dateCommand}</p>
                <p>{command.hourCommand}</p>
                <p>{command.statusCommand}</p>
            </li>
          ))}
        </ul>
    </div>

  )
}
