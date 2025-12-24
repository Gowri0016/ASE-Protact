// ABOUT PAGE – GOVERNMENT TENDER / ULTRA-LUXURY EXECUTIVE
// Clean • Authoritative • Compliance-ready • Minimal

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  FaCheckCircle,
  FaClock,
  FaBoxOpen,
  FaStar
} from 'react-icons/fa'

export default function About() {
  const stats = [
    { label: 'Certified Quality', icon: FaCheckCircle },
    { label: '24/7 Operational Support', icon: FaClock },
    { label: 'Extensive Product Range', icon: FaBoxOpen },
    { label: 'Trusted by Clients', icon: FaStar }
  ]

  return (
    <>
      <Helmet>
        <title>About ASE Protact | Government-Approved Fire Safety Provider</title>
        <meta
          name="description"
          content="ASE Protact is a professional fire safety solutions provider delivering compliant, reliable systems for government, industrial, and institutional clients."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-white border-b border-gray-300 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            GOVERNMENT & ENTERPRISE FIRE SAFETY PARTNER
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            About ASE Protact
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            ASE Protact is a Tiruppur-based fire safety solutions provider
            delivering statutory-compliant equipment, systems, and audits
            across government, industrial, and commercial sectors.
          </p>
        </motion.div>
      </section>

      {/* FOUNDER */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white border border-gray-300 p-10 text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">Leadership</h2>
          <p className="text-lg font-medium text-gray-900">M.K. Selvan</p>
          <p className="text-sm text-gray-500 mb-4">Proprietor</p>
          <p className="text-gray-600 leading-relaxed">
            Under the leadership of Mr. M.K. Selvan, ASE Protact has
            consistently delivered dependable fire protection solutions
            focused on compliance, safety, and long-term service support.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ label, icon: Icon }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="border border-gray-300 p-6 text-center"
            >
              <Icon className="mx-auto mb-3 text-gray-700" size={26} />
              <p className="text-sm tracking-wide text-gray-800">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Core Principles</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We operate with a clear focus on statutory adherence,
            engineering accuracy, ethical service delivery, and
            long-term client partnerships.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Engage a Compliant Fire Safety Partner
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Connect with ASE Protact for government-ready fire safety systems
          and professional consultation.
        </p>
        <Link
          to="/contact"
          className="inline-block px-12 py-3 border border-white tracking-wide hover:bg-white hover:text-black transition"
        >
          Request Consultation
        </Link>
      </section>
    </>
  )
}
