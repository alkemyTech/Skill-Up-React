import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/loginContext";
import formatDate from "../utils/formatDate";

const UltimosEnvios = ( {sendTransaction} ) => {
    const [envios, setEnvios] = useState([])
    const { getToken, getUser } = useContext(AuthContext)
    const auth = `Bearer ${getToken()}`
    
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
            console.log(transactionList.data)
            setEnvios(transactionList.data.filter(envio => envio.userId == getUser().id && envio.type == 'payment' && envio.to_account_id != getUser().id).slice(0, 4))

        }
        getLastTransactions()
    }, [sendTransaction])

    const enviosElements = envios.map((envio) => {
        const date = formatDate(envio.date).tipo2;
        return (
            <div
                className="p-6 rounded bg-cyan-500 text-white w-fit"
                key={envio.id}
            >
                <div className="flex gap-2">
                    <span>Monto:</span>
                    <span className="bold">${envio.amount}</span>
                </div>

                <div className="flex gap-2">
                    <span>Cuenta destino:</span>
                    <span className="bold">{envio.to_account_id}</span>
                </div>

                <div className="flex gap-2">
                    <span>Concepto:</span>
                    <span className="italic">{envio.concept}</span>
                </div>
                <div className="flex gap-2">
                    <span>Fecha: </span>
                    <span>{date}</span>
                </div>
            </div>
        );
    });
    return (

        <div className="pt-8 mb-5 pb-8flex items-center justify-center">
            {envios.length > 0 ? <div className="flex gap-6 justify-center flex-wrap">
                {enviosElements}
            </div>
                :

                <h3 className="text-3xl font-semibold text-indigo-900 text-center">
                    No tienes envios recientes
                </h3>
            }
        </div>
    );
};

export default UltimosEnvios