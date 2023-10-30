import { useState } from "react"

const useHttps = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const endpoint = '/backend/data/available-meals.json'

    const fetchData = async () => {
        try {
            let res = await fetch(endpoint)
            if(!res.ok){
                throw new Error('Something went wrong')
                return;
            }

            let data = await res.json();

            setData(data)

            setError(null)
        } catch (error) {
            setError(error.message)
        }
    }

    return {
        fetchData, data, error
    }
}

export default useHttps;