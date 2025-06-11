import React, { useState } from 'react';
import { FaShieldAlt, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Contact', 'About'];

  return (
    <motion.header
      className="relative z-50 bg-black/60 backdrop-blur-md text-white px-4 py-3 shadow-2xl"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <div className="bg-red-600 p-2 rounded-full shadow-xl">
            <FaShieldAlt size={24} className="text-white drop-shadow-lg animate-pulse" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-widest drop-shadow-sm">
            <span className="text-white">ASE</span>{' '}
            <span className="text-orange-300">Protact</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-orange-500/90 transition duration-300 font-medium backdrop-blur-md"
            >
              {item}
            </Link>
          ))}
          </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mt-3 flex flex-col gap-3 px-4 py-5 bg-white/10 backdrop-blur-md rounded-xl shadow-inner text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded-md bg-white/10 hover:bg-orange-500/80 transition"
              >
                {item}
              </Link>
            ))}
            <FaBell size={22} className="text-yellow-300 animate-pulse mt-2" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtext */}
      <p className="text-center mt-3 text-sm md:text-base italic text-white/90 tracking-wide">
        Your trusted partner in fire safety — innovate. protect. save lives.
      </p>
    </motion.header>
  );
}
