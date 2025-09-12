import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import Logo from '../assets/logo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/shop', label: 'Shop' },
  { to: '/pages', label: 'Pages' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="MasteryHub Logo" className="h-10 w-auto" />
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-8 text-sm font-light">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-2 transition-colors ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
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
          <button className="relative">
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
              0
            </span>
          </button>

          {/* Login */}
          <button className="flex items-center gap-1 text-gray-700 text-sm font-light hover:underline">
            <User size={18} />
            Login
          </button>

          {/* Signup */}
          <button className="rounded-md bg-gradient-to-r from-blue-600 to-purple-500 px-5 py-2 text-sm font-medium text-white shadow hover:shadow-md">
            Signup
          </button>
        </div>
      </nav>
    </header>
  );
}
