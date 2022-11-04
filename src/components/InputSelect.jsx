import React from 'react'
import { useState } from 'react'

function InputSelect() {
    const coinOptions = [{id: 1, name: "ARS"}, {id:2, name:"USD"}]
    
    const [select, setSelect] = useState(false)
    const [coin, setCoin] = useState("ARS")

    const selectCoin = (coin) => {
        setCoin(coin)
        setSelect(true)
    }

    return (
        <div className='mb-6'>
            <label id="listbox-label" className="block text-left text-sm font-medium text-gray-700">Moneda</label>
            <div className="relative flex mt-[2px]">
                <button onClick={() => setSelect(!select)} type="button" className="relative w-full cursor-pointer rounded-md border border-indigo-300 bg-white py-[6px] pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                    <span className="flex items-center">
                        <span className="block truncate">{coin}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                {/* <!--
                Select popover, show/hide based on select state.

                Entering: ""
                    From: ""
                    To: ""
                Leaving: "transition ease-in duration-100"
                    From: "opacity-100"
                    To: "opacity-0"
                --> */}
                <ul className={`${select && "hidden"} absolute top-9 z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`} tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                {/* <!--
                    Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                    Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
                --> */}
                    {
                        coinOptions.map(coinOption => {
                            return(
                                <li key={coinOption.id} 
                                onClick={() =>  selectCoin(coinOption.name)} 
                                className="text-gray-900 relative select-none py-2 pl-3 pr-9 cursor-pointer hover:bg-indigo-500 hover:text-white" id="listbox-option-0" role="option">
                                    <div className="flex items-center">
                                        <span className={`${coinOption.name === coin ? "font-semibold" : "font-normal"}  block truncate`}>{coinOption.name}</span>
                                    </div>
                                    <span className={`${coinOption.name === coin ? "block  text-indigo-600 hover:text-white" : "hidden text-white"}  text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4`}>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default InputSelect

