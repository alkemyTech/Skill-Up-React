import React from 'react'
import Error from './Icons/Error'

function ErrorMessage() {
  return (
    <div clasName="flex items-center justify-center w-full ">
        <div className='bg-red-400 flex flex-col items-center py-6'>
            <Error />
            <h4 className='text-lg font-bold'>
            Problems loading the data
            </h4>
            <p className='max-w-md'>
            If the problem persists, try to refresh the page or wait a few minutes
            and try again.
            </p>
        </div>
    </div>
  )
}

export default ErrorMessage