import React from 'react'
import Categories from './Categories'
import {CategoriesData, ShopColorData} from "../../../Data/Data"
import ShopColor from './ShopColor'

console.log(ShopColorData);

const ShopLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <Categories
          AllcatData={CategoriesData ? CategoriesData : []}
          Subtitle={"Shop by Category"}
        />
        <ShopColor AllcolorData={ShopColorData ? ShopColorData : []} ColotTitle= {"Shop by Color"}/>
      </div>
    </>
  );
}

export default ShopLeft;
