import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaHome, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hod from '../assets/hod_picture.jpg';
import secretary from '../assets/secretary.png';
import research4 from '../assets/research4.jpg'; 
import research2 from '../assets/research2.jpg';
import research1 from '../assets/research1.jpg';
import registrar from '../assets/registrar.jpg';
import IT_1 from '../assets/IT_1.png';
import IT_2 from '../assets/IT_2.jpg'
import IT_3 from '../assets/IT_3.jpg'
import IT_4 from '../assets/IT_4.jpg';
import IT_5 from '../assets/IT_5.jpg';

const Administration = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Oluchi Jennie Bamidele",
      title: "Head Of Department",
      image: hod,
      email: "jodamio@gmail.com",
      phone: "+234 (90) 6968-0153"
    },
    {
      id: 2,
      name: "Nwagbo Mercy Uchechi",
      title: "Principal Personal Secretary",
      image: secretary,
      email: "umnwagbo@nmc.edu.ng",
      phone: "+234 (80) 6241-6451 "
    },
    {
      id: 3,
      name: "Victoria Kidams",
      title: "Principal Assistant Registrar",
      image: registrar,
      email: "victoriakidams@gmail.com",
      phone: "+234 (90) 1705-1155"
    },
    {
      id: 4,
      name: "Rimdams victor",
      title: "Research fellow II",
      image: research2,
      email: "fisho4jos@gmail.com",
      phone: "+234 (80) 6157-4069"
    },
    {
      id: 5,
      name: "Nriagu Chukwunonso",
      title: "Assistant Research Fellow",
      image: research4,
      email: "conriagu@yahoo.com",
      phone: "+234 (80) 6400-1350"
    },
    {
      id: 6,
      name: "Oluwakemi Oduwole",
      title: "Reseach Fellow II",
      image: research1,
      email: "ooduwole@nmc.edu.ng",
      phone: "+234 (80) 3857-2387"
    },
    {
      id: 7,
      name: "Oloda Oladipupo",
      title: "IT Student",
      image: IT_1,
      email: "favouroloda24@gmail.com",
      phone: "+234 (90) 3735-4335"
    },
    {
      id: 8,
      name: "Solomon Victoria",
      title: "IT Student",
      image: IT_2,
      email: "awazivictoria@gmail.com",
      phone: "+234 (90) 7376-4176"
    },
    {
      id: 9,
      name: "Onyedikachi",
      title: "IT Student",
      image: IT_3,
      email: "onyedikachiu98@gmail.com",
      phone: "+234 (81) 3628-7638"
    },
    {
      id: 10,
      name: "Husseni Abubukar Ibrahim",
      title: "IT Student",
      image: IT_4,
      email: "abutijo.ib@gmail.com",
      phone: "+234 (81) 2807-5064"
    },
    {
      id: 11,
      name: "Abubukar Ibrahim Hussen",
      title: "IT Student",
      image: IT_5,
      email: "thecoolbaap07@gmail.com",
      phone: "+234 (91) 3586-2029"
    },
    {
      id: 12,
      name: "Kevin Lee",
      title: "Facilities Manager",
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
              <figure className="px-6 pt-6 mb-4">
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