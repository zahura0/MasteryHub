import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogCard from "../components/InstructorBlog/BlogCard";

export default function InstructorBlog() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-700">
        <div className="absolute inset-0 bg-black/10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              Unlock Your <br /> Potential with <span className="text-orange-300">MasteryHub</span>
            </h1>
            <p className="mt-4 text-white/90 text-base leading-relaxed max-w-md">
              Join MasteryHub today to access a wide range of courses designed to enhance your skills. Experience interactive learning with expert instructors and a supportive community.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Our Instructors Blogs</h2>
            <Link to="#" className="text-sm text-indigo-600 hover:text-indigo-800">See All Article →</Link>
          </div>

          {/* Uniform grid: 4 columns on large screens, equal-height cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {blogs.map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/courses" className="text-sm rounded-full bg-indigo-600 text-white px-6 py-2 font-medium hover:bg-indigo-700">Explore courses</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
