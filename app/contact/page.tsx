"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/islam-3782623_1280.jpg" alt="Contact Us" fill className="object-cover brightness-75" priority />
        </div>
        <div className="absolute">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">Contact Us</h1>
              <p className="text-lg mb-6">We're here to answer any questions you may have</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our Umrah packages or services? Our team is here to help. Fill out the form, and
                we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-700 text-white p-3 rounded-full mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">Street No. 3, Shadab colony Hamza Town, Bahawalpur, Punjab Pakistan.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-700 text-white p-3 rounded-full mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">traveloftrust25@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-700 text-white p-3 rounded-full mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">+92 315 682 00 80</p>
                    <p className="text-gray-600">+1 (234) 567-8901</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-700 text-white p-3 rounded-full mr-4">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+92 315 682 00 80</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="umrah">Umrah Packages</option>
                      <option value="custom">Custom Package</option>
                      <option value="visa">Visa Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-purple-700 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800 transition duration-300 flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to discuss your Umrah journey in person. We're conveniently located in Bahawalpur.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto h-[400px] relative rounded-lg overflow-hidden shadow-lg">
          <iframe
  title="Shadab Colony Hamza Town Map"
  src="https://www.google.com/maps?q=Street+No+3,+Shadab+Colony,+Hamza+Town,+Bahawalpur,+Pakistan&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </section>

      {/* <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
    
    </div> */}

      {/* Office Hours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h2>
                  <p className="text-gray-600 mb-6">Our team is available to assist you during the following hours:</p>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-gray-600">
                    For urgent inquiries outside of business hours, please email us at traveloftrust25@gmail.com, and we'll
                    respond as soon as possible.
                  </p>
                </motion.div>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image src="/images/secretary-338561_1280.jpg" alt="Our Office" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
