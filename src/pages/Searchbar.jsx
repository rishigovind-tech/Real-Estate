import React, { useEffect, useState } from "react";
import bg from "../assets/pagebg.png";
import { Search } from "lucide-react";
import { projectsData } from "../assets/data";
import { Link } from "react-router-dom";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(search);

  return (
    <div>
      <div>
        <div>
          <img
            className="w-full h-[250px] md:h-[300px] object-cover"
            src={bg}
            alt="Background"
          />
        </div>

        <div className=" mx-4 sm:mx-10 md:mx-[20%] mt-8 rounded-xl flex justify-center py-8 md:py-16 bg-gray-100 shadow-2xl relative top-[-120px] z-10 ">
          {/* <img className=" absolute top-0 left-0 w-full h-full object-cover rounded-xl" src={bgs} alt="" /> */}
          <form className="w-full max-w-4xl px-4 " onSubmit={handleSubmit}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative  ">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-black">
                <Search size={20} />
              </div>

              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white "
                placeholder="Search Name/Place"
                aria-label="Search Name or Place"
                required
                onChange={(e) => [
                  setSearch(e.target.value),
                  setSearchTerm(e.target.value),
                ]}
              />

              
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-blue-200 text-blue-800  focus:ring-4 focus:outline-none  font-medium rounded-xl text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className="container mx-auto mt-[-50px] px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
        <h1 className=" text-2xl sm:text-4xl mb-2 flex items-center justify-center font-bold">
          Our&nbsp;
          <span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
            Masterpieces
          </span>
        </h1>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {projectsData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().startsWith(search.toLowerCase()) ||
                    item.location
                      .toLowerCase()
                      .startsWith(search.toLowerCase());
            })
            .map((allproject) => (
              <div key={allproject.id} className="relative w-full ">
                <Link to={`/allproject/${allproject.id}`}>
                <img
                  src={allproject.image}
                  className="w-full h-[550px] mb-14 rounded-lg shadow-lg"
                />
                <div className=" absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className=" inline-block bg-white w-3/4 px-4  py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {allproject.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {allproject.price} <span className="px-1">|</span>{" "}
                      {allproject.location}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
