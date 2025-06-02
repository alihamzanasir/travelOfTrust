"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { FiClock, FiMenu, FiX } from "react-icons/fi"
import { usePathname } from "next/navigation"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { title: "Home", path: `/` },
    { title: "About Us", path: `/about` },
    { title: "Packages", path: `/packages` },
    { title: "Services", path: `/services` },
    { title: "Contact Us", path: `/contact` },
    { title: "Careers", path: `/careers` },
  ]

  return (
    <header className="bg-primary text-white">
      {/* Top Bar */}
      <div className="border-b border-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between py-2">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center text-sm">
                <FaPhone className="mr-2" size={14} />
                <span>+92 322 754 87 12</span>
              </div>
              <div className="flex items-center text-sm">
                <HiOutlineMail className="mr-2" size={14} />
                <span>traveloftrust25@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <FiClock className="mr-2" size={14} />
                <span>Mon-Fri: 9AM - 5PM</span>
              </div>
              <div className="flex items-center text-sm">
                <FaWhatsapp className="mr-2" size={14} />
                <span>WhatsApp: +92 322 754 87 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image src="/logo.png" alt="TravelOfTrust" width={180} height={40} className="h-10 w-auto m-auto" />
              <div style={{fontFamily:"Roboto Mono"}} className="text-[10px] font-semibold">Travel Of Trust</div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    style={{ fontWeight: isActive ? "bolder" : "normal" }}
                    className={`font-medium transition duration-300 ${
                      isActive ? "font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Book Now Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="flex gap-4">
            <ThemeSwitcher />
            <Link
              href="/contact"
              className="bg-white text-primary px-4 py-2 rounded-[8px] font-medium hover:bg-purple-50 transition duration-300"
            >
              Book Now
            </Link>
           

            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    style={{fontWeight: isActive ? "bold" : "normal"}}
                    className={`font-medium hover:text-purple-200 transition duration-300 py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              })}
                <ThemeSwitcher />
              <Link
                href="/contact"
                className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition duration-300 inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}


