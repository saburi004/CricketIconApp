"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  QrCode,
  Trophy,
  Star,
  TrendingUp,
  Bell,
  Settings,
  HelpCircle,
  Share2,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Sun,
  Moon,
} from "lucide-react"

export default function HomePage() {
  const [isLightMode, setIsLightMode] = useState(false)

  const toggleTheme = () => {
    setIsLightMode(!isLightMode)
  }

  return (
    <main
      className={`container mx-auto px-4 py-4 pb-24 space-y-6 transition-colors duration-300 ${isLightMode ? "bg-white text-gray-900" : "text-white"}`}
    >
      {/* Theme Toggle */}
      <div className="flex justify-end">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isLightMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-amber-400"}`}
        >
          {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Featured Match */}
      <section
        className={`rounded-xl overflow-hidden shadow-lg ${isLightMode ? "border border-gray-200 bg-white" : "border border-gray-700/30 bg-gradient-to-r from-[#1E2761]/80 to-[#0C1B4D]/80 backdrop-blur-sm"}`}
      >
        <div
          className={`p-4 flex justify-between items-center ${isLightMode ? "border-b border-gray-200 bg-gray-50" : "border-b border-gray-700/30"}`}
        >
          <h2 className={`font-bold flex items-center ${isLightMode ? "text-gray-900" : "text-white"}`}>
            <Star size={18} className={`mr-2 ${isLightMode ? "text-amber-600" : "text-amber-500"}`} />
            Featured Match
          </h2>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${isLightMode ? "text-amber-700 bg-amber-100" : "text-amber-400 bg-amber-500/10"}`}
          >
            LIVE
          </span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mb-2 ${isLightMode ? "bg-gray-100" : "bg-white/10"}`}
              >
                <Image src="/placeholder.svg" alt="MI" width={64} height={64} />
              </div>
              <p className={`font-semibold ${isLightMode ? "text-gray-900" : "text-white"}`}>MI</p>
              <p className={`font-bold text-xl ${isLightMode ? "text-amber-600" : "text-amber-500"}`}>142/4</p>
              <p className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>(15.2 ov)</p>
            </div>

            <div className="text-center px-4">
              <div className={`text-sm mb-2 ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>IPL 2023</div>
              <div
                className={`text-xs px-3 py-1 rounded-full mb-2 ${isLightMode ? "text-gray-700 bg-gray-200" : "text-white bg-gray-800/50"}`}
              >
                vs
              </div>
              <button
                className={`text-xs hover:underline ${isLightMode ? "text-amber-600 hover:text-amber-700" : "text-amber-400 hover:text-amber-300"}`}
              >
                Watch Live
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mb-2 ${isLightMode ? "bg-gray-100" : "bg-white/10"}`}
              >
                <Image src="/placeholder.svg" alt="CSK" width={64} height={64} />
              </div>
              <p className={`font-semibold ${isLightMode ? "text-gray-900" : "text-white"}`}>CSK</p>
              <p className={`text-xl ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>Yet to bat</p>
              <p className="text-xs text-gray-400">&nbsp;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Scores Section */}
      <section
        className={`rounded-xl overflow-hidden shadow-lg ${isLightMode ? "border border-gray-200" : "border border-gray-700/30"}`}
      >
        <div
          className={`px-4 py-3 border-b ${isLightMode ? "bg-gray-50 border-gray-200" : "bg-gradient-to-r from-[#1E2761] to-[#0C1B4D] border-gray-700/30"}`}
        >
          <h2 className={`font-bold flex items-center ${isLightMode ? "text-gray-900" : "text-white"}`}>
            <Trophy size={18} className={`mr-2 ${isLightMode ? "text-amber-600" : "text-amber-500"}`} />
            Recent Scores
          </h2>
        </div>

        <div className={isLightMode ? "bg-white" : "bg-gray-900/70 backdrop-blur-sm"}>
          {/* Match 1 */}
          <div className={`p-4 ${isLightMode ? "border-b border-gray-200" : "border-b border-gray-800/50"}`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${isLightMode ? "bg-gray-100" : "bg-white/10"}`}
                >
                  <Image src="/placeholder.svg" alt="RCB" width={32} height={32} />
                </div>
                <div>
                  <p className={`font-semibold ${isLightMode ? "text-gray-900" : "text-white"}`}>RCB</p>
                  <p className={`font-bold text-sm ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>189/8</p>
                </div>
              </div>

              <div className="text-center px-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${isLightMode ? "text-gray-700 bg-gray-200" : "text-gray-400 bg-gray-800/50"}`}
                >
                  vs
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <p className={`font-semibold text-right ${isLightMode ? "text-gray-900" : "text-white"}`}>KKR</p>
                  <p className={`text-sm text-right font-bold ${isLightMode ? "text-amber-600" : "text-amber-500"}`}>
                    192/5
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${isLightMode ? "bg-gray-100" : "bg-white/10"}`}
                >
                  <Image src="/placeholder.svg" alt="KKR" width={32} height={32} />
                </div>
              </div>
            </div>
            <p className={`text-xs text-right mt-2 ${isLightMode ? "text-amber-600" : "text-amber-400"}`}>
              KKR won by 5 wickets
            </p>
          </div>

          {/* Match 2 */}
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${isLightMode ? "bg-gray-100" : "bg-white/10"}`}
                >
                  <Image src="/placeholder.svg" alt="DC" width={32} height={32} />
                </div>
                <div>
                  <p className={`font-semibold ${isLightMode ? "text-gray-900" : "text-white"}`}>DC</p>
                  <p className={`font-bold text-sm ${isLightMode ? "text-amber-600" : "text-amber-500"}`}>175/6</p>
                </div>
              </div>

              <div className="text-center px-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${isLightMode ? "text-gray-700 bg-gray-200" : "text-gray-400 bg-gray-800/50"}`}
                >
                  vs
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <p className={`font-semibold text-right ${isLightMode ? "text-gray-900" : "text-white"}`}>RR</p>
                  <p className={`text-sm text-right font-bold ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>
                    170/9
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${isLightMode ? "bg-gray-100" : "bg-white/10"}`}
                >
                  <Image src="/placeholder.svg" alt="RR" width={32} height={32} />
                </div>
              </div>
            </div>
            <p className={`text-xs text-right mt-2 ${isLightMode ? "text-amber-600" : "text-amber-400"}`}>
              DC won by 5 runs
            </p>
          </div>
        </div>

        <div className={`px-4 py-2 text-center ${isLightMode ? "bg-gray-50" : "bg-gray-900/40"}`}>
          <Link
            href="/scores"
            className={`text-sm font-medium ${isLightMode ? "text-amber-600 hover:text-amber-700" : "text-amber-400 hover:text-amber-300"}`}
          >
            View All Matches
          </Link>
        </div>
      </section>

      {/* Trending Players */}
      <section
        className={`rounded-xl overflow-hidden shadow-lg ${isLightMode ? "border border-gray-200" : "border border-gray-700/30"}`}
      >
        <div
          className={`px-4 py-3 border-b ${isLightMode ? "bg-gray-50 border-gray-200" : "bg-gradient-to-r from-[#1E2761] to-[#0C1B4D] border-gray-700/30"}`}
        >
          <h2 className={`font-bold flex items-center ${isLightMode ? "text-gray-900" : "text-white"}`}>
            <TrendingUp size={18} className={`mr-2 ${isLightMode ? "text-amber-600" : "text-amber-500"}`} />
            Trending Players
          </h2>
        </div>

        <div className={`p-4 ${isLightMode ? "bg-white" : "bg-gray-900/70 backdrop-blur-sm"}`}>
          <div className="flex overflow-x-auto gap-4 pb-2 -mx-2 px-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-24 flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mb-2 border ${
                    isLightMode
                      ? "bg-gradient-to-br from-amber-100 to-blue-100 border-gray-200"
                      : "bg-gradient-to-br from-amber-500/20 to-blue-500/20 border-gray-700/50"
                  }`}
                >
                  <Image src="/placeholder.svg" alt={`Player ${i}`} width={64} height={64} />
                </div>
                <p className={`text-sm font-medium text-center ${isLightMode ? "text-gray-900" : "text-white"}`}>
                  Player {i}
                </p>
                <p className={`text-xs text-center ${isLightMode ? "text-amber-600" : "text-amber-400"}`}>
                  +{30 - i * 5}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted QR Scanner Section */}
      <section
        className={`rounded-xl overflow-hidden shadow-lg relative ${
          isLightMode
            ? "border border-gray-200 bg-gradient-to-br from-gray-50 to-white"
            : "border border-gray-700/30 bg-gradient-to-br from-[#1E2761] to-[#0C1B4D]"
        }`}
      >
        {/* Decorative elements */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-full ${isLightMode ? "bg-amber-100/50" : "bg-amber-500/10"} blur-xl`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-24 h-24 rounded-full ${isLightMode ? "bg-blue-100/50" : "bg-blue-500/10"} blur-xl`}
        ></div>

        <div className="relative p-6 flex flex-col items-center text-center z-10">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
              isLightMode ? "bg-amber-100" : "bg-amber-500/20"
            }`}
          >
            <QrCode size={40} className={isLightMode ? "text-amber-600" : "text-amber-400"} />
          </div>

          <h2 className={`text-xl font-bold mb-2 ${isLightMode ? "text-gray-900" : "text-white"}`}>Scan QR Codes</h2>
          <p className={`mb-4 max-w-md ${isLightMode ? "text-gray-600" : "text-gray-300"}`}>
            Scan QR codes to collect digital cricket icons, unlock exclusive content, and add to your collection.
          </p>

          <button
            className={`py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center ${
              isLightMode
                ? "bg-gradient-to-r from-amber-500 to-amber-400 text-white hover:from-amber-600 hover:to-amber-500"
                : "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:from-amber-400 hover:to-yellow-300"
            }`}
          >
            <QrCode size={18} className="mr-2" />
            Open Scanner
          </button>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="space-y-4">
        {/* Notifications */}
        <Link href="/notifications" className="block">
          <div
            className={`rounded-xl p-4 flex items-center justify-between ${
              isLightMode
                ? "bg-white border border-gray-200 shadow-sm"
                : "bg-gray-900/70 backdrop-blur-sm border border-gray-700/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isLightMode ? "bg-amber-100" : "bg-gray-800/50"
                }`}
              >
                <Bell className={`w-5 h-5 ${isLightMode ? "text-amber-600" : "text-amber-400"}`} />
              </div>
              <span className={isLightMode ? "text-gray-900 font-medium" : "text-white font-medium"}>
                Notifications
              </span>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                isLightMode ? "bg-amber-500 text-white" : "bg-amber-500 text-gray-900"
              }`}
            >
              3
            </div>
          </div>
        </Link>

        {/* Settings */}
        <Link href="/settings" className="block">
          <div
            className={`rounded-xl p-4 flex items-center justify-between ${
              isLightMode
                ? "bg-white border border-gray-200 shadow-sm"
                : "bg-gray-900/70 backdrop-blur-sm border border-gray-700/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isLightMode ? "bg-amber-100" : "bg-gray-800/50"
                }`}
              >
                <Settings className={`w-5 h-5 ${isLightMode ? "text-amber-600" : "text-amber-400"}`} />
              </div>
              <span className={isLightMode ? "text-gray-900 font-medium" : "text-white font-medium"}>Settings</span>
            </div>
          </div>
        </Link>

        {/* Help & Info */}
        <Link href="/help" className="block">
          <div
            className={`rounded-xl p-4 flex items-center justify-between ${
              isLightMode
                ? "bg-white border border-gray-200 shadow-sm"
                : "bg-gray-900/70 backdrop-blur-sm border border-gray-700/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isLightMode ? "bg-amber-100" : "bg-gray-800/50"
                }`}
              >
                <HelpCircle className={`w-5 h-5 ${isLightMode ? "text-amber-600" : "text-amber-400"}`} />
              </div>
              <span className={isLightMode ? "text-gray-900 font-medium" : "text-white font-medium"}>Help & Info</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Social Links Section */}
      <section
        className={`rounded-xl overflow-hidden shadow-lg ${isLightMode ? "border border-gray-200" : "border border-gray-700/30"}`}
      >
        <div
          className={`px-4 py-3 border-b ${isLightMode ? "bg-gray-50 border-gray-200" : "bg-gradient-to-r from-[#1E2761] to-[#0C1B4D] border-gray-700/30"}`}
        >
          <h2 className={`font-bold ${isLightMode ? "text-gray-900" : "text-white"}`}>FOLLOW US</h2>
        </div>

        <div className={`p-6 ${isLightMode ? "bg-white" : "bg-gray-900/70 backdrop-blur-sm"}`}>
          <div className="grid grid-cols-3 gap-4">
            <a href="#" className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isLightMode ? "bg-gray-100" : "bg-gray-800/50"}`}
              >
                <Twitter className={`w-6 h-6 ${isLightMode ? "text-gray-700" : "text-white"}`} />
              </div>
              <span className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>Twitter</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isLightMode ? "bg-gray-100" : "bg-gray-800/50"}`}
              >
                <Instagram className={`w-6 h-6 ${isLightMode ? "text-gray-700" : "text-white"}`} />
              </div>
              <span className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isLightMode ? "bg-gray-100" : "bg-gray-800/50"}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 fill-current ${isLightMode ? "text-gray-700" : "text-white"}`}
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <span className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>TikTok</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isLightMode ? "bg-gray-100" : "bg-gray-800/50"}`}
              >
                <Facebook className={`w-6 h-6 ${isLightMode ? "text-gray-700" : "text-white"}`} />
              </div>
              <span className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>Facebook</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isLightMode ? "bg-gray-100" : "bg-gray-800/50"}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 fill-current ${isLightMode ? "text-gray-700" : "text-white"}`}
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.241 17.53c-.568.25-1.186.38-1.823.38a4.38 4.38 0 0 1-3.108-1.286A4.38 4.38 0 0 1 9.024 13.5c0-.666.124-1.305.37-1.904a4.38 4.38 0 0 1 1.02-1.56 4.38 4.38 0 0 1 1.56-1.02 4.38 4.38 0 0 1 1.904-.37c.666 0 1.305.124 1.904.37a4.38 4.38 0 0 1 1.56 1.02 4.38 4.38 0 0 1 1.02 1.56c.246.599.37 1.238.37 1.904 0 .666-.124 1.305-.37 1.904a4.38 4.38 0 0 1-1.02 1.56 4.38 4.38 0 0 1-1.56 1.02 4.38 4.38 0 0 1-1.904.37z" />
                </svg>
              </div>
              <span className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>Threads</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${isLightMode ? "bg-gray-100" : "bg-gray-800/50"}`}
              >
                <Youtube className={`w-6 h-6 ${isLightMode ? "text-gray-700" : "text-white"}`} />
              </div>
              <span className={`text-xs ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tell a Friend Section */}
      <button
        className={`w-full rounded-xl p-4 flex items-center justify-between ${
          isLightMode
            ? "bg-white border border-gray-200 shadow-sm"
            : "bg-gray-900/70 backdrop-blur-sm border border-gray-700/30"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isLightMode ? "bg-amber-100" : "bg-gray-800/50"
            }`}
          >
            <Share2 className={`w-5 h-5 ${isLightMode ? "text-amber-600" : "text-amber-400"}`} />
          </div>
          <span className={isLightMode ? "text-gray-900 font-medium" : "text-white font-medium"}>Tell a Friend</span>
        </div>
      </button>

      {/* App Info Section */}
      <section className={`mt-8 text-center space-y-2 text-sm ${isLightMode ? "text-gray-500" : "text-gray-400"}`}>
        <p>LiveScore and the LS logo are trademarks of LiveScore Limited</p>
        <p>Copyright © 2025 LiveScore Limited. All Rights Reserved.</p>
        <p className="text-xs">Version 8.4.1</p>
      </section>
    </main>
  )
}

