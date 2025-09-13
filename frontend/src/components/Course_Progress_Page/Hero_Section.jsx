import React from "react";
import HeroBg from "../../assets/images/Hero_Bg.png";

const Hero_Section = () => {
  return (
    <section
      className="relative text-white min-h-[80vh] sm:min-h-screen px-6 py-16 sm:py-20 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(4,1,108,0.5), rgba(74,22,189,0.5)), url(${HeroBg})`,
      }}
    >
      <div className="container mx-auto flex flex-col items-start px-4 sm:px-6 md:px-10">
        <div className="sm:ml-10 md:ml-20">
          <p className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-left">
            Your Learning
            <br />
            Progress
          </p>

          <p className="text-sm sm:text-base md:text-lg max-w-xl mt-6 text-left font-medium">
            Track your journey and download certificates as you achieve
            milestones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;
