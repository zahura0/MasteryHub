import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter, FiRefreshCw, FiDownload, FiEdit, FiTrash2 } from "react-icons/fi";

const CertificateDetails = () => {
  const certificates = [
    { certificateId: "00001", studentName: "Christine Brooks", course: "089 Kutch Green Apt. 448", courseId: "C001", issuedDate: "14 Feb 2019" },
    { certificateId: "00002", studentName: "John Doe", course: "123 Main Street", courseId: "C002", issuedDate: "15 Feb 2019" },
    { certificateId: "00003", studentName: "Jane Smith", course: "456 Elm Road", courseId: "C003", issuedDate: "16 Feb 2019" },
    { certificateId: "00004", studentName: "Michael Lee", course: "789 Pine Street", courseId: "C004", issuedDate: "17 Feb 2019" },
    { certificateId: "00005", studentName: "Lucy Brown", course: "321 Pine Lane", courseId: "C005", issuedDate: "18 Feb 2019" },
    { certificateId: "00006", studentName: "Tom Harris", course: "654 Cedar Blvd", courseId: "C006", issuedDate: "19 Feb 2019" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCerts = certificates.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-8 bg-white rounded-xl shadow-md" id="certificate-details">
      {/* Header with Search */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">Certificate Details</h2>
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
            <option>Course ID</option>
            <option>C001</option>
            <option>C002</option>
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
            <th className="p-3">Certificate ID</th>
            <th className="p-3">Student Name</th>
            <th className="p-3">Course</th>
            <th className="p-3">Course ID</th>
            <th className="p-3">Issued Date</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentCerts.map((cert, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-3">{cert.certificateId}</td>
              <td className="p-3">{cert.studentName}</td>
              <td className="p-3">{cert.course}</td>
              <td className="p-3">{cert.courseId}</td>
              <td className="p-3">{cert.issuedDate}</td>
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
      <div className="flex items-center justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === i + 1
                ? "bg-gradient-to-r from-[#331DA8] to-[#0625CA] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CertificateDetails;
