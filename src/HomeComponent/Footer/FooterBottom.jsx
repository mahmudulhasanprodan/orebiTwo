import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Flex from "../../CommonComponent/Flex/Flex"


const FooterBottom = () => {
  return (
    <>
      <div className="pb-10">
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <Flex className={"items-center gap-x-4 cursor-pointer"}>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </Flex>
            <div>
              <p className="font-DMsans text-sm font-regular">
                &copy; 2024 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default FooterBottom
