import React from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./pages/Searchbar";
import Landing from "./components/Landing";
import Property from "./pages/Property";
import Error from "./components/Error";
import Wishlist from "./pages/Wishlist";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { WishlistProvider } from "./components/WishlistContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      <ToastContainer/>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allproject" element={<Searchbar />} />
          <Route path="/allproject/:id" element={<Property />} />
          <Route path="/allproject/wishlist" element={<Wishlist />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </WishlistProvider>
      
    </div>
  );
};

export default App;
