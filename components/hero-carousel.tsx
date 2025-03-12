"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const teams = [
  {
    name: "Mumbai Indians",
    tagline: "BUILD YOUR DREAM TEAM",
    subtitle: "BRING YOUR FAVORITE IPL STARS TO LIFE",
    cta: "Explore",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pOvxeh6YvCWYFCwpHXeEtvez8BDrV4.png",
  },
  {
    name: "Kolkata Knight Riders",
    tagline: "UNLEASH THE KNIGHT WITHIN",
    subtitle: "COLLECT THE PURPLE AND GOLD LEGENDS",
    cta: "Discover",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WFFpUBMZlfXXLIr8sXNopmdxiWm7JV.png",
  },
  {
    name: "Gujarat Titans",
    tagline: "RISE OF THE TITANS",
    subtitle: "OWN A PIECE OF CRICKETING HISTORY",
    cta: "Shop Now",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OPF1phTOIMHXxRPbBnjHgk3viJiWuP.png",
  },
  {
    name: "Rajasthan Royals",
    tagline: "ROYAL COLLECTION AWAITS",
    subtitle: "BRING HOME THE SPIRIT OF RAJASTHAN",
    cta: "Browse",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PrIm9S8Sb3m7Cj4GsbRgk9u26KW68r.png",
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % teams.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {teams.map((team, index) => (
          <CarouselItem key={team.name} className={index === activeIndex ? "block" : "hidden"}>
            <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-cover bg-center flex items-center pt-16">
              <Image
                src={team.image || "/placeholder.svg"}
                alt={`${team.name} Background`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="relative z-10 container mx-auto px-4">
                <div className="text-white max-w-xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                    {team.tagline}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-white/90 max-w-md">{team.subtitle}</p>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg
                      transform hover:-translate-y-1 transition-all duration-300 text-base md:text-lg group"
                  >
                    {team.cta}
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={() => setActiveIndex((current) => (current - 1 + teams.length) % teams.length)} />
      <CarouselNext onClick={() => setActiveIndex((current) => (current + 1) % teams.length)} />
    </Carousel>
  )
}

