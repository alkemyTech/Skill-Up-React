import React, { useRef } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useUser from '../hooks/useLocalStorage'

const EnvioDineroForm = ({ state, setState }) => {
    const amountRef = useRef()
    const toAccountIdRef = useRef()
    const conceptRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault()

        const userId = useUser('id')
        const body = {
            amount: amountRef.current.value,
            accountId: useLocalStorage('account').id,
            to_account_id: toAccountIdRef.current.value,
            concept: conceptRef.current.value,
            userId
        }
        setState(body)
        amountRef.current.value = ''
        toAccountIdRef.current.value = ''
        conceptRef.current.value = ''
        return false
    }

    return (
        <div className="w-2/5 p-7 bg-cyan-500 rounded">
            <form action="" onSubmit={onSubmit}>
                <div className="flex flex-col gap-3">

                    <span className="text-stone-200 text-left">
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
                    <span className="text-stone-200 text-left">
                        Concepto:
                    </span>
                    <input
                        type="text"
                        name="concept"
                        ref={conceptRef}
                        className="outline outline-2 pt-1 pb-1 pr-3 bg-cyan-50 text indent-1.5 text-stone-500 outline-stone-200 rounded"
                    />
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Suma:
                    </span>
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

                        className="bg-stone-200 font-bold text-cyan-500 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
                    >
                        Transferir
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EnvioDineroForm