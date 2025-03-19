import React, { useContext } from "react";
import { WishlistContext } from "../components/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className=" text-2xl sm:text-4xl mb-2 flex items-center justify-center ">
        Your&nbsp;
        <span className="font-light bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
          Wishlist
        </span>
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center mt-4 md:mt-14 md:text-4xl lg:mt-24 lg:text-6xl ">
          No property added to wishlist.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {wishlist.map((property) => (
            
            <div
              key={property.id}
              className="bg-white h-[500px] p-4 rounded-lg shadow-lg border border-black"
            ><Link to={`/allproject/${property.id}`}>
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[390px]  object-cover rounded-lg"
              /></Link>
              <div className=" flex justify-between">
                <div>
                  <h2 className="text-xl mt-2">{property.title}</h2>
                  <p className="text-lg">
                    {property.price} - {property.location}
                  </p>
                </div>
                <button
                  onClick={() => removeFromWishlist(property.id)}
                  className="bg-red-500 text-white px-4 py-2 h-10 rounded-full mt-5"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
