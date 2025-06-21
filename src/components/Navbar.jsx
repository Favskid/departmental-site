import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className="w-full bg-white shadow-sm z-50 relative">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 sm:h-14" />
          <div>
            <h1 className="text-blue-500 font-bold text-base sm:text-lg">National Mathematical Centre</h1>
            <p className="text-blue-500 font-bold text-xs sm:text-sm text-gray-500">Computer Science Programme</p>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-8 relative">
        <Link to="/administration" className="text-blue-700 hover:text-blue-900 font-medium">Administration</Link>
        <Link to="/contact" className="text-blue-700 hover:text-blue-900 font-medium">Contact Us</Link>


          {/* Hover dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-blue-700 hover:text-blue-900 font-medium flex items-center gap-1">
              Research Activities
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-full mt-2 right-0 w-64 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                <li><Link to="/foundation" className="block px-4 py-2 text-blue-700 hover:bg-blue-50">Foundation Postgraduate (FPC)</Link></li>
                <li><Link to="/olympiad" className="block px-4 py-2 text-blue-700 hover:bg-blue-50">Olympiad International Training (IOI) </Link></li>
                <li><Link to="/seminar" className="block px-4 py-2 text-blue-700 hover:bg-blue-50">Seminar Prsesntaions</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-md p-4 gap-3">
          <Link to="/administration" className="text-blue-700 font-medium">Adminstration</Link>
            <Link to="/contact" className="text-blue-700 font-medium">Contact Us</Link>

            <div>
              <button
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                className="w-full text-left text-blue-700 font-medium flex items-center justify-between"
              >
                Research Activities
                <svg
                  className={`w-4 h-4 transform transition-transform ${subMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {subMenuOpen && (
                <ul className="mt-2 pl-4 space-y-1 text-blue-600">
                  <li><Link to="/foundation">Foundation Postgraduate (FPC)</Link></li>
                  <li><Link to="/olympiad">Olympiad in Informatics Training (IOI)</Link></li>
                  <li><Link to="/seminar">Seminar Presentaions</Link></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
