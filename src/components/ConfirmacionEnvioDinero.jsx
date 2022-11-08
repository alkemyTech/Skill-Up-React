import { useEffect, useState } from "react"

const ConfirmacionEnvioDinero = ({ state, setState }) => {
    const [names, setNames] = useState({
        emisor: "",
        receptor: ""
    })
    useEffect(() => {
        const getNames = async () => {
            const auth = {
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6OTUsInJvbGVJZCI6Mn0sImlhdCI6MTY2NzU2OTA5MiwiZXhwIjoxNjY3NjU1NDkyfQ.hMGNzxvfwyDswcJXaWRAetkkurXMDZC1wMN7Ll9RU8k"
                }
            }
            const fromAccount = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${state.accountId}`, auth)).json()
            const toAccount = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/${state.to_account_id}`, auth)).json()
            const fromUser = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${fromAccount.userId}`, auth)).json()
            const toUser = await (await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/${toAccount.userId}`, auth)).json()
            setNames({
                emisor: `${fromUser.first_name} ${fromUser.last_name}`,
                receptor: `${toUser.first_name} ${toUser.last_name}`
            })
            console.log(fromAccount, fromUser)
        }
        getNames()
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6OTUsInJvbGVJZCI6Mn0sImlhdCI6MTY2NzU2OTA5MiwiZXhwIjoxNjY3NjU1NDkyfQ.hMGNzxvfwyDswcJXaWRAetkkurXMDZC1wMN7Ll9RU8k" //hardcoded, es el token de login
            },
            body: JSON.stringify({
                ...state,
                date: new Date(),
                type: 'topup'
            })
        })
        console.log(await res.json())
        setState(0)
        return false
    }
    return (
        <div className="w-2/5 p-7 bg-indigo-900 rounded">
            <form action="" onSubmit={onSubmit}>

                <div className="mt-3 flex flex-col gap-4">
                    <span className="text-stone-200 text-left">
                        Emisor: {names.emisor}
                    </span>
                </div>

                <div className="mt-3 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Cuenta de origen: {state.accountId}
                    </span>
                </div>
                <div className="mt-3 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Receptor: {names.receptor}
                    </span>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Cuenta de destino: {state.to_account_id}
                    </span>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Concepto: {state.concept}
                    </span>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Suma: {state.amount}
                    </span>
                </div>
                <div className="mt-5">
                    <button
                        type="submit"

                        className="bg-stone-200 font-bold text-indigo-900 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
                    >
                        Confirmar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ConfirmacionEnvioDinero