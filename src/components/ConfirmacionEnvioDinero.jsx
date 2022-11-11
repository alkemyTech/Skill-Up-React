import { useContext } from "react"
import { useEffect, useState } from "react"
import { AuthContext } from "../context/loginContext"


const ConfirmacionEnvioDinero = ({ state, setState, setSendTransaction }) => {
    console.log(setSendTransaction)
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
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                ...state,
                date: new Date(),
                type: 'payment'
            })
        })
        const data = response.json()
        setSendTransaction(data)
        setState(0)
        return false
    }
    return (
		<div className="bg-cyan-500 rounded mt-[40px] md:w-[60%] w-[80%] lg:w-2/5 lg:p-10 p-[40px]">
			<form action="" onSubmit={onSubmit}>
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
						type="submit"
						className="bg-white font-bold text-cyan-500 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
					>
						Confirmar
					</button>
				</div>
			</form>
		</div>
	);
}

export default ConfirmacionEnvioDinero