"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import StarRating from "./star-rating"

interface ReviewFormProps {
  productId: string
  onSubmit: (review: {
    rating: number
    title: string
    content: string
  }) => void
  className?: string
}

export default function ReviewForm({ productId, onSubmit, className }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      setError("Please select a rating")
      return
    }

    if (!title.trim()) {
      setError("Please enter a headline for your review")
      return
    }

    if (!content.trim()) {
      setError("Please enter your review")
      return
    }

    onSubmit({
      rating,
      title,
      content,
    })

    // Reset form
    setRating(0)
    setTitle("")
    setContent("")
    setError(null)
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-semibold mb-4">Write a customer review</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Overall rating</label>
          <StarRating rating={rating} interactive size="lg" onRatingChange={setRating} />
        </div>

        <div>
          <label htmlFor="review-title" className="block mb-1 font-medium">
            Add a headline
          </label>
          <input
            id="review-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's most important to know?"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="review-content" className="block mb-1 font-medium">
            Write your review
          </label>
          <textarea
            id="review-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What did you like or dislike? What did you use this product for?"
            className="w-full p-2 border border-gray-300 rounded-md h-32"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">
          Submit
        </Button>
      </form>
    </div>
  )
}

