import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md";
import Flex from '../Flex/Flex';


const BreadCrumb = () => {
const Location = useLocation();
let BreadCeumbPathName = (Location.pathname.split("/").filter((x) => x));
let  BreadrumbList = "";
 

  return (
    <>
      <div>
        <div>
          <Flex className={"items-center gap-x-3 pb-24"}>
            <li>
              <Link to={"/"} className="bg-green-400 py-1 px-5 rounded-md text-black font-DMsans font-bold">Home</Link>
            </li>
            <MdArrowForwardIos />
            {BreadCeumbPathName.map((path, index) => {
              const Islast = index === BreadCeumbPathName.length - 1 ;
              BreadrumbList += path;
             
              return (
                <li key={path}>
                  {Islast ? (
                    <Link
                      className={`${
                        Islast
                          ? "bg-green-400 py-1 px-5 rounded-md text-black font-DMsans font-bold"
                          : null
                      }`}
                    >
                      {path}
                    </Link>
                  ) : (
                    <Link
                      to={`/${BreadrumbList}`}
                      className={`${
                        Islast
                          ? "bg-green-400 py-1 px-5 rounded-md text-black font-DMsans font-bold"
                          : null
                      }`}
                    >
                      {path}
                    </Link>
                  )}
                </li>
              );
            })}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default BreadCrumb
