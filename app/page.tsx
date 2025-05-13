"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCheck, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdOutlineAreaChart } from "react-icons/md";
import { GoGoal } from "react-icons/go";



export default function Home() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [days, setDays] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/islam-3782623_1280.jpg"
            alt="Mecca Skyline"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute ">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
                Your Spiritual Travel <br /> Partner For Umrah
              </h1>
              <p className="text-lg mb-6">Journeying In Faith</p>
              <Link
                href="/packages"
                className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-flex items-center"
              >
                Explore Now <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 -mt-20 relative z-10 max-w-4xl mx-auto"
          >
            <h2 className="text-xl font-bold text-center mb-4 text-purple-700">
              Quick Enquiry Form
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Contact No */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact No<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="03XX-XXXXXXX"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Travel From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travel From
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* No. of Travelers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  No. of Travelers
                </label>
                <input
                  type="number"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  placeholder="No. of Travelers"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* No. of Days */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  No. of Days
                </label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="No. of Days"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </form>

            <div className="mt-4 text-center">
              <button style={{fontWeight:"bold"}} className="bg-purple-700 text-white px-6 py-3  rounded-md font-extra hover:bg-purple-800 transition duration-300">
                Submit Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-white text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
            At TravelOfTrust, we are dedicated to delivering seamless Umrah experiences that are both spiritually fulfilling and truly memorable.
            </h2>
            <p className="text-lg opacity-90">
            Where Faithful Journeys Meet Trusted Travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <GoGoal size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-justify flex-grow">
                At TravelOfTrust, our mission is to provide you with exceptional Umrah travel services that combine spiritual guidance with comfort and care. We are here to support you every step of the way making your sacred journey as smooth, meaningful, and fulfilling as possible. 
                </p>
                <Link
                  href="/about"
                  className="bg-purple-700 text-white px-4 py-2 rounded-md inline-flex items-center text-sm hover:bg-purple-800 transition duration-300 self-start"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MdOutlineAreaChart size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Our Reach</h3>
                </div>
                <p className="text-gray-600 mb-6 text-justify flex-grow">
                At TravelOfTrust, we're more than just a travel service and your trusted partner on a sacred journey. Thanks to our strong and reliable network across Saudi Arabia, we're able to take care of everything you need for your Umrah trip. 
                </p>
                <Link
                  href="/services"
                  className="bg-purple-700 text-white px-4 py-2 rounded-md inline-flex items-center text-sm hover:bg-purple-800 transition duration-300 self-start"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why Umrah With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            With TravelofTrust, experience a hassle-free and spiritually rewarding Umrah journey. We take care of all the details, so you can focus on your worship. With comfortable stays, expert guidance, and heartfelt support, we’re here to make your pilgrimage special.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Spiritual Guidance",
                description:
                  "At TravelofTrust, we provide expert scholars to accompany you throughout your Umrah journey, offering spiritual clarity and support at every step. With their guidance, you can deepen your understanding and connection to your worship.",
                image: "/images/the_spiritual_journey_of_umrah.webp",
              },
              {
                title: "Seamless Experience",
                description:
                  "With TravelofTrust, your whole journey is taken care of—flights, hotels, transport—all handled smoothly so you can focus on your spiritual experience, not the logistics.",
                image: "/images/ca7d065c36040a7c0cf2094e0ee82ce0",
              },
              {
                title: "Personalized Care",
                description:
                  "At TravelofTrust, we offer customizable packages designed around your travel preferences and spiritual goals—because every pilgrim’s journey is unique.",
                image: "/images/first-photo-edited.avif",
              },
              {
                title: "Educational Value",
                description:
                  "TravelofTrust enriches your journey with meaningful insights into the history and significance of each sacred site, making every step more purposeful and inspiring.",
                image: "/images/umrah-mecca_afp_.jpg.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="flex flex-col justify-between h-full">
                <div className="h-48 w-full relative overflow-hidden">
                  
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                  </div>
                  <Link
                    href="/services"
                    style={{paddingTop:"0px"}}
                    className="text-purple-700 p-6 font-medium text-sm hover:text-purple-900 transition duration-200"
                  >
                    Learn More{" "}
                    <FaArrowRight className="inline ml-1" size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Our Special Packages
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Muharram ul Haram 1447
              </span>
              <span className="bg-purple-700 text-white px-3 py-1 rounded-md text-sm">
                is Open
              </span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Our Muharram Ul Haram Umrah packages are thoughtfully designed to offer comfort, convenience, and deep spiritual fulfillment. Let TravelofTrust take care of everything—so you can focus on what truly matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
                {
                  title: "Economy Package",
                  features: [
                    "15 Days",
                    "Accommodation",
                    "Transportation",
                    "Visa Processing",
                    "Return Air Ticket"
                  ],
                  price: "PKR. 219,000/Person",
                  image: "/images/mekkah-2358306_1280.jpg",
                },
              {
                title: "Standard Package",
                features: [
                  "15 Days",
                  "Accommodation",
                  "Transportation",
                  "Visa Processing",
                  "Return Air Ticket"
                ],
                price: "PKR. 259,000/Person",
                image: "/images/islam-3782623_1280.jpg",
              },
              {
                title: "Premium Package",
                features: [
                  "15 Days",
                  "Accommodation",
                  "Transportation",
                  "Visa Processing",
                  "Return Air Ticket"
                ],
                price: "PKR. 279,000/Person",
                image: "/images/islam-6752293_1280.jpg",
              },
            
            ].map((pkg, index) => (
              <motion.div
                key={index}
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
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
                    <span className="text-xl font-bold text-purple-700">
                      {pkg.price}
                    </span>
                    <Link
                    style={{fontWeight:"bold"}}
                      href="/packages"
                      className="bg-purple-700 text-white  px-4 py-2 rounded-md text-sm hover:bg-purple-800 transition duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-purple-700 rounded-lg p-8 max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <Image
                  src="/images/main-image.jpg"
                  alt="Kaaba"
                  width={100}
                  height={100}
                  className="rounded-lg mr-6 object-cover"
                />
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Ramadan Booking</h3>
                  <p className="opacity-90">Special packages for the blessed month</p>
                </div>
              </div>
              <Link
                href="/packages"
                className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* App Promo Section */}
      <section className="py-16 bg-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white max-w-xl"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Coming Soon
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Book Your Umrah
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Our mobile app is coming soon! Book your Umrah journey, track
                your itinerary, and access spiritual guidance all from your
                smartphone.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition duration-300 flex items-center">
                  <span className="mr-2">App Store</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition duration-300 flex items-center">
                  <span className="mr-2">Google Play</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-[300px] h-[600px] bg-black rounded-[40px] overflow-hidden border-4 border-white/20 relative">
                <Image
                  src="/images/screencapture-localhost-3000-2025-05-12-15_47_53.jpg"
                  alt="TravelOfTrust App"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tours with TravelOfTrust
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of international tours that combine
              spiritual journeys with world exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-purple-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Dubai Packages</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-2" size={14} />
                    5-Star Accommodations
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" size={14} />
                    Desert Safari Experience
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2" size={14} />
                    Burj Khalifa Visit
                  </li>
                </ul>
                <span className="inline-block bg-yellow-400 text-purple-900 px-3 py-1 rounded-md font-medium mb-4">
                  Coming Soon
                </span>
              </div>
              <div className="h-64 relative">
                <Image
                  src="/images/buildings-7414472_1280.jpg"
                  alt="Dubai"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  title: "Baku Package",
                  img: "/images/travel-2007903_1280.jpg",
                  features: [
                    "4 Days Trip",
                    "Cultural Tours",
                    "Historical Exploration",
                  ],
                },
                {
                  title: "Maldives Package",
                  img: "/images/maldives-island_1203-7338.jpg",
                  features: [
                    "7 Days Trip",
                    "Luxury Resorts",
                    "Water Activities",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2 h-48 md:h-auto relative">
                      <div className="absolute inset-0">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <ul className="mb-4 space-y-1">
                          {item.features.map((text) => (
                            <li
                              key={text}
                              className="flex items-center text-gray-600 text-sm"
                            >
                              <FaCheck
                                className="text-green-500 mr-2"
                                size={12}
                              />
                              {text}
                            </li>
                          ))}
                        </ul>
                        <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm font-medium">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <h2 className="text-3xl font-bold mb-4">What Our Clients Says</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Hear from our satisfied clients about their experiences with
              TravelOfTrust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Ibrahim",
                rating: 5,
                text: "The spiritual guidance during our Umrah journey was truly exceptional. TravelofTrust made everything smooth and stress-free, with comfortable accommodations and a well-organized experience from start to finish.A satisfied pilgrim",
              },
              {
                name: "Fatima",
                rating: 5,
                text: "TravelofTrust made our family Umrah trip truly memorable. The attention to detail and personalized service exceeded our expectations. We felt supported every step of the way.— Grateful Family of Pilgrims",
              },
              {
                name: "Ali",
                rating: 5,
                text: "From visa processing to accommodations near the holy sites, everything was perfectly arranged. Will definitely book with TravelofTrust again! Returning Pilgrim",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>
                  <button className="text-purple-700 inline-flex items-center text-sm hover:text-purple-900 transition duration-300 self-start">
                    Read More <FaArrowRight className="ml-1" size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
