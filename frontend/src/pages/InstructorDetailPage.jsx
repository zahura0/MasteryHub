import React from "react";
import InstructorHero from "../componets/InstructorHeroSection"; // Import Hero Component
import instructor1 from "../assets/instructor1.png";
import instructor2 from "../assets/instructor2.png";
import instructor3 from "../assets/instructor3.png";
import instructor4 from "../assets/instructor4.png";
import instructor5 from "../assets/instructor5.png";
import instructor6 from "../assets/instructor6.png";
import instructor7 from "../assets/instructor7.png";
import instructor8 from "../assets/instructor8.png";

const instructors = [
  {
    name: "Dr. Sarah Johnson",
    subject: "Data Science",
    img: instructor1,
    bio: "Expert in Machine Learning with 10+ years of teaching experience.",
  },
  {
    name: "Michael Lee",
    subject: "Web Development",
    img: instructor2,
    bio: "Full-stack developer specializing in MERN stack projects.",
  },
  {
    name: "Emily Davis",
    subject: "Graphic Design",
    img: instructor3,
    bio: "Award-winning designer with a passion for creativity.",
  },
  {
    name: "James Smith",
    subject: "Cybersecurity",
    img: instructor4,
    bio: "Certified ethical hacker and security consultant.",
  },
  {
    name: "Sophia Martinez",
    subject: "AI & Robotics",
    img: instructor5,
    bio: "Researcher in AI applications for robotics and automation.",
  },
  {
    name: "David Wilson",
    subject: "Business Management",
    img: instructor6,
    bio: "MBA professor with corporate leadership experience.",
  },
  {
    name: "Olivia Brown",
    subject: "Digital Marketing",
    img: instructor7,
    bio: "Specialist in SEO, SEM, and online branding strategies.",
  },
  {
    name: "Ethan Walker",
    subject: "Cloud Computing",
    img: instructor8,
    bio: "AWS certified architect and DevOps trainer.",
  },
];

const InstructorDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <InstructorHero />

      {/* Instructor Cards */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Meet Our Instructors
          </h2>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {instructors.map((inst, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition duration-300 p-6 w-64 flex flex-col items-center text-center"
              >
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{inst.name}</h3>
                <p className="text-sm text-gray-600">{inst.subject}</p>
                <p className="mt-3 text-gray-700 text-sm line-clamp-3">{inst.bio}</p>
              </div>
            ))}
          </div>

          {/* See More Button - Centered Below All Cards */}
          <div className="flex justify-center mt-10">
  <button className="px-6 py-3 bg-gradient-to-r from-[#083F9B] to-[#7F56D9] text-white font-medium rounded-lg hover:opacity-90 transition">
    See More
  </button>
</div>

        </div>
      </section>
    </div>
  );
};

export default InstructorDetailPage;
