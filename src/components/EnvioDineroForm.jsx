import React, { useRef } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/loginContext'

const EnvioDineroForm = ({ state, setState }) => {

	const {getAccountID, getUser} = useContext(AuthContext)
    const amountRef = useRef()
    const toAccountIdRef = useRef()
    const conceptRef = useRef()
	console.log(getAccountID())
    const onSubmit = (e) => {
        e.preventDefault()

        const body = {
            amount: amountRef.current.value,
            accountId: getAccountID(),
            to_account_id: toAccountIdRef.current.value,
            concept: conceptRef.current.value,
            userId: getUser().id
        }
        setState(body)
        amountRef.current.value = ''
        toAccountIdRef.current.value = ''
        conceptRef.current.value = ''
        return false
    }

    return (
		<div className="bg-cyan-500 rounded mt-[40px] md:w-[60%] w-[80%] lg:w-2/5 lg:p-10 p-[40px]">
			<form action="" onSubmit={onSubmit}>
				<div className="flex flex-col gap-3">
					<span className="text-white text-left">
						Cuenta de destino:
					</span>
					<input
						type="text"
						name="toAccountId"
						ref={toAccountIdRef}
						className="outline outline-2 pt-1 pb-1 pr-3 bg-cyan-50 text indent-1.5 text-stone-500 outline-stone-200 rounded"
					/>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-white text-left">Concepto:</span>
					<input
						type="text"
						name="concept"
						ref={conceptRef}
						className="outline outline-2 pt-1 pb-1 pr-3 bg-cyan-50 text indent-1.5 text-stone-500 outline-stone-200 rounded"
					/>
				</div>
				<div className="mt-4 flex flex-col gap-3">
					<span className="text-white text-left">Suma:</span>
					<input
						type="number"
						name="amount"
						ref={amountRef}
						className="outline outline-2 pt-1 pb-1 pr-3 bg-cyan-50 text indent-1.5 text-stone-500 outline-stone-200 rounded"
					/>
				</div>
				<div className="mt-5">
					<button
						type="submit"
						className="bg-white font-bold text-cyan-500 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
					>
						Transferir
					</button>
				</div>
			</form>
		</div>
	);
}

export default EnvioDineroForm;
