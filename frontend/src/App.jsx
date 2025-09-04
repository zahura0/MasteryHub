import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Terms_And_Conditions from "./pages/Terms_And_Conditions";


const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/terms_and_conditions" element={<Terms_And_Conditions />} />
      </Routes>
    </div>
  );
};

export default App;
