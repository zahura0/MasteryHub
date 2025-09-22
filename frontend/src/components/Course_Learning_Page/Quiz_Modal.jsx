import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Quiz_Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Assignment Details */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Java Quiz</h2>
          <p className="text-gray-600 mb-2">Mr. Jone Smith</p>
          <hr className="mb-4 border-gray-400" />
          <p className="text-gray-600 mb-4">
            Dear Student, <br />
            Please complete your Java Quiz.
          </p>

          <div className="border border-gray-400 p-3 rounded-lg flex justify-between items-center">
            <a className="text-blue-500 font-semibold hover:underline ml-3">
              Quiz
            </a>
          </div>
        </div>

        {/* Right Side - Upload Section */}
        <div className="bg-white rounded-l p-6 shadow-[6px_6px_12px_rgba(0,0,0,0.15)] relative">
          <h3 className="font-semibold text-lg mb-4">Add Your Works</h3>

          <div className="border border-gray-400 p-3 rounded-lg flex justify-between items-center mb-10">
            <span className="text-blue-500 font-semibold hover:underline ml-3">
              Quiz
            </span>
          </div>

          <button className="w-full py-3  bg-gradient-to-r from-[#083F9B] to-[#7F56D9] text-white rounded-lg font-bold">
            Submit
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-blue-900"
        >
          <AiOutlineClose size={15} />
        </button>
      </div>
    </div>
  );
};

export default Quiz_Modal;
