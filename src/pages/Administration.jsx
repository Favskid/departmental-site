import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hod from '../assets/hod_picture.jpg';

const Administration = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Executive Director",
      image: hod,
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "michael.chen@company.com",
      phone: "+1 (555) 234-5678"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "HR Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      email: "emily.rodriguez@company.com",
      phone: "+1 (555) 345-6789"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Finance Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "david.thompson@company.com",
      phone: "+1 (555) 456-7890"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Administrative Assistant",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      email: "lisa.wang@company.com",
      phone: "+1 (555) 567-8901"
    },
    {
      id: 6,
      name: "James Wilson",
      title: "IT Administrator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      email: "james.wilson@company.com",
      phone: "+1 (555) 678-9012"
    },
    {
      id: 7,
      name: "Maria Garcia",
      title: "Communications Lead",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      email: "maria.garcia@company.com",
      phone: "+1 (555) 789-0123"
    },
    {
      id: 8,
      name: "Robert Kim",
      title: "Security Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      email: "robert.kim@company.com",
      phone: "+1 (555) 890-1234"
    },
    {
      id: 9,
      name: "Jennifer Brown",
      title: "Project Coordinator",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
      email: "jennifer.brown@company.com",
      phone: "+1 (555) 901-2345"
    },
    {
      id: 10,
      name: "Alex Morgan",
      title: "Data Analyst",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      email: "alex.morgan@company.com",
      phone: "+1 (555) 012-3456"
    },
    {
      id: 11,
      name: "Rachel Davis",
      title: "Executive Secretary",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      email: "rachel.davis@company.com",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 12,
      name: "Kevin Lee",
      title: "Facilities Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      email: "kevin.lee@company.com",
      phone: "+1 (555) 234-5678"
    }
  ];

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
            Administrative Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl font-bold text-gray-800 max-w-2xl mx-auto"
          >
            Meet our dedicated administrative professionals who keep our organization running smoothly
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
            <span className="text-gray-800 font-semibold">Administration</span>
          </motion.nav>
        </div>
      </motion.div>

      {/* Staff Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {staffMembers.map((staff) => (
            <div key={staff.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <figure className="px-6 pt-6">
                <div className="avatar">
                  <div className="w-32 h-32 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
              </figure>
              
              <div className="card-body items-center text-center px-6 pb-6">
                <h2 className="card-title text-blue-800 text-lg font-bold mb-1">
                  {staff.name}
                </h2>
                <p className="text-blue-600 font-medium mb-4">{staff.title}</p>
                
                {/* Contact Info */}
                <div className="space-y-2 mb-4 w-full">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <FiMail size={16} className="text-blue-500" />
                    <span className="truncate">{staff.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <FiPhone size={16} className="text-blue-500" />
                    <span>{staff.phone}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="btn btn-circle btn-outline btn-sm border-blue-300 hover:bg-blue-500 hover:border-blue-500">
                    <FaFacebook size={16} className="text-blue-500 hover:text-white" />
                  </button>
                  <button className="btn btn-circle btn-outline btn-sm border-blue-300 hover:bg-blue-500 hover:border-blue-500">
                    <FaTwitter size={16} className="text-blue-500 hover:text-white" />
                  </button>
                  <button className="btn btn-circle btn-outline btn-sm border-blue-300 hover:bg-blue-500 hover:border-blue-500">
                    <FaInstagram size={16} className="text-blue-500 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Administration;