import { useState, useEffect } from "react";

export const useRequests = (url) => {

    const [data, setData] = useState(null) 

    const [config,setConfig] = useState(null) // CONFIGURAÇÃO DE ENVIO
    const [method,setMethod] = useState(null) // MÉTODO DE ENVIO
    const [callFetch, setCallFetch] = useState(null) // CALL

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: "POST",
                Headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    // GET
     useEffect(() => {
        const getData = async () => {
            try {
                const requestData = await fetch(url)
                const responseData = await requestData.json()
                setData(responseData)
            } catch (error) {
                console.log(error.message)
            }
        }
        getData()
    },[url, callFetch])

    // POST
    useEffect(() => {

        const httpRequest = async () => {
            let json 
            try {
            if (method === "POST"){
                let sendOptions = [url, config]
                const res = await fetch(...sendOptions)
                json = await res.json()
            }
            setCallFetch(json)
        }
        catch (error) {
            console.log(error.message)
        }
        }

        httpRequest()

    },[config, method, url])

    // DELETE
    const delRegister = async (url,id) => {
        const responseDelete = await fetch(url, { method: "DELETE" })   
       if (responseDelete.ok) {
        setData(data => data.filter(item => item.id !== id))
    }
}

    // GET - TO UPDATE
    const getProductsUpdate = async (id) => {
        const requestUpdate = await fetch(url)
        const responseUpdate = await requestUpdate.json()
        setData(responseUpdate => responseUpdate.filter(item => item.id === id))
    }

    return { data, httpConfig, delRegister, getProductsUpdate }

}