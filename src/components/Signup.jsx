import React from "react";
import logo from "../assets/logo.svg";
import bg1 from "/src/assets/BG1.SVG";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full max-w-sm mx-auto min-h-[500px] rounded-xl shadow-2xl bg-[#292D2F] bg-opacity-50 backdrop-blur-lg lg:max-w-4xl justify-center">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-200">
            Create an Account
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-400 lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center uppercase text-gray-400 hover:underline"
            >
              Register with email
            </a>
            <span className="w-1/5 border-b border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="signupName"
            >
              Full Name
            </label>
            <input
              id="signupName"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="signupEmail"
            >
              Email Address
            </label>
            <input
              id="signupEmail"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="signupPassword"
            >
              Password
            </label>
            <input
              id="signupPassword"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="signupConfirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="signupConfirmPassword"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="signupMobile"
            >
              Mobile Number
            </label>
            <input
              id="signupMobile"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="tel"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 border border-white text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
            <Link to={"/signin"}><a
              
              className="text-xs uppercase text-gray-400 hover:underline"
            >
              or sign in
            </a></Link>
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
