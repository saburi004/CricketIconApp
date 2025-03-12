"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Share2, Check, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import { useImageZoom } from "@/hooks/use-image-zoom"
import ComboDeals from "@/components/combo-deals"
import { useCart } from "@/lib/cart-context"
import { useWishlist } from "@/lib/wishlist-context"
import ProductCard from "@/components/product-card"
import CartNotification from "@/components/cart-notification"
import WishlistNotification from "@/components/wishlist-notification"
import ProductRatings from "@/components/ratings/product-ratings"
import StarRating from "@/components/ratings/star-rating"

// Update the product data structure to include size-specific reviews
// Find the "rohit-sharma" product and modify its ratings structure

// Update the product data to include sample replies for reviews
// Find the first product (rohit-sharma) and add replies to its first review
const products = {
  "rohit-sharma": {
    id: "rohit-sharma",
    team: "MUMBAI INDIANS",
    teamName: "MUMBAI INDIANS",
    playerName: "ROHIT SHARMA",
    tagline: "Smashing records, one lazy elegance at a time! 🏏🔥",
    price: 1000,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XTJLRTENmQlBvyH2CbfxGEs5vbnpwk.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zOstYlDcm7PVg8Z7H1eK9j7i2SU3YU.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eN2hz7luo7ipg7AEQDSUp0OSujEvbF.png",
        ],
      },
      {
        size: "7 inches",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IznlTgdeWDwqyz18AArgo501pmRmEb.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W31gDXVTjkxEPfCqt0zC05ebXm4qcv.png",
        ],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Blue" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Rohit Sharma" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Officially licensed IPL merchandise",
      "High-quality PVC construction",
      "Detailed paint application",
      "Multiple points of articulation",
      "Includes display stand",
    ],
    // Replace the existing ratings object for "rohit-sharma" with this size-specific structure
    ratings: {
      "3 inches": {
        average: 4.7,
        total: 128,
        distribution: {
          5: 98,
          4: 20,
          3: 6,
          2: 2,
          1: 2,
        },
        reviews: [
          {
            id: "1",
            userName: "Cricket Fan",
            rating: 5,
            title: "Perfect collectible for MI fans!",
            content:
              "The detail on this 3-inch figurine is amazing. Rohit's batting stance is captured perfectly, and the Mumbai Indians uniform looks authentic. It's a must-have for any cricket collector.",
            date: new Date("2023-12-15"),
            verified: true,
            helpfulCount: 24,
            replies: [
              {
                id: "reply-1",
                userName: "Cricket Icons Support",
                content:
                  "Thank you for your positive feedback! We're glad you appreciate the attention to detail in our 3-inch Rohit Sharma figurine. We work closely with the Mumbai Indians team to ensure authenticity in all our products.",
                date: new Date("2023-12-16"),
                isOfficial: true,
              },
              {
                id: "reply-2",
                userName: "MI_Superfan",
                content:
                  "I agree! I got mine last week and the quality is outstanding. Did you get the display case too?",
                date: new Date("2023-12-17"),
              },
            ],
          },
          {
            id: "2",
            userName: "IPL Enthusiast",
            rating: 5,
            title: "Great quality and detail",
            content:
              "I bought this 3-inch figurine for my son who is a huge Rohit Sharma fan. The quality is excellent and the details are spot on. The figurine stands well on its base and looks great on display.",
            date: new Date("2023-11-28"),
            verified: true,
            helpfulCount: 18,
            replies: [],
          },
          {
            id: "3",
            userName: "CollectorPro",
            rating: 4,
            title: "Good but could be better",
            content:
              "The 3-inch figurine is well-made and looks great, but I wish it came with more accessories or alternate poses. Still, it's a good addition to my cricket collection.",
            date: new Date("2023-10-05"),
            verified: true,
            helpfulCount: 7,
            replies: [
              {
                id: "reply-3",
                userName: "Cricket Icons Support",
                content:
                  "Thank you for your feedback! We're constantly working to improve our products. We'll consider adding more accessories in future editions of our 3-inch line. Stay tuned for our upcoming 'Action Series' which will feature multiple pose options!",
                date: new Date("2023-10-06"),
                isOfficial: true,
              },
            ],
          },
          {
            id: "4",
            userName: "CricketMom",
            rating: 5,
            title: "Perfect gift for cricket fans",
            content:
              "Bought this 3-inch figurine for my husband's birthday and he absolutely loves it! The detail is impressive and it looks great on his desk. Highly recommend for any Rohit Sharma or MI fans.",
            date: new Date("2023-09-12"),
            verified: true,
            helpfulCount: 15,
            replies: [],
          },
        ],
      },
      "7 inches": {
        average: 4.3,
        total: 75,
        distribution: {
          5: 45,
          4: 20,
          3: 5,
          2: 3,
          1: 2,
        },
        reviews: [
          {
            id: "1",
            userName: "Premium Collector",
            rating: 5,
            title: "Worth every penny!",
            content:
              "The 7-inch Rohit Sharma figurine is absolutely stunning. The larger size allows for incredible detail in the face and uniform. The weight and quality feel premium. Definitely the centerpiece of my collection!",
            date: new Date("2023-12-10"),
            verified: true,
            helpfulCount: 32,
            replies: [
              {
                id: "reply-1",
                userName: "Cricket Icons Support",
                content:
                  "Thank you for your glowing review! Our 7-inch premium line is designed for serious collectors who appreciate the extra detail that the larger size allows. We're thrilled it's become a centerpiece in your collection!",
                date: new Date("2023-12-11"),
                isOfficial: true,
              },
            ],
          },
          {
            id: "2",
            userName: "DetailObsessed",
            rating: 4,
            title: "Amazing detail but pricey",
            content:
              "The 7-inch version has incredible detail - you can see the texture in the uniform and the facial expression is spot on. My only complaint is the price, but I suppose you get what you pay for with collectibles.",
            date: new Date("2023-11-15"),
            verified: true,
            helpfulCount: 18,
            replies: [],
          },
          {
            id: "3",
            userName: "CricketFanatic",
            rating: 3,
            title: "Good but has some issues",
            content:
              "While the 7-inch figurine looks impressive, mine arrived with a small paint defect on the helmet. Customer service was helpful and offered a partial refund, but I expected perfection at this price point.",
            date: new Date("2023-10-20"),
            verified: true,
            helpfulCount: 12,
            replies: [
              {
                id: "reply-2",
                userName: "Cricket Icons Support",
                content:
                  "We apologize for the defect in your figurine. Our 7-inch premium line undergoes rigorous quality control, but occasionally imperfections can slip through. We're glad our customer service team was able to assist, but we understand your disappointment. Please reach out directly if you'd like to discuss further options.",
                date: new Date("2023-10-21"),
                isOfficial: true,
              },
            ],
          },
          {
            id: "4",
            userName: "DisplayEnthusiast",
            rating: 5,
            title: "Perfect display piece",
            content:
              "The 7-inch Rohit Sharma figurine is the perfect size for display in my home office. It's large enough to appreciate all the details but doesn't take up too much space. The included display stand is sturdy and well-designed.",
            date: new Date("2023-09-05"),
            verified: true,
            helpfulCount: 24,
            replies: [],
          },
          {
            id: "5",
            userName: "GiftGiver",
            rating: 5,
            title: "Amazing gift for a cricket fan",
            content:
              "I bought the 7-inch version as a gift for my brother who's a huge MI fan. He was absolutely blown away by the quality and detail. The packaging is also premium and makes for a great unboxing experience.",
            date: new Date("2023-08-12"),
            verified: true,
            helpfulCount: 19,
            replies: [],
          },
        ],
      },
    },
  },
  "shubman-gill": {
    id: "shubman-gill",
    team: "GUJARAT TITANS",
    teamName: "GUJARAT TITANS",
    playerName: "SHUBMAN GILL",
    tagline: "The next generation of Indian batting excellence! 🏏✨",
    price: 1000,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iGYJoI5wtUwhhQxi9N3CZrwgScfy5Y.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hQK7iIR5JmbGUXORFbl24jm41703tP.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OfhBw4JvUwpZYvz5zsvqINWQiCHxBM.png",
        ],
      },
      {
        size: "7 inches",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TNYkejqaNFDbo0wZ7WaK9HcofT1ZZj.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eBRFbkZJYypqcOF9VCzWsEHGnKy90p.png",
        ],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Navy & Gold" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Shubman Gill" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Officially licensed IPL merchandise",
      "Premium quality materials",
      "Highly detailed sculpting",
      "Multiple poses possible",
      "Includes display stand",
    ],
    // Replace the existing ratings object for "shubman-gill" with this size-specific structure
    ratings: {
      "3 inches": {
        average: 4.5,
        total: 86,
        distribution: {
          5: 60,
          4: 18,
          3: 5,
          2: 2,
          1: 1,
        },
        reviews: [
          {
            id: "1",
            userName: "GT Fan",
            rating: 5,
            title: "Amazing Shubman Gill figurine!",
            content:
              "This 3-inch figurine perfectly captures Shubman's elegance. The details on the GT jersey are spot on and the pose is dynamic. Definitely worth the price for any Gujarat Titans fan!",
            date: new Date("2023-12-10"),
            verified: true,
            helpfulCount: 19,
            replies: [],
          },
          {
            id: "2",
            userName: "CricketCollector",
            rating: 4,
            title: "Great addition to my collection",
            content:
              "The quality of this 3-inch figurine is excellent and the likeness to Shubman is impressive. I only wish it came with an alternate batting pose option, but overall very satisfied with this purchase.",
            date: new Date("2023-11-15"),
            verified: true,
            helpfulCount: 12,
            replies: [],
          },
          {
            id: "3",
            userName: "IPLFanatic",
            rating: 5,
            title: "Perfect gift for cricket fans",
            content:
              "Bought this 3-inch figurine for my brother who's a huge Shubman Gill fan. He absolutely loves it! The detail is amazing and it looks great displayed on his shelf.",
            date: new Date("2023-10-22"),
            verified: true,
            helpfulCount: 8,
            replies: [],
          },
        ],
      },
      "7 inches": {
        average: 4.7,
        total: 52,
        distribution: {
          5: 42,
          4: 6,
          3: 3,
          2: 1,
          1: 0,
        },
        reviews: [
          {
            id: "1",
            userName: "PremiumBuyer",
            rating: 5,
            title: "Stunning 7-inch Shubman Gill figurine",
            content:
              "The 7-inch version is absolutely worth the extra cost. The detail in the face and uniform is incredible, and the larger size makes it a real statement piece in my collection. The batting stance is perfectly captured.",
            date: new Date("2023-12-05"),
            verified: true,
            helpfulCount: 15,
            replies: [],
          },
          {
            id: "2",
            userName: "DetailLover",
            rating: 5,
            title: "Incredible craftsmanship",
            content:
              "I own both the 3-inch and 7-inch versions, and the difference in detail is remarkable. The 7-inch figurine shows subtle details in the facial expression and uniform that really bring Shubman to life. Highly recommended for serious collectors.",
            date: new Date("2023-11-20"),
            verified: true,
            helpfulCount: 11,
            replies: [
              {
                id: "reply-1",
                userName: "Cricket Icons Support",
                content:
                  "Thank you for your wonderful review! We're delighted that you appreciate the extra detail in our 7-inch premium line. Our designers work hard to capture the essence of each player, and it's great to hear that the difference between the sizes is noticeable to collectors like yourself.",
                date: new Date("2023-11-21"),
                isOfficial: true,
              },
            ],
          },
          {
            id: "3",
            userName: "GTSupporter",
            rating: 4,
            title: "Great but expensive",
            content:
              "The 7-inch Shubman Gill figurine is beautifully crafted with amazing attention to detail. My only hesitation in giving 5 stars is the price point, which is quite high. That said, the quality matches the premium price.",
            date: new Date("2023-10-15"),
            verified: true,
            helpfulCount: 8,
            replies: [],
          },
        ],
      },
    },
  },
  "hardik-pandya": {
    id: "hardik-pandya",
    team: "MUMBAI INDIANS",
    teamName: "MUMBAI INDIANS",
    playerName: "HARDIK PANDYA",
    tagline: "The explosive all-rounder who changes the game! 💥",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Blue & Gold" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Hardik Pandya" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Officially licensed IPL merchandise",
      "Dynamic action pose",
      "Authentic team colors",
      "Collector's edition",
      "Premium display base included",
    ],
  },
  "jasprit-bumrah": {
    id: "jasprit-bumrah",
    team: "MUMBAI INDIANS",
    teamName: "MUMBAI INDIANS",
    playerName: "JASPRIT BUMRAH",
    tagline: "The yorker king with an unorthodox action! 🎯",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Blue" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Jasprit Bumrah" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Signature bowling action captured",
      "Detailed uniform recreation",
      "Limited edition collectible",
      "Premium packaging",
      "Authentic team branding",
    ],
  },
  "shreyas-iyer": {
    id: "shreyas-iyer",
    team: "KOLKATA KNIGHT RIDERS",
    teamName: "KOLKATA KNIGHT RIDERS",
    playerName: "SHREYAS IYER",
    tagline: "Leading from the front with style and grace! 👑",
    price: 1000,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Purple & Gold" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Shreyas Iyer" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Captain's edition collectible",
      "Premium finish and detail",
      "Authentic KKR uniform",
      "Special edition packaging",
      "Numbered collector's item",
    ],
  },
  "rinku-singh": {
    id: "rinku-singh",
    team: "KOLKATA KNIGHT RIDERS",
    teamName: "KOLKATA KNIGHT RIDERS",
    playerName: "RINKU SINGH",
    tagline: "The finisher who never gives up! 💪",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Purple & Gold" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Rinku Singh" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Rising star edition",
      "Batting action pose",
      "Detailed facial features",
      "High-quality paint finish",
      "Custom display base",
    ],
  },
  "rashid-khan": {
    id: "rashid-khan",
    team: "GUJARAT TITANS",
    teamName: "GUJARAT TITANS",
    playerName: "RASHID KHAN",
    tagline: "The spin wizard who mesmerizes batsmen! 🎯",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Navy & Gold" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Rashid Khan" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Signature bowling grip detail",
      "International star edition",
      "Premium articulation",
      "Authentic GT uniform",
      "Collector's display case",
    ],
  },
  "sanju-samson": {
    id: "sanju-samson",
    team: "RAJASTHAN ROYALS",
    teamName: "RAJASTHAN ROYALS",
    playerName: "SANJU SAMSON",
    tagline: "The elegant keeper-batsman with flair! ⚡",
    price: 1000,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Pink & Blue" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Sanju Samson" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Captain's special edition",
      "Wicketkeeping pose option",
      "Detailed batting stance",
      "Premium RR branding",
      "Limited edition numbering",
    ],
  },
  "yashasvi-jaiswal": {
    id: "yashasvi-jaiswal",
    team: "RAJASTHAN ROYALS",
    teamName: "RAJASTHAN ROYALS",
    playerName: "YASHASVI JAISWAL",
    tagline: "The young prodigy taking IPL by storm! 🌟",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Pink & Blue" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Yashasvi Jaiswal" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Young talent series",
      "Dynamic batting pose",
      "Authentic RR jersey details",
      "Special edition packaging",
      "Collector's certificate",
    ],
  },
  "david-miller": {
    id: "david-miller",
    team: "GUJARAT TITANS",
    teamName: "GUJARAT TITANS",
    playerName: "DAVID MILLER",
    tagline: "Killer Miller - The finisher extraordinaire! 💥",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Navy & Gold" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "David Miller" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "International player edition",
      "Power hitting pose",
      "Detailed GT uniform",
      "Premium finish",
      "Custom display stand",
    ],
  },
  "riyan-parag": {
    id: "riyan-parag",
    team: "RAJASTHAN ROYALS",
    teamName: "RAJASTHAN ROYALS",
    playerName: "RIYAN PARAG",
    tagline: "The young gun with unlimited potential! 🎯",
    price: 500,
    inStock: true,
    sizes: [
      {
        size: "3 inches",
        images: [
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
          "/placeholder.svg?height=400&width=300",
        ],
      },
      {
        size: "7 inches",
        images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
      },
    ],
    basicSpecs: [
      { name: "Brand", value: "Good Smile Company" },
      { name: "Theme", value: "Cricket" },
      { name: "Colour", value: "Pink & Blue" },
      { name: "Material", value: "PVC" },
      { name: "Character", value: "Riyan Parag" },
      { name: "Assembly required", value: "No" },
    ],
    extendedSpecs: [
      { name: "Manufacturer", value: "Good Smile Company" },
      { name: "Minimum Age", value: "15+ years" },
      { name: "Outer material", value: "PVC" },
      { name: "Item dimensions", value: "3 inches / 7 inches" },
      { name: "Weight", value: "230 gramme" },
    ],
    features: [
      "Rising talent series",
      "All-rounder action pose",
      "Authentic RR colors",
      "Detailed accessories",
      "Special edition base",
    ],
  },
}

// Add a function to handle default ratings for other products
// Find the section where we add default ratings for all other products
// Replace the entire Object.keys(products).forEach block with this:

// Add default ratings for all other products
Object.keys(products).forEach((key) => {
  if (!products[key].ratings) {
    // Create size-specific ratings structure
    products[key].ratings = {
      "3 inches": {
        average: 4.2,
        total: 45,
        distribution: {
          5: 25,
          4: 12,
          3: 5,
          2: 2,
          1: 1,
        },
        reviews: [
          {
            id: "1",
            userName: "Cricket Fan",
            rating: 5,
            title: "Great 3-inch collectible!",
            content:
              "This 3-inch figurine is well-made with great attention to detail. Highly recommended for any cricket fan!",
            date: new Date("2023-11-10"),
            verified: true,
            helpfulCount: 8,
          },
          {
            id: "2",
            userName: "IPL Lover",
            rating: 4,
            title: "Good quality 3-inch product",
            content: "The 3-inch figurine looks great and the details are impressive. Good addition to my collection.",
            date: new Date("2023-10-15"),
            verified: true,
            helpfulCount: 5,
          },
        ],
      },
      "7 inches": {
        average: 4.4,
        total: 32,
        distribution: {
          5: 20,
          4: 8,
          3: 2,
          2: 1,
          1: 1,
        },
        reviews: [
          {
            id: "1",
            userName: "Premium Collector",
            rating: 5,
            title: "Excellent 7-inch figurine",
            content:
              "The 7-inch version offers amazing detail and quality. The larger size really allows you to appreciate all the fine details.",
            date: new Date("2023-11-05"),
            verified: true,
            helpfulCount: 10,
          },
          {
            id: "2",
            userName: "Cricket Enthusiast",
            rating: 4,
            title: "Great 7-inch collectible",
            content:
              "This 7-inch figurine is a great addition to my premium collection. The detail and quality are excellent for the price.",
            date: new Date("2023-10-10"),
            verified: true,
            helpfulCount: 7,
          },
        ],
      },
    }
  }
})

const TEAM_GRADIENTS = {
  "MUMBAI INDIANS": {
    from: "#003B7B",
    to: "#0098E3",
  },
  "GUJARAT TITANS": {
    from: "#1B2B47",
    to: "#B87D3B",
  },
  "KOLKATA KNIGHT RIDERS": {
    from: "#3B225F",
    to: "#552987",
  },
  "RAJASTHAN ROYALS": {
    from: "#8E1F71",
    to: "#CC2DA8",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("3 inches")
  const [showExtendedSpecs, setShowExtendedSpecs] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showWishlistNotification, setShowWishlistNotification] = useState(false)

  const { dispatch } = useCart()
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { imageRef, showZoom, zoomPosition, handleMouseMove, handleMouseEnter, handleMouseLeave } = useImageZoom()

  // Get product data based on ID
  const product = products[params.id] || products["rohit-sharma"]

  // Add this after the line that gets the current size variant
  const currentSizeRatings =
    product.ratings && product.ratings[selectedSize]
      ? product.ratings[selectedSize]
      : {
          average: 0,
          total: 0,
          distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
          reviews: [],
        }

  // Get team colors
  const teamColors = TEAM_GRADIENTS[product.teamName] || TEAM_GRADIENTS["MUMBAI INDIANS"]

  // Get current size variant
  const currentSizeVariant = product.sizes.find((s) => s.size === selectedSize)
  const images = currentSizeVariant?.images || []

  // Handle size change
  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
    setSelectedImage(0)
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.playerName,
        price: product.price,
        size: selectedSize,
        image: images[0],
        quantity: 1,
        teamName: product.teamName,
      },
    })
    setShowNotification(true)
  }

  const isInWishlist = wishlistState.items.some((item) => item.id === product.id && item.size === selectedSize)

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      wishlistDispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.playerName,
          price: product.price,
          size: selectedSize,
          image: images[0],
          teamName: product.teamName,
        },
      })
      setShowWishlistNotification(true)
    } else {
      wishlistDispatch({
        type: "REMOVE_ITEM",
        payload: product.id,
      })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="h-20">
        <Navbar />
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="mb-6">
          <Link href="/shop" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
            <span>Back to results</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Column - Images */}
          <div className="md:col-span-7 space-y-4">
            <div className="hidden md:flex flex-col gap-2 absolute">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-16 h-16 border-2 rounded overflow-hidden",
                    selectedImage === index ? "border-orange-400" : "border-gray-200",
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Product image ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="relative h-[600px] md:ml-20">
              <div
                ref={imageRef}
                className="relative h-full w-full cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={product.playerName}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                Roll over image to zoom in
              </p>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="md:col-span-5">
            <div className="sticky top-24">
              {showZoom && (
                <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <div
                    className="relative w-[200%] h-[200%]"
                    style={{
                      transform: `translate(${-zoomPosition.x * 100}%, ${-zoomPosition.y * 100}%)`,
                    }}
                  >
                    <Image
                      src={images[selectedImage] || "/placeholder.svg"}
                      alt={product.playerName}
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                </div>
              )}

              <div className={cn("transition-opacity duration-200", showZoom ? "opacity-0" : "opacity-100")}>
                <div
                  className="mb-6 p-6 rounded-lg shadow-md"
                  style={{ background: `linear-gradient(135deg, ${teamColors.from}, ${teamColors.to})` }}
                >
                  <h2 className="text-xl font-bold text-white mb-2">{product.teamName}</h2>
                  <h1 className="text-3xl font-bold mb-2 text-white">{product.playerName}</h1>
                  <p className="text-white text-opacity-90">{product.tagline}</p>
                </div>

                <div className="flex gap-2 mb-6">
                  {product.sizes.map((sizeOption) => (
                    <button
                      key={sizeOption.size}
                      onClick={() => handleSizeChange(sizeOption.size)}
                      className={cn(
                        "px-4 py-2 rounded transition-colors duration-200",
                        selectedSize === sizeOption.size
                          ? `bg-[${teamColors.from}] text-white`
                          : `bg-gray-100 text-gray-800 hover:bg-[${teamColors.to}] hover:text-white`,
                      )}
                    >
                      {sizeOption.size}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Sale
                      </div>
                      <h3 className="text-3xl font-bold">₹{product.price}</h3>
                    </div>
                    {/* Replace it with: */}
                    <div className="flex items-center gap-2">
                      <StarRating rating={currentSizeRatings.average} size="sm" />
                      <Link href="#reviews" className="text-blue-600 hover:underline text-sm">
                        {currentSizeRatings.total} ratings
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 text-white"
                      style={{ background: teamColors.from, "&:hover": { background: teamColors.to } }}
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      ADD TO CART
                    </Button>
                    <Button
                      className="flex-1"
                      variant="outline"
                      style={{ borderColor: teamColors.from, color: teamColors.from }}
                      onClick={handleAddToCart}
                    >
                      BUY NOW
                    </Button>
                    <Button
                      variant="outline"
                      className={`p-2 ${isInWishlist ? "bg-pink-50 text-pink-500 border-pink-200" : ""}`}
                      style={{
                        borderColor: isInWishlist ? undefined : teamColors.from,
                        color: isInWishlist ? undefined : teamColors.from,
                      }}
                      onClick={handleAddToWishlist}
                    >
                      <Heart className={`w-5 h-5 ${isInWishlist ? "fill-pink-500" : ""}`} />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="h-5 w-5" />
                    <span>In stock</span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Brand: {product.basicSpecs[0].value}
                  </Link>
                  <Button variant="ghost" size="icon" style={{ color: teamColors.from }}>
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="my-4" style={{ borderTop: `1px solid ${teamColors.from}` }} />

                <div className="space-y-4">
                  <h2 className="text-lg font-medium" style={{ color: teamColors.from }}>
                    About this item
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {product.basicSpecs.map((spec) => (
                      <div key={spec.name} className="col-span-2 md:col-span-1">
                        <dt className="font-medium" style={{ color: teamColors.from }}>
                          {spec.name}
                        </dt>
                        <dd className="text-gray-600">{spec.value}</dd>
                      </div>
                    ))}
                  </div>

                  <div
                    className={cn(
                      "grid grid-cols-2 gap-4 transition-all duration-300",
                      showExtendedSpecs ? "opacity-100" : "opacity-0 h-0 overflow-hidden",
                    )}
                  >
                    {product.extendedSpecs.map((spec) => (
                      <div key={spec.name} className="col-span-2 md:col-span-1">
                        <dt className="font-medium" style={{ color: teamColors.from }}>
                          {spec.name}
                        </dt>
                        <dd className="text-gray600">{spec.value}</dd>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowExtendedSpecs(!showExtendedSpecs)}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                    style={{ color: teamColors.from }}
                  >
                    {showExtendedSpecs ? (
                      <>
                        See less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        See more <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div>
                    <h3 className="font-medium mb-2" style={{ color: teamColors.from }}>
                      Features
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-blue-600 hover:underline" style={{ color: teamColors.from }}>
                    Report an issue with this product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews Section */}
      <section id="reviews" className="container mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        {/* Find the ProductRatings component in the JSX and replace it with: */}
        <ProductRatings
          productId={product.id}
          averageRating={currentSizeRatings.average}
          totalRatings={currentSizeRatings.total}
          ratingDistribution={currentSizeRatings.distribution}
          reviews={currentSizeRatings.reviews}
        />
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: teamColors.from }}>
          More {product.teamName} Players
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(products)
            .filter((p) => p.team === product.team && p.id !== product.id)
            .map((player) => (
              <ProductCard
                key={player.id}
                id={player.id}
                name={player.playerName}
                description={player.tagline}
                image={player.sizes[0].images[0]}
                team={player.teamName}
                price={player.price}
                size={player.sizes[0].size}
                role="Player"
              />
            ))}
        </div>
      </section>

      <ComboDeals />
      <CartNotification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        productName={product.playerName}
      />
      <WishlistNotification
        isVisible={showWishlistNotification}
        onClose={() => setShowWishlistNotification(false)}
        productName={product.playerName}
      />
    </main>
  )
}

