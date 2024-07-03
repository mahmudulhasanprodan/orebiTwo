import React from 'react'
import Logo from "../../assets/HomeComponentPic/Mainlogo.png"
import { NavLink, Link } from "react-router-dom";
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
                  to={"/"}
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
                  to={"/contact"}
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
            <div>
              <h2 className="font-DMsans text-sm">Already member? <Link to={"/login"} className="text-blue-400 font-bold underline">Login</Link> here.</h2>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Header
