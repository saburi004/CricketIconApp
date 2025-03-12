"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, Heart, User, Search } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import Image from "next/image"
import { ChevronDown, UserCircle, LogOut, Settings, ShoppingBag } from "lucide-react"

// Mock teams data since we don't have the actual API
const mockTeams = [
  { _id: "mumbai-indians", name: "Mumbai Indians" },
  { _id: "kolkata-knight-riders", name: "Kolkata Knight Riders" },
  { _id: "gujarat-titans", name: "Gujarat Titans" },
  { _id: "rajasthan-royals", name: "Rajasthan Royals" },
]

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [teams, setTeams] = useState(mockTeams)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null) // Mock user state
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Access cart state
  const { state } = useCart()

  // Access wishlist state
  const wishlist = useWishlist()

  const { state: cartState } = useCart()
  const { state: wishlistState } = useWishlist()

  const cartItemCount = cartState.items.reduce((total, item) => total + item.quantity, 0)
  const wishlistItemCount = wishlistState.items.length

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Mock authentication for demo purposes
  const handleLogin = () => {
    setUser({
      email: "user@example.com",
      displayName: "Cricket Fan",
      photoURL: null,
    })
  }

  // Handle logout function
  const handleLogout = async () => {
    setUser(null)
    setIsProfileDropdownOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-2 shadow-xl" : "py-4"
      } ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}
      style={{
        background: "linear-gradient(to right, #020B2D, #0C1B4D, #1E2761)",
        boxShadow: scrolled ? "0 10px 25px -5px rgba(2, 11, 45, 0.5)" : "none",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-32 h-32 rounded-full bg-amber-500/5 blur-xl transform -translate-y-1/2"></div>
        <div className="absolute top-0 right-[20%] w-24 h-24 rounded-full bg-blue-500/5 blur-xl"></div>
        <div className="absolute bottom-0 right-[40%] w-16 h-16 rounded-full bg-purple-500/5 blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Section with Logo */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="block relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-yellow-400/0 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q0qar7UobWAFhei8PWBOHdPC8isnRd.png"
                alt="Cricket Icons"
                width={110}
                height={40}
                className="h-10 w-auto relative"
              />
            </Link>

            {/* Shop Now Button - Hidden on mobile */}
            <div className="relative z-20 hidden md:block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full py-2 px-5 font-semibold flex items-center
                transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/30 active:translate-y-0 active:shadow-none
                transition-all duration-300 text-gray-900"
              >
                <span className="relative flex items-center">
                  {selectedTeam || "SHOP NOW"}
                  <ShoppingCart
                    size={18}
                    className="ms-2 transform group-hover:rotate-12 transition-transform duration-300"
                  />
                  <ChevronDown
                    size={18}
                    className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </span>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute mt-3 w-60 rounded-xl shadow-2xl py-1 overflow-hidden transform transition-all duration-300 ease-out origin-top-right"
                  style={{
                    animation: "slideDown 0.3s ease-out forwards",
                    background: "linear-gradient(to bottom, #0C1B4D, #020B2D)",
                    boxShadow: "0 25px 50px -12px rgba(2, 11, 45, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                  }}
                >
                  <div className="px-4 py-3 border-b border-gray-700/50">
                    <h3 className="font-medium text-amber-400">Select Team</h3>
                  </div>
                  {loading ? (
                    <div className="px-4 py-5 text-gray-300 flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 text-amber-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    teams.map((team, index) => (
                      <Link
                        key={team._id}
                        href={`/shop/${team._id}`}
                        className="block px-4 py-3 text-gray-200 hover:bg-gray-700/30 transition-all duration-200 border-l-2 border-transparent hover:border-amber-500 hover:pl-5"
                        style={{
                          animation: `fadeSlideIn 0.3s ease-out forwards`,
                          animationDelay: `${index * 0.05}s`,
                          opacity: 0,
                          transform: "translateY(10px)",
                        }}
                        onClick={() => {
                          setSelectedTeam(team.name)
                          setIsDropdownOpen(false)
                        }}
                      >
                        {team.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-5">
            {/* Download App Section - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                href="#"
                className="transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 flex items-center relative"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ysfe9coGmOcaZgW8hrK1qe1zyeP2iR.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain relative"
                />
              </Link>
              <Link
                href="#"
                className="transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 flex items-center relative"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-03SH6HfAoWg4bFoYQmVXdQkgmIP7Mm.png"
                  alt="Download on the App Store"
                  width={100}
                  height={36}
                  className="h-8 w-auto object-contain relative"
                />
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="relative hidden md:block group">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-colors duration-300"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="w-full p-2 pl-10 pr-4 text-sm text-white border border-gray-700 rounded-full bg-gray-800/50 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Cart Icon - Hidden on mobile */}
            <div className="relative hidden md:block">
              <Link
                href="/cart"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700/50 text-white hover:text-amber-400 hover:bg-gray-700/50 transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ShoppingCart size={18} className="relative" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Wishlist Icon - Hidden on mobile */}
            <div className="relative hidden md:block">
              <Link
                href="/profile?tab=wishlist"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700/50 text-white hover:text-pink-400 hover:bg-gray-700/50 transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Heart size={18} className="relative" />
                {wishlist.state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.state.items.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Profile Icon - Hidden on mobile */}
            <div className="relative hidden md:block">
              {user ? (
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700/50 text-white hover:text-amber-400 hover:bg-gray-700/50 transition-all duration-300 relative group"
                >
                  <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <UserCircle size={20} className="relative" />
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="py-2 px-5 bg-transparent border border-amber-500 hover:bg-amber-500 hover:text-gray-900 text-amber-400 rounded-full transition-all duration-300 text-sm font-medium relative group"
                >
                  <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Sign In</span>
                </button>
              )}

              {isProfileDropdownOpen && user && (
                <div
                  className="absolute right-0 mt-3 w-72 rounded-xl shadow-2xl z-50 overflow-hidden transform transition-all duration-300 ease-out origin-top-right"
                  style={{
                    animation: "slideDown 0.3s ease-out forwards",
                    boxShadow: "0 25px 50px -12px rgba(2, 11, 45, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                  }}
                >
                  {/* Gradient background with decorative elements */}
                  <div className="relative bg-gradient-to-br from-[#020B2D] via-[#0C1B4D] to-[#1E2761] p-5">
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-500/10 blur-xl"></div>
                    <div className="absolute bottom-8 left-4 w-8 h-8 rounded-full bg-blue-500/10 blur-lg"></div>

                    {/* User info */}
                    <div className="relative z-10 flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                        {user.displayName ? user.displayName[0] : user.email[0].toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{user.displayName || "Cricket Fan"}</h3>
                        <p className="text-xs text-gray-300">{user.email}</p>
                      </div>
                    </div>

                    {/* Yellow accent line */}
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-1 w-16 mb-4"></div>

                    {/* Welcome message */}
                    <p className="text-white text-sm mb-1">Welcome to Cricket Icons</p>
                    <p className="text-gray-300 text-xs mb-4">Manage your account and preferences</p>
                  </div>

                  {/* Menu items with enhanced styling */}
                  <div className="bg-gray-900 py-2">
                    <Link
                      href="/profile"
                      className="flex px-5 py-3 text-gray-100 hover:bg-gray-800 items-center transition-all duration-200 group"
                      style={{
                        animation: "fadeSlideIn 0.3s ease-out forwards",
                        animationDelay: "0.05s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors duration-200">
                        <User size={16} className="text-amber-400" />
                      </div>
                      <span className="group-hover:text-amber-400 transition-colors duration-200">My Profile</span>
                    </Link>

                    <Link
                      href="/orders"
                      className="flex px-5 py-3 text-gray-100 hover:bg-gray-800 items-center transition-all duration-200 group"
                      style={{
                        animation: "fadeSlideIn 0.3s ease-out forwards",
                        animationDelay: "0.1s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors duration-200">
                        <ShoppingBag size={16} className="text-amber-400" />
                      </div>
                      <span className="group-hover:text-amber-400 transition-colors duration-200">My Orders</span>
                    </Link>

                    <Link
                      href="/settings"
                      className="flex px-5 py-3 text-gray-100 hover:bg-gray-800 items-center transition-all duration-200 group"
                      style={{
                        animation: "fadeSlideIn 0.3s ease-out forwards",
                        animationDelay: "0.15s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-amber-500/20 transition-colors duration-200">
                        <Settings size={16} className="text-amber-400" />
                      </div>
                      <span className="group-hover:text-amber-400 transition-colors duration-200">Settings</span>
                    </Link>

                    <div className="border-t border-gray-800 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="flex w-full px-5 py-3 text-gray-100 hover:bg-gray-800 items-center transition-all duration-200 group"
                      style={{
                        animation: "fadeSlideIn 0.3s ease-out forwards",
                        animationDelay: "0.2s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-red-500/20 transition-colors duration-200">
                        <LogOut size={16} className="text-red-400" />
                      </div>
                      <span className="group-hover:text-red-400 transition-colors duration-200">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700/50 text-white hover:text-amber-400 hover:bg-gray-700/50 transition-all duration-300 md:hidden relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMobileMenuOpen ? <X size={20} className="relative" /> : <Menu size={20} className="relative" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 z-40 max-h-[80vh] overflow-y-auto shadow-2xl border-t border-gray-700/50"
            style={{
              animation: "slideMobileMenu 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              background: "linear-gradient(to bottom, #0C1B4D, #020B2D)",
              boxShadow: "0 25px 50px -12px rgba(2, 11, 45, 0.8)",
            }}
          >
            <div className="container mx-auto px-4 py-5 space-y-5 overflow-y-auto">
              {/* Shop Now Section */}
              <div
                className="border-b border-gray-700/50 pb-5"
                style={{ animation: "fadeSlideIn 0.4s ease-out forwards", animationDelay: "0.1s", opacity: 0 }}
              >
                <h3 className="text-amber-400 font-semibold mb-3 text-xs uppercase tracking-wider">Shop</h3>
                <div className="flex flex-wrap gap-2">
                  {teams.map((team, index) => (
                    <Link
                      key={team._id}
                      href={`/shop/${team._id}`}
                      className="block py-2 px-4 text-white hover:text-gray-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-400 transition-all duration-200 text-sm bg-gray-800/50 backdrop-blur-sm rounded-full transform hover:scale-105 active:scale-95 border border-gray-700/50"
                      style={{
                        animation: "fadeSlideIn 0.4s ease-out forwards",
                        animationDelay: `${0.15 + index * 0.05}s`,
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {team.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Search Bar */}
              <div
                className="border-b border-gray-700/50 pb-5"
                style={{ animation: "fadeSlideIn 0.4s ease-out forwards", animationDelay: "0.2s", opacity: 0 }}
              >
                <h3 className="text-amber-400 font-semibold mb-3 text-xs uppercase tracking-wider">Search</h3>
                <div className="relative group">
                  <input
                    type="text"
                    className="block w-full p-3 pl-10 text-sm text-white border border-gray-700 rounded-lg bg-gray-800/50 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Search for products..."
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Cart Link */}
              <div
                className="border-b border-gray-700/50 pb-5"
                style={{ animation: "fadeSlideIn 0.4s ease-out forwards", animationDelay: "0.3s", opacity: 0 }}
              >
                <Link
                  href="/cart"
                  className="flex items-center justify-between py-3 px-4 text-white hover:text-amber-400 transition-all duration-200 rounded-lg hover:bg-gray-800/50 backdrop-blur-sm border border-transparent hover:border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                      <ShoppingCart className="w-4 h-4 text-amber-400" />
                    </div>
                    <span>Shopping Cart</span>
                  </div>
                  {state.items.length > 0 && (
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {state.items.length}
                    </span>
                  )}
                </Link>
              </div>

              <Link
                href="/profile?tab=wishlist"
                className="flex items-center justify-between py-3 px-4 text-white hover:text-pink-400 transition-all duration-200 rounded-lg hover:bg-gray-800/50 backdrop-blur-sm border border-transparent hover:border-gray-700/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                    <Heart className="w-4 h-4 text-pink-400" />
                  </div>
                  <span>Wishlist</span>
                </div>
                {wishlist.state.items.length > 0 && (
                  <span className="bg-gradient-to-r from-pink-500 to-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.state.items.length}
                  </span>
                )}
              </Link>

              {/* User Account */}
              <div
                className="border-b border-gray-700/50 pb-5"
                style={{ animation: "fadeSlideIn 0.4s ease-out forwards", animationDelay: "0.4s", opacity: 0 }}
              >
                <h3 className="text-amber-400 font-semibold mb-3 text-xs uppercase tracking-wider">Account</h3>

                {user ? (
                  <div className="space-y-1 rounded-lg overflow-hidden border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
                    <div className="py-3 px-4 border-b border-gray-700/50 bg-gray-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center text-gray-900 font-bold text-sm">
                          {user.displayName ? user.displayName[0] : user.email[0].toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{user.email}</p>
                          <p className="text-xs text-gray-400">{user.displayName || "Account User"}</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center py-3 px-4 text-white hover:text-amber-400 hover:bg-gray-800/50 transition-all duration-200 text-sm"
                      style={{
                        animation: "fadeSlideIn 0.4s ease-out forwards",
                        animationDelay: "0.45s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-amber-400" />
                      </div>
                      <span>My Profile</span>
                    </Link>
                    <Link
                      href="/orders"
                      className="flex items-center py-3 px-4 text-white hover:text-amber-400 hover:bg-gray-800/50 transition-all duration-200 text-sm"
                      style={{
                        animation: "fadeSlideIn 0.4s ease-out forwards",
                        animationDelay: "0.5s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <ShoppingBag className="w-4 h-4 text-amber-400" />
                      </div>
                      <span>My Orders</span>
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center py-3 px-4 text-white hover:text-amber-400 hover:bg-gray-800/50 transition-all duration-200 text-sm"
                      style={{
                        animation: "fadeSlideIn 0.4s ease-out forwards",
                        animationDelay: "0.55s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <Settings className="w-4 h-4 text-amber-400" />
                      </div>
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center py-3 px-4 text-red-400 hover:text-red-300 hover:bg-gray-800/50 transition-all duration-200 w-full text-left text-sm"
                      style={{
                        animation: "fadeSlideIn 0.4s ease-out forwards",
                        animationDelay: "0.6s",
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <LogOut className="w-4 h-4 text-red-400" />
                      </div>
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-md flex items-center justify-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                      <UserCircle size={16} className="text-gray-900" />
                    </div>
                    Sign In / Register
                  </button>
                )}
              </div>

              {/* Download App */}
              <div style={{ animation: "fadeSlideIn 0.4s ease-out forwards", animationDelay: "0.5s", opacity: 0 }}>
                <h3 className="text-amber-400 font-semibold mb-3 text-xs uppercase tracking-wider">Download Our App</h3>
                <div className="flex gap-3 items-center justify-center bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                  <Link
                    href="#"
                    className="transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-110"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ysfe9coGmOcaZgW8hrK1qe1zyeP2iR.png"
                      alt="Get it on Google Play"
                      width={120}
                      height={36}
                      className="h-9 w-auto"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-110"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-03SH6HfAoWg4bFoYQmVXdQkgmIP7Mm.png"
                      alt="Download on the App Store"
                      width={120}
                      height={36}
                      className="h-9 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

