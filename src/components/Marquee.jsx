import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/logo/1.svg";
import logo2 from "../assets/logo/2.svg";
import logo3 from "../assets/logo/3.svg";
import logo4 from "../assets/logo/4.svg";
import logo5 from "../assets/logo/5.svg";
import logo6 from "../assets/logo/6.svg";
import logo7 from "../assets/logo/7.svg";
import logo8 from "../assets/logo/8.svg";
import logo9 from "../assets/logo/9.svg";
import logo10 from "../assets/logo/10.png";
import logo11 from "../assets/logo/11.svg";
import logo12 from "../assets/logo/12.svg";
import { div } from "framer-motion/client";

const Marquee = () => {
  const scrollMarquee = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];

  return (
    <div  id="Associates">
      <h1 className=" text-2xl sm:text-4xl mb-2 flex items-center justify-center font-bold">
        Our Elite&nbsp;<span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text"> Build Associates</span>
      </h1><br />

      <div className=" container overflow-hidden mx-auto p-5">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className=" flex flex-shrink-0"
          >
            {scrollMarquee.map((image, index) => {
              return (
                <img
                  className="h-20 w-36 pr-10 md:h-36 md:w-56 md:pr-20"
                  src={image}
                  key={index}
                />
              );
            })}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className=" flex flex-shrink-0"
          >
            {scrollMarquee.map((image, index) => {
              return (
                <img
                  className="h-20 w-36 pr-10 md:h-36 md:w-56 md:pr-20"
                  src={image}
                  key={index}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
