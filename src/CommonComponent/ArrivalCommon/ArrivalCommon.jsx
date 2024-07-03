import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Flex from '../Flex/Flex';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



const ArrivalCommon = ({Image, Colorvarient, baze, ProductName,Price,ProductId,AddTocart }) => {
 

  return (
    <>
      <div className="m-auto w-[95%]">
        <div className="group relative cursor-pointer overflow-hidden">
          <div className="absolute left-5 top-5">{baze}</div>
          <Link to={`/products-details/${ProductId}`}>
            <picture>
              <img
                src={Image}
                alt={Image}
                className="h-[250px] w-[300px] object-cover"
              />
            </picture>
          </Link>

          <div className="absolute -bottom-[150px] left-0 w-full bg-CommonColor p-4 transition-all group-hover:bottom-0">
            <Flex className={"right-3 items-center justify-end gap-x-3"}>
              <h2 className="font-DMsans text-MainfontColor">Add to List</h2>
              <span>
                <FaHeart />
              </span>
            </Flex>
            <Flex className={"right-3  items-center justify-end gap-x-3 py-5"}>
              <h2 className="font-DMsans text-MainfontColor">Compare</h2>
              <span>
                <TfiReload />
              </span>
            </Flex>
            <div  onClick={AddTocart}>
            <Flex className={"right-3 items-center justify-end gap-x-3"}>
              <h2 className="font-DMsans text-MainfontColor">Add to Cart</h2>
              <span>
                <FaShoppingCart />
              </span>
            </Flex>
            </div>
          </div>
        </div>
        <Flex className="items-center justify-between py-6">
          <h2 className="w-60 font-DMsans text-base font-semibold">
            {ProductName ? ProductName : "Basic Crew Neck Tee"}
          </h2>
          <p className="font-DMsans text-base text-MenuTextColor">
            {Price ? `$${Price}` : "$44.00"}
          </p>
        </Flex>

        <div>
          {Colorvarient && (
            <h3 className="font-DMsans text-MenuTextColor">{Colorvarient}</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default ArrivalCommon
