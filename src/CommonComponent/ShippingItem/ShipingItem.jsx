import React from 'react'


const ShipingItem = ({className, children, title, icon}) => {
  return (
    <>
      <div className={className}>
        <h2>{icon ? icon : ""}</h2>
        <p>{title ? title : ""}</p>
        {children}
      </div>
    </>
  )
}

export default ShipingItem
