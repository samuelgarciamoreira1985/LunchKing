// REACT
import MoneyList from "../components/InvoicingData/MoneyList"
import CardList from "../components/InvoicingData/CardList"
import PixList from "../components/InvoicingData/PixList"
// CUSTOM HOOKS
import { useSearch } from "../hooks/useSearch"
//CSS
import "./ListSalesMap.css"
// ÍCONES
import { FaAddressBook } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const url = "http://localhost:3000/sales"

const ListSalesMap = () => {

    const { data: listSales } = useSearch(url)

    const checkValue = (valueSale) => {
        const decimalPart = valueSale.toString().split(".")[1] || ''
        const numberDecimal = decimalPart.length
        if (numberDecimal === 1)
        return numberDecimal + "0"    
      }

  return (

    <div className='list-container-sales'>
        <h2>VENDAS</h2>

        <ul className="general-list-sales">
            {listSales && listSales?.map((sale) => (
              <li className="item-list-sale" key={sale.id}>

                <div className="group-initial-sales">
                    <p>REGISTRO: {sale.registerSaleCommand}</p>
                    <p>CONSUMO: {sale.consumptionSaleCommand}</p>
                    <p>MESA: {sale.tableCommandSale}</p>
                </div>

                <div className="group-items-cart-sale">
                     {sale.itemsSale?.map((itemSale) => (
                      <div className="subgroup-items-cart-sale" key={itemSale.idItemCartSale}>
                        <img src={itemSale.photoItemCartSale} alt="foto do item da comanda da venda" />
                        <div className="items-cart-medium-sale">
                          <p>{itemSale.descItemCartSale}</p>
                          <p>x {itemSale.amountItemCartSale}</p>
                          <p style={{color: "red",fontWeight: "bolder"}}>R$ {checkValue(itemSale.valueSaleItemCartSale) ? itemSale.valueSaleItemCartSale + "0" : itemSale.valueSaleItemCartSale}</p>
                        </div>
                      </div>
                     ))} 
                </div>

                <div className="group-address-sale">
                     <div className="address-title">
                        <p><FaAddressBook className="icon-address"/> DADOS DE ENDEREÇO</p>
                     </div>
                     <div className="address-data">
                        <div className="address-data-initial">
                          <p><span>CEP:</span> {sale.deliveryAddressCep}</p>
                          <p><span>LOGRADOURO:</span> {sale.deliveryAddressRoad}</p>
                          <p><span>NÚMERO:</span> {sale.deliveryAddressNumber}</p>               
                        </div>
                        <div className="address-data-medium">
                          <p><span>BAIRRO:</span> {sale.deliveryAddressHood}</p>
                          <p><span>CIDADE:</span> {sale.deliveryAddressCity}</p>
                          <p><span>ESTADO:</span> {sale.deliveryAddressState}</p>
                          <p><span>UF:</span> {sale.deliveryAddressUf}</p>
                          <p><span>REGIÃO:</span> {sale.deliveryAddressRegion}</p>
                        </div>
                     </div>
                </div>

                <div className="group-invoicing-sale">
                     <div className="invoicing-title">
                          <p><FaMoneyBill1Wave className="icon-address"/> DADOS DE FATURAMENTO</p>
                     </div>
                     <div className="invoicing-initial">
                          <p style={{color: "red",fontWeight: "bolder"}}><span style={{color:"#000", fontStyle:"italic",fontFamily:"revert"}}>VALOR TOTAL: </span> R$ {checkValue(sale.valueSale) ? sale.valueSale + "0" : sale.valueSale}</p>
                          <p style={{color: "red",fontWeight: "bolder"}}><span style={{color:"#000", fontStyle:"italic",fontFamily:"revert"}}>FORMA DE PAGAMENTO:</span> {sale.paymentMethod}</p>
                     </div>
                     <div>
                          {sale.paymentMethod === "DINHEIRO" ? <MoneyList/> : (sale.paymentMethod === "CARTÃO" ? <CardList/> : <PixList/>)}
                      </div>
                </div>

              </li>
            ))}
        </ul>

    </div>

  )
}

export default ListSalesMap