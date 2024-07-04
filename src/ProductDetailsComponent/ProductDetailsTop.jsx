import React from 'react'

const ProductDetailsTop = ({FeatcherDataTop}) => {

  console.log(FeatcherDataTop.products);
  return (
    <>  
      <div className="py-10">
        <div className="flex items-center gap-x-6 flex-wrap gap-y-6">
          {FeatcherDataTop.images?.map((img) => (
            <div
              key={img}
              className="h-[350px] w-[450px] cursor-pointer rounded bg-gray-100 shadow-md"
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
