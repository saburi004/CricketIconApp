"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TEAMS } from "@/lib/constants"

interface TeamCarouselProps {
  teamName: string
  teamLogo: string
}

export default function TeamCarousel({ teamName }: TeamCarouselProps) {
  // Find the team data
  const teamSlug = Object.keys(TEAMS).find(
    (slug) => TEAMS[slug as keyof typeof TEAMS].name === teamName,
  ) as keyof typeof TEAMS
  const team = TEAMS[teamSlug]

  if (!team) return null

  return (
    <div className="w-full bg-[#020B2D]">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[450px] w-full overflow-hidden">
              <Image
                src={team.bannerImage || "/placeholder.svg"}
                alt={`${teamName} Banner`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}

