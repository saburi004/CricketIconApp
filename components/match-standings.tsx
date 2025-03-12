"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const initialPointsTableData = [
  {
    team: "Delhi Capitals",
    logo: "/team_logos/dc.png",
    matches: 8,
    wins: 6,
    losses: 2,
    ties: 0,
    points: 12,
    nrr: "+0.547",
  },
  {
    team: "Chennai Super Kings",
    logo: "/team_logos/csk.png",
    matches: 7,
    wins: 5,
    losses: 2,
    ties: 0,
    points: 10,
    nrr: "+1.263",
  },
  {
    team: "Royal Challengers Bangalore",
    logo: "/team_logos/rcb.png",
    matches: 7,
    wins: 5,
    losses: 2,
    ties: 0,
    points: 10,
    nrr: "-0.171",
  },
  {
    team: "Mumbai Indians",
    logo: "/team_logos/mi.png",
    matches: 7,
    wins: 4,
    losses: 3,
    ties: 0,
    points: 8,
    nrr: "+0.062",
  },
  {
    team: "Rajasthan Royals",
    logo: "/team_logos/rr.webp",
    matches: 7,
    wins: 3,
    losses: 4,
    ties: 0,
    points: 6,
    nrr: "-0.190",
  },
  {
    team: "Punjab Kings",
    logo: "/team_logos/punjab.png",
    matches: 8,
    wins: 3,
    losses: 5,
    ties: 0,
    points: 6,
    nrr: "-0.368",
  },
  {
    team: "Kolkata Knight Riders",
    logo: "/team_logos/kkr.jpg",
    matches: 7,
    wins: 2,
    losses: 5,
    ties: 0,
    points: 4,
    nrr: "-0.494",
  },
]

export default function MatchStandings() {
  const [pointsTableData, setPointsTableData] = useState(initialPointsTableData)
  const [animateNumbers, setAnimateNumbers] = useState(false)

  useEffect(() => {
    // Trigger animations after a delay
    const timer = setTimeout(() => {
      setAnimateNumbers(true)
      updateMumbaiIndians()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const updateMumbaiIndians = () => {
    const newData = [...pointsTableData]
    const miIndex = newData.findIndex((team) => team.team === "Mumbai Indians")
    if (miIndex !== -1) {
      newData[miIndex] = {
        ...newData[miIndex],
        matches: 8,
        wins: 6,
        losses: 2,
        points: 12,
        nrr: "+0.765",
      }
      // Move Mumbai Indians to the second position
      const [mi] = newData.splice(miIndex, 1)
      newData.splice(1, 0, mi)
    }
    setPointsTableData(newData)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Match Banner */}
          <div className="relative rounded-2xl overflow-hidden w-full max-w-6xl">
            <Image
              src="/team_logos/left-section.png"
              alt="DC vs KKR IPL 2021"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Live
              </Button>
            </div>
          </div>

          {/* Right Column - Points Table */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Points Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-sm text-blue-600 border-b">
                    <th className="text-left py-2">Teams</th>
                    <th className="text-center py-2">M</th>
                    <th className="text-center py-2">W</th>
                    <th className="text-center py-2">L</th>
                    <th className="text-center py-2">T</th>
                    <th className="text-center py-2">PTS</th>
                    <th className="text-center py-2">NRR</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {pointsTableData.map((team, index) => (
                      <motion.tr
                        key={team.team}
                        className={`text-sm ${index !== pointsTableData.length - 1 ? "border-b" : ""}`}
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <td className="py-3 flex items-center gap-2">
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={team.team}
                            width={44}
                            height={44}
                            className="rounded-full"
                          />
                          <span className="font-medium">{team.team}</span>
                        </td>
                        <td className="text-center py-3">
                          <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }} key={team.matches}>
                            {animateNumbers ? team.matches : initialPointsTableData[index].matches}
                          </motion.span>
                        </td>
                        <td className="text-center py-3">
                          <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }} key={team.wins}>
                            {animateNumbers ? team.wins : initialPointsTableData[index].wins}
                          </motion.span>
                        </td>
                        <td className="text-center py-3">
                          <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }} key={team.losses}>
                            {animateNumbers ? team.losses : initialPointsTableData[index].losses}
                          </motion.span>
                        </td>
                        <td className="text-center py-3">{team.ties}</td>
                        <td className="text-center py-3 font-semibold">
                          <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }} key={team.points}>
                            {animateNumbers ? team.points : initialPointsTableData[index].points}
                          </motion.span>
                        </td>
                        <td className="text-center py-3">
                          <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }} key={team.nrr}>
                            {animateNumbers ? team.nrr : initialPointsTableData[index].nrr}
                          </motion.span>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

