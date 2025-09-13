import React from "react";
import InheroBg from "../assets/Instructor-Hero.jpg"; 
import logo from "../assets/logo.png"; 

const InstructorHeroSection = () => {
  return (
    // Hero Section
    <section
      className="relative text-white h-screen py-35 px-6 text-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(4,1,108,0.4), rgba(74,22,189,0.4)), url(${InheroBg})`,
      }}
    >
      <div className="container mx-auto flex flex-col items-start px-6 md:px-0">
        {/* Logo */}
        <div className="mb-4">
          <img src={logo} alt="MasteryHub Logo" className="w-60 md:w-72" />
        </div>

        {/* Heading */}
        <div>
          <p className="text-[80px] max-w-full text-left leading-none">
            Unlock Your <br /> Potential with <br />
            Mastery<span className="text-[#E87A00]">Hub</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorHeroSection;
