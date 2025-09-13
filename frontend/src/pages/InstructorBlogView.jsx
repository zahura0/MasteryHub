import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBlogBySlug, blogs } from "../data/blogs";

export default function InstructorBlogView() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-semibold mb-4">Article not found</h1>
        <button onClick={() => navigate(-1)} className="text-sm text-indigo-600">Go back</button>
      </div>
    );
  }

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

      {/* CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Main article */}
          <article className="lg:col-span-2">
            <h1 className="text-xl font-bold mb-4">{blog.title}</h1>
            <div className="prose max-w-none text-sm leading-relaxed text-gray-700">
              {blog.content.split("\n\n").map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <div className="prose max-w-none text-sm leading-relaxed text-gray-700 mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut er massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
              <p>
                Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              </p>
            </div>

            <p className="mt-6 text-sm text-gray-500">Written by : <span className="font-semibold text-gray-800">{blog.author}</span></p>

            {/* Comments (static placeholders) */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-4">Leave A Comment</h2>
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-t border-gray-200 py-4 flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-semibold">CL</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">KaiB was amazing with our cats! This was our first time using a pet-sitting service, so we were naturally quite anxious. We took a chance on Kai and completely lucked out!</p>
                    <button className="mt-2 text-xs text-indigo-600">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-base font-semibold leading-snug">{blog.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] font-semibold">
                    {blog.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <span>{blog.author}</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">#{blog.category}</p>
                <p className="mt-1 text-xs text-gray-500">${blog.price?.toFixed ? blog.price.toFixed(2) : blog.price}</p>
                <div className="mt-1 text-xs text-blue-600">★★★★☆ {blog.rating}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Explanation video</h4>
              <div className="relative rounded-xl overflow-hidden ring-1 ring-indigo-100 bg-indigo-50 aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={blog.video}
                  title="Explanation video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">More from instructor</h4>
              <div className="space-y-3">
                {blogs.filter((b) => b.slug !== slug).slice(0, 3).map((b) => (
                  <Link key={b.id} to={`/instructor-blogs/${b.slug}`} className="flex gap-3 items-center group">
                    <img src={b.image} alt="" className="w-16 h-12 rounded-md object-cover border" />
                    <div>
                      <p className="text-sm font-medium leading-snug line-clamp-2 group-hover:underline">{b.title}</p>
                      <p className="text-xs text-gray-500">{b.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
