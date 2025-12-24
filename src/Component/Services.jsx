// SERVICES PAGE – GOVERNMENT TENDER / ULTRA-LUXURY EXECUTIVE
// Structured • Compliance-ready • Minimal • High-trust

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  FaBell,
  FaShieldAlt,
  FaTools,
  FaFireExtinguisher,
  FaSearch,
  FaBroadcastTower
} from 'react-icons/fa'

const services = [
  {
    title: 'Fire Alarm & Detection Systems',
    icon: FaBell,
    desc: 'Design, installation, and commissioning of certified fire alarm systems as per statutory norms.',
    scope: [
      'Site inspection & risk evaluation',
      'System design & layout approval',
      'Installation & testing',
      'Documentation & handover'
    ]
  },
  {
    title: 'Fire Protection Equipment Supply',
    icon: FaShieldAlt,
    desc: 'Supply of certified personal protective equipment and fire fighting accessories.',
    scope: [
      'Requirement analysis',
      'Approved product selection',
      'Bulk & institutional supply',
      'Warranty & support'
    ]
  },
  {
    title: 'Annual Maintenance Contracts (AMC)',
    icon: FaTools,
    desc: 'Preventive and corrective maintenance services ensuring system readiness.',
    scope: [
      'Scheduled inspections',
      'Preventive servicing',
      'Compliance reporting',
      'Renewal & upgrades'
    ]
  },
  {
    title: 'Evacuation Planning & Training',
    icon: FaFireExtinguisher,
    desc: 'Emergency preparedness planning and personnel training programs.',
    scope: [
      'Risk assessment',
      'Evacuation route mapping',
      'Staff training & drills',
      'Mock emergency execution'
    ]
  },
  {
    title: 'Fire Safety Audits & Compliance',
    icon: FaSearch,
    desc: 'Comprehensive fire audits aligned with NBC, IS, and state regulations.',
    scope: [
      'On-site compliance audit',
      'Hazard identification',
      'Corrective recommendations',
      'Statutory reporting'
    ]
  },
  {
    title: 'Smart Fire Monitoring Systems',
    icon: FaBroadcastTower,
    desc: 'IoT-enabled fire detection and monitoring solutions for critical facilities.',
    scope: [
      'System requirement study',
      'Sensor & controller deployment',
      'Software integration',
      'Real-time monitoring'
    ]
  }
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Fire Safety Services | Government & Industrial Solutions – ASE Protact</title>
        <meta
          name="description"
          content="ASE Protact provides government-approved fire safety services including alarm systems, audits, AMC, and compliance solutions."
        />
      </Helmet>

      {/* HEADER */}
      <section className="bg-white border-b border-gray-300 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            GOVERNMENT & ENTERPRISE SERVICES
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            Fire Safety Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprehensive fire protection services designed for statutory
            compliance, operational reliability, and long-term safety.
          </p>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map(({ title, icon: Icon, desc, scope }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 p-10 grid md:grid-cols-3 gap-8"
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <Icon className="text-gray-800" size={28} />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              {/* Description */}
              <p className="md:col-span-1 text-gray-600 leading-relaxed">
                {desc}
              </p>

              {/* Scope */}
              <ul className="md:col-span-1 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {scope.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Engage a Government-Approved Fire Safety Partner
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          From project execution to audit support, ASE Protact delivers
          end-to-end fire safety services.
        </p>
        <Link
          to="/contact"
          className="inline-block px-12 py-3 border border-white tracking-wide hover:bg-white hover:text-black transition"
        >
          Request Official Consultation
        </Link>
      </section>
    </>
  )
}
