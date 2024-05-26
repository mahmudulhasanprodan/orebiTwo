import React from 'react'

const ProductDetailsTop = ({FeatcherDataTop}) => {
  return (
    <>  
      <div className="py-10">
        <div>
          {FeatcherDataTop.images?.map((img) => (
            <div
              key={img}
              className="h-[350px] w-[450px] cursor-pointer rounded bg-gray-100 hover:shadow-md"
            >
              <picture>
                <img src={img} alt={img} className="h-full w-full" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetailsTop
