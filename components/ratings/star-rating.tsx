"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating?: number
  size?: "sm" | "md" | "lg"
  interactive?: boolean
  onRatingChange?: (rating: number) => void
  className?: string
}

export default function StarRating({
  rating = 0,
  size = "md",
  interactive = false,
  onRatingChange,
  className,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(rating)

  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHoverRating(index)
    }
  }

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0)
    }
  }

  const handleClick = (index: number) => {
    if (interactive) {
      setSelectedRating(index)
      if (onRatingChange) {
        onRatingChange(index)
      }
    }
  }

  const displayRating = hoverRating > 0 ? hoverRating : selectedRating

  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-5 w-5",
    lg: "h-7 w-7",
  }

  const starSize = sizeClasses[size]

  return (
    <div className={cn("flex items-center", className)}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          className={cn(
            starSize,
            "transition-all duration-100",
            index <= displayRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-transparent",
            interactive && "cursor-pointer",
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}

