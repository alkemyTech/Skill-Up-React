import React from "react";

function InputRange({ setAmount, amount }) {
  const changeAmountFilter = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="mb-6">
      <label
        htmlFor="price"
        className="block text-left text-sm font-medium text-gray-700"
      >
        Price
      </label>
      <div className="relative rounded-md mt-1 shadow-sm overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pt-[6px] pb-[4px]">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          onChange={changeAmountFilter}
          type="number"
          name="price"
          id="price"
          min={0}
          step={100}
          className="block w-full pt-[6px] pb-[4px] pl-6 border-[1px] z-[10] rounded-md border-indigo-300 focus:outline-indigo-500 focus:ring-indigo-500 focus:outline-[2px] sm:text-sm"
          placeholder="0.00"
        />
      </div>
    </div>
  );
}

export default InputRange;
