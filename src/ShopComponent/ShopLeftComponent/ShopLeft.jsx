import React from 'react'
import Categories from './Categories'
import {CategoriesData, ShopColorData, ShopBrandData} from "../../../Data/Data"
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
        <ShopColor
          AllcolorData={ShopColorData ? ShopColorData : []}
          ColotTitle={"Shop by Color"}
          ColorCode={true}
        />
          <ShopColor
          AllcolorData={ShopBrandData ? ShopBrandData : []}
          ColotTitle={"Shop by Brand"}
          ColorCode={false}
        />
      </div>
    </>
  );
}

export default ShopLeft;
