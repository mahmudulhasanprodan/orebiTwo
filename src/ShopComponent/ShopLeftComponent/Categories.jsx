import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import Flex from '../../CommonComponent/Flex/Flex';


const Categories = ({AllcatData=["one","two","three"], Subtitle}) => {

    const [ShowData, setShowData] = useState(AllcatData.map(() => false));

//HandleToggle function start here
const HandleCategoriesToggle = (id) => {
    setShowData((previousState) => {
      return previousState.map((value, index) => {
        return id === index ? !value : false;
      });
    });
  };


 

  return (
    <>
      <div>
        <div className="py-2">
          <h2 className="font-DMsans font-bold text-xl">
            {Subtitle ? Subtitle : "This title is not avaible"}
          </h2>
        </div>
        <div className="divide-y divide-solid divide-[#F0F0F0] pt-4">
          {AllcatData?.map((data, index) =>
            data.subcategoris.length > 0 ? (
              <div key={data.id}>
                <div className="py-2" onClick={() => HandleCategoriesToggle(index)}>
                  <Flex className={"items-center justify-between pr-4"}>
                    <h2 className="font-DMsans font-normal text-base text-MenuTextColor cursor-pointer">
                      {data.title}
                    </h2>
                    <GoPlus className="cursor-pointer" />
                  </Flex>
                </div>
                <div>
                  {ShowData[index] && (
                    data.subcategoris.map((subitem) => (
                        <div key={subitem.id} className="py-1 hover:bg-black hover:text-white">
                            <h2 className="font-DMsans font-normal text-base cursor-pointer ml-3">{subitem.title}</h2>
                        </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className="py-2">
                <h2 className="font-DMsans font-normal text-base text-MenuTextColor cursor-pointer">
                  {data.title}
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Categories
