import { useMemo, useState } from 'react'
import usePagination from '../hooks/usePagination'
import formatDate from '../utils/formatDate'
import House from './Icons/House'
import Input from './Input'
import InputRange from './InputRange'
import InputSelect from './InputSelect'
import Paginate from './Paginate'

const transactions = [{monto: 1500, concepto: "Fulbo", fecha: "2022-11-01T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-12-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-02T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-05T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-15T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-20T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-02T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2020-08-09T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2021-09-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2021-11-12T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-10T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-08-08T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-12-24T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-12-25T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-12-12T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-09-07T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-04T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-12-08T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-12-09T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-12-12T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2021-02-06T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-01-01T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-06-21T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-07-18T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-04-29T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-21T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-01-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-13T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-23T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-18T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2021-03-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2020-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-02-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-09T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-06-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-23T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-06T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-21T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-21T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
{monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, 
 {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}, {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"},
  {monto: 1500, concepto: "Fulbo", fecha: "2022-11-03T19:57:44.965Z"}]

const PAGE_SIZE = 10

function Movimientos() {
  
  const [currentPage, setCurrentPage] = useState(1)
  // const {fetchedData, loading, error} = useFetchData({method: "get", url: "/transactions", headers: {Accept: "application/json", Authorization: authToken}})

  const newTransactions = transactions.sort((a,b) => new Date(b.fecha) - new Date(a.fecha))

  const arrayLength = transactions.length

  const {paginationRange, TOTAL_PAGES, MIN_PAGES} = usePagination(arrayLength, currentPage)

  const paginationDataDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE; 
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return newTransactions.slice(firstPageIndex, lastPageIndex);
  }, [currentPage])

  const handleNextPage = () => {
    if (currentPage === TOTAL_PAGES) {
        return
    }
    setCurrentPage(prevPage => prevPage + 1)
  }

  const handleSelectPage = (page) => {
    if (page === "...") return 
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage === MIN_PAGES) {
        return
    }
    setCurrentPage(prevPage => prevPage -  1)
  }

  return (
    <div>
      <div className='flex gap-4'>
        <InputRange />
        <Input />
        <InputSelect />
      </div>
      <div className='min-h-[710px] flex flex-col'>
        {
          paginationDataDisplay.map((movimiento, index) => {
            return (
              <div key={index} className="flex justify-between items-center gap-[20px] mb-4">
                <House />
                <div className=''>
                  <p className='text-sm mb-2'>{movimiento.concepto}</p>
                  <p className='text-sm'>{formatDate(movimiento.fecha)}</p>
                </div>
                <p className='text-base'>${movimiento.monto}</p>
              </div>
            )
          })
        }  
        <Paginate 
          handleNextPage={handleNextPage} 
          handlePrevPage={handlePrevPage} 
          handleSelectPage={handleSelectPage} 
          currentPage={currentPage} 
          numberOfPages={paginationRange} 
          maxPages={TOTAL_PAGES}
        />
      </div> 
    </div>
  )
}

export default Movimientos


