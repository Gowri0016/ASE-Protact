// CLEAN • CORPORATE • LUXURY REFINEMENT
// Focus: trust, clarity, executive-grade presentation

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaHeadset,
  FaFireExtinguisher,
  FaUserShield
} from 'react-icons/fa'

import Exit from '../Asset/Exit.jpeg'
import Hydrant from '../Asset/fire-hydrant-systems-india.webp'
import Pump from '../Asset/Pump.avif'
import Plan from '../Asset/PlanSafety.png'

const slides = [
  {
    img: Exit,
    title: 'Emergency Lighting Systems',
    desc: 'Ensuring visibility and safe evacuation during critical power failures.'
  },
  {
    img: Hydrant,
    title: 'Fire Suppression Infrastructure',
    desc: 'Integrated sprinkler and hydrant systems for immediate fire control.'
  },
  {
    img: Pump,
    title: 'Fire Safety Audits',
    desc: 'Professional risk assessment and statutory compliance assurance.'
  },
  {
    img: Plan,
    title: 'Strategic Safety Planning',
    desc: 'Custom evacuation layouts and hazard-mitigation strategies.'
  }
]

export default function Detail() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { img, title, desc } = slides[current]

  return (
    <>
      <Helmet>
        <title>Fire Safety Systems & Solutions | ASE Protact</title>
        <meta
          name="description"
          content="Corporate-grade fire safety systems, audits, and protection solutions by ASE Protact."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={img}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm tracking-widest text-gray-300 mb-4">
              PROFESSIONAL FIRE PROTECTION
            </p>
            <h1 className="text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-200 mb-8">{desc}</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          ASE Protact delivers enterprise-grade fire safety systems engineered for
          compliance, reliability, and long-term operational safety.
        </p>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[{ icon: FaShieldAlt, label: 'Certified Safety' },
            { icon: FaTools, label: 'Technical Expertise' },
            { icon: FaHeadset, label: 'Dedicated Support' },
            { icon: FaCheckCircle, label: 'Proven Performance' }
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-8 border border-gray-200"
            >
              <Icon className="mx-auto mb-4 text-gray-800" size={28} />
              <h3 className="font-medium tracking-wide">{label}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Commercial Buildings', icon: FaUserShield },
            { label: 'Industrial Facilities', icon: FaTools },
            { label: 'Residential Developments', icon: FaCheckCircle },
            { label: 'Warehousing & Logistics', icon: FaFireExtinguisher }
          ].map(({ label, icon: Icon }, i) => (
            <div
              key={i}
              className="px-6 py-4 border border-gray-300 text-sm tracking-wide"
            >
              <Icon className="inline mr-2 text-gray-700" /> {label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Partner With a Trusted Fire Safety Provider
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Engage with ASE Protact for compliant, reliable, and future-ready fire
          protection systems.
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-3 border border-white hover:bg-white hover:text-black transition"
        >
          Schedule Consultation
        </Link>
      </section>
    </>
  )
}
