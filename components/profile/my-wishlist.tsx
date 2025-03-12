"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Trash2, Eye, Share2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"

export default function MyWishlist() {
  const { state, dispatch } = useWishlist()
  const { dispatch: cartDispatch } = useCart()
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const wishlistItems = state.items

  const removeFromWishlist = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    })
  }

  const addToCart = (item: any) => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        size: item.size,
        image: item.image,
        quantity: 1,
        teamName: item.teamName,
      },
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="p-6">
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
      </motion.div>

      {state.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {state.items.map((item) => (
              <motion.div key={item.id} variants={cardVariants} whileHover="hover" exit="exit" layout>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md group transition-all duration-300 hover:shadow-xl">
                  <div className="relative">
                    <div className="absolute top-0 right-0 p-2 z-10 flex gap-1">
                      <motion.button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-red-500 hover:bg-white transition-all duration-300 shadow-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-blue-500 hover:bg-white transition-all duration-300 shadow-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="h-4 w-4" />
                      </motion.button>
                    </div>

                    <div
                      className="aspect-square relative overflow-hidden cursor-pointer"
                      onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/80 via-[#0C1B4D]/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Button
                          className="rounded-full bg-white text-gray-900 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-md"
                          size="icon"
                        >
                          <Eye className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-[#020B2D]/80 to-transparent">
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-white font-medium">{item.teamName}</p>
                        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5">
                          <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                          <span className="text-xs font-medium text-gray-800">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-amber-600 font-bold mb-4">₹{item.price}</p>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 rounded-lg bg-gradient-to-r from-[#020B2D] to-[#1E2761] hover:from-[#0C1B4D] hover:to-[#2E3771] text-white font-medium shadow-sm hover:shadow-lg transition-all duration-300"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>

                {selectedItem === item.id && (
                  <motion.div
                    className="mt-2 bg-white p-4 rounded-xl border border-gray-100 shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">Product Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Official IPL merchandise</p>
                      <p>• High-quality PVC material</p>
                      <p>• Detailed design with team colors</p>
                      <p>• Perfect collectible for cricket fans</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          variants={itemVariants}
          className="text-center py-16 bg-gradient-to-br from-[#020B2D] to-[#1E2761] rounded-xl border border-blue-900 shadow-md"
        >
          <motion.div
            className="inline-block p-4 rounded-full bg-amber-400/20 text-amber-400 mb-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Heart className="h-8 w-8" />
          </motion.div>
          <h3 className="text-xl font-semibold text-white mb-2">Your wishlist is empty</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Add items to your wishlist to keep track of products you love
          </p>
          <Link href="/shop">
            <Button
              className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-gray-900 font-medium shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </Button>
          </Link>
        </motion.div>
      )}

      {wishlistItems.length > 0 && (
        <motion.div variants={itemVariants} className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Items in your wishlist are saved for 30 days. Add them to your cart before they're gone!
          </p>
          <Button
            variant="outline"
            className="rounded-lg border-gray-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Shopping
          </Button>
        </motion.div>
      )}

      {wishlistItems.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="mt-10 bg-gradient-to-br from-[#020B2D]/5 to-[#1E2761]/5 p-6 rounded-xl border border-blue-100 shadow-md"
        >
          <h3 className="text-lg font-semibold text-[#020B2D] mb-4">Recommended For You</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Recommended product"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-medium text-gray-800 truncate group-hover:text-amber-600 transition-colors duration-300">
                    Cricket Player Figurine
                  </h4>
                  <p className="text-xs text-amber-600 font-semibold">₹1,499</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

