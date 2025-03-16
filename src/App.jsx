import React from "react";
import {  Routes, Route } from "react-router-dom";
import Searchbar from "./pages/Searchbar";
import Landing from "./components/Landing";
import Property from "./pages/Property";

const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/allproject" element={<Searchbar />}/>
          <Route path="/allproject/:id" element={<Property/>} />
        </Routes>
      
    </div>
  );
};

export default App;
