"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define the heart animation keyframes directly in the component
const heartAnimationStyle = `
  @keyframes heartBeat {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    15% {
      transform: scale(1.2);
      opacity: 1;
    }
    30% {
      transform: scale(0.95);
    }
    45%,
    80% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  .heart-animation {
    animation: heartBeat 1s ease-in-out forwards;
  }
`

interface SocialPost {
  id: string
  teamName: string
  teamHandle: string
  teamLogo: string
  verified: boolean
  image: string
  caption: string
  likes: number
  timestamp: string
}

const socialPosts: SocialPost[] = [
  {
    id: "post1",
    teamName: "Mumbai Indians",
    teamHandle: "mipaltan",
    teamLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wsqM7zuzqtSDS0Ve14DPOIJ3jSrcJ3.png",
    verified: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Uu5OHmZfcXqKLF8djWChQDQetfh3pU.png",
    caption: "Our captain leading from the front! 💙 #RohitSharma #OneFamily",
    likes: 45892,
    timestamp: "2h",
  },
  {
    id: "post2",
    teamName: "Kolkata Knight Riders",
    teamHandle: "kkriders",
    teamLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MsrAQFZZtYUR3dII1jkjw8GVBPLIJv.png",
    verified: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ROXXLtY073ZYhsPiCBvZmcTlukce4t.png",
    caption: "The King is in the house! 👑 #KorboLorboJeetbo",
    likes: 67234,
    timestamp: "5h",
  },
  {
    id: "post3",
    teamName: "Gujarat Titans",
    teamHandle: "gujarattitansipl",
    teamLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-faAMAd2MoCrfkNAnHrLiYgGR0ufpiC.png",
    verified: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dMd6oVKF2bxxbe15DbZ4UuqG68GhGY.png",
    caption: "Team spirit at its best! 🏏 #WeAreGujarat #AavaDe",
    likes: 32567,
    timestamp: "1d",
  },
  {
    id: "post4",
    teamName: "Rajasthan Royals",
    teamHandle: "rajasthanroyals",
    teamLogo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qbwOCV20Jm4alNdOrWWndyP1mTbwz8.png",
    verified: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KrpEI5VftGdcgVzZgqavzCpNaVvFj4.png",
    caption: "Pink power! 💗 #HallaBol #RoyalsFamily",
    likes: 28943,
    timestamp: "2d",
  },
]

export default function SocialFeed() {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({})
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({})
  const [showHeartAnimation, setShowHeartAnimation] = useState<Record<string, boolean>>({})

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const handleSave = (postId: string) => {
    setSavedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const handleDoubleClick = (postId: string) => {
    if (!likedPosts[postId]) {
      setLikedPosts((prev) => ({
        ...prev,
        [postId]: true,
      }))

      setShowHeartAnimation((prev) => ({
        ...prev,
        [postId]: true,
      }))

      setTimeout(() => {
        setShowHeartAnimation((prev) => ({
          ...prev,
          [postId]: false,
        }))
      }, 1000)
    }
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <>
      {/* Include the CSS for heart animation */}
      <style jsx global>
        {heartAnimationStyle}
      </style>

      <section className="py-12 bg-gradient-to-b from-[#020B2D] to-[#0C1B4D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">#CricketOnSocial</h2>
            <p className="text-lg text-gray-300">Latest updates from your favorite teams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform hover:shadow-lg"
                style={{ transition: "all 0.3s ease" }}
              >
                {/* Post Header - With official team logos */}
                <div className="flex items-center p-2 border-b" style={{ borderBottomColor: "#f0f0f0" }}>
                  <div
                    className="w-8 h-8 relative rounded-full overflow-hidden bg-white flex items-center justify-center"
                    style={{
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
                      padding: "1px",
                    }}
                  >
                    <Image
                      src={post.teamLogo || "/placeholder.svg"}
                      alt={post.teamName}
                      width={32}
                      height={32}
                      className="object-contain"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="ml-2 flex-1">
                    <div className="flex items-center">
                      <p className="font-medium text-xs">{post.teamName}</p>
                      {post.verified && (
                        <div
                          className="ml-1 bg-blue-500 rounded-full p-0.5 flex items-center justify-center"
                          style={{ width: "12px", height: "12px" }}
                        >
                          <Check className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600" style={{ transition: "color 0.2s ease" }}>
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                {/* Post Image */}
                <div
                  className="relative cursor-pointer"
                  style={{ aspectRatio: "4/3" }}
                  onDoubleClick={() => handleDoubleClick(post.id)}
                >
                  <Image src={post.image || "/placeholder.svg"} alt={post.caption} fill className="object-cover" />

                  {/* Heart Animation */}
                  <AnimatePresence>
                    {showHeartAnimation[post.id] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Heart
                          className="w-16 h-16 text-white"
                          style={{
                            filter: "drop-shadow(0 0 8px rgba(0,0,0,0.5))",
                            fill: "white",
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Post Actions */}
                <div className="p-2">
                  <div className="flex justify-between mb-1">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="transition-transform active:scale-110"
                        style={{ transition: "transform 0.2s ease" }}
                      >
                        <Heart
                          className={`w-5 h-5 ${likedPosts[post.id] ? "text-red-500" : "text-gray-700"}`}
                          style={{
                            fill: likedPosts[post.id] ? "#ef4444" : "none",
                            transition: "all 0.2s ease",
                          }}
                        />
                      </button>
                      <button
                        className="transition-transform active:scale-110"
                        style={{ transition: "transform 0.2s ease" }}
                      >
                        <MessageCircle className="w-5 h-5 text-gray-700" />
                      </button>
                      <button
                        className="transition-transform active:scale-110"
                        style={{ transition: "transform 0.2s ease" }}
                      >
                        <Send className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleSave(post.id)}
                      className="transition-transform active:scale-110"
                      style={{ transition: "transform 0.2s ease" }}
                    >
                      <Bookmark
                        className={`w-5 h-5 ${savedPosts[post.id] ? "text-black" : "text-gray-700"}`}
                        style={{
                          fill: savedPosts[post.id] ? "black" : "none",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </button>
                  </div>

                  {/* Likes */}
                  <p className="font-semibold text-xs">
                    {formatNumber(likedPosts[post.id] ? post.likes + 1 : post.likes)} likes
                  </p>

                  {/* Caption */}
                  <div
                    className="mb-1"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <span className="font-semibold text-xs mr-1">{post.teamHandle}</span>
                    <span className="text-xs">{post.caption}</span>
                  </div>

                  {/* Timestamp */}
                  <p className="text-[10px] text-gray-500">{post.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Follow Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="https://www.instagram.com/iplt20/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white hover:shadow-lg"
              style={{
                background: "linear-gradient(to right, #8a3ab9, #e95950, #fccc63)",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow IPL on Instagram
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

