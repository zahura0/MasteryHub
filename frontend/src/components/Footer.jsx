import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        
        {/* Logo + Description */}
        <div>
          <img src={Logo} alt="MasteryHub Logo" className="h-14 mb-4" />
          <p className="text-sm leading-relaxed text-gray-200 max-w-md font-light">
            Empowering learners with curated courses, live sessions, and community support to master skills faster and more enjoyably.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg mb-4 font-medium">Quick Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link to="/about" className="hover:text-orange-300">About</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-orange-300">Course</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg mb-4 font-medium">Contact us</h4>
            <ul className="space-y-3 text-sm font-light">
            <li className="flex items-center gap-2">
              <Phone size={18} /> 071 555-0104
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> masteryhub@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-200 font-light">
          <p>Copyright © {new Date().getFullYear()} | All Rights Reserved</p>
          <div className="flex gap-4 mt-3 md:mt-0 text-xl">
            <a href="#" className="hover:text-orange-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-behance"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
