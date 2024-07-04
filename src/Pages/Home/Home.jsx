import React, { useEffect, useState } from 'react'
import Banner from '../../HomeComponent/Banner/Banner';
import Shipping from '../../HomeComponent/Shipping/Shipping';
import Offer from '../../HomeComponent/Offer/Offer';
import Arrival from '../../HomeComponent/Arrival/Arrival';
import{ArrivalData, BestSellerData, SpecialOffersData} from "../../../Data/Data"
import Phone from '../../HomeComponent/Phone/Phone';
import { FetcherProduct } from '../../Redux/AllSlice/ProductSlice/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Home = () => {
  
const dispatch = useDispatch()
const [Palldata,setPalldata] = useState([]);
const {productId} =useParams();

  useEffect(() => {
    dispatch(FetcherProduct(`https://dummyjson.com/products`))
},[])


const {data,status} = useSelector((state) => (state.products))


useEffect(() => {
  if(status.payload === "IDLE"){
    setPalldata(data.payload.products);
  }
},[status.payload,data.payload])



  return (
    <>
      <Banner />
      <Shipping />
      <Offer />
      <Arrival HeadingTitle={"New Arrivals"} Pdata={Palldata.slice(0,10)}/>
      <Arrival HeadingTitle={"Our Best Sellers"} Pdata={Palldata.slice(11,20)}/>
      <Phone />
      <Arrival HeadingTitle={"Special Offers"} Pdata={Palldata.slice(21,30)}/>
    </>
  );
}

export default Home
