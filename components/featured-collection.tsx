"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredPlayers = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xGK7TjTNgA9d5KuZtQgkXc4Fs2uT74.png",
    name: "Virat Kohli",
    description: "The Indian captain and the best batsman in the world",
    price: 200,
    link: "/shop/rcb/product/virat-kohli",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xSsdIGhZlX6gcmgXiyWywsOJRnnp08.png",
    name: "Rohit Sharma",
    description: "The Hitman of Indian cricket",
    price: 200,
    link: "/shop/mumbai-indians/product/rohit-sharma",
  },
]

export default function FeaturedCollection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, featuredPlayers.length - 2)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003B7B] mb-4">
            CHECK OUT OUR FEATURED
            <br />
            COLLECTION OF PLAYERS
          </h2>
          <p className="text-xl text-[#003B7B]">GRAB THE FIGURINES OF YOUR ENTIRE FAVORITE TEAM</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 
              bg-[#003B7B] text-white rounded-full p-2.5 shadow-lg
              transition-all duration-300 hover:scale-110
              ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 
              bg-[#003B7B] text-white rounded-full p-2.5 shadow-lg
              transition-all duration-300 hover:scale-110
              ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {featuredPlayers.map((player) => (
                <div key={player.id} className="w-full flex-shrink-0 max-w-sm mx-auto">
                  <div className="group rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] bg-gray-200">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="bg-gradient-to-b from-[#003B7B] to-[#001B3B] p-4 text-center">
                      <h3 className="text-xl font-bold text-white mb-1.5">{player.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{player.description}</p>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-yellow-400 text-xl font-bold">₹{player.price}</span>
                        <Link
                          href={player.link}
                          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-1.5 rounded text-sm
                            transform hover:-translate-y-1 transition-all duration-300 inline-block"
                        >
                          BUY NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(featuredPlayers.length)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                  ${currentIndex === index ? "bg-[#003B7B] w-4" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

