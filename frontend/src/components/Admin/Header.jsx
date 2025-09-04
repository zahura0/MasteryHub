import React from "react";
import { FiBell } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi"; // Import menu icon
import ProfilePic from "../../assets/images/Profile_Pic.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-[#865AEF] to-[#331DA8] text-white px-4 py-6">
      <button className="md:hidden p-2 " onClick={toggleSidebar}>
        <HiOutlineMenu className="w-6 h-6" />
      </button>

      {/* Right side content */}
      <div className="flex items-center space-x-4 ml-auto">
        <span className="relative text-2xl">
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-600 rounded-full"></span>
          <FiBell />
        </span>

        <img
          src={ProfilePic}
          alt="avatar"
          className="w-10 h-10 rounded-full border-none"
        />
        <div className="hidden md:block">
          <h1 className="font-bold">Himal Perera</h1>
          <p className="text-sm text-gray-200">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
