import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaHeadset, FaTools, FaShieldAlt, FaFireExtinguisher, FaUserShield } from 'react-icons/fa';

import Helmet from '../Asset/pop-zebra-wp81DxKUd1E-unsplash.jpg';
import Gogles from '../Asset/mier-chen-Bebn0qrGEfM-unsplash.jpg';
import Glows from '../Asset/claudio-schwarz-L8iPDE99z9c-unsplash.jpg';
import Exester from '../Asset/istockphoto-1215003852-612x612.webp';
import Cloth from '../Asset/markus-spiske-4p0lT6_bRVU-unsplash.jpg';

const bannerSlides = [
  {
    img: Helmet,
    title: 'Protective Helmet',
    desc: 'Top-tier head protection for hazardous environments.',
  },
  {
    img: Gogles,
    title: 'Safety Goggles',
    desc: 'Guard your vision from flames and fumes.',
  },
  {
    img: Glows,
    title: 'Fire-Resistant Gloves',
    desc: 'Grip and protect with high-heat resistant gloves.',
  },
  {
    img: Exester,
    title: 'Fire Extinguisher',
    desc: 'Essential for emergency response and safety.',
  },
  {
    img: Cloth,
    title: 'Safety Gear Suit',
    desc: 'Full-body suit designed to withstand extreme heat.',
  },
];

export default function Detail() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { img, title, desc } = bannerSlides[current];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Banner Section */}
      <div className="relative h-[70vh] w-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 z-20"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute z-30 text-center text-white w-full top-1/3 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold tracking-widest drop-shadow-lg">
              <motion.span
                className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1.1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
              >
                ASE Protact
              </motion.span>
            </h1>
            <h2 className="text-3xl mt-4 font-semibold">{title}</h2>
            <p className="text-lg mt-2 max-w-2xl mx-auto">{desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* What We Do */}
      <div className="bg-white text-center py-14 px-6">
        <h2 className="text-3xl font-bold mb-4">What We Do Best</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
          At ASE Protact, we deliver complete fire safety solutions—from wearable safety gear to industrial-grade suppression systems. We combine smart design, innovation, and reliability to protect lives and assets.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-600 hover:to-red-700 transition-all duration-300"
        >
          Learn More
        </motion.button>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose ASE Protact?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaShieldAlt size={30} className="text-red-600" />,
              title: 'Trusted Protection',
              text: 'Certified to meet global safety standards.',
            },
            {
              icon: <FaTools size={30} className="text-orange-500" />,
              title: 'Advanced Tech',
              text: 'State-of-the-art fire safety innovation.',
            },
            {
              icon: <FaHeadset size={30} className="text-red-500" />,
              title: '24/7 Support',
              text: 'We’re here around the clock for assistance.',
            },
            {
              icon: <FaCheckCircle size={30} className="text-green-600" />,
              title: 'Proven Results',
              text: 'Thousands of businesses trust our products.',
            },
          ].map(({ icon, title, text }, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Expertise */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 py-16 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Expertise
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
          From high-rise buildings to industrial plants, we have implemented tailored fire protection solutions across a range of industries.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Commercial Complexes', icon: FaUserShield },
            { label: 'Industrial Facilities', icon: FaTools },
            { label: 'Residential Units', icon: FaCheckCircle },
            { label: 'Warehouses', icon: FaFireExtinguisher },
          ].map(({ label, icon: Icon }, i) => (
            <motion.div
              key={i}
              className="bg-white px-6 py-4 rounded-lg shadow hover:shadow-lg flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
            >
              <Icon className="text-red-600" size={24} />
              <span className="text-gray-800 font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-tr from-black via-red-800 to-orange-700 text-white py-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Elevate Your Fire Safety?
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Partner with ASE Protact to get top-grade equipment, expert advice, and unmatched support to protect what matters.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-10 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-yellow-100 transition"
        >
          Get a Free Consultation
        </motion.button>
      </div>
    </div>
  );
}
