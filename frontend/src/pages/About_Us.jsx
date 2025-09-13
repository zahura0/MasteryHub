import React from "react";
import { FaStar } from "react-icons/fa";
import HeroBg from "../assets/images/Hero_Bg.png";
import MissionImg from "../assets/images/About_Us (2).png";
import VisionImg from "../assets/images/About_Us (1).png";
import FounderImg from "../assets/images/About_Us (3).png";
import InstructorImg from "../assets/images/About_Us (4).png";
import InstructorBg from "../assets/images/Instructor_Bg.png";

export default function About_Us() {
  return (
    <main className="font-sans text-gray-900">
      {/* ✅ Hero Section */}
      <section
        className="relative text-white min-h-[80vh] sm:min-h-screen px-6 py-16 sm:py-20 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4,1,108,0.5), rgba(74,22,189,0.5)), url(${HeroBg})`,
        }}
      >
        <div className="container mx-auto flex flex-col items-start px-4 sm:px-6 md:px-10">
          <div className="sm:ml-10 md:ml-20">
            {/* Big Heading */}
            <p className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-left">
              Unlock Your
              <br />
              Potential With <br />
              Mastery<span className="text-[#E87A00]">Hub</span>
            </p>
            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg max-w-xl mt-6 text-left font-medium">
              Join MasteryHub today to access a wide range of courses designed
              to enhance your skills. Experience interactive learning with
              expert instructors and a supportive community.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ About Us */}
      <section className="px-6 sm:px-12 py-12 sm:py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Mission */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#6F60D9]">
              OUR MISSION
            </h1>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              To make high-quality education accessible, affordable, and
              empowering for learners everywhere, by equipping them with skills
              and knowledge to achieve their personal and professional goals.
            </p>
          </div>
          <img
            src={MissionImg}
            alt="mission"
            className="w-full max-w-sm sm:max-w-md h-auto rounded-xl mx-auto"
          />

          {/* Vision */}
          <img
            src={FounderImg}
            alt="vision"
            className="w-full max-w-sm sm:max-w-md h-auto rounded-xl mx-auto"
          />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#6F60D9]">
              OUR VISION
            </h3>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              To become a global learning hub that bridges the gap between
              learners and expert instructors, fostering a community driven by
              collective progress, creativity, and lifelong success.
            </p>
          </div>

          {/* Founder */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#6F60D9]">
              FOUNDER
            </h3>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              John Doe, founder of MasteryHub, aims to inspire lifelong learning
              by connecting learners with expert instructors, developing a
              community that celebrates progress, creativity, and success.
            </p>
          </div>
          <img
            src={VisionImg}
            alt="founder"
            className="w-full max-w-sm sm:max-w-md h-auto rounded-xl mx-auto"
          />
        </div>
      </section>

      {/* ✅ Testimonial */}
      <section
        className="relative min-h-[70vh] sm:min-h-screen px-6 py-16 sm:py-20 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4,1,108,0.5), rgba(74,22,189,0.5)), url(${InstructorBg})`,
        }}
      >
        <div className="max-w-lg sm:max-w-2xl mx-auto bg-white rounded-xl p-6 sm:p-10 shadow-lg text-center">
          <img
            src={InstructorImg}
            alt="testimonial"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full"
          />
          <p className="text-gray-800 font-medium text-sm sm:text-base">
            “Qodem modo typi, qui nunc nobis videtur parum clari, fiant
            sollemnes in futurum quam nunc putamus claram.”
          </p>
          <p className="mt-4 font-semibold text-indigo-600">Taniya Jeany</p>
          <p className="text-xs sm:text-sm text-gray-500">
            Marketing Envato Pty Ltd
          </p>
        </div>
      </section>

      {/* ✅ Features */}
      <section className="px-6 sm:px-12 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-start gap-10 md:gap-16">
          {/* Left side: Gradient text */}
          <div className="text-left md:flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500">
              Trusted by
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500">
              10,000+
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500">
              learners
            </h2>
          </div>

          {/* Right side: Vertical list */}
          <div className="flex flex-col gap-6 sm:gap-10 md:flex-none">
            {[
              "Expert Instructors",
              "Wide Range of Courses",
              "Global Accessibility",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white rounded-full"
                  style={{ background: "#3D24A3" }}
                >
                  <FaStar />
                </div>
                <span className="font-bold text-blue-600 text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
