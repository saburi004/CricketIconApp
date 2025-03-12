"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Filter, Search, Plus, X } from "lucide-react"

// Player data with images
const playerIcons = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "RCB",
    rarity: "Legendary",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-amber-500 to-yellow-400",
    stats: { batting: 95, bowling: 60, fielding: 88 },
  },
  {
    id: 2,
    name: "MS Dhoni",
    team: "CSK",
    rarity: "Epic",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-500 to-pink-400",
    stats: { batting: 90, bowling: 50, fielding: 92 },
  },
  {
    id: 3,
    name: "Rohit Sharma",
    team: "MI",
    rarity: "Legendary",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-amber-500 to-yellow-400",
    stats: { batting: 93, bowling: 55, fielding: 85 },
  },
  {
    id: 4,
    name: "Jasprit Bumrah",
    team: "MI",
    rarity: "Epic",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-500 to-pink-400",
    stats: { batting: 45, bowling: 96, fielding: 80 },
  },
  {
    id: 5,
    name: "KL Rahul",
    team: "LSG",
    rarity: "Rare",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-blue-500 to-cyan-400",
    stats: { batting: 88, bowling: 40, fielding: 82 },
  },
  {
    id: 6,
    name: "Ravindra Jadeja",
    team: "CSK",
    rarity: "Epic",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-500 to-pink-400",
    stats: { batting: 75, bowling: 85, fielding: 95 },
  },
  {
    id: 7,
    name: "Hardik Pandya",
    team: "MI",
    rarity: "Rare",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-blue-500 to-cyan-400",
    stats: { batting: 80, bowling: 78, fielding: 85 },
  },
  {
    id: 8,
    name: "Rishabh Pant",
    team: "DC",
    rarity: "Rare",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-blue-500 to-cyan-400",
    stats: { batting: 85, bowling: 30, fielding: 75 },
  },
  {
    id: 9,
    name: "Suryakumar Yadav",
    team: "MI",
    rarity: "Epic",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-500 to-pink-400",
    stats: { batting: 92, bowling: 45, fielding: 88 },
  },
]

export default function MyIconsPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [isRotating, setIsRotating] = useState(false)
  const [rotateY, setRotateY] = useState(0)
  const [rotateX, setRotateX] = useState(0)

  const handleCardClick = (id: number) => {
    setSelectedCard(id)
    setIsRotating(true)
    setTimeout(() => setIsRotating(false), 1500)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isRotating && selectedCard !== null) {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateXValue = ((y - centerY) / centerY) * 10
      const rotateYValue = ((centerX - x) / centerX) * 10

      setRotateX(rotateXValue)
      setRotateY(rotateYValue)
    }
  }

  const handleMouseLeave = () => {
    if (!isRotating) {
      setRotateX(0)
      setRotateY(0)
    }
  }

  const closeModal = () => {
    setSelectedCard(null)
    setRotateX(0)
    setRotateY(0)
  }

  const selectedPlayer = selectedCard !== null ? playerIcons.find((p) => p.id === selectedCard) : null

  return (
    <main className="container mx-auto px-4 py-4 pb-32">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-4">MY ICONS</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-amber-400 text-2xl font-bold">{playerIcons.length}</p>
            <p className="text-gray-400 text-xs">Total Icons</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-amber-400 text-2xl font-bold">
              {playerIcons.filter((p) => p.rarity === "Legendary").length}
            </p>
            <p className="text-gray-400 text-xs">Legendary</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-amber-400 text-2xl font-bold">{new Set(playerIcons.map((p) => p.team)).size}</p>
            <p className="text-gray-400 text-xs">Teams</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search icons..."
              className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <button className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-2 text-gray-400 hover:text-white transition-colors">
            <Filter size={20} />
          </button>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playerIcons.map((player) => (
            <div
              key={player.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-3 flex flex-col items-center relative group cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleCardClick(player.id)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${player.color} rounded-t-lg`}></div>

              <div
                className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold z-10"
                style={{
                  background:
                    player.rarity === "Legendary"
                      ? "linear-gradient(to right, #f59e0b, #fbbf24)"
                      : player.rarity === "Epic"
                        ? "linear-gradient(to right, #8b5cf6, #ec4899)"
                        : "linear-gradient(to right, #3b82f6, #06b6d4)",
                }}
              >
                {player.rarity === "Legendary" ? "L" : player.rarity === "Epic" ? "E" : "R"}
              </div>

              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden mb-2 relative">
                <div className="absolute inset-2 rounded-lg overflow-hidden">
                  <Image src={player.image || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
                </div>

                {/* Holographic effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>

              <p className="text-white text-sm font-medium text-center truncate w-full">{player.name}</p>
              <p className="text-gray-400 text-xs text-center">{player.team}</p>
            </div>
          ))}

          {/* Add New Icon */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-dashed border-gray-700/50 rounded-lg p-3 flex flex-col items-center justify-center h-full aspect-square cursor-pointer hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center mb-2">
              <Plus size={24} className="text-amber-400" />
            </div>
            <p className="text-gray-400 text-xs text-center">Scan QR</p>
          </div>
        </div>
      </div>

      {/* Card Modal */}
      {selectedCard !== null && selectedPlayer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 pb-20">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-gray-800/50 rounded-full p-2 text-white hover:bg-gray-700/50 transition-colors"
          >
            <X size={24} />
          </button>

          <div
            className={`relative w-full max-w-xs perspective-1000 ${isRotating ? "animate-card-shine" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
              transition: isRotating ? "transform 1.5s ease-in-out" : "transform 0.1s ease-out",
            }}
          >
            <div
              className={`relative rounded-2xl overflow-hidden transform-style-3d ${isRotating ? "animate-card-rotate" : ""}`}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedPlayer.color} opacity-30`}></div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 animate-card-holo"></div>

              {/* Card Content */}
              <div
                className="relative p-6 bg-gray-900/90 border-4 rounded-2xl overflow-hidden"
                style={{
                  borderImage: `linear-gradient(to bottom right, ${selectedPlayer.color.split(" ")[0].replace("from-", "")}, ${selectedPlayer.color.split(" ")[1].replace("to-", "")}) 1`,
                }}
              >
                {/* Player Name and Rarity */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{selectedPlayer.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      selectedPlayer.rarity === "Legendary"
                        ? "bg-amber-500/20 text-amber-400"
                        : selectedPlayer.rarity === "Epic"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {selectedPlayer.rarity}
                  </span>
                </div>

                {/* Player Image */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={selectedPlayer.image || "/placeholder.svg"}
                    alt={selectedPlayer.name}
                    fill
                    className="object-cover"
                  />

                  {/* Team Badge */}
                  <div className="absolute bottom-2 right-2 bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-white">
                    {selectedPlayer.team}
                  </div>
                </div>

                {/* Player Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Batting</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                          style={{ width: `${selectedPlayer.stats.batting}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-white text-xs">{selectedPlayer.stats.batting}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Bowling</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          style={{ width: `${selectedPlayer.stats.bowling}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-white text-xs">{selectedPlayer.stats.bowling}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Fielding</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"
                          style={{ width: `${selectedPlayer.stats.fielding}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-white text-xs">{selectedPlayer.stats.fielding}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes cardRotate {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes cardShine {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
          50% { box-shadow: 0 0 30px 10px rgba(255,255,255,0.5); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        @keyframes cardHolo {
          0% { opacity: 0; background-position: 0% 0%; }
          25% { opacity: 1; }
          50% { opacity: 0; background-position: 100% 100%; }
          75% { opacity: 1; }
          100% { opacity: 0; background-position: 0% 0%; }
        }
        
        .animate-card-rotate {
          animation: cardRotate 1.5s ease-in-out;
        }
        
        .animate-card-shine {
          animation: cardShine 1.5s ease-in-out;
        }
        
        .animate-card-holo {
          animation: cardHolo 3s ease-in-out infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </main>
  )
}

