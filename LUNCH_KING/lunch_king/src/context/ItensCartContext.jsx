import { createContext,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [item,setItem] = useState([
        
    ])
    const [countAmount,setCountAmount] = useState(0)
    const [totalAmount,setTotalAmount] = useState(0)

    return (
        <CartContext.Provider value={{item,setItem,countAmount,setCountAmount,totalAmount,setTotalAmount}}>
            {children}
        </CartContext.Provider>
    )
}