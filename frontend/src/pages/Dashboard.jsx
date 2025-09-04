import { useState } from "react";
import { FiBell } from "react-icons/fi";
import LogoImg from "../assets/images/Logo.png";
import ProfilePic from "../assets/images/Profile_Pic.png";
import {
  FileText,
  CreditCard,
  BookOpen,
  MessageCircle,
  Settings,
  User,
  GraduationCap,
} from "lucide-react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-0 md:w-60"
        }  bg-gradient-to-b from-[#8E65EF] to-[#331DA8] text-white flex flex-col transition-all duration-300 overflow-hidden`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <img
            src={LogoImg} // path to your logo
            alt="Mastery Hub Logo"
            className="h-20" // Tailwind: height = 40px
          />
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 space-y-2 mt-15">
          <SidebarItem icon={<User size={18} />} text="User Details" />
          <SidebarItem
            icon={<GraduationCap size={18} />}
            text="Instructor Details"
          />
          <SidebarItem
            icon={<FileText size={18} />}
            text="Certificate Details"
          />
          <SidebarItem icon={<CreditCard size={18} />} text="Payments" />
          <SidebarItem icon={<BookOpen size={18} />} text="Course Details" />
          <SidebarItem
            icon={<MessageCircle size={18} />}
            text="Contact Us / FAQs"
          />
          <SidebarItem icon={<Settings size={18} />} text="Settings" />
        </nav>

        {/* Logout */}
        <button className="m-4 bg-gradient-to-r from-[#9B080A] to-[#D95658] text-white px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300">
          LOG OUT
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}

        <header className="flex justify-between items-center bg-gradient-to-r from-[#865AEF] to-[#331DA8] text-white px-4 py-10">
          {/* Mobile toggle or left content */}
          <button
            className="md:hidden p-2 bg-purple-700 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Right side content */}
          <div className="flex items-center space-x-4 ml-auto">
            <span className="relative text-2xl">
              {/* Notification dot */}
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
        {/* Content */}
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-xl font-semibold">Welcome to Dashboard</h2>
        </main>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-2 px-2 py-2 rounded hover:bg-black cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
}
