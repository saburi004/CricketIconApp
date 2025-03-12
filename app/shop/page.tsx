import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
      <div className="max-w-md mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-4">Official Cricket Shop</h1>

        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-white"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <p className="text-gray-300 mb-6">
            You are being redirected to the official cricket merchandise store where you can purchase authentic team
            jerseys, equipment, and collectibles.
          </p>
        </div>

        <Link href="https://shop.cricketwebsite.com" target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
            Visit Official Shop
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>

        <p className="mt-4 text-xs text-gray-400">
          You will be redirected to an external website. Cricket Icons is not responsible for the content of external
          sites.
        </p>
      </div>
    </div>
  )
}

