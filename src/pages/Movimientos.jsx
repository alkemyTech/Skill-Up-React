import { useMemo, useState } from 'react'
import usePagination from '../hooks/usePagination'
import filterTransactions from '../utils/filterTransactions'
import formatDate from '../utils/formatDate'
import Filters from '../components/Filters'
import House from '../components/Icons/House'
import Paginate from '../components/Paginate'
import ErrorMessage from '../components/ErrorMessage'
import ListSkeleton from '../components/ListSkeleton'
import useFetchData from '../hooks/useFetchData'

const PAGE_SIZE = 10

function Movimientos() {
  
  const token = JSON.parse(localStorage.getItem('user')).token
  
  const [currentPage, setCurrentPage] = useState(1)
  // Filters
  const [coin, setCoin] = useState("ARS")
  const [input, setConcept] = useState("")
  const [amount, setAmount] = useState(0)
  

  const {fetchedData, loading, error} = useFetchData({method: "GET", url: "/transactions", headers: {Accept: "application/json", Authorization: `Bearer ${token}`}})

  const filteredArray = filterTransactions({array: fetchedData, setCurrentPage, input, amount})

  const arrayLength = filteredArray.length

  const {paginationRange, TOTAL_PAGES} = usePagination(arrayLength, currentPage)

  const paginationDataDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE; 
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return filteredArray.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredArray, fetchedData])
  
  return (
    <div className='max-w-lg mx-auto my-5'>
      <Filters
        coin={coin}
        setCoin={setCoin} 
        setConcept={setConcept}
        amount={amount}
        setAmount={setAmount}
      />
      {
        error ?
        <ErrorMessage />
        : loading ? 
        <ListSkeleton rows={10} />
        : paginationDataDisplay ?
        <div className='min-h-[710px] flex flex-col'>
            {
              paginationDataDisplay.map((movimiento, index) => {
                formatDate(movimiento.date).tipo1
                return (
                  <div key={index} className="flex justify-between items-center gap-[20px] mb-4">
                    <House />
                    <div className=''>
                      <p className='text-sm mb-2'>{movimiento.concept}</p>
                      <p className='text-sm'>{formatDate(movimiento.date).tipo1}</p>
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
          : null
      }
    </div>
  )
}

export default Movimientos


