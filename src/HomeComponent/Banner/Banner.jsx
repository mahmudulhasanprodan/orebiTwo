import React, { useState } from 'react'
import BannerImg from "../../assets/HomeComponentPic/Banner.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



const Banner = () => {

    const [CurrenIndex, setCurrenIndex] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,


        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "6%",
                border: "none",
                font: "bold",
                transform: "translateY(-50%)",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),

          beforeChange : ((nextSlide) => {
            setCurrenIndex(nextSlide + 1);
          }),


          customPaging: (i) => (
            <div
              style={i + 1 === CurrenIndex ?{
                width: "30px",
                cursor: "pointer",
                color: "#000",
                padding: "25px 0px",
                borderRight: "2px solid #262626",
                
              }: {
                width: "30px",
                cursor: "pointer",
                color: "#000",
                padding: "25px 0px",
                borderRight: "2px solid #fff",
              }}
            >
              0{i + 1}
            </div>
          )
      };
      


  return (
    <>
       <div>
       <Slider {...settings}>
        <div>
            <picture>
                <img src={BannerImg} alt={BannerImg}/>
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImg} alt={BannerImg}/>
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImg} alt={BannerImg}/>
            </picture>
        </div>
        <div>
            <picture>
                <img src={BannerImg} alt={BannerImg}/>
            </picture>
        </div>
      </Slider>
       </div>
    </>
  );
}

export default Banner
