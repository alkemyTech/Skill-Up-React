import { useState } from 'react'
import filterTransactions from '../utils/filterTransactions'
import formatDate from '../utils/formatDate'
import Filters from '../components/Filters'
import House from '../components/Icons/House'
import Paginate from '../components/Paginate'
import ErrorMessage from '../components/ErrorMessage'
import ListSkeleton from '../components/ListSkeleton'
import useFetchData from '../hooks/useFetchData'


function Movimientos() {
  
  const token = JSON.parse(localStorage.getItem('user'))["token"]
  
  const [fetchUrl, setFetchUrl] = useState("/transactions")
  // Filters
  // const [coin, setCoin] = useState("ARS")
  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)

  
  const {fetchedData, loading, error} = useFetchData({method: "GET", fetchUrl, headers: {Accept: "application/json", Authorization: `Bearer ${token}`}})

  const filteredArray = filterTransactions({array: fetchedData, input: concept, amount})

  // const arrayLength = filteredArray.length

  // const {paginationRange, TOTAL_PAGES} = usePagination(arrayLength, currentPage)

  // const paginationDataDisplay = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PAGE_SIZE; 
  //   const lastPageIndex = firstPageIndex + PAGE_SIZE;
  //   return filteredArray.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, filteredArray, fetchedData])
  
  return (
    <div className='max-w-lg mx-auto my-5'>
      <Filters
        // coin={coin}
        // setCoin={setCoin} 
        setConcept={setConcept}
        amount={amount}
        setAmount={setAmount}
      />
      {
        error ?
        <ErrorMessage />
        : loading ? 
        <ListSkeleton rows={10} />
        : 
        <div className='min-h-[710px] flex flex-col'>
            {
              filteredArray.map((movimiento, index) => {
                formatDate(movimiento.date).tipo1
                return (
                  <div key={index} className="flex justify-between items-center gap-[20px] mb-4 px-10">
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
              pageData={fetchedData}
              setFetchUrl={setFetchUrl}
            />
          </div> 
      }
    </div>
  )
}

export default Movimientos


