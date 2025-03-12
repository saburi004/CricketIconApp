"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const playerCards = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nw35lCDP4qi9NnRsFuTJ9wqOdVtN4b.png",
    name: "Rohit Sharma",
    number: "45",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3RhjJxwDJXsU06hswH8i6DuaCXs5cV.png",
    name: "Shubman Gill",
    number: "77",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9W20cwh7TypW1B5WUws78qcsFRQAd7.png",
    name: "MS Dhoni",
    number: "7",
  },
]

export default function VotingSection() {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-[#003B7B] text-4xl font-bold mb-8">
        VOTE FOR THE BEST PLAYER
        <br />
        THIS SEASON
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Player Cards */}
        <div className="grid grid-cols-3 gap-4">
          {playerCards.map((player) => (
            <button
              key={player.number}
              onClick={() => setSelectedPlayer(player.number)}
              className={`relative rounded-2xl overflow-hidden transition-transform hover:scale-105 ${
                selectedPlayer === player.number ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <Image
                src={player.image || "/placeholder.svg"}
                alt={player.name}
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </button>
          ))}
        </div>

        {/* Voting Chart */}
        <div className="relative aspect-[4/3]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W8wOeRjVqjIohpxPb9ZzpJPWKROKUA.png"
            alt="Voting results chart"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Vote Now Button */}
      <div className="flex justify-center mt-8">
        <Button
          className="bg-[#1E2761] hover:bg-[#1E2761]/90 text-white px-12 py-6 text-xl rounded-full relative"
          onClick={() => console.log("Voted for:", selectedPlayer)}
        >
          VOTE NOW
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSI4IiBmaWxsPSIjOTlDNUZGIi8+PC9zdmc+')] bg-contain" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSI2IiBmaWxsPSIjOTlDNUZGIi8+PC9zdmc+')] bg-contain" />
        </Button>
      </div>
    </div>
  )
}

