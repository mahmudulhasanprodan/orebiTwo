import React, { useState } from 'react'
import ArrivalCommon from '../../CommonComponent/ArrivalCommon/ArrivalCommon'
import Button from '../../CommonComponent/Button/Button'


const Arrival = ({HeadingTitle, Pdata}) => {
const [Alldata, setAlldata] = useState(Pdata);


  return (
    <>
      <div>
        <div className="container">
          <div className="py-12">
            <h2 className="font-DMsans font-bold text-3xl">{HeadingTitle ? HeadingTitle : "No Title"}</h2>
          </div>
          <div className="flex justify-between">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Arrival
