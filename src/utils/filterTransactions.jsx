import { useMemo } from "react"
import useDebounce from "../hooks/useDebounce"

function filterTransactions({array, setCurrentPage, input, amount}) {

    let debounceInput = useDebounce(input, 1500)
    let debouncedAmount = useDebounce(amount, 1500)

    const newTransactions = array.sort((a,b) => new Date(b.date) - new Date(a.date)).map(item => {
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

        setCurrentPage(1)
        return result
    }, [debounceInput, debouncedAmount, newTransactions.length])


    return filteredArray
}

export default filterTransactions