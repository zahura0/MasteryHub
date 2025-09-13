import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, ShoppingCart, User, BookOpen, Layers, Users2, GraduationCap, CircleHelp, FileText, Compass, Headphones } from 'lucide-react';
import Logo from '../assets/logo_white.png';

const navItems = [
  { to: '/courses', label: 'Courses', type: 'dropdown' },
  { to: '/shop', label: 'Shop', type: 'dropdown' },
  { to: '/pages', label: 'Pages', type: 'dropdown' },
];

const dropdownMenus = {
  Courses: [
    { label: 'All Courses', icon: Layers, to: '/courses' },
    { label: 'Course Learning', icon: BookOpen, to: '/course_learning_page' },
    { label: 'Learning Progress', icon: Layers, to: '/Learning_Progress_Page' },
    { label: 'Certificate', icon: FileText, to: '/Certificate' },
  ],
  Pages: [
    { label: 'About Us', icon: GraduationCap, to: '/About_Us' },
    { label: 'Instructor Details', icon: Users2, to: '/instructor-detail-page' },
    { label: 'Dashboard', icon: Users2, to: '/dashboard' },
    { label: 'Help & Support', icon: CircleHelp, to: '/help-support' },
    { label: 'Contact', icon: Headphones, to: '/contact' },
    { label: 'Terms & Conditions', icon: FileText, to: '/terms_and_conditions' },
    { label: 'Admin', icon: Users2, to: '/Admin_Body' },
    { label: 'Profile', icon: User, to: '/profile' },
  ],
  Shop: [
    { label: 'Course Cart', icon: ShoppingCart, to: '/course_cart' },
  ],
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo (links to home) */}
        <div className="flex items-center gap-2">
          <NavLink to="/" aria-label="Home" className="h-12 md:h-14 w-40 md:w-44 overflow-hidden flex items-center">
            <img
              src={Logo}
              alt="MasteryHub Logo"
              className="h-full w-full object-cover object-center select-none"
              draggable={false}
            />
          </NavLink>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-10 text-sm font-light">
          {navItems.map((item) => (
            <li key={item.label} className={item.type === 'dropdown' ? 'group relative' : ''}>
              {item.type === 'dropdown' && (
                <>
                  <button
                    className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    type="button"
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5 text-current transition-transform duration-300 group-hover:rotate-180"
                      viewBox="0 0 20 20" fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.18l3.71-3.95a.75.75 0 111.08 1.04l-4.25 4.52a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300 ease-out absolute left-1/2 -translate-x-1/2 top-10 pt-4">
                    <div className="min-w-[320px] rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 ring-1 ring-black/5 overflow-hidden">
                      <div className="grid grid-cols-1 gap-1 p-3">
                        {dropdownMenus[item.label].map((entry) => (
                          <NavLink
                            key={entry.label}
                            to={entry.to}
                            className={({ isActive }) =>
                              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition group/item ${
                                isActive
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`
                            }
                          >
                            <span className="w-8 h-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-500/10 text-blue-600">
                              <entry.icon size={18} />
                            </span>
                            <span className="font-light tracking-wide">{entry.label}</span>
                          </NavLink>
                        ))}
                      </div>
                      {/* Footer area inside dropdown (optional extras) */}
                      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
                        <Compass className="w-5 h-5 text-blue-600" />
                        <p className="text-xs text-gray-600 leading-snug">
                          Explore curated learning experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Search + icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center w-72 border rounded-full px-3 py-2 text-gray-500">
            <input
              type="text"
              placeholder="What would you like to learn?"
              className="flex-1 outline-none bg-transparent text-sm text-gray-600"
            />
            <Search size={18} className="text-blue-600" />
          </div>

          {/* Cart */}
          <NavLink to="/course_cart" className="relative">
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
              0
            </span>
          </NavLink>

          {/* Login */}
          <NavLink to="/login" className="flex items-center gap-1 text-gray-700 text-sm font-light hover:underline">
            <User size={18} />
            Login
          </NavLink>

          {/* Signup */}
          <button className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-5 py-2 text-sm font-medium text-white shadow hover:shadow-md">
            Signup
          </button>
        </div>
      </nav>
    </header>
  );
}
