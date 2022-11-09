import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

const UltimosEnvios = () => {
    const [envios, setEnvios] = useState([])
    const token = useUser('token')
    const auth = `Bearer ${token}`

    useEffect(() => {
        const getLastTransactions = async () => {
            const transactionList = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`, {
                method: 'GET',
                headers: {
                    'Authorization': auth,
                    'accept': 'application/json'
                },
                withCredentials: true
            })).json()
            setEnvios(transactionList)
        }
        getLastTransactions()
    }, [])
    return (
        <div className="pt-8 pb-8flex items-center justify-center">
            {envios.length ?
                envios.map((envio) => (
                    <h3>
                        {envio.concept}
                    </h3>

                ))
                :

                <h3 className="text-3xl font-semibold text-indigo-900 text-center">
                    No tienes envios recientes
                </h3>
            }
        </div>
    );
};

export default UltimosEnvios