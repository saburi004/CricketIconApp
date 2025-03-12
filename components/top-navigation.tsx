import Image from "next/image"
import Link from "next/link"
import { QrCode } from "lucide-react"

export default function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#020B2D] via-[#0C1B4D] to-[#1E2761] shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="block relative transform hover:scale-105 transition-transform duration-300">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q0qar7UobWAFhei8PWBOHdPC8isnRd.png"
            alt="Cricket Icons"
            width={110}
            height={40}
            className="h-10 w-auto relative"
          />
        </Link>

        {/* QR Scanner Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700/50 text-white hover:text-amber-400 hover:bg-gray-700/50 transition-all duration-300 relative group">
          <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <QrCode size={20} className="relative" />
        </button>
      </div>
    </header>
  )
}

