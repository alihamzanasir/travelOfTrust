"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaCheck } from "react-icons/fa"

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/islam-3782623_1280.jpg" alt="Our Services" fill className="object-cover brightness-75" priority />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">Our Services</h1>
              <p className="text-lg mb-6">Comprehensive solutions for a seamless Umrah journey</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Umrah Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At TravelKaro, we offer a wide range of services to ensure your Umrah journey is comfortable, meaningful,
              and spiritually fulfilling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Umrah Packages",
                description:
                  "Comprehensive packages tailored to different needs and budgets, including accommodation, transportation, and guided tours.",
                  image:"/images/umrah-packages-pakistan-edited.webp"
                  
              },
              {
                title: "Visa Processing",
                description:
                  "Hassle-free visa processing services to ensure a smooth entry into Saudi Arabia for your pilgrimage.",
                   image:"/images/service/passport-3127927_1280.jpg"
              },
              {
                title: "Accommodation",
                description:
                  "Comfortable and convenient accommodation options near the holy sites in Mecca and Medina.",
                   image:"/images/service/hotelroom-7772422_1280.jpg"
              },
              {
                title: "Transportation",
                description:
                  "Reliable transportation services between airports, hotels, and holy sites throughout your journey.",
                   image:"/images/service/bus-2678668_1280.jpg"
              },
              {
                title: "Spiritual Guidance",
                description: "Expert religious scholars to provide guidance and support throughout your Umrah rituals.",
                 image:"/images/service/quran-4951037_1280.jpg"
              },
              {
                title: "Group Tours",
                description: "Organized group tours with like-minded pilgrims, led by experienced guides.",
                 image:"/images/service/studying-5831644_1280.jpg"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 relative">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/contact"
                    className="text-purple-700 inline-flex items-center text-sm hover:text-purple-900 transition duration-300"
                  >
                    Learn More <FaArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/islam-6752293_1280.jpg"
                alt="Premium Umrah Services"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium Umrah Services</h2>
              <p className="text-gray-600 mb-6">
                Our premium Umrah services are designed for pilgrims seeking an elevated experience with personalized
                attention and exclusive amenities.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" size={16} />
                  <div>
                    <h4 className="font-bold text-gray-800">5-Star Accommodations</h4>
                    <p className="text-gray-600">Luxury hotels with views of the Haram in both Mecca and Medina.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" size={16} />
                  <div>
                    <h4 className="font-bold text-gray-800">VIP Transportation</h4>
                    <p className="text-gray-600">
                      Private vehicles with experienced drivers for all your transportation needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" size={16} />
                  <div>
                    <h4 className="font-bold text-gray-800">Personal Guide</h4>
                    <p className="text-gray-600">
                      Dedicated religious scholar to provide personalized guidance throughout your journey.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3" size={16} />
                  <div>
                    <h4 className="font-bold text-gray-800">Exclusive Access</h4>
                    <p className="text-gray-600">Special access to historical sites and educational programs.</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-purple-700 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800 transition duration-300 inline-flex items-center"
              >
                Inquire Now <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Service Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a streamlined process to ensure your Umrah journey is well-planned and executed.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description:
                    "We begin with a detailed consultation to understand your needs, preferences, and budget.",
                },
                {
                  step: "2",
                  title: "Customization",
                  description: "Based on your requirements, we customize a package that best suits your needs.",
                },
                {
                  step: "3",
                  title: "Documentation",
                  description: "We handle all necessary documentation, including visa processing and travel permits.",
                },
                {
                  step: "4",
                  title: "Journey",
                  description:
                    "We provide support throughout your journey, ensuring a smooth and fulfilling experience.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:flex justify-center mt-8">
              <div className="w-3/4 h-1 bg-purple-200 relative">
                <div className="absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-700 rounded-full"></div>
                <div className="absolute left-2/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-700 rounded-full"></div>
                <div className="absolute left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Beyond our core Umrah services, we offer a range of additional services to enhance your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Ziyarat Tours",
                description:
                  "Guided tours to historical and religious sites in Mecca and Medina to deepen your understanding of Islamic history.",
              },
              {
                title: "Language Support",
                description:
                  "Multilingual guides and support staff to assist pilgrims from different countries and language backgrounds.",
              },
              {
                title: "Special Assistance",
                description:
                  "Special assistance for elderly pilgrims, families with children, and those with specific medical needs.",
              },
              {
                title: "Travel Insurance",
                description: "Comprehensive travel insurance options to provide peace of mind throughout your journey.",
              },
              {
                title: "Extended Stays",
                description:
                  "Options to extend your stay in Saudi Arabia or add destinations like Dubai or Istanbul to your itinerary.",
              },
              {
                title: "Photography Services",
                description:
                  "Professional photography services to capture the memorable moments of your spiritual journey.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-purple-700 inline-flex items-center text-sm hover:text-purple-900 transition duration-300"
                >
                  Learn More <FaArrowRight className="ml-1" size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Plan Your Umrah Journey?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and let us help you plan a spiritually fulfilling Umrah
                journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-purple-700 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-800 transition duration-300 inline-flex items-center justify-center"
                >
                  Contact Us <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/packages"
                  className="border border-purple-700 text-purple-700 px-8 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center justify-center"
                >
                  View Packages
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
