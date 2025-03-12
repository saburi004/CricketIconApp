"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import TeamHeader from "@/components/team-header"
import TeamCarousel from "@/components/team-carousel"
import ShopFilters from "@/components/shop-filters"
import ProductCard from "@/components/product-card"
import { TEAMS } from "@/lib/constants"
import { Button } from "@/components/ui/button"

// Mock products data since we don't have the API endpoint
const mockProducts = {
  "mumbai-indians": [
    {
      id: "rohit-sharma",
      name: "Rohit Sharma",
      description: "Captain of Mumbai Indians, elegantly taps (MI) conducted by CSK to 45 not",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bOsCT3H354v93bsEnqa3IzTR6YUOHM.png",
      team: "Mumbai Indians",
      price: 200,
      size: "3 inches",
      role: "Captain",
    },
    {
      id: "hardik-pandya",
      name: "Hardik Pandya",
      description: "Hardik Himanshu Pandya is an Indian international cricketer who plays for the Indian cricket team.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mNTIGvgkOqakIAGaFKCBLwpa2L4GcA.png",
      team: "Mumbai Indians",
      price: 200,
      size: "3 inches",
      role: "All-rounder",
    },
    {
      id: "jasprit-bumrah",
      name: "Jasprit Bumrah",
      description: "Jasprit Jasbirsingh Bumrah is an Indian cricketer who plays for the national team in all formats.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PtfXIlgKNbAoRypcIERXlZeCCXtr89.png",
      team: "Mumbai Indians",
      price: 200,
      size: "3 inches",
      role: "Bowler",
    },
  ],
  "gujarat-titans": [
    {
      id: "shubman-gill",
      name: "Shubman Gill",
      description: "Get the best of the best of Gujarat Titans",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oPe3KH5T8XcceATqHjUf6cb4S7Vv3a.png",
      team: "Gujarat Titans",
      price: 200,
      size: "3 inches",
      role: "Captain",
    },
    {
      id: "rashid-khan",
      name: "Rashid Khan",
      description: "Rashid Khan is an Afghan cricketer and the current captain of the national team for T20I matches.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MT05cKAUOG7R121HE0socRJHsx01e5.png",
      team: "Gujarat Titans",
      price: 200,
      size: "3 inches",
      role: "Bowler",
    },
    {
      id: "david-miller",
      name: "David Miller",
      description: "David Andrew Miller is a South African professional cricketer who plays for South Africa.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0Wfxh75NDDvMAKDoczGq51FY9nLNwy.png",
      team: "Gujarat Titans",
      price: 200,
      size: "3 inches",
      role: "Batsman",
    },
  ],
  "kolkata-knight-riders": [
    {
      id: "shreyas-iyer",
      name: "Shreyas Iyer",
      description: "Leading from the front with style and grace!",
      image: "/placeholder.svg?height=400&width=300",
      team: "Kolkata Knight Riders",
      price: 200,
      size: "3 inches",
      role: "Captain",
    },
    {
      id: "rinku-singh",
      name: "Rinku Singh",
      description: "The finisher who never gives up!",
      image: "/placeholder.svg?height=400&width=300",
      team: "Kolkata Knight Riders",
      price: 200,
      size: "3 inches",
      role: "Batsman",
    },
  ],
  "rajasthan-royals": [
    {
      id: "sanju-samson",
      name: "Sanju Samson",
      description: "The elegant keeper-batsman with flair!",
      image: "/placeholder.svg?height=400&width=300",
      team: "Rajasthan Royals",
      price: 200,
      size: "3 inches",
      role: "Captain",
    },
    {
      id: "yashasvi-jaiswal",
      name: "Yashasvi Jaiswal",
      description: "The young prodigy taking IPL by storm!",
      image: "/placeholder.svg?height=400&width=300",
      team: "Rajasthan Royals",
      price: 200,
      size: "3 inches",
      role: "Batsman",
    },
  ],
}

// Define team colors for ribbons
const TEAM_GRADIENTS = {
  "Mumbai Indians": {
    from: "#033E6A",
    to: "#067AD0",
  },
  "Kolkata Knight Riders": {
    from: "#3B225F",
    to: "#552987",
  },
  "Gujarat Titans": {
    from: "#1B2B47",
    to: "#B87D3B",
  },
  "Rajasthan Royals": {
    from: "#8E1F71",
    to: "#CC2DA8",
  },
}

export default function TeamPage() {
  const { team } = useParams()
  const teamId = Array.isArray(team) ? team[0] : team

  const [currentTeam, setCurrentTeam] = useState<string | null>(null)
  const [teamLogo, setTeamLogo] = useState<string | null>(null)
  const [displayedProducts, setDisplayedProducts] = useState<any[]>([])
  const [filters, setFilters] = useState({
    sort: "Popularity",
    sizes: [],
    price: [],
    players: [],
    teams: [],
  })
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  useEffect(() => {
    // Find the team data from TEAMS
    const teamData = Object.entries(TEAMS).find(([key]) => key === teamId)

    if (teamData) {
      const [_, data] = teamData
      setCurrentTeam(data.name)
      setTeamLogo(data.logo)

      // Get products for this team
      const products = mockProducts[teamId as keyof typeof mockProducts] || []
      setDisplayedProducts(products)
    }
  }, [teamId])

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Clear the selected size when a new filter is applied
    setSelectedSize(null)
  }

  const availablePlayers = useMemo(() => {
    return Array.from(new Set(displayedProducts.map((product) => product.name)))
  }, [displayedProducts])

  const availableTeams = useMemo(() => {
    return Array.from(new Set(displayedProducts.map((product) => product.team)))
  }, [displayedProducts])

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size === selectedSize ? null : size)
    // Clear other filters when selecting a size
    setFilters({
      sort: "Popularity",
      sizes: [],
      price: [],
      players: [],
      teams: [],
    })
  }

  if (!currentTeam) {
    return null
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="h-20">
        <Navbar />
      </header>
      <TeamHeader teamName={currentTeam} />
      <TeamCarousel teamName={currentTeam} teamLogo={teamLogo} />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0078FF] mb-4">CHECK OUT OUR FEATURED</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0078FF] mb-8">COLLECTION OF PLAYERS</h2>
          <p className="text-xl text-[#0078FF]">GRAB THE FIGURINES OF YOUR ENTIRE FAVORITE TEAM</p>
        </div>

        <div className="flex justify-center mt-8 space-x-4 mb-12">
          {["3 Inches", "7 Inches"].map((size) => (
            <Button
              key={size}
              onClick={() => handleSizeSelection(size)}
              variant={selectedSize === size ? "default" : "outline"}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300`}
              style={{
                background:
                  selectedSize === size
                    ? `linear-gradient(to right, ${TEAM_GRADIENTS[currentTeam as keyof typeof TEAM_GRADIENTS]?.from || "#003B7B"}, ${TEAM_GRADIENTS[currentTeam as keyof typeof TEAM_GRADIENTS]?.to || "#0078FF"})`
                    : "white",
                color:
                  selectedSize === size
                    ? "white"
                    : TEAM_GRADIENTS[currentTeam as keyof typeof TEAM_GRADIENTS]?.from || "#003B7B",
                borderColor: TEAM_GRADIENTS[currentTeam as keyof typeof TEAM_GRADIENTS]?.from || "#003B7B",
              }}
            >
              {size}
            </Button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <ShopFilters players={availablePlayers} teams={availableTeams} onFilterChange={handleFilterChange} />
          <div className="flex-1 overflow-y-auto max-h-[800px] pr-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

