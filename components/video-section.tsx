"use client"

import { Play, Share2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    title: "When Jr. Jammy met his idol!",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EyqMwMIBqnw5TYgcG3L18tZyYQINoL.png",
    date: "09 Sep, 2024",
  },
  {
    id: 2,
    title: "RCB vs Gujarat Titans! the most awaited over!",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NLdz1kSPsoUwlChUFGa4X3TVohUGpV.png",
    date: "09 Sep, 2024",
  },
  {
    id: 3,
    title: "MS Dhoni on the pitch! Follow me for more live updates",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pXtM7JA7Qj5djCC0JsPl2CsNrqTKXU.png",
    date: "09 Sep, 2024",
  },
  {
    id: 4,
    title: "Rohit Sharma on taking risk in MI vs RR",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cduq0J1ZlEjvSov7G0c1UKnKB44zL8.png",
    date: "09 Sep, 2024",
  },
]

export default function VideoSection() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  return (
    <section className="relative py-16" style={{ background: "linear-gradient(135deg, #1E0B4B 0%, #0A1E4B 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">VIDEOS</h2>
          <p className="text-lg text-gray-300">DON'T MISS OUT ON CONTENT OF YOUR FAVORITE PLAYERS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/5]">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 ${
                      hoveredVideo === video.id ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Play className="w-6 h-6 text-blue-900" />
                  </div>
                </div>
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-300 flex items-center gap-1">
                        <span className="w-4 h-4">📅</span>
                        {video.date}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

