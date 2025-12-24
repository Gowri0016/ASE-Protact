// CONTACT PAGE – GOVERNMENT TENDER / ULTRA-LUXURY EXECUTIVE
// Clean • Formal • Compliance-ready • Minimal animation

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = ({ user_name, user_email, user_phone, message }) => {
    const errs = {}
    if (!user_name || user_name.length < 2) errs.user_name = 'Valid name required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) errs.user_email = 'Valid email required'
    if (!/^[6-9]\d{9}$/.test(user_phone)) errs.user_phone = 'Valid Indian phone number required'
    if (!message || message.length < 5) errs.message = 'Message too short'
    return errs
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('')

    const form = formRef.current
    if (!form) return

    const data = {
      user_name: form.user_name.value.trim(),
      user_email: form.user_email.value.trim(),
      user_phone: form.user_phone.value.trim(),
      message: form.message.value.trim()
    }

    const validation = validateForm(data)
    if (Object.keys(validation).length) {
      setErrors(validation)
      return
    }

    setErrors({})
    setStatus('Sending...')

    emailjs
      .sendForm('service_5lxmqcn', 'template_vixtzz7', form, 'W6HYSAjaPwBPPrWp2')
      .then(() => {
        setStatus('Message sent successfully')
        form.reset()
      })
      .catch(() => setStatus('Submission failed, please retry'))
  }

  const error = (field) => errors[field] && <p className="text-xs text-red-600 mt-1">{errors[field]}</p>

  return (
    <>
      <Helmet>
        <title>Contact ASE Protact | Government & Enterprise Fire Safety</title>
        <meta
          name="description"
          content="Contact ASE Protact for compliant fire safety solutions, audits, and official consultation."
        />
      </Helmet>

      {/* HEADER */}
      <section className="bg-white border-b border-gray-300 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            OFFICIAL COMMUNICATION
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            For project inquiries, audits, and statutory consultations, please
            submit the form below.
          </p>
        </motion.div>
      </section>

      {/* FORM */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white border border-gray-300 p-12 grid md:grid-cols-2 gap-8"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input name="user_name" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black" />
            {error('user_name')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input name="user_email" type="email" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black" />
            {error('user_email')}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input name="user_phone" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black" />
            {error('user_phone')}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea name="message" rows="5" className="w-full border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:border-black"></textarea>
            {error('message')}
          </div>

          <div className="md:col-span-2 text-center pt-6">
            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="px-10 py-3 border border-black hover:bg-black hover:text-white transition"
            >
              {status || 'Submit Official Request'}
            </button>
          </div>
        </motion.form>
      </section>
    </>
  )
}
