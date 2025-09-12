import React from "react";
import { Routes, Route } from "react-router-dom";
import Terms_And_Conditions from "./pages/Terms_And_Conditions";
import Admin_Body from "./components/Admin/Admin_Body";
import CourseCart from "./components/Course_Cart/Course_Cart";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/terms_and_conditions" element={<Terms_And_Conditions />} />
        <Route path="/Admin_Body" element={<Admin_Body />} />
        <Route path="/course_cart" element={<CourseCart />} />
      </Routes>
    </div>
  );
};

export default App;
