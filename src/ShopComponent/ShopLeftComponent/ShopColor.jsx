import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Flex from '../../CommonComponent/Flex/Flex';



const ShopColor = ({AllcolorData, ColotTitle}) => {

    const [ShowColor,setShowColor] = useState(false);
  // HandleColor function start here
  const HandleColor = () => {
    setShowColor(!ShowColor);
  };

  return (
    <>
      <div>
        <div className="cursor-pointer" onClick={HandleColor}>
          <Flex className={"items-center justify-between pr-4 pt-6"}>
            <h2 className="font-DMsans font-bold text-xl">
              {ColotTitle ? ColotTitle : "No Titile"}
            </h2>
            {ShowColor ? (
              <IoIosArrowUp className="cursor-pointer" />
            ) : (
              <IoIosArrowDown className="cursor-pointer" />
            )}
          </Flex>
        </div>
        {ShowColor && (
          <div>
            {AllcolorData?.map((item) => (
              <Flex className={"items-center gap-x-4 pt-6 cursor-pointer"}>
                <div
                  className="h-[11px] w-[11px] rounded-full"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
                <div>
                  <h2 className="font-DMsans font-normal text-base text-MenuTextColor">
                    {item.title}
                  </h2>
                </div>
              </Flex>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ShopColor
