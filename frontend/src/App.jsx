import React from "react";
import { Routes, Route, HydratedRouter } from "react-router-dom";
import About_Us from "./pages/About_Us";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        < Route path="/About_Us" element={<About_Us />} />  
      </Routes>

    </div>
  );
};

export default App;
