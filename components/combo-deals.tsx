"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function ComboDeals() {
  const [selectedSize, setSelectedSize] = useState<"3 Inches" | "7 Inches">("3 Inches")

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#003B7B] text-center mb-12">Great Deals on the Combo</h2>

        <div className="bg-[#E8F4FF] rounded-3xl p-8">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Rohit Card */}
            <div className="md:col-span-4">
              <Card className="bg-[#003B7B] text-white overflow-hidden relative h-[400px]">
                <div className="absolute inset-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSKzpZL2WSDg39EBI58Z8I1RYkCwAg.png"
                    alt="Mumbai Indians Background"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zN0h1KrHsPn7HJVF4mdsoCmti9xAw3.png"
                      alt="Rohit Sharma"
                      width={300}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-1">Rohit Sharma</h3>
                    <p className="text-sm mb-2">Get the best of the best of Mumbai Indians</p>
                    <p className="font-bold">RS 200</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Plus Sign */}
            <div className="md:col-span-1 flex justify-center items-center">
              <span className="text-4xl font-bold text-[#003B7B]">+</span>
            </div>

            {/* Shubman Card */}
            <div className="md:col-span-4">
              <Card className="bg-[#2A2B3C] text-white overflow-hidden relative h-[400px]">
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyLyugDU6vyHtpTX8bEja9Afj8W8wp.png"
                      alt="Shubman Gill"
                      width={300}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-1">Shubhman Gill</h3>
                    <p className="text-sm mb-2">Get the best of the best of Gujarat Titans</p>
                    <p className="font-bold">RS 200</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Combo Offer Card */}
            <div className="md:col-span-3">
              <Card className="bg-white p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#003B7B] leading-tight">ROHIT SHARMA + SHUBHMAN GILL</h3>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className={cn(
                        "flex-1 px-4 py-2 rounded font-medium",
                        selectedSize === "3 Inches"
                          ? "bg-[#003B7B] text-white"
                          : "bg-white text-[#003B7B] border border-[#003B7B] hover:bg-gray-50",
                      )}
                      onClick={() => setSelectedSize("3 Inches")}
                    >
                      3 Inches
                    </button>
                    <button
                      className={cn(
                        "flex-1 px-4 py-2 rounded font-medium",
                        selectedSize === "7 Inches"
                          ? "bg-[#003B7B] text-white"
                          : "bg-white text-[#003B7B] border border-[#003B7B] hover:bg-gray-50",
                      )}
                      onClick={() => setSelectedSize("7 Inches")}
                    >
                      7 Inches
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-gray-500 line-through">Rs 3999</span>
                      <span className="text-2xl font-bold text-[#003B7B]">Rs 2009</span>
                    </div>
                    <button className="w-full bg-[#003B7B] text-white py-2 rounded hover:bg-[#003B7B]/90 transition-colors">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

