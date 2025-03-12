"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import ProductCard from "@/components/product-card"

const products = {
  "Mumbai Indians": [
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
  "Gujarat Titans": [
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
  "Rajasthan Royals": [
    {
      id: "sanju-samson",
      name: "Sanju Samson",
      description: "Sanju Viswanath Samson is an Indian international cricketer who plays for the national team.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rg3od36dIzc8lxq5boYwe3stw4qTHm.png",
      team: "Rajasthan Royals",
      price: 200,
      size: "3 inches",
      role: "Captain",
    },
    {
      id: "yashasvi-jaiswal",
      name: "Yashasvi Jaiswal",
      description: "Yashasvi Bhupendra Kumar Jaiswal is an Indian international cricketer.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BmWgivocH7Fkfh4yDBbrlNDfsrCTCK.png",
      team: "Rajasthan Royals",
      price: 200,
      size: "3 inches",
      role: "Batsman",
    },
    {
      id: "riyan-parag",
      name: "Riyan Parag",
      description: "Riyan Parag Das is an Indian international cricketer who plays for the Indian cricket team.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ECSbmZewzbs8Ec7oji65Gye2Bc6AqJ.png",
      team: "Rajasthan Royals",
      price: 200,
      size: "3 inches",
      role: "All-rounder",
    },
  ],
}

export default function TeamProductCarousel() {
  const [activeTeam, setActiveTeam] = useState(0)
  const teams = Object.keys(products)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTeam((current) => (current + 1) % teams.length)
    }, 5000) // Change team every 5 seconds

    return () => clearInterval(timer)
  }, [teams.length])

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003B7B] mb-4">{teams[activeTeam]} Collection</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="px-4">
            {products[teams[activeTeam]].map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/3 lg:basis-1/3">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

