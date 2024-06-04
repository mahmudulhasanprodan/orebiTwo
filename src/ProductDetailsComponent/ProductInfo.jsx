import React from 'react'

const ProductInfo = () => {
  return (
    <>
      <div className="pt-4">
        <hr />
        <div className="flex flex-col gap-y-5 pt-4"> 
          <div className="flex items-center gap-x-6">
            <h2 className="font-DMsans text-base font-bold text-MainfontColor">
              COLOR:
            </h2>
            <div className="flex items-center gap-x-3">
              <div className="h-[20px] w-[20px] rounded-full bg-green-500"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-green-500"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-green-500"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="flex items-center gap-x-12">
            <h2 className="font-DMsans text-base font-bold text-MainfontColor">
              SIZE:
            </h2>
            <div className="flex items-center gap-x-3">
              <select
                name="ProductSize"
                id="ProductSize"
                className="cursor-pointer border-2 border-gray-200 px-8 py-1"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-x-12">
            <h2 className="font-DMsans text-base font-bold text-MainfontColor">
            QUANTITY:
            </h2>
            <div className="flex items-center gap-x-3">
             
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo
