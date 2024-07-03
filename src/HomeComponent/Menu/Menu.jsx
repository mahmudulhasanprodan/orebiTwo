import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Flex from '../../CommonComponent/Flex/Flex';
import { Link, useNavigate } from "react-router-dom";
import Button from '../../CommonComponent/Button/Button';
import { useSelector,useDispatch} from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { removeCaritem,GetTotal } from '../../Redux/AllSlice/CartSlice/CartSlice';


const Menu = () => {
 const[ShowCategories, setShowCategories] = useState(false);
 const[ShowAccount, setShowAccount] = useState(false);
 const[ShowCart, setShowCart] = useState(false);
 const MenuRef = useRef();
 const cartRef= useRef();
 const Navigate = useNavigate();
 const dispatch = useDispatch();
 

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
   window.addEventListener("click", (e) => {
     if (!MenuRef.current.contains(e.target)) {
       setShowAccount(false);
       setShowCategories(false);
     }
   });
 },[]);

 //add cart item
const { carItem,totalcartItem,totalAmount} = useSelector((state) => state.Cart);

//HandleViewCart function start here
const HandleViewCart = () => {
  Navigate("/cart");
  setShowCart(!ShowCart);
};
useEffect(() => {
  dispatch(GetTotal());
},[dispatch,carItem])
//HandleViewCart function start here

// Handleremove function start here 
const Handleremove = (item) =>{
  dispatch(removeCaritem(item))
};


  return (
    <>
      <div className="bg-MenuBgColor py-10" ref={MenuRef}>
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div
              className="relative flex cursor-pointer items-center gap-x-3"
              onClick={HandleCategories}
            >
              <FaBarsStaggered
                className={`${ShowCategories && "text-red-400"}`}
              />
              <span>Shop by Category</span>
              {ShowCategories && (
                <div className="absolute top-10 z-10">
                  <Flex className={"flex-col divide-y divide-[#97979738]"}>
                    <Link
                      to={"/accessories"}
                      className="bg-black px-20 py-2 text-center text-white hover:bg-slate-500"
                    >
                      Accessories
                    </Link>
                    <Link
                      to={"/furniture"}
                      className="bg-black px-20 py-2 text-center text-white hover:bg-slate-500"
                    >
                      Furniture
                    </Link>
                    <Link
                      to={"/electronics"}
                      className="bg-black px-20 py-2 text-center text-white hover:bg-slate-500"
                    >
                      Electronics
                    </Link>
                    <Link
                      to={"/cloths"}
                      className="bg-black px-20 py-2 text-center text-white hover:bg-slate-500"
                    >
                      Cloths
                    </Link>
                    <Link
                      to={"/bags"}
                      className="bg-black px-20 py-2 text-center text-white hover:bg-slate-500"
                    >
                      Bags
                    </Link>
                    <Link
                      to={"/bags"}
                      className="bg-black px-20 py-2 text-center text-white hover:bg-slate-500"
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
                  className="w-[631px] rounded-sm py-2 pl-3 font-DMsans"
                />
                <div className="absolute right-4 top-2/4 -translate-y-1/2 cursor-pointer">
                  <IoSearch className="text-lg" />
                </div>
              </div>
            </div>
            <Flex className={"cursor-pointer items-center gap-x-6"}>
              <div
                className="relative flex items-center gap-x-2"
                onClick={HandleAccount}
              >
                <FaUser className={`${ShowAccount && "text-green-400"}`} />
                {ShowAccount ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {ShowAccount && (
                <div className="absolute right-24 top-44  z-10">
                  <Flex
                    className={
                      "flex-col items-center  justify-center divide-y divide-[#f0f0d48e] bg-white"
                    }
                  >
                    <Link
                      to={"/account"}
                      className="px-16 py-2 font-DMsans hover:bg-black hover:text-white"
                    >
                      My Account
                    </Link>
                    <Link
                      to={"/logout"}
                      className="px-20 py-2 font-DMsans hover:bg-black hover:text-white"
                    >
                      Logout
                    </Link>
                  </Flex>
                </div>
              )}

              <div className="relative">
                <div className="absolute -top-6 left-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 font-DMsans font-bold text-white">
                  {totalcartItem}
                </div>
                <FaShoppingCart
                  onClick={HandleCart}
                  className={`${ShowCart && "text-green-500"}`}
                />
              </div>
              {ShowCart && (
                <div className="absolute right-10 top-44 z-10 border-2 border-FooterColor bg-white transition-all">
                  <div ref={cartRef} className="z-0 h-[50vh] overflow-scroll bg-MenuBgColor px-8">
                    {carItem?.map((item) => (
                      <div className="flex items-center gap-x-8 py-5 ">
                        <div>
                          <picture>
                            <img
                              src={item.thumbnail}
                              alt={item.thumbnail}
                              className="h-20 w-20 border-2 border-MenuTextColor"
                            />
                          </picture>
                        </div>
                        <div>
                          <h2 className="font-DMsans text-lg">
                            {item.title
                              ? `$${item.title.slice(0, 15)}.....`
                              : "Title Misisng"}
                          </h2>
                          <p className="font-DMsans text-lg">
                            {item.price
                              ? `$${Math.round(item.price)}`
                              : "$44.00"}
                          </p>
                        </div>
                        <div onClick={()=> Handleremove(item)}>
                          <RxCross2 />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-8 py-8">
                    <div>
                      <div className="pb-6">
                        <h2 className="font-DMsans text-MenuTextColor">
                          SubTotal:
                          <span className="font-bold text-black">
                            ${totalAmount}
                          </span>
                        </h2>
                      </div>
                      <Flex className={"items-center gap-x-4"}>
                        <Button
                          viewCart={HandleViewCart}
                          title={"View Cart"}
                          className={
                            "border-2 border-black px-10 py-2 font-DMsans active:bg-green-300"
                          }
                        />
                        <Button
                          title={"Checkout"}
                          className={"bg-black px-10 py-2 text-white"}
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
