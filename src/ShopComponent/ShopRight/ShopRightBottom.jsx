import React, { useContext, useEffect, useState } from 'react'
import ArrivalCommon from "../../CommonComponent/ArrivalCommon/ArrivalCommon"
import Button from "../../CommonComponent/Button/Button"
import axios from 'axios'
import Flex from '../../CommonComponent/Flex/Flex'
import {ShopRightContex} from "../ShopRightComponet/ShopRight"
import { useSelector, useDispatch } from 'react-redux'
import { FetcherProduct, setProducts } from '../../Redux/AllSlice/ProductSlice/ProductSlice'
import { Link } from 'react-router-dom'
import Loading from '../../CommonComponent/Loading/Loading'
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { addtoCart } from '../../Redux/AllSlice/CartSlice/CartSlice'
const ShopRightBottom = () => {
const dispatch = useDispatch();
const [AllData, setAllData] = useState([]);
const [page,setpage] = useState(1);
const ShowPageData = useContext(ShopRightContex);

useEffect(() => {
  dispatch(FetcherProduct("https://dummyjson.com/products"));
}, []);

const {data, status} = useSelector((state) => state.products);






useEffect(() => {
  if(status.payload === "IDLE"){
    setAllData(data.payload.products);
  }
},[status.payload, data.payload]);


    const HandlePagination = (pageNumber) =>{
      if (pageNumber > 0 && pageNumber <= Math.floor(AllData.length / ShowPageData) + 1) {
        setpage(pageNumber);
      }
    };

 // HandleCart Function start here 
 const HandleCart = (item) => {
  dispatch(addtoCart(item));
 };

  return (
    <>
      <div>
        {status.payload === "LOADING" ? (
          <Loading />
        ) : status.payload === "ERROR" ? (
          <h2>err</h2>
        ) : (
          AllData && (
            <div>
              <div className="flex flex-wrap">
                {AllData?.slice(
                  page * ShowPageData - ShowPageData,
                  page * ShowPageData,
                ).map((ProductData) => (
                  <div className="w-[33%] py-10" key={ProductData.id}>
                    <ArrivalCommon
                      AddTocart={()=> HandleCart(ProductData)}
                      ProductId={ProductData.id}
                      Image={ProductData.thumbnail}
                      Colorvarient={ProductData.brand}
                      ProductName={ProductData.title}
                      Price={ProductData.price}
                      baze={
                        <Button
                          className={"bg-black px-6 py-1 text-white"}
                          title={
                            ProductData.rating > 4.5
                              ? `-$${Math.floor(
                                  ProductData.discountPercentage,
                                )}`
                              : "New"
                          }
                        />
                      }
                    />
                  </div>
                ))}
              </div>
              <Flex className={"items-center justify-between px-3 py-6"}>
                <div className="flex gap-x-3">
                  <p
                    className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center bg-green-200 text-black"
                    onClick={() => HandlePagination(page - 1)}
                  >
                    <MdOutlineKeyboardDoubleArrowLeft />
                  </p>
                  <ul>
                    <li className="flex cursor-pointer items-center gap-x-2">
                      {[
                        ...new Array(
                          Math.floor(AllData.length / ShowPageData) <=
                          AllData.length / ShowPageData
                            ? Math.floor(AllData.length / ShowPageData) + 1
                            : AllData.length / ShowPageData,
                        ),
                      ].map((pageNumber, index) => (
                        <div key={index}>
                          <p
                            className={`flex h-[36px] w-[36px] cursor-pointer items-center justify-center bg-black text-white ${index + 1 === page && "bg-blue-400"}`}
                            onClick={() => HandlePagination(index + 1)}
                          >
                            {index + 1}
                          </p>
                        </div>
                      ))}
                    </li>
                  </ul>
                  <p
                    className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center bg-green-200 text-black"
                    onClick={() => HandlePagination(page + 1)}
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                  </p>
                </div>
                <div>
                  <p className="text-secondary_font_color font-DMsans">
                    Products from {page * ShowPageData - ShowPageData + 1} to
                    {page === Math.floor(AllData.length / ShowPageData) + 1
                      ? AllData.length
                      : page * ShowPageData}{" "}
                    of
                    {AllData.length}
                  </p>
                </div>
              </Flex>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ShopRightBottom
