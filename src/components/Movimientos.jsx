import { useMemo, useState } from 'react'
import usePagination from '../hooks/usePagination'
import ChevronLeft from './Icons/ChevronLeft'
import ChevronRight from './Icons/ChevronRight'
import House from './Icons/House'

const ingresoSaldo = [{monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"},  {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}]
const gastos = [{monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}]
const envioDinero = [{monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}, {monto: 1500, concepto: "Fulbo", fecha: "1/11/2022"}]

const PAGE_SIZE = 10

function Movimientos() {
  
  const [currentPage, setCurrentPage] = useState(1)
  
  const movimientos = ingresoSaldo.concat(gastos).concat(envioDinero)
  const arrayLength = movimientos.length

  const {paginationRange, TOTAL_PAGES, MIN_PAGES} = usePagination(arrayLength, currentPage)

  const paginationDataDisplay = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE; 
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return movimientos.slice(firstPageIndex, lastPageIndex);
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
    <div className='min-h-[710px] flex flex-col'>
      {
        paginationDataDisplay.map((movimiento, index) => {
          return (
            <div key={index} className="flex justify-between items-center gap-[20px] mb-4">
              <House />
              <div className=''>
                <p className='text-sm mb-2'>{movimiento.concepto}</p>
                <p className='text-sm'>{movimiento.fecha}</p>
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
  )
}

export default Movimientos

function Paginate({handleNextPage, handlePrevPage, handleSelectPage, currentPage, numberOfPages, maxPages}) {

  return (
    <div className="flex mt-auto items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between items-center gap-6">
        <div>
          <p className="text-sm text-gray-700 mt-2">
            Showing page <span className="font-medium w-[8px]">{currentPage}</span> of <span className="font-medium w-[8px]">{maxPages}</span> pages{' '}
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              disabled={currentPage === 1}

              className={`${currentPage === 1 ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${currentPage === 1 && "cursor-not-allowed text-gray-400"}`}
              onClick={() => handlePrevPage()}
              >
              <span className="sr-only">Previous</span>
              <ChevronLeft  className={`h-5 w-5 `} aria-hidden="true" />
            </a>
              {
                numberOfPages.map((pageNumber, index) => {
                  return(
                    <a
                      key={index}
                      onClick={() => handleSelectPage(pageNumber)}
                      className=
                      {` ${currentPage === pageNumber ? "cursor-pointer relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                       :"cursor-pointer relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                      `}
                    >
                      {pageNumber}
                    </a>
                  )
                })
              }
            <a
              onClick={() => handleNextPage()}
              disabled={currentPage === maxPages}
              className={`${currentPage === maxPages ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} 
                relative inline-flex items-center rounded-r-md border border-gray-300 bg-white 
                px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`
              }
            >
              <span className="sr-only">Next</span>
              <ChevronRight  className={`h-5 w-5`} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
