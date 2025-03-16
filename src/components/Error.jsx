import React from "react";
import error from "../assets/error.svg"

const Error = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-2xl font-medium text-blue-500 dark:text-blue-400 md:text-5xl">
              404 error
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-gray-800  md:text-8xl">
              Page not found
            </h1>
            <p className="mt-4 text-sm text-gray-500  md:text-3xl">
              Sorry, the page you are looking for doesn't exist.
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img
              className="w-full max-w-lg lg:mx-auto"
              src={error}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
