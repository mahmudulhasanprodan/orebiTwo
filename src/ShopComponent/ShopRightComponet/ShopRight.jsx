import React from 'react'
import ShopRightTop from '../ShopRight/ShopRightTop'
import ShopRightBottom from '../ShopRight/ShopRightBottom';

const ShopRight = ({className}) => {
  return (
    <>
      <div className={className}>
        <ShopRightTop />
        <ShopRightBottom />
      </div>
    </>
  );
}

export default ShopRight
