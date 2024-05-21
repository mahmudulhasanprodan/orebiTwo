import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa";
import {DropdownData , DropdownShowData} from "../../../Data/Data"
import { FaBarsProgress } from "react-icons/fa6";
import Flex from '../../CommonComponent/Flex/Flex';




const ShopRightTop = ({ShowPageItem}) => {
  const [DropDownData, setDropDownData] = useState(DropdownData);
  const [DropDownShowData, setDropDownShowData] = useState(DropdownShowData);

   
 
    
  return (
    <>
      <Flex className={"items-center justify-between px-3 pt-2"}>
        <div className="cursor-pointer flex gap-x-4 items-center">
          <FaBars />
          <FaBarsProgress />
        </div>
        <div className="flex items-center gap-x-3">
          <Flex className={"items-center"}>
            <h2 className="font-DMsans pr-3 font-normal text-base text-MenuTextColor">
              Sort by:
            </h2>
            <select
              name="sort"
              id="sort"
              className="min-w-[220px] py-1 cursor-pointer pl-3 border-2 border-gray-100"
            >
              {DropDownData?.map((item) => (
                <option
                  value="Feature"
                  key={item.product}
                  className="font-DMsans text-MenuTextColor font-normal"
                >
                  {item.product}
                </option>
              ))}
            </select>
          </Flex>
          <Flex className={"items-center"}>
            <h2 className="font-DMsans pr-3 font-normal text-base text-MenuTextColor">
              Show
            </h2>
            <select
              name="sort"
              id="sort"
              className="min-w-[150px] py-1 cursor-pointer pl-3  border-2 border-gray-100"
              onChange={ShowPageItem}
            >
              <option
                value="Select item"
                className="font-DMsans text-MenuTextColor font-normal"
              >
                Select item
              </option>
              {DropDownShowData?.map((item) => (
                <option
                  value={item.product}
                  key={item.product}
                  className="font-DMsans text-MenuTextColor font-normal"
                >
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
