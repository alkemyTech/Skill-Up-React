import { useMemo } from "react"
import useDebounce from "../hooks/useDebounce"

function filterTransactions({array, input, amount}) {
    const transactions = array.data || []
    console.log(transactions)
    let debounceInput = useDebounce(input, 1500)
    let debouncedAmount = useDebounce(amount, 1500)

    const newTransactions = transactions.sort((a,b) => new Date(b.date) - new Date(a.date)).map(item => {
        return ({
            ...item,
            amount: Number(item.amount)
        })
    })

    // const filterByCoin = () => {
    //     return newTransactions.filter(item => item.coin === coin)
    // }

    const filterByAmount = (result) => {
        if (!amount){
            return result
        }
        return newTransactions.filter(item => Number(item.amount) <= debouncedAmount)
    }

    const filterByConcept = (result) => {
        if (!input){
            return result
        }
        return result.filter(item => item.concept.toLowerCase().search(debounceInput.toLowerCase().trim()) !== -1)
    }

    const filteredArray = useMemo (() => {
        
        let result = newTransactions

        // result = filterByCoin()
        result = filterByConcept(result)
        result = filterByAmount(result)

        return result
    }, [debounceInput, debouncedAmount, array])


    return filteredArray
}

export default filterTransactions