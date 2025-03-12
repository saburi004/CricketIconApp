"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Search, SlidersHorizontal, X } from "lucide-react"
import StarRating from "./star-rating"
import RatingDistribution from "./rating-distribution"
import ReviewItem, { type ReviewItemProps } from "./review-item"
import ReviewForm from "./review-form"

interface ProductRatingsProps {
  productId: string
  averageRating: number
  totalRatings: number
  ratingDistribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  reviews: ReviewItemProps[]
  className?: string
}

export default function ProductRatings({
  productId,
  averageRating,
  totalRatings,
  ratingDistribution,
  reviews,
  className,
}: ProductRatingsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [localReviews, setLocalReviews] = useState<ReviewItemProps[]>(reviews)
  const [filteredReviews, setFilteredReviews] = useState<ReviewItemProps[]>(reviews)
  const [activeFilters, setActiveFilters] = useState<{
    rating: number | null
    sortBy: "newest" | "helpful" | "highest" | "lowest"
    verified: boolean
    withImages: boolean
    searchTerm: string
  }>({
    rating: null,
    sortBy: "helpful",
    verified: false,
    withImages: false,
    searchTerm: "",
  })
  const [showFilters, setShowFilters] = useState(false)

  // Apply filters whenever activeFilters or localReviews change
  useEffect(() => {
    let result = [...localReviews]

    // Filter by rating
    if (activeFilters.rating !== null) {
      result = result.filter((review) => Math.round(review.rating) === activeFilters.rating)
    }

    // Filter verified purchases
    if (activeFilters.verified) {
      result = result.filter((review) => review.verified)
    }

    // Filter reviews with images (placeholder - would need to add image property to reviews)
    if (activeFilters.withImages) {
      // This is a placeholder - in a real implementation, you'd check for review.images?.length > 0
      // result = result.filter(review => review.images?.length > 0);
    }

    // Filter by search term
    if (activeFilters.searchTerm) {
      const term = activeFilters.searchTerm.toLowerCase()
      result = result.filter(
        (review) => review.title.toLowerCase().includes(term) || review.content.toLowerCase().includes(term),
      )
    }

    // Sort reviews
    switch (activeFilters.sortBy) {
      case "newest":
        result.sort((a, b) => b.date.getTime() - a.date.getTime())
        break
      case "helpful":
        result.sort((a, b) => b.helpfulCount - a.helpfulCount)
        break
      case "highest":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "lowest":
        result.sort((a, b) => a.rating - b.rating)
        break
    }

    setFilteredReviews(result)
  }, [activeFilters, localReviews])

  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 3)

  const handleSubmitReview = (review: { rating: number; title: string; content: string }) => {
    const newReview: ReviewItemProps = {
      id: `temp-${Date.now()}`,
      userName: "You",
      rating: review.rating,
      title: review.title,
      content: review.content,
      date: new Date(),
      verified: true,
      helpfulCount: 0,
      replies: [],
    }

    setLocalReviews([newReview, ...localReviews])
    setShowReviewForm(false)
  }

  const handleFilterChange = (filterType: keyof typeof activeFilters, value: any) => {
    setActiveFilters((prev) => {
      // Toggle the filter if it's already active
      if (filterType === "rating" && prev.rating === value) {
        return { ...prev, rating: null }
      }

      // Toggle boolean filters
      if (typeof value === "boolean") {
        return { ...prev, [filterType]: !prev[filterType as keyof typeof prev] }
      }

      return { ...prev, [filterType]: value }
    })
  }

  const clearFilters = () => {
    setActiveFilters({
      rating: null,
      sortBy: "helpful",
      verified: false,
      withImages: false,
      searchTerm: "",
    })
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
      {productId && (
        <p className="text-gray-500 mb-6">
          Showing reviews for the selected size variant. Reviews may vary between different sizes.
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={averageRating} size="lg" />
            <span className="text-xl font-medium">{averageRating.toFixed(1)} out of 5</span>
          </div>

          <div className="text-sm text-gray-600 mb-6">{totalRatings} global ratings</div>

          <RatingDistribution ratings={ratingDistribution} totalRatings={totalRatings} className="mb-6" />

          <Button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Write a review
          </Button>
        </div>

        {showReviewForm && (
          <div>
            <ReviewForm productId={productId} onSubmit={handleSubmitReview} />
          </div>
        )}
      </div>

      {/* Filters Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Top reviews</h3>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search reviews"
                value={activeFilters.searchTerm}
                onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {Object.values(activeFilters).some((v) => v !== null && v !== false && v !== "" && v !== "helpful") && (
                <span className="ml-1 w-2 h-2 bg-blue-500 rounded-full"></span>
              )}
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200 animate-in fade-in duration-200">
            <div className="flex flex-wrap gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Rating</h4>
                <div className="flex gap-1">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleFilterChange("rating", star)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        activeFilters.rating === star
                          ? "bg-amber-500 text-white"
                          : "bg-white border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {star}★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Sort by</h4>
                <select
                  value={activeFilters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  className="px-3 py-1 text-sm rounded border border-gray-300 bg-white"
                >
                  <option value="helpful">Most helpful</option>
                  <option value="newest">Newest first</option>
                  <option value="highest">Highest rated</option>
                  <option value="lowest">Lowest rated</option>
                </select>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Show only</h4>
                <div className="flex gap-2">
                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      checked={activeFilters.verified}
                      onChange={() => handleFilterChange("verified", !activeFilters.verified)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    Verified purchases
                  </label>

                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="checkbox"
                      checked={activeFilters.withImages}
                      onChange={() => handleFilterChange("withImages", !activeFilters.withImages)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    With images
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                Clear filters
              </Button>
            </div>
          </div>
        )}

        {/* Filter summary */}
        {Object.values(activeFilters).some((v) => v !== null && v !== false && v !== "" && v !== "helpful") && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilters.rating !== null && (
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                {activeFilters.rating}★ ratings
                <button onClick={() => handleFilterChange("rating", null)} className="ml-1 hover:text-blue-900">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {activeFilters.sortBy !== "helpful" && (
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                Sort: {activeFilters.sortBy.charAt(0).toUpperCase() + activeFilters.sortBy.slice(1)}
                <button onClick={() => handleFilterChange("sortBy", "helpful")} className="ml-1 hover:text-blue-900">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {activeFilters.verified && (
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                Verified purchases
                <button onClick={() => handleFilterChange("verified", false)} className="ml-1 hover:text-blue-900">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {activeFilters.withImages && (
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                With images
                <button onClick={() => handleFilterChange("withImages", false)} className="ml-1 hover:text-blue-900">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {activeFilters.searchTerm && (
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                Search: "{activeFilters.searchTerm}"
                <button onClick={() => handleFilterChange("searchTerm", "")} className="ml-1 hover:text-blue-900">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            <button onClick={clearFilters} className="text-xs text-blue-600 hover:text-blue-800 hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {filteredReviews.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600">No reviews match your current filters.</p>
          <Button variant="link" onClick={clearFilters} className="mt-2">
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </div>
      )}

      {filteredReviews.length > 3 && (
        <Button
          variant="ghost"
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="mt-4 flex items-center gap-1"
        >
          {showAllReviews ? (
            <>
              Show less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              See all {filteredReviews.length} reviews <ChevronDown className="w-4 h-4" />
            </>
          )}
        </Button>
      )}
    </div>
  )
}

