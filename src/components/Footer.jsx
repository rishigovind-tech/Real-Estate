import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left">
        {/* Left Section - Logo & Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={assets.logo_dark}
            alt="Company Logo"
            className="mx-auto md:mx-0"
          />
          <p className="text-gray-400 mt-4 text-justify">
            Your trusted real estate partner, committed to helping you find the
            perfect home or investment property. Whether you're buying, selling,
            or renting, we provide expert guidance and the best deals to make
            your real estate journey smooth and hassle-free.
          </p>
        </div>

        {/* Center Section - Company Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0 flex justify-center ">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <a href="#Home" className="hover:text-white">
                Home
              </a>
              <a href="#About" className="hover:text-white">
                About Us
              </a>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full md:w-1/3 ">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80 flex items-center ">
            Get the latest news, articles, and resources delivered to your inbox
            weekly.
          </p>
          <div className="flex">
            <input
              className="p-2 rounded-l-xl bg-gray-800 text-gray-400 border border-grey-700 focus:ouline-none w-full md:auto"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className=" bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-r-xl cursor-pointer "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © Estate. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
