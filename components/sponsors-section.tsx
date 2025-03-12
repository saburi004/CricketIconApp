"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

const sponsors = [
  {
    name: "Dream11",
    logo: "/sponsors/Dream11_logo.svg.png",
  },
  {
    name: "Tata",
    logo: "/sponsors/tata.webp",
  },
  {
    name: "Unacademy",
    logo: "/sponsors/unacademy.png",
  },
  {
    name: "CRED",
    logo: "/sponsors/cred.png",
  },
  {
    name: "Paytm",
    logo: "/sponsors/Paytm_logo.jpg",
  },
  {
    name: "Swiggy",
    logo: "/sponsors/swiggy.png",
  },
]

export default function SponsorsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isPaused && containerRef.current) {
      const computedStyle = window.getComputedStyle(containerRef.current)
      const matrix = new DOMMatrix(computedStyle.transform)
      containerRef.current.style.transform = `translateX(${matrix.m41}px)`
    } else if (containerRef.current) {
      containerRef.current.style.transform = ""
    }
  }, [isPaused])

  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, #020B2D 0%, #0C1B4D 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Partners</h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className={`flex gap-16 items-center ${isPaused ? "" : "animate-scroll"}`}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* First set of logos */}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex-shrink-0 w-[200px] h-[80px] relative filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D]/10 to-[#0C1B4D]/10 mix-blend-overlay" />
                <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
              </div>
            ))}

            {/* Duplicate set for seamless scrolling */}
            {sponsors.map((sponsor) => (
              <div
                key={`${sponsor.name}-duplicate`}
                className="flex-shrink-0 w-[200px] h-[80px] relative filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D]/10 to-[#0C1B4D]/10 mix-blend-overlay" />
                <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#020B2D] to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#020B2D] to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}

