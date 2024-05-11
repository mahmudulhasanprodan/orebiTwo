import React from 'react'
import Categories from './Categories'
import {CategoriesData} from "../../../Data/Data"


const ShopLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <Categories AllcatData={CategoriesData ? CategoriesData : []} Subtitle={"Shop by Category"}/>
      </div>
    </>
  );
}

export default ShopLeft;
