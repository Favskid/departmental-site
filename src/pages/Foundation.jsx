import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import postgraduate from '../assets/postgraduate.jpg';

const Foundation = () => {
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
            Foundation Postgraduate
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl font-bold text-gray-800 max-w-2xl mx-auto"
          >
            Learn about our postgraduate and history
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
            <span className="text-gray-800 font-semibold">Foundation</span>
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

      {/* Course Information Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-8 p-8">
            <div className="w-full md:w-1/3">
              <img 
                src={postgraduate} 
                alt="postgraduate picture" 
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h3 className="text-2xl font-bold text-gray-700 leading-tight">
                FOUNDATION POSTGRADUATE COURSE IN DATA SCIENCE AND DATABASE SYSTEM: APPLICATION TO NATIONAL DEVELOPMENT
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600 font-semibold text-lg">
                  VENUE: NATIONAL MATHEMATICAL CENTRE, KWALI FCT - NIGERIA
                </p>
                <p className="text-gray-600 font-semibold text-lg">
                  DATE: 13TH - 27TH JULY, 2025
                </p>
                <a
                  href="https://forms.gle/a2gwBEJNq8B3Fofx9" // <-- Replace with your actual Google Form URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-colors duration-200"
                >
                  Register Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
