import React, { useContext, useEffect, useState } from 'react'
import ArrivalCommon from "../../CommonComponent/ArrivalCommon/ArrivalCommon"
import Button from "../../CommonComponent/Button/Button"
import axios from 'axios'
import Flex from '../../CommonComponent/Flex/Flex'
import {ShopRightContex} from "../ShopRightComponet/ShopRight"
import { useSelector, useDispatch } from 'react-redux'
import { FetcherProduct, setProducts } from '../../Redux/AllSlice/ProductSlice/ProductSlice'
import { Link } from 'react-router-dom'

const ShopRightBottom = () => {
const dispatch = useDispatch();
const [AllData, setAllData] = useState([]);
const [page,setpage] = useState(1);
const ShowPageData = useContext(ShopRightContex);

useEffect(() => {
  dispatch(FetcherProduct("https://dummyjson.com/products"));
}, []);

const {data, status} = useSelector((state) => state.products)

console.log(data, status);

useEffect(() => {
  if(status.payload === "IDLE"){
    setAllData(data.payload);
  }
},[status.payload, data.payload]);







    // useEffect(() => {
    //   const ProductDataFetcher = async () => {
    //         const data = await axios.get("https://dummyjson.com/products");
    //         setAllData(data.data.products);
    //         dispatch(setProducts(data.data.products));
    //   };
    //   ProductDataFetcher();
    // }, []);
    // HandlePagination function start here 
    const HandlePagination = (pageNumber) =>{
        setpage(pageNumber);
    };

 

  return (
    <>
      <div>
        {status.payload === "LOADING" ? (
          <div className="flex justify-center h-[100vh] items-center">
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : status.payload === "ERROR" ? (
          <h2>err</h2>
        ) : (
          AllData && (
            <div>
              <div className="flex flex-wrap">
                {AllData?.slice(
                  page * ShowPageData - ShowPageData,
                  page * ShowPageData
                ).map((ProductData) => (
                  <div className="py-10 w-[33%]" key={ProductData.id}>
                    <Link to={`/products-details/${ProductData.id}`}>
                      <ArrivalCommon
                        Image={ProductData.thumbnail}
                        Colorvarient={ProductData.brand}
                        ProductName={ProductData.title}
                        Price={ProductData.price}
                        baze={
                          <Button
                            className={"py-1 px-6 bg-black text-white"}
                            title={
                              ProductData.rating > 4.5
                                ? `-$${Math.floor(
                                    ProductData.discountPercentage
                                  )}`
                                : "New"
                            }
                          />
                        }
                      />
                    </Link>
                  </div>
                ))}
              </div>
              <Flex className={"items-center justify-between py-6 px-3"}>
                <div>
                  <ul>
                    <li className="flex items-center gap-x-2 cursor-pointer">
                      {[
                        ...new Array(
                          Math.floor(AllData.length / ShowPageData) + 1
                        ),
                      ].map((item, index) => (
                        <div key={index}>
                          <p
                            className={`py-2 bg-black px-4 gap-x-2 text-white font-bold ${
                              index + 1 === page && "bg-green-500"
                            }`}
                            onClick={() => HandlePagination(index + 1)}
                          >
                            {index + 1}
                          </p>
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-DMsans text-secondary_font_color">
                    {`Products from ${
                      page * ShowPageData - ShowPageData + 1
                    } to ${
                      page === Math.floor(AllData.length / ShowPageData) + 1
                        ? AllData.length
                        : page * ShowPageData
                    } of ${AllData.length}`}
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