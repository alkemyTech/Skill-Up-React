import { useState } from "react";
import { useEffect } from "react"

const UltimosEnvios = () => {
    const [envios, setEnvios] = useState([])
    useEffect(() => {
        const getLastTransactions = async () => {
            const transactionList = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6OTUsInJvbGVJZCI6Mn0sImlhdCI6MTY2NzU2OTA5MiwiZXhwIjoxNjY3NjU1NDkyfQ.hMGNzxvfwyDswcJXaWRAetkkurXMDZC1wMN7Ll9RU8k" //hardcoded, es el token de login
                }
            })).json()
            setEnvios(transactionList)
        }
        getLastTransactions()
    })
    return (
        <div className="pt-8 pb-8flex items-center justify-center">
            {envios.length == 0 ?
                <h3 className="text-3xl font-semibold text-indigo-900 text-center">
                    No tienes envios recientes
                </h3>
                :
                envios.map((envio) => (
                    <h3>
                        {envio.concept}
                    </h3>

                ))
            }
        </div>
    );
};

export default UltimosEnvios