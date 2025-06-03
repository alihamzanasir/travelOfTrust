import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
             <Image src="/logo.png" alt="TravelOfTrust" width={180} height={40} className="h-10 w-auto m-auto" />
                          <div style={{fontFamily:"Roboto Mono"}} className="text-[10px] font-semibold">Travel Of Trust</div>
            </Link>
            <p className="text-purple-100 mb-4">
              At TravelofTrust, we’re your reliable partner in making Umrah journeys smooth, meaningful, and spiritually fulfilling.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/16cNwrqBC5/" className="text-white hover:text-purple-200 transition duration-300">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-purple-200 transition duration-300">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-purple-200 transition duration-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-purple-200 transition duration-300">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-purple-100 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-purple-100 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-100 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-purple-100 hover:text-white transition duration-300">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-100 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-purple-100 hover:text-white transition duration-300">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-100 hover:text-white transition duration-300">
                  Visa Processing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-100 hover:text-white transition duration-300">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-100 hover:text-white transition duration-300">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-100 hover:text-white transition duration-300">
                  Guided Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="text-purple-100">Street No. 3, Hamza Town, Bahawalpur, Punjab Pakistan.</li>
              <li className="text-purple-100">Phone: +92 322 75 48 712</li>
              <li className="text-purple-100">Email: traveloftrust25@gmail.com</li>
              <li className="text-purple-100">WhatsApp: +92 322 75 48 712</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary mt-8 pt-8 text-center text-purple-100">
          <p>&copy; {new Date().getFullYear()} TravelOfTrust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
