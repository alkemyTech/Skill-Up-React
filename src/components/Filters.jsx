import React from 'react'
import Input from './Input'
import InputRange from './InputRange'
import InputSelect from './InputSelect'

function Filters({setAmount, amount, setCoin, coin, setConcept}) {
  return (
    <div className='flex gap-4'>
        <InputRange setAmount={setAmount} amount={amount} />
        <Input setConcept={setConcept} />
        <InputSelect setCoin={setCoin} coin={coin} />
    </div>
  )
}

export default Filters