import { useMemo } from "react"

function usePagination( arrayLength, currentPage ) {

    const ITEMS_PER_PAGE = 10
    const SIBLING_COUNT = 1
    const MIN_PAGES = 1
    const DOTS = "..."
    const TOTAL_PAGES = Math.ceil(arrayLength / ITEMS_PER_PAGE)

    const range = (start, end) => {
        let length = end - start + 1;

        console.log(Array.from({length}, (_, idx) => idx + start))
        return Array.from({length}, (_, idx) => idx + start)
    }

    const paginationRange = useMemo(() => {

        const TOTAL_PAGE_NUMBERS = SIBLING_COUNT + 5

        const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1)
        const rightSiblingIndex = Math.min(currentPage + SIBLING_COUNT, TOTAL_PAGES)
        
        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < TOTAL_PAGES - 2;
        
        if (TOTAL_PAGE_NUMBERS >= TOTAL_PAGES){
            return range(1, TOTAL_PAGES)
        }
        
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * SIBLING_COUNT;
            let leftRange = range(1, leftItemCount);
      
            return [...leftRange, DOTS, TOTAL_PAGES];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * SIBLING_COUNT;
            let rightRange = range(
              TOTAL_PAGES - rightItemCount + 1,
              TOTAL_PAGES
            );
            return [MIN_PAGES, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [MIN_PAGES, DOTS, ...middleRange, DOTS, TOTAL_PAGES];
        }

    }, [arrayLength, currentPage])

    return {paginationRange, TOTAL_PAGES, MIN_PAGES}

}

export default usePagination