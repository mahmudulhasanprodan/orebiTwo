import React from 'react'
import Imgone from "../../assets/HomeComponentPic/SaleImgOne.png"
import Imgtwo from "../../assets/HomeComponentPic/SaleImgTwo.png"
import Imgthree from "../../assets/HomeComponentPic/SaleImgThree.png"
import Flex from '../../CommonComponent/Flex/Flex'
import Overlay from '../../CommonComponent/Overlay/Overlay'

const Offer = () => {
  return (
    <>
      <div className="py-36">
        <div className="container">
          <Flex className={"items-center gap-x-6"}>
            <div className="relative">
              <picture>
                <img src={Imgone} alt={Imgone} />
              </picture>
              <div className="absolute bottom-10 left-14">
                <Overlay
                  title="Phones Sale"
                  subtitle="Up to"
                  discount="30%"
                  description="sale for all phones!"
                />
              </div>
            </div>
            <Flex className={"flex-col gap-y-8"}>
              <div className="relative">
                <picture>
                  <img src={Imgtwo} alt={Imgtwo} />
                </picture>
                <div className="absolute bottom-10 left-10">
                <Overlay
                  title="Electronics Sale"
                  subtitle="Up to"
                  discount="70%"
                  description="sale for all electronics!"
                />
              </div>
              </div>
              <div className="relative">
                <picture>
                  <img src={Imgthree} alt={Imgthree} />
                </picture>
                <div className="absolute bottom-10 left-10">
                <Overlay
                  title="Furniture Offer"
                  subtitle="Up to"
                  discount="50%"
                  description="sale for all furniture!"
                />
              </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Offer
