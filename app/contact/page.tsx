"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa"
import { useFormik } from "formik"
import * as Yup from "yup"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      destination: "",
      date: "",
      travelers: "",
      days: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      contact: Yup.string().required("Contact number is required"),
      destination: Yup.string().required("Travel from is required"),
      date: Yup.string().required("Travel date is required"),
      travelers: Yup.number().required("Number of travelers is required").typeError("Must be a number"),
      days: Yup.number().required("Number of days is required").typeError("Must be a number"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "atif0081@gmail.com",
            subject: "New Travel Form Submission",
            text: "New travel inquiry received",
            html: `
              <html>
                <body>
                  <h2>New Travel Form Submission</h2>
                  <p><strong>Name:</strong> ${values.name}</p>
                  <p><strong>Contact:</strong> ${values.contact}</p>
                  <p><strong>City:</strong> ${values.destination}</p>
                  <p><strong>Date:</strong> ${values.date}</p>
                  <p><strong>Number of Travelers:</strong> ${values.travelers}</p>
                  <p><strong>Number of Days:</strong> ${values.days}</p>
                </body>
              </html>
            `,
          }),
        })

        if (response.ok) {
          setIsSubmitted(true)
          resetForm()
        } else {
          alert("Failed to submit the form.")
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setSubmitting(false)
      }
    },
  })

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

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our Umrah packages or services? Fill out the form, and we'll get back to you.
              </p>
              <div className="space-y-6">
                <ContactDetail icon={<FaMapMarkerAlt />} title="Our Location" content="Street No. 3, Hamza Town, Bahawalpur, Punjab Pakistan." />
                <ContactDetail icon={<FaEnvelope />} title="Email Us" content="traveloftrust25@gmail.com" />
                <ContactDetail icon={<FaPhone />} title="Call Us" content="+92 315 682 00 80" />
                <ContactDetail icon={<FaWhatsapp />} title="WhatsApp" content="+92 315 682 00 80" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

              {isSubmitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  Thank you! We’ll contact you soon.
                </div>
              )}

              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <InputField id="name" label="Name" placeholder="Enter your name" formik={formik} />
                  <InputField id="contact" label="Contact No" placeholder="03XX-XXXXXXX" formik={formik} />
                </div>

                <div className="mb-4">
                  <label htmlFor="destination" className="block text-gray-700 mb-2">
                    Travel From<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="destination"
                    {...formik.getFieldProps("destination")}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  >
                    <option value="">Select City</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                  </select>
                  {formik.touched.destination && formik.errors.destination && (
                    <p className="text-red-500 text-sm">{formik.errors.destination}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <InputField id="date" label="Travel Date" type="date" formik={formik} />
                  <InputField id="travelers" label="Number of Travelers" placeholder="No. of Travelers" type="number" formik={formik} />
                </div>

                <div className="mb-6">
                  <InputField id="days" label="Number of Days"  placeholder="No. of Days" type="number" formik={formik} />
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
                >
                  Submit
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

// Contact detail block
function ContactDetail({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start">
      <div className="bg-purple-700 text-white p-3 rounded-full mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

// Input field block
function InputField({
  id,
  label,
  placeholder = "",
  type = "text",
  formik,
}: {
  id: string
  label: string
  placeholder?: string
  type?: string
  formik: any
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...formik.getFieldProps(id)}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      {formik.touched[id] && formik.errors[id] && (
        <p className="text-red-500 text-sm">{formik.errors[id]}</p>
      )}
    </div>
  )
}
