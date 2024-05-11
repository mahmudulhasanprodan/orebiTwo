import React from 'react'
import Button from '../Button/Button'

const Overlay = ({className, children, title, subtitle, discount, description}) => {
  return (
    <>
      <div className={className}>
        <h2 className={"font-DMsans text-3xl font-bold"}>{title ? title : "no title"}</h2>
        <p className={"font-DMsans text-base text-MainfontColor pt-8 pb-10"}>
          {subtitle ? subtitle : "no subtitle"} <span className={"font-DMsans font-bold text-black text-2xl align-middle"}>{discount ? discount : "30%"}</span> {description ? description : "no description"}
        </p>
        <Button
          className={"py-2 px-10 bg-black text-white font-DMsans"}
          title={"Shop Now"}
        />
        {children}
      </div>
    </>
  );
}

export default Overlay
