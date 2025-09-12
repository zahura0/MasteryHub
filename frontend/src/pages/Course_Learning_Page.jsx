import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Chat_Widget from "../components/Course_Learning_Page/Chat_Widget";
import AssignmentModal from "../components/Course_Learning_Page/Assignment_Modal";
import Quiz_Modal from "../components/Course_Learning_Page/Quiz_Modal"; // import modal component

const Course_Learning_Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col">
      {/* Page Container */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          How To Make GUI In Java With Example
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Course Video"
                allowFullScreen
              ></iframe>
            </div>

            {/* Notes */}
            <div>
              <h3 className="text-lg font-bold mb-2">Create Your Note :</h3>
              <textarea
                className="w-full h-48 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Write your notes here..."
              ></textarea>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="p-1 text-black font-bold space-y-3">
              {[
                "Introduction 1: What is JAVA GUI ?",
                "Introduction 2: What is JAVA GUI ?",
                "Introduction 3: What is JAVA GUI ?",
                "Quiz",
                "Assignment",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item === "Assignment") setIsModalOpen(true);
                    if (item === "Quiz") setIsQuizOpen(true);
                  }}
                  className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#04016C] to-[#4A16BD] text-white text-sm">
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Download Materials */}
            <div className="p-4 text-center">
              <h4 className="font-bold text-xl mb-3">Download All Materials</h4>
              <div className="flex justify-center">
                <button className="flex items-center justify-center gap-2 w-48 py-2 bg-gradient-to-r from-[#331DA8] to-[#0625CA] text-white rounded-full transition">
                  <FaDownload /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <Chat_Widget />

      {/* Assignment Modal */}
      <AssignmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Quiz_Modal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};

export default Course_Learning_Page;
