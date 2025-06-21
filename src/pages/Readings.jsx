import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hod from '../assets/hod_picture.jpg'
import {FaChevronRight, FaHome } from 'react-icons/fa';


const Readings = () => {
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
              Head Of Department's Address
            </motion.h1>
            {/* <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl font-bold text-gray-800 max-w-2xl mx-auto"
            >
              we would love to hear fom you
            </motion.p> */}
  
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
              <span className="text-gray-800 font-semibold">Head Of Department's Address</span>
            </motion.nav>
          </div>
        </motion.div>

        {/* HoD section */}
        <div className="flex justify-center py-10">
          <div className="bg-white rounded-lg shadow-md p-6 w-full md:max-w-none md:w-full mx-2 md:mx-6">
            <div className="flex items-center gap-6">
              <img
                src={hod}
                alt="Hod picture"
                className="w-32 h-32 rounded-md object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Oluchi Jennie Bamidele
                </h2>
                <p className="text-gray-600 mb-4">Head Of Department</p>
                <a
                  href="/administration"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  check out our administrative team 
                </a>
              </div>
            </div>
            {/* HoD Address/Message Section */}
            <div className="mt-8">
  <div className="text-base md:text-lg w-full px-2 md:px-4 space-y-4">
    <h3 className="text-lg font-semibold text-black-600">
      Key Notes: International Centre Of Excellence - Computer Science Programme
    </h3>

    <div>
      <h4 className="font-semibold text-gray-800">Mission:</h4>
      <ul className="list-disc list-inside ml-4 text-gray-700">
        <li>Promote and develop computer science in Nigeria</li>
        <li>Foster interest in tech among young people</li>
        <li>Develop skills in computer sciences</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-gray-800">Objectives:</h4>
      <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-2">
        <li>
          <span className="font-semibold">Training and Development:</span>
          <ul className="list-disc list-inside ml-4">
            <li>Provide high-quality training and development programs</li>
            <li>Foster a culture of innovation and entrepreneurship</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Research and Development:</span>
          <ul className="list-disc list-inside ml-4">
            <li>Conduct cutting-edge research in computer science</li>
            <li>Develop real-world solutions using computational methods</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Education and Outreach:</span>
          <ul className="list-disc list-inside ml-4">
            <li>Promote interest among young people</li>
            <li>Enhance teaching and learning programs</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Collaboration and Partnerships:</span>
          <ul className="list-disc list-inside ml-4">
            <li>Collaborate with local and international organizations</li>
            <li>Partner with industries and governments</li>
          </ul>
        </li>
      </ol>
    </div>

    <div>
      <h4 className="font-semibold text-gray-800">Key Activities:</h4>
      <ul className="list-disc list-inside ml-4 text-gray-700">
        <li>Curriculum Development</li>
        <li>Research Grants</li>
        <li>Workshops and Conferences</li>
        <li>Industry Partnerships</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-gray-800">Expected Outcomes:</h4>
      <ul className="list-disc list-inside ml-4 text-gray-700">
        <li>Increased interest in computer science and informatics</li>
        <li>High-quality training and development programs</li>
        <li>Cutting-edge research</li>
        <li>Real-world problem-solving with computational methods</li>
      </ul>
    </div>
  </div>
</div>

          

          </div>
        </div>
      </div>
    );   
};

export default Readings;