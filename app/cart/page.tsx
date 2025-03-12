"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import Navbar from "@/components/navbar"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { state, dispatch } = useCart()
  const [isGift, setIsGift] = useState(false)
  const router = useRouter()

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="h-20">
        <Navbar />
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Shopping Cart ({state.items.length} items)</h1>
                <button
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Deselect all items
                </button>
              </div>

              <div className="divide-y">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="py-6 flex gap-6">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.teamName}</p>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                        </div>
                        <p className="font-medium">₹{item.price}</p>
                      </div>

                      <div className="mt-4 flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-red-600 hover:underline flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" /> Remove
                        </button>

                        <button className="text-sm text-blue-600 hover:underline">Save for later</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Items ({state.items.length}):</span>
                  <span>₹{state.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-medium">
                  <span>Subtotal:</span>
                  <span>₹{state.total}</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">This order contains a gift</span>
                </label>

                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                  onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </Card>

            {state.items.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Customers who bought these items also bought:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Example recommended products */}
                  <Link href="#" className="block">
                    <div className="aspect-square relative mb-2">
                      <Image src="/placeholder.svg" alt="Recommended product" fill className="object-contain" />
                    </div>
                    <p className="text-sm text-blue-600 hover:underline">Similar Product</p>
                    <p className="text-sm font-medium">₹499</p>
                  </Link>
                  <Link href="#" className="block">
                    <div className="aspect-square relative mb-2">
                      <Image src="/placeholder.svg" alt="Recommended product" fill className="object-contain" />
                    </div>
                    <p className="text-sm text-blue-600 hover:underline">Similar Product</p>
                    <p className="text-sm font-medium">₹599</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

