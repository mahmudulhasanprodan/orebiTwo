import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Flex from '../../CommonComponent/Flex/Flex';
import { Link } from "react-router-dom";
import CardPic from "../../assets/HomeComponentPic/ArrivalPicfour.png"
import Button from '../../CommonComponent/Button/Button';



const Menu = () => {
 const[ShowCategories, setShowCategories] = useState(false);
 const[ShowAccount, setShowAccount] = useState(false);
 const[ShowCart, setShowCart] = useState(false);
 const MenuRef = useRef();
 console.log(MenuRef);

// HandleCategories function start here 
 const HandleCategories = () => {
    setShowAccount(false);
    setShowCart(false);
    setShowCategories(!ShowCategories);
 };
 
//  HandleAccount function start here  
  const HandleAccount = () =>{
    setShowCart(false);
    setShowCategories(false);
    setShowAccount(!ShowAccount);
  };

//   HandleCart function start here 

 const HandleCart = () => {
    setShowCategories(false);
    setShowAccount(false);
    setShowCart(!ShowCart);
 };

//  MenuRef function start here 
 useEffect(() => {
      window.addEventListener( 'click' , (e) => {
        if(!MenuRef.current.contains(e.target)){
          setShowAccount(false);
          setShowCart(false);
          setShowCategories(false);
        }else{
          null
        }
      })
 },[]);

  return (
    <>
      <div className="bg-MenuBgColor py-10" ref={MenuRef}>
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div
              className="flex items-center gap-x-3 cursor-pointer relative"
              onClick={HandleCategories}
            >
              <FaBarsStaggered
                className={`${ShowCategories && "text-red-400"}`}
              />
              <span>Shop by Category</span>
              {ShowCategories && (
                <div className="absolute top-10">
                  <Flex className={"flex-col divide-y divide-[#97979738]"}>
                    <Link
                      to={"/accessories"}
                      className="py-2 bg-black text-white text-center px-20 hover:bg-slate-500"
                    >
                      Accessories
                    </Link>
                    <Link
                      to={"/furniture"}
                      className="py-2 bg-black text-white text-center px-20 hover:bg-slate-500"
                    >
                      Furniture
                    </Link>
                    <Link
                      to={"/electronics"}
                      className="py-2 bg-black text-white text-center px-20 hover:bg-slate-500"
                    >
                      Electronics
                    </Link>
                    <Link
                      to={"/cloths"}
                      className="py-2 bg-black text-white text-center px-20 hover:bg-slate-500"
                    >
                      Cloths
                    </Link>
                    <Link
                      to={"/bags"}
                      className="py-2 bg-black text-white text-center px-20 hover:bg-slate-500"
                    >
                      Bags
                    </Link>
                    <Link
                      to={"/bags"}
                      className="py-2 bg-black text-white text-center px-20 hover:bg-slate-500"
                    >
                      Applience
                    </Link>
                  </Flex>
                </div>
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="py-2 w-[631px] pl-3 font-DMsans rounded-sm"
                />
                <div className="absolute right-4 top-2/4 -translate-y-1/2 cursor-pointer">
                  <IoSearch className="text-lg" />
                </div>
              </div>
            </div>
            <Flex className={"items-center cursor-pointer gap-x-6"}>
              <div
                className="flex items-center gap-x-2 relative"
                onClick={HandleAccount}
              >
                <FaUser className={`${ShowAccount && "text-green-400"}`} />
                {ShowAccount ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {ShowAccount && (
                <div className="absolute top-44 right-24">
                  <Flex
                    className={
                      "flex-col bg-blue-400  justify-center items-center divide-y divide-[#f7f6ef80]"
                    }
                  >
                    <Link
                      to={"/account"}
                      className="hover:bg-black py-2 px-16 hover:text-white font-DMsans"
                    >
                      My Account
                    </Link>
                    <Link
                      to={"/logout"}
                      className="hover:bg-black py-2 px-20 hover:text-white font-DMsans"
                    >
                      Logout
                    </Link>
                  </Flex>
                </div>
              )}

              <div className="relative">
                <FaShoppingCart onClick={HandleCart} />
              </div>
                {ShowCart && (
                        <div className="border-2 bg-white border-FooterColor absolute right-10 top-44 transition-all">
                        <div className="bg-MenuBgColor z-0 px-8">
                          <Flex className={"items-center gap-x-8 py-8"}>
                            <div>
                              <picture>
                                <img
                                  src={CardPic}
                                  alt={CardPic}
                                  className="w-20 h-20 border-2 border-MenuTextColor"
                                />
                              </picture>
                            </div>
                            <div>
                              <h2 className="font-DMsans text-lg">
                                Black Smart Watch
                              </h2>
                              <p className="font-DMsans text-lg">$44.00</p>
                            </div>
                          </Flex>
                        </div>
                        <div className="px-8 py-8">
                          <div>
                            <div className="pb-6">
                              <h2 className="font-DMsans text-MenuTextColor">
                                SubTotal:{" "}
                                <span className="font-bold text-black">$44.00</span>
                              </h2>
                            </div>
                            <Flex className={"items-center gap-x-4"}>
                              <Button
                                title={"View Cart"}
                                className={
                                  "border-2 border-black py-2 px-10 font-DMsans"
                                }
                              />
                              <Button
                                title={"Checkout"}
                                className={"bg-black text-white py-2 px-10"}
                              />
                            </Flex>
                          </div>
                        </div>
                      </div>
                )}
                
            
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Menu
