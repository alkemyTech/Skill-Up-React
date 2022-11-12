import React from 'react'

function SkeletonCard({numberOfCards}) {
    const cards = []
    for (let i = 0; i < numberOfCards; i++) {
        cards.push(i)
    }

    return (
        <div className='flex flex-wrap justify-center gap-6'>
            {
                cards.map((_, index) => (
                    <div key={index} role="status" className="max-w-sm animate-pulse">
                        <div className='rounded-md p-4'>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[360px]"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default SkeletonCard