import { useContext } from "react"
import { useEffect, useState } from "react"
import { AuthContext } from "../context/loginContext"
import { ToastContainer } from 'react-toastify';
import { errorNotification, successNotification } from "../utils/notifications";

const ConfirmacionEnvioDinero = ({ state, setState, setSendTransaction }) => {

    const [error, setError] = useState(false)
    // Cuenta de destino no existente!
    const [names, setNames] = useState({
        emisor: "",
        receptor: ""
    })
    const { getToken, getUser } = useContext(AuthContext)
    const auth = `Bearer ${getToken()}`
    const headers = {
        Authorization: auth,
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
    useEffect(() => {
        const getNames = async () => {
            const toAccount = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${state.to_account_id}`, {
                headers
            })).json()

            if (toAccount.status === 500 || toAccount.status === 404){
                errorNotification('Cuenta de destino no existente!')
                setError(true)
            }
            const toUser = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${toAccount.userId}`, {
                headers
            })).json()
            setNames({
                emisor: `${getUser().first_name} ${getUser().last_name}`,
                receptor: `${toUser.first_name} ${toUser.last_name}`
            })
        }
        getNames()
    }, [])

    const handleSubmit = () => {
        if(error) setState(0)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${state.to_account_id}`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                concept: state.concept,
                amount: +state.amount,
                type: 'payment'
            })
        })
        const data = response.json()
        setSendTransaction(data)
        // If the transaction was successful, show a success notification and then move to setState(0)
        successNotification('Envio realizado exitosamente!')
        setTimeout(() => {
            setState(0)
        }, 4000)
        return false
    }
    
    return (
		<div className="bg-cyan-500 rounded mt-[40px] md:w-[60%] w-[80%] lg:w-2/5 lg:p-10 p-[40px]">
			<form action="" onSubmit={onSubmit}>
                <ToastContainer />
				<div className="mt-3 flex flex-col gap-4">
					<span className="text-white font-bold text-left">
						Emisor: {names.emisor}
					</span>
				</div>

				<div className="mt-3 flex flex-col gap-3">
					<span className="text-white font-bold text-left">
						Receptor: {names.receptor}
					</span>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-white font-bold text-left">
						Cuenta de destino: {state.to_account_id}
					</span>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-white font-bold text-left">
						Concepto: {state.concept}
					</span>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-white font-bold text-left">
						Suma: {state.amount}
					</span>
				</div>
				<div className="mt-5">
					<button
                        onClick={handleSubmit}
						type="submit"
						className="bg-white font-bold text-cyan-500 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
					>
						{error ? "Reintentar" : "Continuar"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ConfirmacionEnvioDinero;
