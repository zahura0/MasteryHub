import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter, FiRefreshCw, FiDownload, FiEdit, FiTrash2 } from "react-icons/fi";

const CourseDetails = () => {
  const allCourses = [
    { id: "C001", name: "Introduction to Programming", department: "Computer Sci", instructor: "John Smith", duration: "12 Weeks" },
    { id: "C002", name: "Web Development Basics", department: "IT Dept", instructor: "Sarah Johnson", duration: "10 Weeks" },
    { id: "C003", name: "Database Systems", department: "Computer Sci", instructor: "Michael Brown", duration: "14 Weeks" },
    { id: "C004", name: "Software Engineering Basics", department: "Computer Sci", instructor: "John Smith", duration: "16 Weeks" },
    { id: "C005", name: "Networking Fundamentals", department: "IT Dept", instructor: "Sarah Johnson", duration: "12 Weeks" },
  ];

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 2; // number of rows per page

  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = allCourses.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      {/* Header with Search */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">Course Details</h2>
        <div className="relative w-96 ml-20">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F5F6FA] border-none focus:outline-none"
          />
        </div>
      </div>

      {/* Filters + Download */}
      <div className="flex items-center justify-between mb-6 space-x-4">
        <div className="flex items-center rounded-md overflow-hidden bg-gray-100 shadow-sm">
          <div className="flex items-center px-5 py-2 text-gray-600 bg-white hover:bg-gray-50">
            <FiFilter className="h-5 w-5 mr-2" /> Filter By
          </div>
          <select className="px-5 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>Department</option>
            <option>Computer Sci</option>
            <option>IT Dept</option>
          </select>
          <select className="px-5 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>Instructor</option>
            <option>John Smith</option>
            <option>Sarah Johnson</option>
            <option>Michael Brown</option>
          </select>
          <button className="flex items-center px-5 py-2 text-red-500 font-medium hover:bg-gray-50">
            <FiRefreshCw className="h-5 w-5 mr-1" /> Reset Filter
          </button>
        </div>

        <button
          className="flex items-center px-5 py-2 rounded-full text-white space-x-2 
                     bg-gradient-to-r from-[#331DA8] to-[#0625CA] hover:opacity-90"
        >
          <span>Download</span>
          <FiDownload className="h-5 w-5" />
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="p-3">Course ID</th>
            <th className="p-3">Course Name</th>
            <th className="p-3">Department</th>
            <th className="p-3">Instructor</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentCourses.map((course, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-3">{course.id}</td>
              <td className="p-3">{course.name}</td>
              <td className="p-3">{course.department}</td>
              <td className="p-3">{course.instructor}</td>
              <td className="p-3">{course.duration}</td>
              <td className="p-3 flex space-x-2">
                <button className="p-2 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                  <FiEdit />
                </button>
                <button className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Prev */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded-full bg-transparent text-gray-700 hover:bg-gray-200"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full transition-all duration-150 border border-gray-300 ${
              currentPage === i + 1
                ? "bg-gradient-to-r from-[#8E65EF] to-[#331DA8] text-white"
                : "bg-transparent text-gray-700 hover:bg-gradient-to-r hover:from-[#8E65EF] hover:to-[#331DA8] hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 rounded-full bg-transparent text-gray-700 hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
