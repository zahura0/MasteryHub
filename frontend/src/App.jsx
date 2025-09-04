import React from "react";
import { Routes, Route, HydratedRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About_Us from "./pages/About_Us";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        < Route path="/HomePage" element={<About_Us />} />
      </Routes>

    </div>
  );
};

export default App;
