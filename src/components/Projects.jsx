import React, { useEffect, useRef, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [cardShow, setCardShow] = useState(1);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const updateCardShow = () => {
      if (window.innerWidth >= 1024) {
        setCardShow(projectsData.length);
      } else {
        setCardShow(1);
      }
    };
    updateCardShow();

    window.addEventListener("resize", updateCardShow);
    return () => window.removeEventListener("resize", updateCardShow);
  }, []);

  return (
    <div
      className=" container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Accomplished&nbsp;
        <span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
          Ventures
        </span>
      </h1>
      <p className=" text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Milestones of Excellence, Ventures of Trust
      </p>

      <div className="flex justify-end items-center mb-8 ">
        <button
          onClick={scrollLeft}
          className=" p-3 bg-gray-200 rounded-full mr-2"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={scrollRight}
          className=" p-3 bg-gray-200 rounded-full mr-2"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className=" overflow-hidden ">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth whitespace-nowrap overflow-y-hidden"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className=" relative flex-shrink-0 w-full sm:w-1/4"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-auto mb-14 rounded-lg shadow-lg"
              />
              <div className=" absolute left-0 right-0 bottom-5 flex justify-center">
                <div className=" inline-block bg-white w-3/4 px-4  py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mr-2 py-3">
          <button className=" bg-blue-200 text-blue-800 px-8 py-3 rounded-full cursor-pointer ">
          Unveil More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
