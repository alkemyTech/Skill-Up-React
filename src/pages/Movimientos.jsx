import { useMemo, useState } from 'react'
import usePagination from '../hooks/usePagination'
import filterTransactions from '../utils/filterTransactions'
import formatDate from '../utils/formatDate'
import Filters from '../components/Filters'
import House from '../components/Icons/House'
import Paginate from '../components/Paginate'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'

const transactions = [{amount: 1500, coin: "ARS", concept: "Fulbo", date: "2022-11-01T19:57:44.965Z"}, {amount: 1300, coin: "ARS", concept: "Fulbo", date: "2022-12-03T19:57:44.965Z"}, 
{amount: 1500, coin: "ARS", concept: "Hogar", date: "2022-11-02T19:57:44.965Z"}, {amount: 200, coin: "ARS", concept: "Hogar", date: "2022-11-05T19:57:44.965Z"}, 
{amount: 15000, coin: "ARS", concept: "Hogar", date: "2022-11-15T19:57:44.965Z"}, {amount: 321, coin: "ARS", concept: "Hogar", date: "2022-11-20T19:57:44.965Z"}, 
{amount: 3000, coin: "ARS", concept: "Hogar", date: "2022-11-03T19:57:44.965Z"}, {amount: 567, coin: "ARS", concept: "Hogar", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 35000, coin: "ARS", concept: "Hogar", date: "2022-11-03T19:57:44.965Z"}, {amount: 4000, coin: "ARS", concept: "Hogar", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 40000, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 20000, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 93000, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 6000, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 2001, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 24000, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 7000, coin: "ARS", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 20000, coin: "ARS", concept: "Fulbo", date: "2022-11-02T19:57:44.965Z"}, 
{amount: 7600, coin: "ARS", concept: "Fulbo", date: "2020-08-09T19:57:44.965Z"}, {amount: 12000, coin: "ARS", concept: "Fulbo", date: "2021-09-03T19:57:44.965Z"}, 
{amount: 1900, coin: "ARS", concept: "Deporte", date: "2021-11-12T19:57:44.965Z"}, {amount: 15999, coin: "ARS", concept: "Deporte", date: "2022-11-10T19:57:44.965Z"}, 
{amount: 1200, coin: "ARS", concept: "Deporte", date: "2022-08-08T19:57:44.965Z"}, {amount: 100000, coin: "ARS", concept: "Deporte", date: "2022-12-24T19:57:44.965Z"}, 
{amount: 100, coin: "USD", concept: "Deporte", date: "2022-12-25T19:57:44.965Z"}, {amount: 100, coin: "USD", concept: "Deporte", date: "2022-12-12T19:57:44.965Z"}, 
{amount: 1000, coin: "USD", concept: "Deporte", date: "2022-09-07T19:57:44.965Z"}, {amount: 1500, coin: "USD", concept: "Deporte", date: "2022-11-04T19:57:44.965Z"}, 
{amount: 500, coin: "USD", concept: "Fulbo", date: "2022-12-08T19:57:44.965Z"}, {amount: 150, coin: "USD", concept: "Fulbo", date: "2022-12-09T19:57:44.965Z"}, 
{amount: 300, coin: "USD", concept: "Supermercado", date: "2022-12-12T19:57:44.965Z"}, {amount: 15000, coin: "USD", concept: "Supermercado", date: "2021-02-06T19:57:44.965Z"}, 
{amount: 600, coin: "USD", concept: "Supermercado", date: "2022-01-01T19:57:44.965Z"}, {amount: 150, coin: "USD", concept: "Supermercado", date: "2022-06-21T19:57:44.965Z"}, 
{amount: 5000, coin: "USD", concept: "Supermercado", date: "2022-07-18T19:57:44.965Z"}, {amount: 250, coin: "USD", concept: "Supermercado", date: "2022-04-29T19:57:44.965Z"}, 
{amount: 2000, coin: "USD", concept: "Supermercado", date: "2022-11-21T19:57:44.965Z"}, {amount: 2300, coin: "USD", concept: "Supermercado", date: "2022-01-03T19:57:44.965Z"}, 
{amount: 700, coin: "USD", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 650, coin: "USD", concept: "Fulbo", date: "2022-11-13T19:57:44.965Z"}, 
{amount: 2000, coin: "USD", concept: "Fulbo", date: "2022-11-23T19:57:44.965Z"}, {amount: 700, coin: "USD", concept: "Fulbo", date: "2022-11-18T19:57:44.965Z"}, 
{amount: 200, coin: "USD", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 60, coin: "USD", concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 100, coin: "USD", concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, {amount: 20, coin: "USD", concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 1500, coin: "USD", concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, {amount: 15, coin: "USD", concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 1200, coin: "USD", concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, {amount: 12, coin: "USD", concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 300, coin: "ARS" , concept: "Mascotas", date: "2022-11-03T19:57:44.965Z"}, {amount: 15999, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 200, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 30000, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 100, coin: "ARS" , concept: "Empresa", date: "2022-11-03T19:57:44.965Z"}, {amount: 54999, coin: "ARS" , concept: "Empresa", date: "2021-03-03T19:57:44.965Z"}, 
{amount: 200, coin: "ARS" , concept: "Empresa", date: "2020-11-03T19:57:44.965Z"}, {amount: 7000, coin: "ARS" , concept: "Empresa", date: "2022-02-03T19:57:44.965Z"}, 
{amount: 100, coin: "ARS" , concept: "Empresa", date: "2022-11-09T19:57:44.965Z"}, {amount: 6900, coin: "ARS" , concept: "Empresa", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 50, coin: "ARS" , concept: "Empresa", date: "2022-06-03T19:57:44.965Z"}, {amount: 600, coin: "ARS" , concept: "Empresa", date: "2022-11-23T19:57:44.965Z"}, 
{amount: 1500, coin: "ARS" , concept: "Empresa", date: "2022-11-06T19:57:44.965Z"}, {amount: 100, coin: "ARS" , concept: "Fulbo", date: "2022-11-21T19:57:44.965Z"}, 
{amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-21T19:57:44.965Z"}, {amount: 5000, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 6900, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 900, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
{amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 1200, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, 
 {amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}, {amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"},
  {amount: 1500, coin: "ARS" , concept: "Fulbo", date: "2022-11-03T19:57:44.965Z"}]

const PAGE_SIZE = 10

function Movimientos() {
  
  const [currentPage, setCurrentPage] = useState(1)
  // const {fetchedData, loading, error} = useFetchData({method: "get", url: "/transactions", headers: {Accept: "application/json", Authorization: authToken}})

  let loading = false
  let error = false

  // Filters
  const [coin, setCoin] = useState("ARS")
  const [input, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  
  const filteredArray = filterTransactions({array: transactions, coin, setCurrentPage, input, amount})

  const arrayLength = filteredArray.length

  const {paginationRange, TOTAL_PAGES} = usePagination(arrayLength, currentPage)

  const paginationDataDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE; 
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return filteredArray.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredArray])

  return (
    <div className='max-w-lg mx-auto my-5'>
      { loading && 
        <Loading />
      }
      {
        error && 
        <ErrorMessage />
      }
      <Filters
        coin={coin}
        setCoin={setCoin} 
        setConcept={setConcept}
        amount={amount}
        setAmount={setAmount}
      />
      <div className='min-h-[710px] flex flex-col'>
        {
          paginationDataDisplay.map((movimiento, index) => {
            return (
              <div key={index} className="flex justify-between items-center gap-[20px] mb-4">
                <House />
                <div className=''>
                  <p className='text-sm mb-2'>{movimiento.concept}</p>
                  <p className='text-sm'>{formatDate(movimiento.date)}</p>
                </div>
                <p className='text-base'>${movimiento.amount}({movimiento.coin === "USD" ? "USD" : "ARS"})</p>
              </div>
            )
          })
        }  
        <Paginate 
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} 
          numberOfPages={paginationRange} 
          maxPages={TOTAL_PAGES}
        />
      </div> 
    </div>
  )
}

export default Movimientos


