import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Asset/Logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white text-gray-900 border-b border-gray-200"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="ASE Protect Fire Safety Solutions"
            className="w-28"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm tracking-wide font-medium transition relative
                ${isActive ? 'text-black' : 'text-gray-600 hover:text-black'}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gray-900" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Corporate CTA */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition"
          >
            Request Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 text-sm font-medium hover:text-black"
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center py-2 border border-gray-900 text-gray-900 text-sm font-medium"
            >
              Request Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate Tagline */}
      <div className="hidden md:block text-center text-xs tracking-widest text-gray-500 pb-3">
        PROFESSIONAL FIRE SAFETY SOLUTIONS • TRUST • COMPLIANCE • PROTECTION
      </div>
    </motion.header>
  )
}
