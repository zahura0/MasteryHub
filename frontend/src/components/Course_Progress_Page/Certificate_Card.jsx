import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { FaFilePdf, FaLinkedin, FaShareAlt } from "react-icons/fa"; // using react-icons

const Certificate_Card = ({ image }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
      <img src={image} alt="certificate" className="w-full h-52 object-cover rounded-md mb-4" />

      <div className="flex items-center gap-6">
        {/* Left PDF icon */}
        <button className="p-3">
          <FaFilePdf className="w-5 h-5 text-blue-900" />
        </button>

        {/* Main View Button */}
        <button className="flex items-center justify-center gap-4 bg-blue-900 text-white font-bold py-3 px-8 rounded-full">
          <span>View</span>
          <EyeIcon className="w-5 h-5" />
        </button>

        {/* Right LinkedIn & Share */}
        <div className="flex gap-6">
          <button className=" p-2">
            <FaLinkedin className="w-5 h-5 text-blue-900" />
          </button>
          <button className="p-2">
            <FaShareAlt className="w-5 h-5 text-blue-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate_Card;
