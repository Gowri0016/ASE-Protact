import React from 'react';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-red-100 min-h-screen py-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-white/60 border border-red-200 shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-4xl"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="flex justify-center mb-3"
          >
            <div className="bg-red-100 rounded-full p-3 shadow-inner">
              <FaFire size={32} className="text-red-600 animate-bounce" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 tracking-wide mb-2">
            Let’s Connect
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Need help with fire safety or services? We're ready to assist you!
          </p>
        </div>

        {/* Contact Form */}
        <form className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <label className="block mb-1 text-gray-800 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <label className="block mb-1 text-gray-800 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <label className="block mb-1 text-gray-800 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
            ></textarea>
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 text-center"
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-red-700 transition-transform duration-300 hover:scale-105"
            >
              🔥 Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
