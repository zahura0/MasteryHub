import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorBlog from "./pages/InstructorBlog";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/InstructorBlog" element={<InstructorBlog />} />  
        </Routes>
      </div>
    </Router>
  );
};

export default App;