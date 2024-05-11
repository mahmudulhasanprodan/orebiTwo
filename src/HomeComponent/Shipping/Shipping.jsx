import React from 'react'
import ShipingItem from '../../CommonComponent/ShippingItem/ShipingItem'
import Flex from '../../CommonComponent/Flex/Flex'
import { FaTruck } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";


const Shipping = () => {

    const Data = [
        {id: 1, icon: "2", title: "Two years warranty"},
        {id: 2, icon: <FaTruck />, title: "Free shipping"},
        {id: 3, icon: <TfiReload />, title: "Return policy in 30 days"},
    
    ];

  return (
    <>
      <div>
        <div className="container">
          <Flex className={"items-center justify-between py-3"}>
            {Data?.map((item) => (
              <ShipingItem className={"flex items-center gap-x-3 cursor-pointer"}
              key={item.id}
              >
                <h2 className="text-xl items-baseline font-bold">{item.icon}</h2>
                <p className="font-DMsans text-base text-textTwoColor">{item.title}</p>
              </ShipingItem>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Shipping
