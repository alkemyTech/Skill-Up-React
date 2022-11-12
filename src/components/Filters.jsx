import React from 'react'
import Input from './Input'
import InputRange from './InputRange'
import InputSelect from './InputSelect'

function Filters({setAmount, amount, setCoin, coin, setConcept}) {
  return (
    <div className='flex gap-4 mt-[60px]'>
        <InputRange setAmount={setAmount} amount={amount} />
        <Input setConcept={setConcept} />
    </div>
  )
}

export default Filters