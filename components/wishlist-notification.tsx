"use client"

import { useEffect, useState } from "react"
import { Heart, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface WishlistNotificationProps {
  isVisible: boolean
  onClose: () => void
  productName: string
}

export default function WishlistNotification({ isVisible, onClose, productName }: WishlistNotificationProps) {
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsShowing(true)
      const timer = setTimeout(() => {
        setIsShowing(false)
        setTimeout(onClose, 300) // Wait for animation to complete
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible && !isShowing) return null

  return (
    <div
      className={cn(
        "fixed top-20 right-4 z-50 w-80 bg-white shadow-lg rounded-lg border border-gray-200 transition-all duration-300 transform",
        isShowing ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500 fill-pink-500" />
            <h3 className="font-semibold text-gray-900">Added to Wishlist</h3>
          </div>
          <button
            onClick={() => {
              setIsShowing(false)
              setTimeout(onClose, 300)
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-gray-600 mb-3">
          <span className="font-medium">{productName}</span> has been added to your wishlist.
        </p>

        <div className="flex justify-between">
          <Link href="/profile?tab=wishlist" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View Wishlist
          </Link>
          <button
            onClick={() => {
              setIsShowing(false)
              setTimeout(onClose, 300)
            }}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

