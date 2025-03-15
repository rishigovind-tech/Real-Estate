import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonails = () => {
  return (
    <div
      className="container mx-auto  lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Real Stories,&nbsp;
        <span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
          Real Success
        </span>
      </h1>
      <p className=" text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Proof of our commitment through our client's words.
      </p>

      <div className=" flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className=" w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt=""
            />
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({length:testimonial.rating},(item,index)=>(
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className=" text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Testimonails;
