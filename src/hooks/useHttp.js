import { useCallback, useEffect, useState } from "react"

const sendHttpRequest = async (url, config) => {
    const res = await fetch(url, config)

    // check response data
    const resData = await res.json();

    if(!res.ok){
        throw new Error(resData.message || 'Something went wrong, failed to send request')
    }

    return resData;

}

export default function useHttp(url, config, initialData){
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    // Reset data (modal success)
    const clearData = () => {
        setData(initialData)
    }

    const sendRequest = useCallback(async (data) => {
        setIsLoading(true)

        try {
            const resData = await sendHttpRequest( url, {...config, body: data} );
            setData(resData)
        } catch (error) {
            setError(error.message || 'Something went wrong!')
        }

        setIsLoading(false)
    }, [url, config])
    

    useEffect(() => {
        if((config && (config.method === 'GET' || !config.method)) || !config){
            sendRequest()
        }
    }, [sendRequest, config])

    return { data, error, isLoading, sendRequest, clearData }
}