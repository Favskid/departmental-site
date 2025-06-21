import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Seminar = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-blue-600 via-blue-100 to-white py-16 px-4"
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-white drop-shadow-md"
          >
            SEMINAR PRESENTATIONS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl font-bold text-gray-800 max-w-2xl mx-auto"
          >
            Explore our latest research and presentations
          </motion.p>

          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center mt-4 text-sm"
          >
            <Link to="/" className="text-gray-800 hover:text-blue-600 flex items-center transition-colors duration-200 font-semibold">
              <FaHome className="mr-2" />
              Home
            </Link>
            <FaChevronRight className="mx-2 text-xs text-gray-600" />
            <span className="text-gray-800 font-semibold">Seminar Presentations</span>
          </motion.nav>
        </div>
      </motion.div>

            {/* Coming Soon Section */}
            <div className="container mx-auto px-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-4xl font-bold text-blue-600"
        >
          Coming Soon
        </motion.div>
      </div>

      </div>
    );
};

export default Seminar;