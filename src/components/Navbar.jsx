import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left section: Logo and title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 sm:h-14" />
          <div>
            <h1 className="text-blue-500 font-bold text-base sm:text-lg">Computer Science Programme</h1>
            <p className="text-blue-500 text-xs sm:text-sm text-gray-500">Kwali, Abuja</p>
          </div>
        </div>

        {/* Right section: Horizontal Menu (desktop only) */}
        <div className="hidden sm:flex items-center gap-8">
          {/* Contact Us */}
          <a
            href="#contact"
            className="text-blue-700 hover:text-blue-900 font-medium transition"
          >
            Contact Us
          </a>

          {/* Research Activities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-blue-700 hover:text-blue-900 font-medium transition">
              Research Activities
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-20">
                <li>
                  <a href="#foundation" className="block px-4 py-2 text-blue-700 hover:bg-blue-50">
                    Foundation Postgraduate
                  </a>
                </li>
                <li>
                  <a href="#ioi" className="block px-4 py-2 text-blue-700 hover:bg-blue-50">
                    IOI Training
                  </a>
                </li>
                <li>
                  <a href="#olympiad" className="block px-4 py-2 text-blue-700 hover:bg-blue-50">
                    Olympiad International Training
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Menu (sm:hidden) */}
        <div className="sm:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-56"
          >
            <li><a href="#contact" className="text-blue-700">Contact Us</a></li>
            <li>
              <a className="text-blue-700">Research Activities</a>
              <ul className="p-2">
                <li><a href="#foundation" className="text-blue-700">Foundation Postgraduate</a></li>
                <li><a href="#ioi" className="text-blue-700">IOI Training</a></li>
                <li><a href="#olympiad" className="text-blue-700">Olympiad International Training</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
