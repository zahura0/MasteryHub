import React from "react";
import LogoImg from "../../assets/images/Logo.png";
import {
  FileText,
  CreditCard,
  BookOpen,
  MessageCircle,
  Settings,
  User,
  GraduationCap,
} from "lucide-react";

const Side_Bar = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-60" : "w-0 md:w-60"
      } bg-gradient-to-b from-[#8E65EF] to-[#331DA8] text-white flex flex-col transition-all duration-300 overflow-hidden`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-6">
        <img src={LogoImg} alt="Mastery Hub Logo" className="h-20" />
      </div>

      {/* Side Bar Items */}
      <nav className="flex-1 px-2 space-y-2 mt-15">
        <SidebarItem icon={<User size={18} />} text="User Details" />
        <SidebarItem
          icon={<GraduationCap size={18} />}
          text="Instructor Details"
        />
        <SidebarItem icon={<FileText size={18} />} text="Certificate Details" />
        <SidebarItem icon={<CreditCard size={18} />} text="Payments" />
        <SidebarItem icon={<BookOpen size={18} />} text="Course Details" />
        <SidebarItem
          icon={<MessageCircle size={18} />}
          text="Contact Us / FAQs"
        />
        <SidebarItem icon={<Settings size={18} />} text="Settings" />
      </nav>

      <button className="m-4 bg-gradient-to-r from-[#9B080A] to-[#D95658] text-white px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300">
        LOG OUT
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2 px-2 py-2 rounded hover:bg-black cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Side_Bar;
