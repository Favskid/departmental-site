import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 sm:px-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm leading-relaxed text-blue-100 font-bold">
            We are committed to advancing the frontiers of computer science through training, research, and innovation in Kwali, Abuja.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-blue-100 font-bold">
            <li>
              <a href="/Administration" className="hover:text-white transition">Administration</a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white transition">Contact Us</a>
            </li>
            <li>
              <a href="#research" className="hover:text-white transition">Research Activities</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl text-blue-100 font-bold">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-white"><FaXTwitter /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Info</h2>
          <p className="text-sm text-blue-100 mb-2 font-bold">
            <strong>Address:</strong> Kaduna-Lokoja Express way, Sheda Kwali, Abuja Nigeria.
          </p>
          <p className="flex items-center gap-2 text-sm text-blue-100 mb-1 font-bold">
            <FaPhoneAlt /> +234 (80) 6968-0153
          </p>
          <p className="flex items-center gap-2 text-sm text-blue-100">
            <FaEnvelope /> compsci.nmc@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-blue-800 mt-10 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} Computer Science Programme. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;