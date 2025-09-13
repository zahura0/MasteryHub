import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter, FiRefreshCw, FiDownload, FiEdit, FiTrash2 } from "react-icons/fi";

const InstructorDetails = () => {
  const allInstructors = [
    { id: "I001", name: "John Smith", email: "john@uni.edu / 0771234567", course: "C001", department: "Computer Sci" },
    { id: "I002", name: "Sarah Johnson", email: "sarah@uni.edu / 0719876543", course: "C002", department: "IT Dept" },
    { id: "I003", name: "Michael Brown", email: "mike@uni.edu / 0755555555", course: "C003", department: "Computer Sci" },
    { id: "I004", name: "Lisa White", email: "lisa@uni.edu / 0781234567", course: "C001", department: "IT Dept" },
    { id: "I005", name: "David Green", email: "david@uni.edu / 0777654321", course: "C002", department: "Computer Sci" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 3;

  const indexOfLast = currentPage * instructorsPerPage;
  const indexOfFirst = indexOfLast - instructorsPerPage;
  const currentInstructors = allInstructors.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allInstructors.length / instructorsPerPage);

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold mb-3 md:mb-0">Instructor Details</h2>
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F5F6FA] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Filters + Download */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex items-center rounded-md overflow-hidden bg-gray-100 shadow-sm space-x-2">
          <div className="flex items-center px-5 py-2 text-gray-600 bg-white hover:bg-gray-50 cursor-pointer">
            <FiFilter className="h-5 w-5 mr-2" /> Filter By
          </div>
          <select className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>14 Feb 2019</option>
            <option>15 Feb 2019</option>
          </select>
          <select className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>Department</option>
            <option>Computer Sci</option>
            <option>IT Dept</option>
          </select>
          <select className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>Course</option>
            <option>C001</option>
            <option>C002</option>
          </select>
          <button className="flex items-center px-4 py-2 text-red-500 font-medium hover:bg-gray-50 transition-all duration-150">
            <FiRefreshCw className="h-5 w-5 mr-1" /> Reset Filter
          </button>
        </div>

        <button className="flex items-center px-5 py-2 rounded-full text-white space-x-2 bg-gradient-to-r from-[#331DA8] to-[#0625CA] hover:opacity-90 transition-all duration-150">
          <span>Download</span>
          <FiDownload className="h-5 w-5" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Instructor ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email / Phone</th>
              <th className="p-3">Course</th>
              <th className="p-3">Department</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentInstructors.map((ins, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="p-3">{ins.id}</td>
                <td className="p-3">{ins.name}</td>
                <td className="p-3">{ins.email}</td>
                <td className="p-3">{ins.course}</td>
                <td className="p-3">{ins.department}</td>
                <td className="p-3 flex space-x-2">
                  <button className="p-2 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-all duration-150">
                    <FiEdit />
                  </button>
                  <button className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-all duration-150">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Prev Button */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded-full bg-transparent text-gray-700 hover:bg-gray-200 transition-all duration-150"
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

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 rounded-full bg-transparent text-gray-700 hover:bg-gray-200 transition-all duration-150"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InstructorDetails;
