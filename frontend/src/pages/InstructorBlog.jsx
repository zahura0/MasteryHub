import React from "react";
import { ArrowRight } from "lucide-react";
import HeroBg from "../assets/images/Hero_Bg.png";

const InstructorBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "How To Make GUI In Java With Example Example",
      author: "Dasteen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "Jan 10, 2022",
      readTime: "3 Min Read",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "How To Make GUI In Java With Example Example",
      author: "Dasteen",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "Jan 10, 2022",
      readTime: "3 Min Read",
      image:
        "https://dummyimage.com/400x300/eee/000&text=LEARN+JAVA+GUI+EASILY",
    },
    {
      id: 3,
      title: "How To Make GUI In Java With Example Example",
      author: "Dasteen",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      date: "Jan 10, 2022",
      readTime: "3 Min Read",
      image:
        "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "How To Make GUI In Java With Example Example",
      author: "Dasteen",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      date: "Jan 10, 2022",
      readTime: "3 Min Read",
      image: "https://dummyimage.com/400x300/111/fff&text=JAVA+CODE+EXAMPLE",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative text-white min-h-[80vh] sm:min-h-screen px-6 py-16 sm:py-20 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(4,1,108,0.5), rgba(74,22,189,0.5)), url(${HeroBg}),'
        }}
      >
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unlock Your <br />
            Potential with <br />
            MasteryHub
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Join MasteryHub today to access a wide range of courses designed to
            enhance your skills. Experience interactive learning with expert
            instructors and a supportive community.
          </p>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Our Instructors Blogs
            </h2>
            <button className="flex items-center text-black font-medium mt-3 md:mt-0">
              See All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Featured Article */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Featured Article</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow  p-4"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <h3 className="mt-4 text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <div className="mt-2 flex items-center text-gray-500 text-sm space-x-2">
                    <img
                      src={blog.avatar}
                      alt={blog.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repeat Blog Grid (like design example) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow hover:shadow-md transition p-3"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg w-full h-40 object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold leading-snug">
                  {blog.title}
                </h3>
                {/* Author Info */}
                <div className="mt-4 flex items-center space-x-3">
                  <img
                    src={blog.avatar}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">
                      {blog.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {blog.date} • {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 text-white rounded-lg shadow bg-gradient-to-r from-[#083F9B] to-[#7F56D9]">
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstructorBlog;