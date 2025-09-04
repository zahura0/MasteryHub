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
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></section>

      {/* About Us */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>

        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div>
            <h1 className="text-3xl font-bold " style={{ color: "#6F60D9" }}>
              OUR MISSION
            </h1>
            <p className="mt-4 text-gray-700">
              To make high-quality education accessible, affordable, and
              empowering for learners everywhere, by equipping them with skills
              and knowledge to achieve their personal and professional goals.
            </p>
          </div>
          <img
            src={MissionImg}
            alt="mission"
            className="w-full max-w-md h-auto rounded-xl "
          />

          <img src={FounderImg} alt="vision" className="" />
          <div>
            <h3 className="text-3xl font-bold" style={{ color: "#6F60D9" }}>
              OUR VISSION767474
            </h3>
            <p className="mt-4 text-gray-700">
              To become a global learning hub that bridges the gap between
              learners and expert instructors, fostering a community driven by
              collective progress, creativity, and lifelong success.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold" style={{ color: "#6F60D9" }}>
              FOUNDER
            </h3>
            <p className="mt-4 text-gray-700">
              John Doe, founder of MasteryHub, aims to inspire lifelong learning
              by connecting learners with expert instructors, developing a
              community that celebrates progress, creativity, and success.
            </p>
          </div>
          <img src={VisionImg} alt="founder" className="" />
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="relative h-screen bg-cover bg-center px-6 py-35 text-center"
        style={{ backgroundImage: `url(${InstructorBg})` }}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8">
          <img
            src={InstructorImg}
            alt="testimonial"
            className="w-24 h-24 mx-auto mb-4"
          />
          <p className="text-black-700 font-bold">
            “Qodem modo typi, qui nunc nobis videtur parum clari, fiant
            sollemnes in futurum quam nunc putamus claram.”
          </p>
          <p className="mt-4 font-semibold text-indigo-600">Taniya Jeany</p>
          <p className="text-sm text-gray-500">Marketing Envato Pty Ltd</p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-start md:items-start md:gap-2">
          {/* Left side: Gradient text */}
          <div className="text-left mb-8 md:mb-0 md:flex-1">
            
              <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500">Trusted by</h2>{" "}
              <h2 className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500">
                10,000+ 
              </h2>
              <h2 className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500">
                learners
              </h2>
            
            
          </div>

          {/* Right side: Vertical list */}
          <div className="flex flex-col gap-10 md:flex-none">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center  text-white rounded-full" style={{ background: "#3D24A3" }}>
                <FaStar />
              </div>
              <span className="font-bold text-blue-600">
                Expert Instructors
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center text-white rounded-full" style={{ background: "#3D24A3" }}>
                <FaStar />
              </div>
              <span className="font-bold text-blue-600">
                Wide Range of Courses
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center text-white rounded-full" style={{ background: "#3D24A3" }}>
                <FaStar />
              </div>
              <span className="font-bold text-blue-600">
                Global Accessibility
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
