import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import HelpSupportPage from "./pages/HelpSupportPage";
import InstructorDetailPage from './pages/InstructorDetailPage';
import About_Us from "./pages/About_Us";
import Course_Learning_Page from "./pages/Course_Learning_Page";
import Learning_Progress_Page from "./pages/Learning_Progress_Page";
import Certificate from "./pages/Certificate";
import Terms_And_Conditions from "./pages/Terms_And_Conditions";
import Admin_Body from "./components/Admin/Admin_Body";
import CourseCart from "./components/Course_Cart/Course_Cart";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Primary routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/help-support" element={<HelpSupportPage />} />
          <Route path='/instructor-detail-page' element={<InstructorDetailPage />} />

          {/* Auth/Profile routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Additional routes */}
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/course_learning_page" element={<Course_Learning_Page />} />
          <Route path="/Learning_Progress_Page" element={<Learning_Progress_Page />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/terms_and_conditions" element={<Terms_And_Conditions />} />
          <Route path="/Admin_Body" element={<Admin_Body />} />
          <Route path="/course_cart" element={<CourseCart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
