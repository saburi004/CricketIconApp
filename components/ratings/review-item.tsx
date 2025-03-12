"use client"

import type React from "react"


import { User, ThumbsUp, ThumbsDown } from "lucide-react"
import StarRating from "./star-rating"
import { cn } from "@/lib/utils"
import { useState } from "react"

// Update the ReviewItemProps interface to include replies
export interface ReviewItemProps {
  id: string
  userName: string
  userImage?: string
  rating: number
  title: string
  content: string
  date: Date
  verified: boolean
  helpfulCount: number
  className?: string
  replies?: ReviewReplyProps[]
}

// Add a new interface for review replies
export interface ReviewReplyProps {
  id: string
  userName: string
  userImage?: string
  content: string
  date: Date
  isOfficial?: boolean
}

// Update the ReviewItem component to include replies functionality
export default function ReviewItem({
  userName,
  userImage,
  rating,
  title,
  content,
  date,
  verified,
  helpfulCount,
  className,
  replies = [],
}: ReviewItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const [localReplies, setLocalReplies] = useState<ReviewReplyProps[]>(replies)

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyContent.trim()) return

    const newReply: ReviewReplyProps = {
      id: `reply-${Date.now()}`,
      userName: "You",
      content: replyContent,
      date: new Date(),
    }

    setLocalReplies([...localReplies, newReply])
    setReplyContent("")
    setShowReplyForm(false)
  }

  return (
    <div className={cn("border-b border-gray-200 pb-6", className)}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {userImage ? (
            <img src={userImage || "/placeholder.svg"} alt={userName} className="w-full h-full object-cover" />
          ) : (
            <User className="w-5 h-5 text-gray-500" />
          )}
        </div>
        <div className="font-medium">{userName}</div>
      </div>

      <div className="flex items-center gap-2 mb-1">
        <StarRating rating={rating} size="sm" />
        <h4 className="font-semibold">{title}</h4>
      </div>

      <div className="text-gray-500 text-sm mb-2">
        Reviewed {formatDistanceToNow(date, { addSuffix: true })}
        {verified && <span className="ml-2 text-green-600">✓ Verified Purchase</span>}
      </div>

      <p className="text-gray-800 mb-3">{content}</p>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <button className="flex items-center gap-1 hover:text-gray-900">
          <ThumbsUp className="w-4 h-4" />
          Helpful ({helpfulCount})
        </button>
        <button className="flex items-center gap-1 hover:text-gray-900">
          <ThumbsDown className="w-4 h-4" />
          Not helpful
        </button>
        <button className="hover:text-gray-900" onClick={() => setShowReplyForm(!showReplyForm)}>
          Reply
        </button>
        <button className="hover:text-gray-900">Report</button>
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <form onSubmit={handleSubmitReply} className="mt-4 pl-6 border-l-2 border-gray-200">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write your reply..."
            className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={() => setShowReplyForm(false)}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Replies */}
      {localReplies.length > 0 && (
        <div className="mt-4 space-y-4 pl-6 border-l-2 border-gray-200">
          {localReplies.map((reply) => (
            <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {reply.userImage ? (
                    <img
                      src={reply.userImage || "/placeholder.svg"}
                      alt={reply.userName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4 text-gray-500" />
                  )}
                </div>
                <div className="font-medium text-sm">
                  {reply.userName}
                  {reply.isOfficial && (
                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      Official Response
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500">{formatDistanceToNow(reply.date, { addSuffix: true })}</div>
              </div>
              <p className="text-gray-800 text-sm">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

