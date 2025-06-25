"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCheck, FaStar } from "react-icons/fa";

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const packages = [
    {
      id: 1,
      title: "15 Days Umrah Package",
      category: "umrah",
      duration: "15 Days",
      price: 259000,
      rating: 5,
      image: "/images/islam-3782623_1280.jpg",
      features: [
        "Visa Process",
        "Return Air Ticket",
        "Transportation",
        "Accommodation",
        "Ziyarat in Mecca and Medina",
      ],
    },
    {
      id: 2,
      title: "21 Days Umrah Package",
      category: "umrah",
      duration: "21 Days",
      price: 289000,
      rating: 5,
      image: "/images/islam-6752293_1280.jpg",
      features: [
        "Visa Process",
        "Return Air Ticket",
        "Transportation",
        "Accommodation",
        "Ziyarat in Mecca and Medina",
      ],
    },
    {
      id: 3,
      title: "28 Days Umrah Package",
      category: "umrah",
      duration: "28 Days",
      price: 319000,
      rating: 5,
      image: "/images/mekkah-2358306_1280.jpg",
      features: [
        "Visa Process",
        "Return Air Ticket",
        "Transportation",
        "Accommodation",
        "Ziyarat in Mecca and Medina",
      ],
    },
    // {
    //   id: 4,
    //   title: "Ramadan Special Package",
    //   category: "ramadan",
    //   duration: "15 Days",
    //   price: "$2,799",
    //   rating: 4.9,
    //   image:"/images/pkg/islam-3782623_1280.jpg",
    //   features: [
    //     "4-Star Hotel Accommodation",
    //     "Transportation between Mecca and Medina",
    //     "Visa Processing",
    //     "Airport Transfers",
    //     "Daily Iftar and Suhoor",
    //     "Special Ramadan Programs",
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "Family Umrah Package",
    //   category: "family",
    //   duration: "12 Days",
    //   price: "$1,999 per person",
    //   rating: 4.7,
    //   image:"/images/pkg/first-photo-edited.avif",
    //   features: [
    //     "Family Rooms in 4-Star Hotels",
    //     "Transportation between Mecca and Medina",
    //     "Visa Processing",
    //     "Airport Transfers",
    //     "Daily Breakfast",
    //     "Child-friendly Activities",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Dubai Extension Package",
    //   category: "extension",
    //   duration: "5 Days (Add-on)",
    //   price: "$899",
    //   rating: 4.6,
    //   image:"/images/pkg/buildings-7414472_1280.jpg",
    //   features: ["4-Star Hotel in Dubai", "City Tour", "Desert Safari", "Burj Khalifa Visit", "Airport Transfers"],
    // },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/islam-3782623_1280.jpg"
            alt="Umrah Packages"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
                Our Umrah Packages
              </h1>
              <p className="text-lg mb-6">
                Carefully designed packages for a meaningful pilgrimage
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Our Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We offer a variety of packages to suit different needs and
              preferences. Browse our selection to find the perfect package for
              your spiritual journey.
            </p>

            {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: "all", label: "All Packages" },
                { id: "umrah", label: "Umrah Packages" },
                { id: "ramadan", label: "Ramadan Packages" },
                { id: "family", label: "Family Packages" },
                { id: "extension", label: "Extension Packages" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    selectedCategory === category.id
                      ? "bg-purple-700 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded-md text-sm font-medium">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(pkg.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">
                      {pkg.rating}/5
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {pkg.title}
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <FaCheck className="text-green-500 mr-2" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-primary">
                      PKR.{" "}
                      <span className="text-xl font-semibold">
                        {pkg.price.toLocaleString()}
                      </span>{" "}
                      /Per Person
                    </div>
                    <Link
                      href={`/contact`}
                      className="bg-primary text-white text-nowrap px-4 py-2 rounded-md text-sm hover:bg-primary transition duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-16 bg-gray-50">
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Need a Custom Package?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We understand that every pilgrim has unique needs and
                    preferences. Our team can create a customized package
                    tailored specifically to your requirements.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-green-500 mr-2" size={14} />
                      Flexible duration
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-green-500 mr-2" size={14} />
                      Choice of accommodation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-green-500 mr-2" size={14} />
                      Additional destinations
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-green-500 mr-2" size={14} />
                      Special group arrangements
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary transition duration-300 inline-flex items-center"
                  >
                    Request Custom Package <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/images/umrah-packages-pakistan-edited.webp"
                  alt="Custom Package"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our Umrah packages and
              services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is included in the standard Umrah package?",
                answer:
                  "Our standard Umrah package includes hotel accommodation, transportation between Mecca and Medina, visa processing, airport transfers, and daily breakfast. Additional services may be included depending on the specific package.",
              },
              {
                question: "How far in advance should I book my Umrah package?",
                answer:
                  "We recommend booking your Umrah package at least 2-3 months in advance to ensure availability, especially during peak seasons like Ramadan and the winter months.",
              },
              {
                question: "Can I customize my Umrah package?",
                answer:
                  "Yes, we offer customized packages to meet your specific needs and preferences. Contact our team to discuss your requirements, and we will create a tailored package for you.",
              },
              {
                question: "Do you provide guidance during the Umrah rituals?",
                answer:
                  "Yes, our packages include religious guides who will provide guidance and support throughout your Umrah journey, ensuring that you perform all rituals correctly.",
              },
              {
                question: "What is the cancellation policy for Umrah packages?",
                answer:
                  "Our cancellation policy varies depending on the package and timing. Generally, cancellations made 30 days or more before departure may be eligible for a partial refund. Please contact our customer service for specific details.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              <h2 className="text-3xl font-bold mb-6">
                Ready to Book Your Umrah Journey?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today to book your package or to learn more about our
                services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center justify-center"
                >
                  Contact Us <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-primary transition duration-300 inline-flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
