"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Newspaper, Video, Mic, Calendar } from "lucide-react"
import NewsCard from "@/components/news-card"
import FeaturedStory from "@/components/featured-story"

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<"news" | "podcasts">("news")

  return (
    <main className="container mx-auto px-4 py-4 pb-24">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-4">NEWS & MEDIA</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-700/50 mb-6">
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === "news"
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-gray-400 hover:text-gray-300"
            } transition-colors`}
          >
            <Newspaper size={16} className="mr-2" />
            News & Videos
          </button>
          <button
            onClick={() => setActiveTab("podcasts")}
            className={`flex items-center px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === "podcasts"
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-gray-400 hover:text-gray-300"
            } transition-colors`}
          >
            <Mic size={16} className="mr-2" />
            Podcasts
          </button>
        </div>

        {activeTab === "news" ? (
          <>
            {/* Featured Story */}
            <div className="mb-8">
              <FeaturedStory
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DH8c7iDIlTRwbK25eR5aUDD5OCa3iV.png"
                category="IPL 2025"
                source="Times of India"
                date="Nov 12, 2024"
                title="Venkatesh Iyer's PhD"
                subtitle="The all-rounder was one of the most expensive players in the IPL 2025 auction, but chose to focus on his education instead of cricket."
                description="He is pursuing a PhD in finance after earning his MBA."
              />
            </div>

            {/* Video Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Video className="w-5 h-5 mr-2 text-amber-500" />
                Latest Videos
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800/50 hover:border-gray-700/50 transition-colors"
                  >
                    <div className="relative aspect-video">
                      <Image src="/placeholder.svg" alt={`Video ${i}`} fill className="object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500/80 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        12:34
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-white mb-1">Match Highlights: KKR vs RCB</h3>
                      <p className="text-xs text-gray-400">2.3M views • 2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <Link
                  href="/videos"
                  className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                >
                  View All Videos
                </Link>
              </div>
            </div>

            {/* News Cards */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Newspaper className="w-5 h-5 mr-2 text-amber-500" />
                Latest News
              </h2>

              <div className="grid gap-4">
                <NewsCard
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sh2EHKABNXHkYiJUhLm8UlBmaYoZTP.png"
                  date="Nov 15,2024"
                  source="India Times"
                  title="KKR makes the most epic comeback of the century!"
                />
                <NewsCard
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uHeDoYTvyARYwjDjg8mHnwb8MZG4zv.png"
                  date="Nov 15,2024"
                  source="India Times"
                  title="RR makes the most epic comeback of the century!"
                />
                <NewsCard
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HtLVm29njqrkO2LNZaf6TC0Wo4SUem.png"
                  date="Nov 15,2024"
                  source="India Times"
                  title="GT makes the most epic comeback of the century!"
                />
                <NewsCard
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-phQi10MNEUoiOU6SvSc83x8tkPSDso.png"
                  date="Nov 15,2024"
                  source="India Times"
                  title="MI makes the most epic comeback of the century!"
                />
              </div>

              <div className="text-center mt-6">
                <Link
                  href="/news/all"
                  className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                >
                  View All News
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Mic className="w-5 h-5 mr-2 text-amber-500" />
              Featured Podcasts
            </h2>

            <div className="grid gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-800/50 rounded-lg overflow-hidden p-4 flex gap-4"
                >
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-500/20 to-blue-500/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image src="/placeholder.svg" alt={`Podcast ${i}`} width={80} height={80} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">Cricket Conversations: Episode {i}</h3>
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                      <Calendar size={12} className="mr-1" />
                      Nov {10 + i}, 2024
                      <span className="mx-2">•</span>
                      <span>45:{10 + i} mins</span>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      Join our cricket experts as they discuss the latest developments in the world of cricket, player
                      performances, and upcoming matches.
                    </p>

                    <div className="mt-2 flex items-center">
                      <button className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium flex items-center">
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-amber-400 border-b-4 border-b-transparent mr-1"></div>
                        Play Episode
                      </button>
                      <span className="mx-2 text-gray-600">|</span>
                      <button className="text-gray-400 hover:text-gray-300 transition-colors text-sm">Download</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link
                href="/podcasts"
                className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
              >
                View All Podcasts
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

