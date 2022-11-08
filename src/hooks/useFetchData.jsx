import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

function useFetchData({method, url, body = null, headers = null}) {

  // const {fetchedData, loading, error} = useFetchData
    // ({method: "post", url: "/auth/login", 
    // headers: {Accept: "application/json", "Content-Type": "application/json"}, 
    // body: {email: "messi@messi.com", 
    // password: "messi"} 
    // })

    const [fetchedData, setFetchedData] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        axios[method](API_URL+url, body, headers)
            .then((res) => {
                setFetchedData(res);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false)
            })
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers])


  return {fetchedData, loading, error}
}

export default useFetchData