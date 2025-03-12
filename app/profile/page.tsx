"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
  CreditCard,
  Heart,
  ShoppingBag,
  Edit,
  Calendar,
  MapPin,
  Mail,
  Phone,
  HelpCircle,
  Award,
} from "lucide-react"

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Profile Header */}
      <div className="relative">
        <div
          className="h-40 w-full"
          style={{
            background: "linear-gradient(135deg, #020B2D 0%, #0C1B4D 50%, #1E2761 100%)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
          </div>
        </div>

        <div className="relative px-6 -mt-16 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-white p-1.5 shadow-xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#020B2D] to-[#1E2761] flex items-center justify-center text-white text-3xl font-bold relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-400/20 opacity-50"></div>
              <span className="relative">MR</span>
            </div>
            <button className="absolute bottom-1 right-1 bg-amber-500 p-1.5 rounded-full hover:bg-amber-600 transition-colors shadow-md">
              <Edit className="h-3.5 w-3.5 text-white" />
            </button>
          </div>

          <div className="mt-3 text-center">
            <h2 className="text-xl font-bold text-gray-800">Md Rimel</h2>
            <p className="text-sm text-gray-500">rimel111@gmail.com</p>
            <div className="mt-2 flex items-center justify-center gap-1.5">
              <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Silver Member
              </div>
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Award className="h-3 w-3" />
                750 Points
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 px-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 shadow-sm text-center border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-1">
              <ShoppingBag className="h-4 w-4 text-amber-600" />
            </div>
            <p className="text-lg font-bold text-gray-800">12</p>
            <p className="text-xs text-gray-500">Orders</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-1">
              <Heart className="h-4 w-4 text-red-600" />
            </div>
            <p className="text-lg font-bold text-gray-800">5</p>
            <p className="text-xs text-gray-500">Wishlist</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm text-center border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-1">
              <Trophy className="h-4 w-4 text-blue-600" />
            </div>
            <p className="text-lg font-bold text-gray-800">8</p>
            <p className="text-xs text-gray-500">Icons</p>
          </div>
        </div>
      </div>

      {/* Progress to Next Tier */}
      <div className="mt-5 px-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress to Gold</span>
            <span className="text-sm font-bold text-amber-600">750/1000</span>
          </div>
          <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Earn 250 more points to reach Gold tier</p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="mt-5 px-4 space-y-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-1">Account</h3>

        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <button className="w-full flex items-center justify-between p-4" onClick={() => toggleSection("personal")}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800">Personal Information</span>
            </div>
            <ChevronRight
              className={`h-5 w-5 text-gray-400 transition-transform ${activeSection === "personal" ? "rotate-90" : ""}`}
            />
          </button>

          <AnimatePresence>
            {activeSection === "personal" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-gray-100"
              >
                <div className="px-4 py-3 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm">rimel111@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="text-sm">Kingston, 5235, United States</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Date of Birth</p>
                      <p className="text-sm">May 15, 1990</p>
                    </div>
                  </div>
                  <button className="w-full mt-2 py-2 bg-gray-50 rounded-lg text-sm text-blue-600 font-medium">
                    Edit Information
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Orders & Purchases */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <button className="w-full flex items-center justify-between p-4" onClick={() => toggleSection("orders")}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
              </div>
              <span className="font-medium text-gray-800">Orders & Purchases</span>
            </div>
            <ChevronRight
              className={`h-5 w-5 text-gray-400 transition-transform ${activeSection === "orders" ? "rotate-90" : ""}`}
            />
          </button>

          <AnimatePresence>
            {activeSection === "orders" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-gray-100"
              >
                <div className="divide-y divide-gray-100">
                  <Link href="#" className="flex items-center justify-between py-3 px-4 hover:bg-gray-50">
                    <span className="text-sm">Order History</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between py-3 px-4 hover:bg-gray-50">
                    <span className="text-sm">Track Orders</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between py-3 px-4 hover:bg-gray-50">
                    <span className="text-sm">Returns & Refunds</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-1 mt-5">Preferences</h3>

        {/* Wishlist */}
        <Link
          href="#"
          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
              <Heart className="h-5 w-5 text-red-600" />
            </div>
            <span className="font-medium text-gray-800">My Wishlist</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">5 items</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>

        {/* My Icons */}
        <Link
          href="/my-icons"
          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
              <Trophy className="h-5 w-5 text-blue-600" />
            </div>
            <span className="font-medium text-gray-800">My Icons Collection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">8 icons</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>

        {/* Payment Methods */}
        <Link
          href="#"
          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-purple-600" />
            </div>
            <span className="font-medium text-gray-800">Payment Methods</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-1 mt-5">Support</h3>

        {/* Help & Support */}
        <Link
          href="#"
          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-teal-600" />
            </div>
            <span className="font-medium text-gray-800">Help & Support</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Settings */}
        <Link
          href="#"
          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Settings className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium text-gray-800">Settings</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Logout Button */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 p-4 bg-white rounded-xl text-red-500 font-medium border border-gray-100 shadow-sm">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Version Info */}
      <div className="mt-6 px-4 pb-6 text-center">
        <p className="text-xs text-gray-400">Cricket Icons v1.2.3</p>
      </div>
    </div>
  )
}

// Add the missing Trophy icon component
function Trophy(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

