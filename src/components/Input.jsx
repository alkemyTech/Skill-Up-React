import Search from "./Icons/Search"

function Input({setConcept}) {

    const handleConcept = (e) => {
      setConcept(e.target.value)
    }

    return (
      <div className="mb-6">
        <label htmlFor="concepto" className="block text-left text-sm font-medium text-gray-700">
          Concepto
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            onChange={handleConcept}
            type="text"
            name="concepto"
            id="concepto"
            className="block w-full py-1 pt-1.5 peer border-[1px] rounded-md border-indigo-300 pl-2 pr-12 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-[2px] sm:text-sm"
            placeholder="Busque por concepto..."
          />
          <div className="absolute inset-y-0 right-2 peer-focus:animate-[wiggle_1s_ease-in-out_infinite] flex items-center cursor-pointer">
            <Search />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
          </div>
        </div>
      </div>
    )
}

export default Input