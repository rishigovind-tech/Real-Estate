import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className=" container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="About"
    >
      <h1 className=" text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
          Our Company
        </span>
      </h1>
      <p className=" text-gray-500 max-w-80 text-center mb-8">
        Where Passion Meets Precision, Your Dream Comes True
      </p>
      <div className="flex flex-col md:flex-row item center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col item center md:items-start mt-4 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className=" text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Expertise, Trust, and Innovation</p>
            </div>
            <div>
              <p className=" text-4xl font-medium text-gray-800">25+</p>
              <p>Successful Endeavors</p>
            </div>
            <div>
              <p className=" text-4xl font-medium text-gray-800">30+</p>
              <p>Elite Build Associates</p>
            </div>
            <div>
              <p className=" text-4xl font-medium text-gray-800">50+</p>
              <p>Unfolding Endeavors</p>
            </div>
          </div>
          <p className=" my-10 max-w-lg text-justify ">
            For over a decade, we have redefined excellence—building more than
            just structures, but trust, innovation, and a legacy that stands
            tall. With 25+ remarkable achievements shaping skylines and
            communities, our expertise speaks for itself. Powered by 30+ elite
            build associates, we don’t just construct; we craft experiences with
            precision and passion. And we’re just getting started—50+
            groundbreaking projects are unfolding, each pushing the boundaries
            of possibility. This is more than construction; this is the future
            in the making. Join us in building something extraordinary.
          </p>
          <button className=" bg-blue-200 text-blue-800 px-8 py-3 rounded-full cursor-pointer">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
