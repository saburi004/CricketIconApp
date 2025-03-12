"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Newspaper, ShoppingBag, Trophy, User } from "lucide-react"

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#020B2D] via-[#0C1B4D] to-[#1E2761] border-t border-gray-700/30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center py-3 px-2 ${
              pathname === "/" ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
            } transition-colors relative`}
          >
            {pathname === "/" && (
              <div className="absolute -top-3 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-b-lg"></div>
            )}
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>

          {/* News/Videos */}
          <Link
            href="/news"
            className={`flex flex-col items-center py-3 px-2 ${
              pathname.startsWith("/news") ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
            } transition-colors relative`}
          >
            {pathname.startsWith("/news") && (
              <div className="absolute -top-3 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-b-lg"></div>
            )}
            <Newspaper size={24} />
            <span className="text-xs mt-1">News</span>
          </Link>

          {/* Shop (Emphasized) */}
          <Link href="/shop" className="flex flex-col items-center py-2 px-2 -mt-5 relative">
            <div
              className={`absolute -top-3 w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg ${
                pathname.startsWith("/shop") ? "ring-2 ring-white" : ""
              }`}
            >
              <ShoppingBag size={28} className="text-gray-900" />
            </div>
            <span
              className={`text-xs mt-10 ${
                pathname.startsWith("/shop") ? "text-amber-400" : "text-gray-400"
              } font-medium`}
            >
              Shop
            </span>
          </Link>

          {/* Your Icons */}
          <Link
            href="/my-icons"
            className={`flex flex-col items-center py-3 px-2 ${
              pathname.startsWith("/my-icons") ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
            } transition-colors relative`}
          >
            {pathname.startsWith("/my-icons") && (
              <div className="absolute -top-3 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-b-lg"></div>
            )}
            <Trophy size={24} />
            <span className="text-xs mt-1">My Icons</span>
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className={`flex flex-col items-center py-3 px-2 ${
              pathname.startsWith("/profile") ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
            } transition-colors relative`}
          >
            {pathname.startsWith("/profile") && (
              <div className="absolute -top-3 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-b-lg"></div>
            )}
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

