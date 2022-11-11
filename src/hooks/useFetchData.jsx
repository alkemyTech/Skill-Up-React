import { useEffect } from "react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

function useFetchData({method, fetchUrl, body = null, headers}) {
  // const {fetchedData, loading, error} = useFetchData
    // ({method: "post", url: "/auth/login", 
    // headers: {Accept: "application/json", "Content-Type": "application/json"}, 
    // body: {email: "messi@messi.com", 
    // password: "messi"} 
    // })

    const [fetchedData, setFetchedData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const ENDPOINT = API_URL + fetchUrl
    console.log(ENDPOINT)
    const fetchData = async() => {
        try {
            const response = await fetch(ENDPOINT, {
                method, 
                body, 
                headers
            })
            const data = await response.json()
            setFetchedData(data)
        } catch (error) {
            console.log(error)
            setError(error);            
        } finally{
            setLoading(false)
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [method, fetchUrl, body])


  return {fetchedData, loading, error}
}

export default useFetchData;
