import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogCard from "../components/InstructorBlog/BlogCard";

export default function InstructorBlog() {
  const featured = blogs[0];

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

          {/* Featured */}
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {/* Featured left big card */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <img src={featured.image} alt={featured.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <p className="text-xs text-gray-500">Featured Article</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  <Link to={`/instructor-blogs/${featured.slug}`} className="hover:underline">
                    {featured.title}
                  </Link>
                </h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] font-semibold">
                    {featured.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <span>{featured.author}</span>
                  <span>•</span>
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>

            {/* Right side small grid */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {blogs.slice(1, 5).map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </div>

          {/* Rest grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
