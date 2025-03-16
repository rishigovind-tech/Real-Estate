import React from "react";
import {  Routes, Route } from "react-router-dom";
import Searchbar from "./pages/Searchbar";
import Landing from "./components/Landing";
import Property from "./pages/Property";
import Error from "./components/Error";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/allproject" element={<Searchbar />}/>
          <Route path="/allproject/:id" element={<Property/>} />
          <Route path="/allproject/wishlist" element={<Wishlist/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
        
        
      
    </div>
  );
};

export default App;
