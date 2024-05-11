import React from 'react'
import PhoneImage from "../../assets/HomeComponentPic/PhoneofYear.png"
import Button from "../../CommonComponent/Button/Button"
import Flex from "../../CommonComponent/Flex/Flex"

const Phone = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <Flex className={"items-center bg-phoneColor"}>
            <div>
              <picture>
                <img src={PhoneImage} alt={PhoneImage} />
              </picture>
            </div>
            <div className="ml-5">
              <h2 className="font-DMsans text-4xl font-bold">Phone of the year</h2>
              <p className="font-DMsans tex-base font-normal w-[511px] pt-4 pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
              <Button className={"py-2 px-8 bg-black text-white font-DMsans"} title={"Shop Now"}/>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Phone
