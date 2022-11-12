import { useState } from 'react'
import filterTransactions from '../utils/filterTransactions'
import formatDate from '../utils/formatDate'
import Filters from '../components/Filters'
import Paginate from '../components/Paginate'
import ErrorMessage from '../components/ErrorMessage'
import ListSkeleton from '../components/ListSkeleton'
import useFetchData from '../hooks/useFetchData'


function Movimientos() {
  
  const token = JSON.parse(localStorage.getItem('user'))["token"]
  
  const [fetchUrl, setFetchUrl] = useState("/transactions")
  
  // Filters

  const [concept, setConcept] = useState("")
  const [amount, setAmount] = useState(0)

  
  const {fetchedData, loading, error} = useFetchData({method: "GET", fetchUrl, headers: {Accept: "application/json", Authorization: `Bearer ${token}`}})

  const filteredArray = filterTransactions({array: fetchedData, input: concept, amount})

  
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
            {
              filteredArray.length === 0 &&
              <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-lg text-gray-500 mt-5'>No hay movimientos</p>
              </div>
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


