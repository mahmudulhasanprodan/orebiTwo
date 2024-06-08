import React, { useState } from 'react'
import { FaPlus,FaMinus} from "react-icons/fa6";


const Productdetails = ({title}) => {

  const[Dropdown,setDropdown] = useState(false);

  const HandleDropDown = () => {
    setDropdown(!Dropdown);
  };

  return (
    <>
      <div className="pt-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={HandleDropDown}
        >
          <h2 className="font-DMsans text-base font-bold text-BtnColor">
            {title ? title : "No Title"}
          </h2>
          <span>{Dropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>
        {Dropdown && (
          <div className="pt-3 pr-5">
            <p className="font-DMsans text-base text-MenuTextColor text-justify ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              quia beatae aperiam veniam dolorum enim cumque reprehenderit natus
              in deleniti fugiat veritatis quasi rem ut debitis odit? Maxime,
              doloribus quia. Possimus doloribus autem, libero ullam soluta
              mollitia corporis! Accusamus veniam quia maxime saepe nemo culpa
              at totam consectetur quibusdam atque modi, hic delectus explicabo
              magni maiores voluptatibus cupiditate, aliquam, debitis tempora
              ratione facilis eaque ducimus placeat?.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Productdetails
