import React from 'react'
import Header from '../../HomeComponent/Header/Header'
import Menu from '../../HomeComponent/Menu/Menu';
import Banner from '../../HomeComponent/Banner/Banner';
import Shipping from '../../HomeComponent/Shipping/Shipping';
import Offer from '../../HomeComponent/Offer/Offer';
import Arrival from '../../HomeComponent/Arrival/Arrival';
import{ArrivalData, BestSellerData, SpecialOffersData} from "../../../Data/Data"
import Phone from '../../HomeComponent/Phone/Phone';

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Shipping />
      <Offer />
      <Arrival HeadingTitle={"New Arrivals"} Pdata={ArrivalData}/>
      <Arrival HeadingTitle={"Our Best Sellers"} Pdata={BestSellerData}/>
      <Phone />
      <Arrival HeadingTitle={"Special Offers"} Pdata={SpecialOffersData}/>
    </>
  );
}

export default Home
