import React from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'
import ShopLeft from '../../ShopComponent/ShopLeftComponent/ShopLeft'
import ShopRight from '../../ShopComponent/ShopRightComponet/ShopRight'

const Shop = () => {
  return (
    <>
      <div>
        <div className="container">
            <div className="pt-36">
                <h1 className="font-DMsans font-bold text-4xl">Products</h1>
            </div>
            <div className="pt-6">
                <BreadCrumb />
            </div>
            <div className="flex">
                <ShopLeft className="w-[25%] h-[100vh]"/>
                <ShopRight className="w-[75%] bg-green-300 h-[100vh]"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Shop
