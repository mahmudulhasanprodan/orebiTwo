import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import {FetcherProduct} from "../../Redux/AllSlice/ProductSlice/ProductSlice"
import ProductDetailsTop from '../../ProductDetailsComponent/ProductDetailsTop';
import Loading from '../../CommonComponent/Loading/Loading';
import RatingStar from '../../ProductDetailsComponent/RatingStar';
import ProductInfo from '../../ProductDetailsComponent/ProductInfo';




const ProductDetails = () => {

const dispatch = useDispatch();
const [FeatcherData,setFeatcherData] = useState({});

useEffect(() => {
  dispatch(FetcherProduct("https://dummyjson.com/products/1"));
},[]);

 const {data,status} = useSelector((state) => state.products);




useEffect(() => {
  if(status.payload === "IDLE"){
    setFeatcherData(data.payload);
  }
},[status.payload, data.payload])


// HandlecarItem function start here 

const HandlecarItem = () =>{
  alert("hello")
};
 



  return (
    <>
      <div className="py-20">
        <div className="container">
          <div>
            <BreadCrumb />
          </div>
          <div>
            {status.payload === "LOADING" ? (
              <Loading />
            ) : status.payload === "ERROR" ? (
              "Error.."
            ) : (
              <ProductDetailsTop FeatcherDataTop={FeatcherData} />
            )}
          </div>

          <div>
            <h2 className="font-DMsans text-[39px] font-bold text-BtnColor">
              {FeatcherData.title ? FeatcherData.title : "Products"}
            </h2>
          </div>
          <div className="pt-4">
            <RatingStar rating={data.payload.rating} />
          </div>

          <div className="flex items-center gap-x-5 pt-5">
            <span className="font-DMsans text-base text-MenuTextColor line-through">
              ${FeatcherData.price}
            </span>
            <span className="font-DMsans font-bold text-BtnColor">
              $
              {Math.round(
                FeatcherData.price -
                  (FeatcherData.price * FeatcherData.discountPercentage) / 100,
              )}
            </span>
          </div>
          <div>
            <ProductInfo ProductStock={FeatcherData.stock} oncart={HandlecarItem}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails ;
