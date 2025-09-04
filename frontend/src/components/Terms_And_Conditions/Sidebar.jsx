import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (id) =>
    `block pl-2 ${
      activeSection === id
        ? "border-l-4 border-blue-600 text-gray-900 font-medium"
        : "hover:text-blue-500 text-gray-600"
    }`;

  return (
    <div>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-39 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-black rounded-md hover:bg-gray-200 transition"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-50 right-4 md:top-0 md:right-0 w-64 md:w-auto p-4 md:p-6  rounded md:rounded-none shadow md:shadow-none z-40 transform transition-transform duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } md:scale-y-100 md:opacity-100`}
      >
        <h2 className="font-bold text-lg mb-2">Terms of Service</h2>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              href="#intro"
              className={linkClass("intro")}
              onClick={() => setActiveSection("intro")}
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="#eligibility"
              className={linkClass("eligibility")}
              onClick={() => setActiveSection("eligibility")}
            >
              Eligibility
            </a>
          </li>
          <li>
            <a
              href="#account"
              className={linkClass("account")}
              onClick={() => setActiveSection("account")}
            >
              Account Responsibilities
            </a>
          </li>
          <li>
            <a
              href="#payments"
              className={linkClass("payments")}
              onClick={() => setActiveSection("payments")}
            >
              Course Access & Payments
            </a>
          </li>
          <li>
            <a
              href="#instructor"
              className={linkClass("instructor")}
              onClick={() => setActiveSection("instructor")}
            >
              Instructor Terms
            </a>
          </li>
          <li>
            <a
              href="#prohibited"
              className={linkClass("prohibited")}
              onClick={() => setActiveSection("prohibited")}
            >
              Prohibited Activities
            </a>
          </li>
          <li>
            <a
              href="#intellectual"
              className={linkClass("intellectual")}
              onClick={() => setActiveSection("intellectual")}
            >
              Intellectual Property
            </a>
          </li>
          <li>
            <a
              href="#termination"
              className={linkClass("termination")}
              onClick={() => setActiveSection("termination")}
            >
              Termination
            </a>
          </li>
          <li>
            <a
              href="#liability"
              className={linkClass("liability")}
              onClick={() => setActiveSection("liability")}
            >
              Limitation of Liability
            </a>
          </li>
          <li>
            <a
              href="#changes"
              className={linkClass("changes")}
              onClick={() => setActiveSection("changes")}
            >
              Changes to Terms
            </a>
          </li>
        </ul>

        <h2 className="font-bold text-lg mt-6 mb-2">Privacy Policy</h2>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              href="#collect"
              className={linkClass("collect")}
              onClick={() => setActiveSection("collect")}
            >
              Information We Collect
            </a>
          </li>
          <li>
            <a
              href="#usage"
              className={linkClass("usage")}
              onClick={() => setActiveSection("usage")}
            >
              How We Use Your Data
            </a>
          </li>
          <li>
            <a
              href="#cookies"
              className={linkClass("cookies")}
              onClick={() => setActiveSection("cookies")}
            >
              Cookies & Tracking
            </a>
          </li>
          <li>
            <a
              href="#sharing"
              className={linkClass("sharing")}
              onClick={() => setActiveSection("sharing")}
            >
              Data Sharing
            </a>
          </li>
          <li>
            <a
              href="#security"
              className={linkClass("security")}
              onClick={() => setActiveSection("security")}
            >
              Data Security
            </a>
          </li>
          <li>
            <a
              href="#rights"
              className={linkClass("rights")}
              onClick={() => setActiveSection("rights")}
            >
              Your Rights
            </a>
          </li>
          <li>
            <a
              href="#integrations"
              className={linkClass("integrations")}
              onClick={() => setActiveSection("integrations")}
            >
              Third-party Integrations
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={linkClass("contact")}
              onClick={() => setActiveSection("contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
