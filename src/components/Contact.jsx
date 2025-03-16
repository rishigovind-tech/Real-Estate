import React from "react";

const Contact = () => {



  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Reach&nbsp;
        <span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
          Us
        </span>
      </h1>
      <p className=" text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Your ideas, our expertise.
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 "
        action="" 
      >
        <div  className=" flex flex-wrap"> 
          <div className=" w-full md:w-1/2 text-left">
            Your Name
            <input
              className=" w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
              name="Name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className=" w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className=" w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
              name="Email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea className="w-full border border-gray-300 rounded-xl py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>
        <div className="flex justify-center">
        <button type="submit" className=" bg-blue-200 text-blue-800 px-8 py-3 rounded-full cursor-pointer ">
        Connect with Us
        </button></div>
        
      </form>
    </div>
  );
};

export default Contact;
