"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const SIZES = ["3 inches", "7 inches"]
const PRICE_RANGES = ["₹0 - ₹500", "₹501 - ₹1000", "₹1001+"]

interface FilterSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function FilterSection({ title, isOpen, onToggle, children }: FilterSectionProps) {
  return (
    <div className="bg-[#2A2B3C] rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-white h-14 px-6 hover:bg-[#3A3B4C] transition-colors"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && children}
    </div>
  )
}

export default function ShopFilters({ players, teams, onFilterChange }) {
  const router = useRouter()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    sort: false,
    price: false,
    sizes: true,
    players: false,
    teams: false,
  })

  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({
    sort: "Popularity",
    price: "",
    sizes: "",
    players: "",
    teams: "",
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev }
      if (category === "teams") {
        const teamSlug = value.toLowerCase().replace(/\s+/g, "-")
        router.push(`/shop/${teamSlug}`)
        return prev // Don't update filters for team selection
      }
      // Clear other categories when selecting a new category
      Object.keys(newFilters).forEach((key) => {
        if (key !== category) {
          newFilters[key] = ""
        }
      })
      // Toggle the selected value within the category
      if (newFilters[category] === value) {
        newFilters[category] = ""
      } else {
        newFilters[category] = value
      }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  return (
    <div className="w-full lg:w-64 space-y-2 lg:sticky lg:top-24">
      <FilterSection title="Sort By" isOpen={openSections.sort} onToggle={() => toggleSection("sort")}>
        <div className="bg-[#2A2B3C]">
          {["Popularity", "Price: Low to High", "Price: High to Low"].map((option) => (
            <button
              key={option}
              onClick={() => toggleFilter("sort", option)}
              className={cn(
                "w-full text-left px-6 py-3 text-white hover:bg-[#3A3B4C] transition-colors",
                selectedFilters.sort === option && "bg-[#3A3B4C]",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Price Range" isOpen={openSections.price} onToggle={() => toggleSection("price")}>
        <div className="bg-[#2A2B3C]">
          {PRICE_RANGES.map((range) => (
            <button
              key={range}
              onClick={() => toggleFilter("price", range)}
              className={cn(
                "w-full text-left px-6 py-3 text-white hover:bg-[#3A3B4C] transition-colors",
                selectedFilters.price === range && "bg-[#3A3B4C]",
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Sizes" isOpen={openSections.sizes} onToggle={() => toggleSection("sizes")}>
        <div className="bg-[#2A2B3C]">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleFilter("sizes", size)}
              className={cn(
                "w-full text-left px-6 py-3 text-white hover:bg-[#3A3B4C] transition-colors",
                selectedFilters.sizes === size && "bg-[#3A3B4C]",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Players" isOpen={openSections.players} onToggle={() => toggleSection("players")}>
        <div className="bg-[#2A2B3C]">
          {players.map((player) => (
            <button
              key={player}
              onClick={() => toggleFilter("players", player)}
              className={cn(
                "w-full text-left px-6 py-3 text-white hover:bg-[#3A3B4C] transition-colors",
                selectedFilters.players === player && "bg-[#3A3B4C]",
              )}
            >
              {player}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Teams" isOpen={openSections.teams} onToggle={() => toggleSection("teams")}>
        <div className="bg-[#2A2B3C]">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => toggleFilter("teams", team)}
              className={cn(
                "w-full text-left px-6 py-3 text-white hover:bg-[#3A3B4C] transition-colors",
                selectedFilters.teams === team && "bg-[#3A3B4C]",
              )}
            >
              {team}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  )
}

