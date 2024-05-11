import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Flex from '../Flex/Flex';

const ArrivalCommon = ({Image, Colorvarient, baze, ProductName,Price}) => {
  return (
    <>
      <div className="w-[95%] py-24 m-auto">
        <div className="relative overflow-hidden group cursor-pointer">
          <div className="absolute left-5 top-5">{baze}</div>
          <picture>
            <img src={Image} alt={Image} />
          </picture>
          <div className="w-full p-4 absolute bg-CommonColor -bottom-[150px] left-0 group-hover:bottom-0 transition-all">
            <Flex className={"items-center justify-end gap-x-3 right-3"}>
              <h2 className="font-DMsans text-MainfontColor">Add to List</h2>
              <span>
                <FaHeart />
              </span>
            </Flex>
            <Flex className={"items-center  justify-end gap-x-3 py-5 right-3"}>
              <h2 className="font-DMsans text-MainfontColor">Compare</h2>
              <span>
                <TfiReload />
              </span>
            </Flex>
            <Flex className={"items-center justify-end gap-x-3 right-3"}>
              <h2 className="font-DMsans text-MainfontColor">Add to Cart</h2>
              <span>
                <FaShoppingCart />
              </span>
            </Flex>
          </div>
        </div>
        <Flex className="items-center justify-between py-6">
          <h2 className="font-DMsans font-semibold text-xl">
            {ProductName ? ProductName : "Basic Crew Neck Tee"}
          </h2>
          <p className="font-DMsans text-base text-MenuTextColor">
            {Price ? Price : "$44.00"}
          </p>
        </Flex>

        <div>
          {Colorvarient && (
            <h3 className="font-DMsans text-MenuTextColor">Black</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default ArrivalCommon
