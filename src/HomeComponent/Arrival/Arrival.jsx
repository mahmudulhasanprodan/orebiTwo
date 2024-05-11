import React, { useState } from 'react'
import ArrivalCommon from '../../CommonComponent/ArrivalCommon/ArrivalCommon'
import Button from '../../CommonComponent/Button/Button'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

//Custom Arrow Function
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", position:"absolute"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
//Custom Arrow Function
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};


const Arrival = ({HeadingTitle, Pdata}) => {
const [Alldata, setAlldata] = useState(Pdata);


  return (
    <>
      <div>
        <div className="container">
          <div className="py-12">
            <h2 className="font-DMsans font-bold text-3xl">
              {HeadingTitle ? HeadingTitle : "No Title"}
            </h2>
          </div>
            {/* <div className="flex justify-between"> */}
          <Slider {...settings}>
              {Alldata?.map((item) => (
                <div key={item.id}>
                  <ArrivalCommon
                    ProductName={item.title}
                    Price={item.price}
                    Image={item.img}
                    Colorvarient={item.color === true ? true : false}
                    baze={
                      item.baze === true ? (
                        <Button
                          className={"py-1 px-6 bg-black text-white"}
                          title={item.bazeitem === true ? "New" : item.discount}
                        />
                      ) : null
                    }
                  />
                </div>
              ))}
          </Slider>
            {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Arrival
