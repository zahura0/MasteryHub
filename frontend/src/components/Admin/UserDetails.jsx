import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter, FiRefreshCw, FiDownload } from "react-icons/fi";

const UserDetails = () => {
  const allUsers = [
    { id: "00001", name: "Christine Brooks", course: "089 Kutch Green Apt. 448", courseId: "C001", payment: "Electric", status: "Completed" },
    { id: "00002", name: "John Doe", course: "123 Main Street", courseId: "C002", payment: "Water", status: "Pending" },
    { id: "00003", name: "Jane Smith", course: "456 Elm Road", courseId: "C003", payment: "Gas", status: "Completed" },
    { id: "00004", name: "Mark Lee", course: "789 Oak Avenue", courseId: "C004", payment: "Electric", status: "Pending" },
    { id: "00005", name: "Lucy Brown", course: "321 Pine Lane", courseId: "C005", payment: "Water", status: "Completed" },
    { id: "00006", name: "Tom Harris", course: "654 Cedar Blvd", courseId: "C006", payment: "Gas", status: "Pending" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  // Pagination calculations
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      {/* Header with Search */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">User Details</h2>
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
            <option>14 Feb 2019</option>
            <option>15 Feb 2019</option>
          </select>

          <select className="px-5 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>Order Type</option>
            <option>Type A</option>
          </select>

          <select className="px-5 py-2 bg-white text-gray-600 hover:bg-gray-50 focus:outline-none">
            <option>Order Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <button className="flex items-center px-5 py-2 text-red-500 font-medium hover:bg-gray-50">
            <FiRefreshCw className="h-5 w-5 mr-1" /> Reset Filter
          </button>
        </div>

        <button className="flex items-center px-5 py-2 rounded-full text-white space-x-2 bg-gradient-to-r from-[#331DA8] to-[#0625CA] hover:opacity-90">
          <span>Download</span>
          <FiDownload className="h-5 w-5" />
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Course</th>
            <th className="p-3">Course ID</th>
            <th className="p-3">Payment Amount</th>
            <th className="p-3">Complete Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentUsers.map((user, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.course}</td>
              <td className="p-3">{user.courseId}</td>
              <td className="p-3">{user.payment}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        {/* Prev Button */}
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
            className={`px-4 py-2 rounded-full border border-gray-300 transition-all duration-150 ${
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
          className="px-4 py-2 rounded-full bg-transparent text-gray-700 hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
