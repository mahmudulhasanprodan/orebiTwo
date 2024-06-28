import React from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'
import img from "../../assets/HomeComponentPic/ArrivalPicone.png"
import { FaPlus,  FaMinus } from "react-icons/fa6";
import { useSelector,useDispatch } from 'react-redux';
import { MdCancel } from "react-icons/md";
import { removeCaritem } from '../../Redux/AllSlice/CartSlice/CartSlice';


const Cart = () => {
const dispatch = useDispatch();
const {carItem} = useSelector((state) => (state.Cart));

//HandleremoveItem function start here

const HandleremoveItem = (item) => {
  dispatch(removeCaritem(item));
}

  return (
    <>
      <div className="py-[124px]">
        <div className="container">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-DMsans text-4xl font-bold">Cart</h2>
            <BreadCrumb />
          </div>
          <div className="flex items-center justify-between bg-MenuBgColor py-8">
            <div className="flex shrink grow basis-60 pl-5">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Product
              </h2>
            </div>
            <div className="flex grow basis-60 justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Price
              </h2>
            </div>
            <div className="flex grow basis-60 justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Quantity
              </h2>
            </div>
            <div className="flex grow basis-60 justify-center">
              <h2 className="font-DMsans font-bold text-MainfontColor">
                Total
              </h2>
            </div>
          </div>
          {/* cart Item list  */}
         <div className="h-[500px] overflow-y-scroll">
          {carItem?.length> 0 ?  (carItem?.map((item) => (
            <div className="flex items-center justify-between py-6" key={item.id}>
              <div className="flex shrink grow basis-60 cursor-pointer items-center gap-x-3">
                <span onClick={()=> HandleremoveItem(item)}>
                  <MdCancel className="text-xl active:text-green-400" />
                </span>
                <div className="h-20 w-20 shadow-xl">
                  <picture>
                    <img
                      src={item.thumbnail ? item.thumbnail : img}
                      alt={item.thumbnail ? item.thumbnail : img}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </picture>
                </div>
                <h2 className="font-DMsans text-base font-semibold text-BtnColor">
                  {item.title ? item.title : "Title missing"}
                </h2>
              </div>
              <div className="flex shrink grow basis-60 justify-center pl-6">
                <p className="font-DMsans text-base font-semibold text-BtnColor">
                  {item.price ? `$${item.price}` : " $44.00"}
                </p>
              </div>
              <div className="flex shrink grow basis-60 justify-center pl-6">
                <div className="flex items-center">
                  <div className="flex cursor-pointer items-center justify-around gap-x-3  border-2 border-gray-300 py-1">
                    <span className="px-1">
                      <FaMinus />
                    </span>
                    <p className="font-DMsans text-base font-semibold text-BtnColor">
                      {item.cartQuantity}
                    </p>
                    <span className="px-1">
                      <FaPlus />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex grow basis-60 justify-center pl-6">
                <p className="font-DMsans text-base font-semibold text-BtnColor">
                  {`$${item.cartQuantity*item.price}`}
                </p>
              </div>
            </div>
          ))) : "kiso nai"}
         
         </div>
        </div>
      </div>
    </>
  );
}

export default Cart
