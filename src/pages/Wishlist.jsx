import React from "react";

const Wishlist = () => {
  return (
    <div>
      <h1 className=" text-2xl sm:text-4xl mb-2 py-6 flex items-center justify-center font-bold">
        Saved&nbsp;
        <span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
          {" "}
          Preferences
        </span>
      </h1>
      <div>
        <div className="ml-[10%] mr-[10%] mt-8 rounded-xl px-4  py-8 bg-gray-500 min-h-[200px]  shadow-2xl  ">
          <div>
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-2 bg-amber-500">9</div>
              <div className="col-span-2 row-span-3 row-start-2 bg-red-500">10</div>
              <div className="col-span-2 row-span-2 col-start-3 bg-blue-700 row-start-3">
                11
              </div>
              <div className="col-start-5 row-start-4 bg-green-700">13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
