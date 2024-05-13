import React, { createContext, useState } from 'react'
import ShopRightTop from '../ShopRight/ShopRightTop'
import ShopRightBottom from '../ShopRight/ShopRightBottom';

export const ShopRightContex= createContext();


const ShopRight = ({className}) => {

  const [ShowpageItem, setShowpageItem] = useState(9);

     // HandlepageShow function start here 
     const HandlepageShow = (e) => {
      setShowpageItem(e.target.value);
     };
    

  return (
    <>
      <div className={className}>
        <ShopRightTop ShowPageItem={HandlepageShow} />
        <ShopRightContex.Provider value={ShowpageItem}>
          <ShopRightBottom />
        </ShopRightContex.Provider>
      </div>
    </>
  );
}

export default ShopRight
