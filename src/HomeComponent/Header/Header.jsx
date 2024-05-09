import React from 'react'
import Logo from "../../assets/HomeComponentPic/Mainlogo.png"
import { NavLink  } from "react-router-dom";
import Flex from '../../CommonComponent/Flex/Flex';


const Header = () => {
  return (
    <>
      <div className="py-8">
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div>
              <picture>
                <img src={Logo} alt={Logo} className="cursor-pointer"/>
              </picture>
            </div>
            <div>
              <Flex
                className={
                  "items-center gap-x-10 font-DMsans text-MenuTextColor text-sm"
                }
              >
                <NavLink
                  to={"/home"}
                  className={"active:text-black active:font-bold"}
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/Shop"}
                  className={"active:text-black active:font-bold"}
                >
                  Shop
                </NavLink>
                <NavLink
                  to={"/About"}
                  className={"active:text-black active:font-bold"}
                >
                  About
                </NavLink>
                <NavLink
                  to={"/Contacts"}
                  className={"active:text-black active:font-bold"}
                >
                  Contacts
                </NavLink>
                <NavLink
                  to={"/Journal"}
                  className={"active:text-black active:font-bold"}
                >
                  Journal
                </NavLink>
              </Flex>
            </div>
            <div></div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Header
