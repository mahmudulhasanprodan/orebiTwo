import React from 'react'
import Categories from './Categories'
import {CategoriesData, ShopColorData, ShopBrandData, ShopPriceData} from "../../../Data/Data"
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
          icon={true}
          Dropexpand={false}
        />
          <ShopColor
          AllcolorData={ShopBrandData ? ShopBrandData : []}
          ColotTitle={"Shop by Brand"}
          ColorCode={false}
          icon={true}
          Dropexpand={false}
        />
         <ShopColor
          AllcolorData={ShopPriceData ? ShopPriceData : []}
          ColotTitle={"Shop by Price"}
          ColorCode={false}
          icon={false}
          Dropexpand={true}
        />
      </div>
    </>
  );
}

export default ShopLeft;
