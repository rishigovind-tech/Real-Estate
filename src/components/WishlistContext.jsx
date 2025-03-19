import React, { createContext, useState } from "react";
import { toast } from "react-toastify"; 

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  
  const addToWishlist = (property) => {
    if (!wishlist.some((item) => item.id === property.id)) {
      setWishlist([...wishlist, property]);
      toast.success("Added to Wishlist!");
    } else {
      toast.info("Already in Wishlist!");
    }
  };

 
  const removeFromWishlist = (propertyId) => {
    setWishlist(wishlist.filter((item) => item.id !== propertyId));
    toast.error("Removed from Wishlist!");
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
