"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/islam-3782623_1280.jpg"
            alt="About TravelOfTrust"
            fill
            className="object-cover brightness-75"
            priority
          />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">About TravelOfTrust</h1>
              <p className="text-lg mb-6">Your Trusted Partner for Umrah Journey</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/islam-6752293_1280.jpg"
                alt="About TravelOfTrust"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
              TravelOfTrust started in 2023 with a simple goal: to make the Umrah journey easy, comfortable, and meaningful for every pilgrim. We know how important this trip is, and we want to help you focus on your spiritual experience without worrying about the details.
              </p>
              <p className="text-gray-600 mb-6">
              Since then, we’ve been working hard to offer personalized support and care to everyone who travels with us. Our team is dedicated to handling every part of your Umrah with respect and attention, so you can feel confident and at peace throughout your journey.
              We believe every pilgrim deserves a smooth and memorable experience, and we’re honored to be part of your sacred journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary transition duration-300 inline-flex items-center justify-center"
                >
                  Our Services <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            At TravelOfTrust, our values are at the heart of everything we do. We are committed to providing exceptional service with honesty, integrity, and deep respect for every pilgrim. Your trust means everything to us, and we strive to make your journey as smooth and meaningful as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Excellence",
                description:
                  "We are dedicated to excellence in every step of your journey from the very first consultation to the moment you complete your pilgrimage. Our goal is to exceed your expectations and make your experience truly unforgettable.",
              },
              {
                title: "Integrity",
                description:
                  "We provide our services with honesty and transparency, making sure you always know what to expect. Trust and fairness are the foundation of everything we do.",
              },
              {
                title: "Respect",
                description:
                  "We understand how special the Umrah journey is, and we treat every pilgrim with kindness and care, no matter where they come from.",
              },
              {
                title: "Compassion",
                description:
                  "We approach our work with compassion, understanding the spiritual significance of the journey for our clients.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek innovative ways to enhance the pilgrimage experience while maintaining respect for tradition.",
              },
              {
                title: "Reliability",
                description:
                  "We make sure everything is planned carefully so your trip goes without any problems. You can trust us to be there for you from start to finish.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            We’re a team of caring and committed people who work hard behind the scenes to make your Umrah journey smooth, special, and spiritually meaningful. You’re always welcome to talk to us and discuss your travel plans in detail — we’re here to help every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Visa Expert",
                position: "Founder & CEO",
                image:"/images/teampicture/boy-phone-conversation-pic-blazer-7722030_1280.jpg"
              },
              {
                name: "Hotel Manager",
                position: "Operations Manager",
                image:"/images/teampicture/entrepreneur-2326419_1280.jpg"
              },
              {
                name: "Tickting Expert",
                position: "Religious Guide",
                image:"/images/teampicture/man-6554120_1280.jpg"
              },
              {
                name: "Transportation Expert",
                position: "Customer Relations",
                image:"/images/teampicture/portrait-8095464_1280.jpg"
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="h-64 relative">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  {/* <p className="text-gray-600">{member.position}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Spiritual Journey?</h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today to learn more about our Umrah packages and how we can help make your pilgrimage a truly
                memorable experience.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
