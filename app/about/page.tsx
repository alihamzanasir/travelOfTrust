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
            alt="About TravelKaro"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">About TravelKaro</h1>
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
                alt="About TravelKaro"
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
                Founded in 2010, TravelKaro has been dedicated to providing exceptional Umrah travel services to
                pilgrims from around the world. Our journey began with a simple mission: to make the sacred pilgrimage
                accessible, comfortable, and spiritually enriching for all Muslims.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have grown to become a trusted name in Umrah travel services, known for our attention
                to detail, personalized care, and deep understanding of the spiritual significance of the journey. Our
                team of experienced professionals works tirelessly to ensure that every aspect of your pilgrimage is
                handled with the utmost care and respect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-purple-700 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800 transition duration-300 inline-flex items-center justify-center"
                >
                  Our Services <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-purple-700 text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center justify-center"
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
              At TravelKaro, our values guide everything we do. We are committed to providing exceptional service while
              upholding the highest standards of integrity and respect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service, from the initial consultation to the completion of your journey.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with the highest level of integrity, ensuring transparency and honesty in all our dealings.",
              },
              {
                title: "Respect",
                description:
                  "We respect the sacred nature of the Umrah pilgrimage and the diverse needs and backgrounds of our clients.",
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
                  "We are committed to being reliable partners, ensuring that all arrangements are made with precision and care.",
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
              Meet the dedicated professionals who work tirelessly to make your Umrah journey memorable and spiritually
              fulfilling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ahmed Khan",
                position: "Founder & CEO",
                image:"/images/teampicture/boy-phone-conversation-pic-blazer-7722030_1280.jpg"
              },
              {
                name: "Fatima Ali",
                position: "Operations Manager",
                image:"/images/teampicture/entrepreneur-2326419_1280.jpg"
              },
              {
                name: "Mohammed Rahman",
                position: "Religious Guide",
                image:"/images/teampicture/man-6554120_1280.jpg"
              },
              {
                name: "Aisha Patel",
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
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700">
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
                className="bg-white text-purple-700 px-8 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center"
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
