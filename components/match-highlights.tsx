"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronRight } from "lucide-react"

const highlights = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XkYZRiUyCH4NelngNRyoppemlfjWRO.png",
    match: "SRH v/s PBK (Yesterday)",
    description: "Punjab Kings dished out a disciplined bowling performance",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJS07QhXLbpwu2sj1e5H5uhYfnVH6C.png",
    match: "CSK v/s KKR (Yesterday)",
    description: "Chennai Super Kings beat KKR by 2 wickets to claim top spot",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MubwuyJlSB57eVxwCaZOpNxXyWslks.png",
    match: "RCB v/s MI (Sept 27, 2021)",
    description: "Harshal Patel hat-trick helps RCB beat Mumbai Indians by 54 runs",
  },
  // Adding more items to demonstrate sliding
  {
    id: 4,
    image: "/placeholder.svg",
    match: "DC v/s PBKS (Sept 28, 2021)",
    description: "Delhi Capitals secure convincing victory against Punjab Kings",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    match: "GT v/s LSG (Sept 29, 2021)",
    description: "Gujarat Titans emerge victorious in last-over thriller",
  },
  {
    id: 6,
    image: "/placeholder.svg",
    match: "RR v/s SRH (Sept 30, 2021)",
    description: "Rajasthan Royals dominate with all-round performance",
  },
]

const scheduleMatches = [
  {
    teams: "Zimbabwe vs Ireland, 3rd ODI",
    date: "Mon Jan 23",
    time: "7:15 AM GMT",
  },
  {
    teams: "India vs New Zealand, 3rd ODI",
    date: "Tue Jan 24",
    time: "8:00 AM GMT",
  },
  {
    teams: "South Africa vs England, 1st ODI",
    date: "Fri Jan 27",
    time: "11:00 AM GMT",
  },
  {
    teams: "India vs New Zealand, 1st T20I",
    date: "Fri Jan 27",
    time: "1:30 PM GMT",
  },
]

export default function MatchHighlights() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, #020B2D 0%, #0C1B4D 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Schedule Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-emerald-600 font-bold text-xl mb-4">SCHEDULE</h2>
              <div className="space-y-4">
                {scheduleMatches.map((match, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-medium text-gray-900 mb-1">{match.teams}</h3>
                    <p className="text-sm text-gray-500">
                      {match.date} • {match.time}
                    </p>
                  </div>
                ))}
              </div>
              <button className="text-blue-600 hover:underline text-sm mt-4">More Matches..</button>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-white">Highlights</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {highlights.map((highlight) => (
                    <CarouselItem key={highlight.id} className="pl-2 md:pl-4 md:basis-1/3">
                      <Card className="overflow-hidden bg-transparent border-0">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                          <Image
                            src={highlight.image || "/placeholder.svg"}
                            alt={highlight.match}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-semibold mb-2">{highlight.match}</h3>
                            <p className="text-white/80 text-sm">{highlight.description}</p>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white" />
              </Carousel>
            </div>

            {/* Orange Cap Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-4">Orange Cap Leaderboard</h2>
                <div className="relative h-[120px] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 p-6 flex items-center">
                    <div>
                      <h3 className="text-white text-2xl font-bold italic">SHIKHAR DHAWAN</h3>
                      <p className="text-white text-3xl font-bold italic">RUNS - 380</p>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-1/3">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MLDOV3xIaOqRPEHJeEP6EknQLVoT14.png"
                        alt="Shikhar Dhawan"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

