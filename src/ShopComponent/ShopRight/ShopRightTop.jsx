import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import {DropdownData , DropdownShowData} from "../../../Data/Data"
import Flex from '../../CommonComponent/Flex/Flex';



const ShopRightTop = () => {
    const [DropDownData, setDropDownData] = useState(DropdownData);
    const [DropDownShowData, setDropDownShowData] = useState(DropdownShowData);
    
  return (
    <>
      <Flex className={"items-center justify-between px-3 pt-2"}>
        <div className="cursor-pointer">
          <FaBars />
        </div>
      <div className="flex items-center gap-x-3">
      <Flex className={"items-center"}>
          <h2 className="font-DMsans pr-3 font-normal text-base text-MenuTextColor">Sort by:</h2>
          <select
            name="sort"
            id="sort"
            className="min-w-[220px] py-1 cursor-pointer pl-3 border-2 border-gray-100"
          >
            {DropDownData?.map((item) => (
              <option value="Feature" key={item.product} className="font-DMsans text-MenuTextColor font-normal">
                {item.product}
              </option>
            ))}
          </select>
        </Flex>
        <Flex className={"items-center"}>
          <h2 className="font-DMsans pr-3 font-normal text-base text-MenuTextColor">Show</h2>
          <select
            name="sort"
            id="sort"
            className="min-w-[150px] py-1 cursor-pointer pl-3  border-2 border-gray-100"
          >
            {DropdownShowData?.map((item) => (
              <option value="Feature" key={item.product} className="font-DMsans text-MenuTextColor font-normal">
                {item.product}
              </option>
            ))}
          </select>
        </Flex>
      </div>
      </Flex>
    </>
  );
}

export default ShopRightTop
