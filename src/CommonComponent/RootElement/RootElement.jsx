import React from 'react'
import Header from "../../HomeComponent/Header/Header"
import Menu from "../../HomeComponent/Menu/Menu"
import FinalFooter from "../../HomeComponent/FinalFooter/FinalFooter"
import { Outlet } from 'react-router-dom'

const RootElement = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <FinalFooter />
    </>
  );
}

export default RootElement
