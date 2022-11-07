import React, { useRef } from 'react'
const EnvioDineroForm = ({ state, setState }) => {
    const amountRef = useRef()
    const accountIdRef = useRef()
    const toAccountIdRef = useRef()
    const conceptRef = useRef()
    const isValid = (formBody) => {
        return true
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const body = {
            amount: amountRef.current.value,
            accountId: accountIdRef.current.value,
            to_account_id: toAccountIdRef.current.value,
            concept: conceptRef.current.value,
            userId: 4 //el userId es un contexto global con el redux pero por ahora lo pongo hardcoded
        }
        if (!isValid(body)) {
            alert("Error, error")
            return false
        }
        setState(body)
        amountRef.current.value = ''
        accountIdRef.current.value = ''
        toAccountIdRef.current.value = ''
        conceptRef.current.value = ''
        return false
    }

    return (
        <div className="w-2/5 p-7 bg-indigo-900 rounded">
            <form action="" onSubmit={onSubmit}>
                <div className="flex justify-start gap-5 ">
                    <div className="flex flex-col gap-3">
                        <span className="text-stone-200 text-left">
                            Cuenta de origen:
                        </span>
                        <input
                            type="text"
                            name="accountId"
                            ref={accountIdRef}
                            className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-stone-200 text-left">
                            Cuenta de destino:
                        </span>
                        <input
                            type="text"
                            name="toAccountId"
                            ref={toAccountIdRef}
                            className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
                        />
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    <span className="text-stone-200 text-left">
                        Concepto:
                    </span>
                    <input
                        type="text"
                        name="concept"
                        ref={conceptRef}
                        className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
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
                        className="outline outline-2 pt-1 pb-1 pr-3 bg-indigo-900 text indent-1.5 text-stone-200 outline-stone-200 rounded"
                    />
                </div>
                <div className="mt-5">
                    <button
                        type="submit"

                        className="bg-stone-200 font-bold text-indigo-900 pt-1 pb-1 pl-3 pr-3 flex rounded  items-center justify-center text-center "
                    >
                        Transferir
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EnvioDineroForm