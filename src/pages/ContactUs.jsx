import React, { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaTwitter, FaFacebook, FaYoutube, FaLinkedin, FaChevronRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl font-bold text-gray-800 max-w-2xl mx-auto"
          >
            We'd love to hear from you
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
            <span className="text-gray-800 font-semibold">Contact Us</span>
          </motion.nav>
        </div>
      </motion.div>

      {/* Contact Info + Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container mx-auto flex flex-col lg:flex-row gap-8 p-6 lg:p-12"
      >
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1 bg-white rounded-xl p-8 space-y-6 shadow-lg border border-blue-100"
        >
          <h2 className="text-blue-800 text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-5">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaPhone className="text-blue-700 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+234 (80) 6968-0153</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri: 9am-5pm</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-blue-700 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600"><a href="mailto:compsci.nmc@gmail.com">compsci.nmc@gmail.com</a></p>
                <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-700 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Kaduna-Lokoja Express way, Sheda Kwali, Abuja Nigeria.</p>
                <a 
                  href="https://maps.app.goo.gl/1CVVk2pM2JitHDBb8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-flex items-center transition-colors duration-200"
                >
                  Open in Google Maps
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaGlobe className="text-blue-700 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Website</h3>
                <p className="text-gray-600"><a href="https://departmental-site.vercel.app/">Compsci.ng</a></p>
                <p className="text-gray-500 text-sm mt-1">Computer Science Programme</p>
              </div>
            </motion.div>
          </div>

          <div className="pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                aria-label="Twitter" 
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-700 transition-colors duration-300"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                aria-label="Facebook" 
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-700 transition-colors duration-300"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                aria-label="YouTube" 
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-700 transition-colors duration-300"
              >
                <FaYoutube />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                aria-label="LinkedIn" 
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex-1"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-xl p-8 space-y-6 shadow-lg border border-blue-100">
            <h2 className="text-blue-800 text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <div className="space-y-5">
              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-200 h-12 rounded-lg px-4"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-200 h-12 rounded-lg px-4"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-200 h-12 rounded-lg px-4"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="8"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-200 min-h-[200px] rounded-lg px-4 py-3"
                ></textarea>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  <p className="font-medium">Failed to send message. Please try again later.</p>
                </motion.div>
              )}

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className={`btn w-full h-12 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-none shadow-md transform hover:scale-[1.01] transition-all duration-300 rounded-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Map */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="container mx-auto px-6 lg:px-12 py-12"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-blue-800 text-2xl font-bold mb-6 text-center"
        >
          Our Location
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-xl border-2 border-blue-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3219683363127!2d7.488507813899611!3d9.034365706903792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bc63852ee45%3A0x58cbb49f779d5029!2sNational%20Mathematical%20Centre!5e0!3m2!1sen!2sng!4v1748255016590!5m2!1sen!2sng"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="National Mathematical Centre Location"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;