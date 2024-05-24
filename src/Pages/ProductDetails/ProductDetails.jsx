import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import {FetcherProduct} from "../../Redux/AllSlice/ProductSlice/ProductSlice"
import Pic from "../../assets/HomeComponentPic/ArrivalPicfour.png"



const ProductDetails = () => {
const dispatch = useDispatch();

const [Feteherdata, setfeteherdata] = useState({});

useEffect(() => {
  dispatch(FetcherProduct("https://dummyjson.com/products"));
}, []);

const { data, status } = useSelector((state) => state.products);





useEffect(() => {
  if(status.payload === "IDLE"){
    setfeteherdata(data.payload);
  }
},[status.payload, data.payload]);

console.log(Feteherdata);








  return (
    <>
      <div className="py-20">
        <div className="container">
          <div>
            <BreadCrumb />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <img src={Pic} alt={Pic} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails
