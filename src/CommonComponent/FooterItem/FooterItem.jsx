import React from 'react'

const FooterItem = ({Allitem=["one","Two","Three"], title}) => {
   
  return (
    <>
      <div>
        <div>
          <h2 className="font-DMsans font-bold text-base pb-4">
            {title ? title : "No Title"}
          </h2>
        </div>
        <div>
          <ul>
            {Allitem?.map((item, index) => (
              <li className="font-DMsans text-sm font-regular text-MenuTextColor py-2" key={item}>
                <a href="#" className="mr-2">
                  {title.toLocaleLowerCase() === "SHOP".toLocaleLowerCase()
                    ? item + (index + 1)
                    : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterItem
