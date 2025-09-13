import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/instructor-blogs/${blog.slug}`}
      className="group block rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 overflow-hidden shadow-sm hover:shadow-lg transition"
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 flex items-center gap-2">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            {blog.category}
          </span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug line-clamp-2 min-h-[44px]">{blog.title}</h3>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] font-semibold">
              {blog.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <span>{blog.author}</span>
          </div>
          <span>{blog.date}</span>
        </div>
      </div>
    </Link>
  );
}
