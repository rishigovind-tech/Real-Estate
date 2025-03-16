// import React, { useEffect } from "react";
// import { projectsData } from "../assets/data";
// import { useParams } from "react-router-dom";
// import {
//   DollarSign,
//   Circle,
//   MapPin,
//   PawPrint,
//   Handshake,
//   Wrench,
//   Ruler,
//   DoorOpen,
//   ShowerHead,
//   Building,
//   Bus,
//   Hospital,
//   Heart,
// } from "lucide-react";

// const Property = () => {
//   const { id } = useParams();
//   const project = projectsData.find((img) => img.id === parseInt(id));

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className=" container mx-auto px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
//       <div>
//         <h1 className=" text-2xl sm:text-4xl  mb-2 flex items-center  ">
//           <span className=" bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
//             {project.title}
//           </span>
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto gap-4">
//         <div className="col-span-3 row-span-3">
//           <img
//             className="py-5 h-auto md:h-[700px] rounded-4xl w-full"
//             src={project.image}
//             alt=""
//           />
//         </div>
//         <div className="col-span-3 row-span-2 col-start-1 row-start-4">
//           <p className=" text-justify text-lg ">{project.description}</p>
//           <div className=" bg-gray-200 rounded-xl flex justify-between px-3 py-2 mt-2 ">
//             <div className="flex items-center">
//               <div className="relative w-10 h-10 flex items-center justify-center">
//                 <Circle size={35} className="absolute text-black" />
//                 <DollarSign size={18} className="text-black" />
//               </div>
//               <p className=" text-lg px-2">{project.price}</p>
//             </div>
//             <div className=" flex items-center ">
//               <MapPin size={35} className="text-black" />
//               <p className=" text-lg pr-2">{project.location}</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-2 row-span-5 col-start-4 row-start-1 bg-gray-200 rounded-xl shadow-xl ">
//           <div className=" px-6 py-5">
//             <h1 className=" text-xl font-bold">General</h1>
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <Wrench size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Utilities</p>
//                   <p className="text-xs">{project.general.utilities}</p>
//                 </div>
//               </div>
//             </div>
//             {/* ---------------------- */}
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <PawPrint size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Pet Policy</p>
//                   <p className="text-xs">{project.general.petPolicy}</p>
//                 </div>
//               </div>
//             </div>
//             {/* --------------------------------------- */}
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <Handshake size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Community</p>
//                   <p className="text-xs">{project.general.community}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ------------------------------------------------------- */}
//           {/* Room */}
//           <div className=" px-6 py-5">
//             <h1 className=" text-xl font-bold">Room Details</h1>
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <Ruler size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Room Size</p>
//                   <p className="text-xs">{project.roomDetails.roomSize}</p>
//                 </div>
//               </div>
//             </div>
//             {/* ---------------------- */}
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <DoorOpen size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Rooms</p>
//                   <p className="text-xs">
//                     {project.roomDetails.numberOfBedrooms}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* --------------------------------------- */}
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <ShowerHead size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Bathrooms</p>
//                   <p className="text-xs">
//                     {project.roomDetails.numberOfBathrooms}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* --------------------------------------------------------------------------- */}
//           {/* nearby */}
//           <div className=" px-6 py-5">
//             <h1 className=" text-xl font-bold">Nearby Place</h1>
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <Building size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">School</p>
//                   <p className="text-xs">{project.nearbyPlaces.school}</p>
//                 </div>
//               </div>
//             </div>
//             {/* ---------------------- */}
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <Bus size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Bus Station</p>
//                   <p className="text-xs">{project.nearbyPlaces.busStop}</p>
//                 </div>
//               </div>
//             </div>
//             {/* --------------------------------------- */}
//             <div className=" bg-white mt-2 rounded-xl">
//               <div className=" px-2 py-2 flex items-center gap-5">
//                 <div>
//                   <Hospital size={25} className="text-black" />
//                 </div>
//                 <div>
//                   <p className=" text-sm">Hospital</p>
//                   <p className="text-xs">{project.nearbyPlaces.hospital}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className=" px-6 py-5">
//             <h1 className=" text-xl font-bold">
//               Need more info? Drop us a message!
//             </h1>
//             <div className="bg-white mt-2 rounded-xl px-6 py-2">
//               <form action="">
//                 <input
//                   className=" w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
//                   name="Name"
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <input
//                   className=" w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
//                   name="email"
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                 />
//                 <input
//                   className=" w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
//                   name="phone"
//                   type="text"
//                   placeholder="Your Phone Number"
//                   required
//                 />

//                 <button
//                   type="submit"
//                   className=" bg-blue-200 text-blue-800 px-8 py-3 rounded-full text-xs mt-2 cursor-pointer "
//                 >
//                   Connect with Us
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className=" px-6 py-2">
//             <button
//               type="submit"
//               className="bg-blue-200 text-blue-800 px-8 py-3 rounded-full w-full mt-2 cursor-pointer flex items-center justify-center gap-2"
//             >
//               <Heart size={25} className="text-black "  />
//               <span>Save to Collection</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Property;



// 

// -----------------------------------------------------------------


import React, { useEffect, useState } from "react";
import { projectsData } from "../assets/data";
import { useParams } from "react-router-dom";
import {
  DollarSign,
  Circle,
  MapPin,
  PawPrint,
  Handshake,
  Wrench,
  Ruler,
  DoorOpen,
  ShowerHead,
  Building,
  Bus,
  Hospital,
  Heart,
} from "lucide-react";

const Property = () => {
  const { id } = useParams();
  const project = projectsData.find((img) => img.id === parseInt(id));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl sm:text-4xl flex items-center">
          <span className="bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
            {project.title}
          </span>
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md bg-gray-200 z-50"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-3 row-span-3">
          <img
            className="py-5 h-auto w-full rounded-2xl md:rounded-4xl object-cover"
            src={project.image}
            alt=""
          />
        </div>
        <div className="col-span-1 md:col-span-3 row-span-2 md:col-start-1 md:row-start-4">
          <p className="text-justify text-lg">{project.description}</p>
          <div className="bg-gray-200 rounded-xl flex justify-between px-3 py-2 mt-2">
            <div className="flex items-center">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Circle size={35} className="absolute text-black" />
                <DollarSign size={18} className="text-black" />
              </div>
              <p className="text-lg px-2">{project.price}</p>
            </div>
            <div className="flex items-center">
              <MapPin size={35} className="text-black" />
              <p className="text-lg pr-2">{project.location}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block col-span-1 md:col-span-2 row-span-5 md:col-start-4 md:row-start-1 bg-gray-200 rounded-xl shadow-xl fixed md:relative inset-0 md:inset-auto z-40 overflow-y-auto`}
        >
          <div className="px-6 py-5">
            <h1 className="text-xl font-bold">General</h1>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <Wrench size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Utilities</p>
                  <p className="text-xs">{project.general.utilities}</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <PawPrint size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Pet Policy</p>
                  <p className="text-xs">{project.general.petPolicy}</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <Handshake size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Community</p>
                  <p className="text-xs">{project.general.community}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <h1 className="text-xl font-bold">Room Details</h1>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <Ruler size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Room Size</p>
                  <p className="text-xs">{project.roomDetails.roomSize}</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <DoorOpen size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Rooms</p>
                  <p className="text-xs">
                    {project.roomDetails.numberOfBedrooms}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <ShowerHead size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Bathrooms</p>
                  <p className="text-xs">
                    {project.roomDetails.numberOfBathrooms}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <h1 className="text-xl font-bold">Nearby Place</h1>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <Building size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">School</p>
                  <p className="text-xs">{project.nearbyPlaces.school}</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <Bus size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Bus Station</p>
                  <p className="text-xs">{project.nearbyPlaces.busStop}</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-2 rounded-xl">
              <div className="px-2 py-2 flex items-center gap-5">
                <div>
                  <Hospital size={25} className="text-black" />
                </div>
                <div>
                  <p className="text-sm">Hospital</p>
                  <p className="text-xs">{project.nearbyPlaces.hospital}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <h1 className="text-xl font-bold">
              Need more info? Drop us a message!
            </h1>
            <div className="bg-white mt-2 rounded-xl px-6 py-2">
              <form action="">
                <input
                  className="w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
                  name="Name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="w-full border border-gray-300 rounded-xl py-3 px-4 mt-2"
                  name="phone"
                  type="text"
                  placeholder="Your Phone Number"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-200 text-blue-800 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm mt-2 cursor-pointer w-full sm:w-auto"
                >
                  Connect with Us
                </button>
              </form>
            </div>
          </div>

          <div className="px-6 py-2">
            <button
              type="submit"
              className="bg-blue-200 text-blue-800 px-4 sm:px-8 py-2 sm:py-3 rounded-full w-full mt-2 cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <Heart size={25} className="text-black" />
              <span>Save to Collection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;