import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
