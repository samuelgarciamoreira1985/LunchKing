import { useState, useEffect } from "react";

export const useSend = (url) => {

    const [data,setData] = useState(null) // DADOS
    const [error,setError] = useState(null) // ERROS

    const [config,setConfig] = useState(null) // CONFIGURAÇÃO DE ENVIO
    const [method,setMethod] = useState(null) // MÉTODO DE ENVIO

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                Headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {

        const httpRequest = async () => {
            let json 
            try {
            if (method === "POST"){
                let sendOptions = [url, config]
                const response = await fetch(...sendOptions)
                json = await response.json()
            }
        }
        catch (error) {
            console.log(error.message)
        }
        }

        httpRequest()

    },[config, method, url])

    return { data, httpConfig, error }
}