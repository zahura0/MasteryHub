import React from "react";
import { Routes, Route } from "react-router-dom";
import Terms_And_Conditions from "./pages/Terms_And_Conditions";
import Admin_Body from "./components/Admin/Admin_Body";
import CourseCart from "./components/Course_Cart/Course_Cart";

const App = () => {
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import HelpSupportPage from "./pages/HelpSupportPage";
import About_Us from "./pages/About_Us";
import Course_Learning_Page from "./pages/Course_Learning_Page";
import Learning_Progress_Page from "./pages/Learning_Progress_Page";
import Certificate from "./pages/Certificate";

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Primary routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/help-support" element={<HelpSupportPage />} />

          {/* Additional routes merged into same layout */}
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/course_learning_page" element={<Course_Learning_Page />} />
          <Route path="/Learning_Progress_Page" element={<Learning_Progress_Page />} />
          <Route path="/Certificate" element={<Certificate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
export default App;
