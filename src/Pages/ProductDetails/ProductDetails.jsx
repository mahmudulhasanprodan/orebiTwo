import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import {FetcherProduct} from "../../Redux/AllSlice/ProductSlice/ProductSlice"
import ProductDetailsTop from '../../ProductDetailsComponent/ProductDetailsTop';
import Loading from '../../CommonComponent/Loading/Loading';
import RatingStar from '../../ProductDetailsComponent/RatingStar';




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


console.log(data.payload.rating);
 



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
            <h2 className="font-DMsans font-bold text-[39px] text-BtnColor">{FeatcherData.title ? FeatcherData.title : "Products"}</h2>
          </div>
          <RatingStar Rating={data.payload.rating}/>
        </div>
      </div>
    </>
  );
}

export default ProductDetails
