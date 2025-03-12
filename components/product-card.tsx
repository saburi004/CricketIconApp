"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { useWishlist } from "@/lib/wishlist-context"
import WishlistNotification from "@/components/wishlist-notification"
import StarRating from "@/components/ratings/star-rating"

interface ProductCardProps {
  name: string
  description: string
  image: string
  team: string
  price: number
  size: string
  role: string
  id: string
  rating?: number
  reviewCount?: number
}

const getTeamInitials = (team: string) => {
  const initials: { [key: string]: string } = {
    "Mumbai Indians": "MI",
    "Kolkata Knight Riders": "KKR",
    "Gujarat Titans": "GT",
    "Rajasthan Royals": "RR",
  }
  return (
    initials[team] ||
    team
      .split(" ")
      .map((word) => word[0])
      .join("")
  )
}

export default function ProductCard({
  id,
  name,
  description,
  image,
  team,
  price,
  size,
  role,
  rating = 4.2,
  reviewCount = 45,
}: ProductCardProps) {
  const router = useRouter()
  const { state, dispatch } = useWishlist()
  const [showNotification, setShowNotification] = useState(false)

  const TEAM_GRADIENTS = {
    "Mumbai Indians": {
      from: "#033E6A",
      to: "#067AD0",
    },
    "Kolkata Knight Riders": {
      from: "#3B225F",
      to: "#552987",
    },
    "Gujarat Titans": {
      from: "#1B2B47",
      to: "#B87D3B",
    },
    "Rajasthan Royals": {
      from: "#8E1F71",
      to: "#CC2DA8",
    },
  }

  const gradient = TEAM_GRADIENTS[team as keyof typeof TEAM_GRADIENTS] || TEAM_GRADIENTS["Mumbai Indians"]

  const handleBuyNow = () => {
    router.push(`/shop/${team.toLowerCase().replace(/\s+/g, "-")}/product/${id}`)
  }

  const isInWishlist = state.items.some((item) => item.id === id && item.size === size)

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (!isInWishlist) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id,
          name,
          price,
          size,
          image,
          teamName: team,
        },
      })
      setShowNotification(true)
    } else {
      dispatch({
        type: "REMOVE_ITEM",
        payload: id,
      })
    }
  }

  return (
    <>
      <Card className="relative overflow-hidden bg-white border border-black/20 shadow-[2px_2px_4px_rgba(0,0,0,0.25)] rounded-[20px] flex flex-col h-full group">
        {/* Wishlist Heart Icon */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md transition-all duration-300 hover:bg-white hover:scale-110"
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? "text-pink-500 fill-pink-500" : "text-gray-500"}`} />
        </button>

        {/* Team Ribbon */}
        <div className="absolute left-[-5px] top-0 h-full">
          <div
            className="absolute left-4 h-[165px] w-14"
            style={{
              background: `linear-gradient(to bottom, ${gradient.from}, ${gradient.to})`,
            }}
          />
          <div
            className="absolute left-4 top-[164px] w-14 h-8"
            style={{
              background: gradient.to,
              clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 0)",
              width: "56px",
            }}
          />
          <span
            className="absolute left-[2.7rem] top-14 origin-left -rotate-90 text-2xl font-semibold text-white font-inter whitespace-nowrap"
            style={{ transform: "rotate(-90deg) translateX(-50%)" }}
          >
            {getTeamInitials(team)}
          </span>
        </div>

        <CardContent className="p-6 flex flex-col h-full">
          <div className="relative aspect-square mb-4 h-40 ml-8">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>

          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-semibold font-inter text-black mb-2">{name}</h3>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-2">
                <StarRating rating={rating} size="sm" />
                <span className="text-xs text-gray-600">({reviewCount})</span>
              </div>

              <p className="text-sm font-normal font-inter text-black mb-2">{description}</p>
              <p className="text-sm font-medium font-inter text-black">Size: {size}</p>
              <p className="text-sm font-medium font-inter text-black">Role: {role}</p>
              <p className="text-lg font-bold font-inter text-black mt-2">₹{price}</p>
            </div>
            <div className="flex justify-center pt-4 mt-auto">
              <Button
                className="text-white text-xs font-semibold px-4 py-1.5 h-auto rounded"
                style={{
                  backgroundColor: gradient.from,
                  "&:hover": {
                    backgroundColor: `${gradient.from}90`,
                  },
                }}
                onClick={handleBuyNow}
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <WishlistNotification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        productName={name}
      />
    </>
  )
}

