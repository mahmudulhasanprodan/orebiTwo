import React from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'
import img from "../../assets/HomeComponentPic/ArrivalPicone.png"
import { FaPlus,  FaMinus } from "react-icons/fa6";

const Cart = () => {
  return (
    <>
      <div className="py-[124px]">
        <div className="container">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-DMsans text-4xl font-bold">Cart</h2>
            <BreadCrumb />
          </div>
          <div className="flex items-center justify-between bg-MenuBgColor py-8">
            <div className="shrink grow basis-60 flex justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Product
              </h2>
            </div>
            <div className="grow basis-60 flex justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Price
              </h2>
            </div>
            <div className="grow basis-60 flex justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Quantity
              </h2>
            </div>
            <div className="grow basis-60 flex justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Total
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center py-10">
            <div className="flex shrink grow basis-60 cursor-pointer gap-x-3 justify-center">
              <span>X</span>
              <div className="h-20 w-20">
                <picture>
                  <img src={img} alt={img} />
                </picture>
              </div>
            </div>
            <div className="shrink grow basis-60 flex justify-center">
              <p>$44.00</p>
            </div>
            <div className="shrink grow basis-60 flex justify-center">
              <div className="flex items-center">
                <div className="flex cursor-pointer items-center justify-around  gap-x-3 py-1 border-2 border-gray-300">
                  <span>
                    <FaMinus />
                  </span>
                  <p>1</p>
                  <span>
                    <FaPlus />
                  </span>
                </div>
              </div>
            </div>
            <div className="grow basis-60 flex justify-center">
              <p>$44.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart
