import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import ReviewPic from "../../assets/ShopComponentPic/ReviewPic.jpg"

const Review = () => {
const [showdescription, setshowdescription] = useState("");


  return (
    <>
      <div className="py-2">
        <div className="flex items-center gap-x-10">
          <h1
            className="cursor-pointer font-DMsans text-xl text-MenuTextColor"
            onClick={() => setshowdescription("Description")}
          >
            Description
          </h1>
          <h1
            className="cursor-pointer font-DMsans text-xl font-bold text-MainfontColor"
            onClick={() => setshowdescription("")}
          >
            Reviews (1)
          </h1>
        </div>
        {showdescription === "Description" ? (
          <div>
            <div className="flex items-center justify-between pt-5">
              <div className="flex items-center gap-x-10">
                <h2 className="font-DMsans text-base font-normal text-MainfontColor">
                  John Ford
                </h2>
                <div>
                  <div className="flex items-center text-yellow-300">
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-DMsans text-xl text-MenuTextColor">
                  6 months ago
                </p>
              </div>
            </div>
            <div className="pt-3">
              <p className="text-justify font-DMsans text-base text-MenuTextColor">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <hr className="mt-3" />
            </div>
          </div>
        ) : (
          <div>
            {[...new Array(5)].map((_, index) => (
              <div className="flex w-1/2 items-center gap-x-6 border-b-2 border-b-gray-200 py-4 pt-5">
                <div>
                  <picture>
                    <img
                      src={ReviewPic}
                      alt={ReviewPic}
                      className="h-[40px] w-[40px] rounded-full"
                    />
                  </picture>
                </div>
                <div>
                  <h2 className="font-DMsans text-base font-bold">John Doe</h2>
                  <p className="font-DMsans text-xs font-normal">
                    johndoe@gmail.com
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Post Review */}
      <div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-DMsans text-xl font-bold text-BtnColor">
            Add a Review
          </h1>
          <div className="flex flex-col gap-y-8 pt-5">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-md font-DMsans font-bold text-BtnColor"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name Here"
                id="name"
                name="name"
                className="w-1/2 border-b-2 border-b-gray-300 py-4"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-md font-DMsans font-bold text-BtnColor"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Here"
                id="email"
                name="email"
                className="w-1/2 border-b-2 border-b-gray-300 py-4"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="review"
                className="text-md font-DMsans font-bold text-BtnColor"
              >
                Review
              </label>
              <textarea
                className="w-1/2 border-b-2 border-b-gray-300 py-4"
                placeholder="Your Review Here"
                id="review"
                name="review"
              />
            </div>
            <button className="w-[15%] bg-black px-10 py-2 font-DMsans font-semibold text-white">
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Review
