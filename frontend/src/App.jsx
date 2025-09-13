import './App.css'
import { Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import HelpSupportPage from './pages/HelpSupportPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
import React from "react";
import { Routes, Route, HydratedRouter } from "react-router-dom";
import About_Us from "./pages/About_Us";
import Course_Learning_Page from "./pages/Course_Learning_Page";
import Learning_Progress_Page from "./pages/Learning_Progress_Page";
import Certificate from "./pages/Certificate";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/help-support' element={<HelpSupportPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/About_Us" element={<About_Us />} />
        <Route
          path="/course_learning_page"
          element={<Course_Learning_Page />}
        />
        <Route
          path="/Learning_Progress_Page"
          element={<Learning_Progress_Page />}
        />
        <Route path="/Certificate" element={<Certificate />} />
      </Routes>
    </div>
  );
};

export default App;
