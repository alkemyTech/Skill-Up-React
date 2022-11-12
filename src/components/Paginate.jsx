import ChevronLeft from './Icons/ChevronLeft'
import ChevronRight from './Icons/ChevronRight'

function Paginate({pageData, setFetchUrl, currentPage, maxPages}) {
    const handleNextPage = () => {
      if (pageData.nextPage){
        setFetchUrl(pageData.nextPage)
      }
    }

    const handlePrevPage = () => {
      if (pageData.previousPage) {
        setFetchUrl(pageData.previousPage)
      }
    }

    return (
      <div className="flex mt-auto items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            onClick={() => handlePrevPage()}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            onClick={() => handleNextPage()}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between items-center gap-6">
            <nav className="isolate w-full flex justify-between -space-x-px rounded-md" aria-label="Pagination">
              <a
                disabled={!pageData.previousPage}
  
                className={`${!pageData.previousPage ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} min-w-[84px] relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${currentPage === 1 && "cursor-not-allowed text-gray-400"}`}
                onClick={() => handlePrevPage()}
                >
                <span className="sr-only">Previous</span>
                <ChevronLeft className={`h-5 w-5 `} aria-hidden="true" />
              </a>
              <a
                onClick={() => handleNextPage()}
                disabled={!pageData.nextPage}
                className={`${!pageData.nextPage ? "cursor-not-allowed text-gray-400" : "cursor-pointer"} 
                  min-w-[84px] justify-center relative inline-flex items-center rounded-r-md border border-gray-300 bg-white 
                  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`
                }
              >
                <span className="sr-only">Next</span>
                <ChevronRight  className={`h-5 w-5`} aria-hidden="true" />
              </a>
            </nav>
        </div>
      </div>
    )
  }

export default Paginate