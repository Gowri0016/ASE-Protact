// GOVERNMENT TENDER + ULTRA-LUXURY EXECUTIVE FOOTER
// Clean • Trust-focused • Audit-ready • Minimal motion

import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300">
      {/* Top Assurance Strip */}
      <div className="bg-gray-100 text-xs tracking-wide text-center py-3">
        GOVERNMENT & ENTERPRISE FIRE SAFETY SOLUTIONS • COMPLIANCE • RELIABILITY
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">ASE Protact</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              ASE Protact is a professional fire safety solutions provider
              delivering statutory-compliant systems, audits, and AMC services
              for government, industrial, and institutional clients.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-sm font-semibold tracking-wide mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-black">Home</a></li>
              <li><a href="/services" className="hover:text-black">Services</a></li>
              <li><a href="/about" className="hover:text-black">About Us</a></li>
              <li><a href="/contact" className="hover:text-black">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-sm font-semibold tracking-wide mb-4">
              CONTACT
            </h4>
            <p className="text-sm text-gray-600 mb-2">📞 +91 93845 93993</p>
            <p className="text-sm text-gray-600 mb-2">📞 +91 99440 17723</p>
            <p className="text-sm text-gray-600 mb-2">📧 aseprotact@gmail.com</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              SMP Tower, 2nd Street, SAP Theater Back Side,<br />
              Avinashi Road, Tiruppur – 641603, Tamil Nadu, India
            </p>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="text-sm font-semibold tracking-wide mb-4">
              COMPLIANCE
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>ISO 9001:2015</li>
              <li>IS 2189</li>
              <li>IS 3844</li>
              <li>NBC 2016</li>
              <li>Fire & Rescue Approved</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">

          {/* Social */}
          <div className="flex gap-4 mb-4 md:mb-0">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2 border border-gray-400 text-gray-700 hover:text-black"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-600 text-center md:text-right">
            © {new Date().getFullYear()} ASE Protact. All rights reserved.
            <div className="mt-1">
              Built by <span className="font-semibold">Poeage Tech Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
