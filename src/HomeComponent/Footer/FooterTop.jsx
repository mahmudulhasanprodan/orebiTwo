import React from 'react'
import FooterItem from '../../CommonComponent/FooterItem/FooterItem'
import Flex from "../../CommonComponent/Flex/Flex"
import FooterLogo from "../../assets/HomeComponentPic/Mainlogo.png"

const FooterTop = () => {
  return (
    <>
      <div>
        <div className="container">
            <Flex className={"gap-x-40 py-14"}>
               <Flex className={"gap-x-36"}>
               <FooterItem 
                Allitem = {["Home","Shop","About","Contact","Journal"]}
                title="Menu"
                />
                  <FooterItem 
                Allitem = {["Category","Category","Category","Category","Category"]}
                title="SHOP"
                />
                  <FooterItem 
                Allitem = {["Privacy Policy","Terms & Conditions","Special E-shop","Shipping","Secure Payments"]}
                title="Help"
                />
               </Flex>
               <Flex className={"gap-x-44"}>
                    <div>
                        <h2 className="font-DMsans font-bold text-base leading-7">(052) 611-5711</h2>
                        <span className="font-DMsans font-bold text-base leading-7">company@domain.com</span>
                        <div>
                            <address>
                                <p className="font-DMsans font-normal text-sm text-MenuTextColor">575 Crescent Ave. Quakertown, PA 18951</p>
                            </address>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <img src={FooterLogo} alt={FooterLogo} />
                        </picture>
                    </div>
               </Flex>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default FooterTop
