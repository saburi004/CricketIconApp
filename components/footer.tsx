import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <>
      {/* Download App Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#020B2D] via-[#0C1B4D] to-[#1E2761]">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500/10 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blue-500/10 blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-lg"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-1 w-24 mb-6 mx-auto lg:mx-0"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Capture the <span className="text-amber-500">excitement</span> of cricket
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
                Download the Cricket Icons app today
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto lg:mx-0">
                Experience the thrill of the game through our exclusive collectibles. Connect with fellow fans, track
                your collection, and never miss a moment of cricket action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#"
                  className="transform hover:-translate-y-1 transition-transform duration-300 inline-block"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ysfe9coGmOcaZgW8hrK1qe1zyeP2iR.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-[54px] w-auto"
                  />
                </Link>
                <Link
                  href="#"
                  className="transform hover:-translate-y-1 transition-transform duration-300 inline-block"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-03SH6HfAoWg4bFoYQmVXdQkgmIP7Mm.png"
                    alt="Download on the App Store"
                    width={180}
                    height={54}
                    className="h-[54px] w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[350px] md:h-[450px] w-full max-w-[500px] mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-amber-500/30 z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-500/20 z-0"></div>

                {/* Main image with frame effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.3)] border-4 border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bVYaoojAymeCaOZ7oBwlerudEs4q1P.png"
                    alt="Cricket Icons App Experience"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg transform rotate-3 animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-amber-500/80"></div>
                </div>
                <div className="absolute -left-4 bottom-1/3 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg transform -rotate-3 animate-pulse delay-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0b1120] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q0qar7UobWAFhei8PWBOHdPC8isnRd.png"
                alt="Cricket Icons Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-sm text-gray-400 text-center md:text-left">
                Cricket Icons brings you officially licensed IPL merchandise and collectibles. Build your dream team
                with our high-quality figurines!
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={16} />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={16} />
                  <span>support@cricketicons.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={16} />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-400 hover:text-amber-400 transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-amber-400 transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button className="px-4 py-2 bg-amber-500 text-gray-900 rounded-md text-sm font-medium hover:bg-amber-400 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Image src="/placeholder.svg" alt="Make in India" width={48} height={48} className="rounded-full" />
              <span className="text-sm text-gray-400">Proudly Made in India</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Cricket Icons. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

