import React, { useEffect, useState } from 'react'
import ArrivalCommon from '../../CommonComponent/ArrivalCommon/ArrivalCommon'
import Button from '../../CommonComponent/Button/Button'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Loading from '../../CommonComponent/Loading/Loading';
import { useSelector,useDispatch } from 'react-redux';
import { addtoCart } from '../../Redux/AllSlice/CartSlice/CartSlice';
import { FetcherProduct } from '../../Redux/AllSlice/ProductSlice/ProductSlice';
import { useParams } from 'react-router-dom';


//Custom Arrow Function
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        position: "absolute",
        width: "40px",
        height: "40px",
        top: "50%",
        left: "-8px",
        transform: "translateY(-160%)",
        cursor: "pointer",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-2/4 text-white">
        <FaLongArrowAltLeft />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        position: "absolute",
        width: "40px",
        height: "40px",
        top: "50%",
        right: "-8px",
        transform: "translateY(-160%)",
        cursor: "pointer",
        borderRadius: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <div className="absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-2/4 text-white">
        <FaLongArrowAltRight />
      </div>
    </div>
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


const dispatch = useDispatch();
const [Alldata, setAlldata] = useState(Pdata);


const {data,status} = useSelector((state) => (state.products))


useEffect(() => {
  if(status.payload === "IDLE"){
    setAlldata(Pdata);
  }
},[status.payload,data.payload])

// handleCart function start here 
const handleCart = (item) => {
     dispatch(addtoCart(item))
};

  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="py-12">
            <h2 className="font-DMsans font-bold text-3xl">
              {HeadingTitle ? HeadingTitle : "No Title"}
            </h2>
          </div>
            {/* <div className="flex justify-between"> */}
          <Slider {...settings}>
            {status.payload === "LOADING" ? (<Loading />) : (
               Alldata?.map((item) => (
                <div key={item.id}>
                  <ArrivalCommon
                    AddTocart={() => handleCart(item)}
                    ProductName={item.title}
                    Price={item.price}
                    Image={item.thumbnail}
                    Colorvarient={item.brand}
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
              ))
            )}
             
          </Slider>
            {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Arrival
