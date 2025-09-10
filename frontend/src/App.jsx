import React from "react";
import { Routes, Route, HydratedRouter } from "react-router-dom";
import About_Us from "./pages/About_Us";
import Course_Learning_Page from "./pages/Course_Learning_Page";
import Learning_Progress_Page from "./pages/Learning_Progress_Page";


const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        < Route path="/About_Us" element={<About_Us />} />  
        < Route path="/course_learning_page" element={<Course_Learning_Page />} />
        < Route path="/Learning_Progress_Page" element={< Learning_Progress_Page />} />
      </Routes>

    </div>
  );
};

export default App;
