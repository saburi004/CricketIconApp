"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"
import Navbar from "@/components/navbar"
import { Info } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { state } = useCart()
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true)
  const [saveInformation, setSaveInformation] = useState(true)
  const [newsAndOffers, setNewsAndOffers] = useState(false)
  const [textOffers, setTextOffers] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (state.items.length === 0) {
      router.push("/cart")
    }
  }, [state.items.length, router])

  if (state.items.length === 0) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="h-20">
        <Navbar />
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="flex-grow space-y-8">
            {/* Express Checkout */}
            <div>
              <h2 className="text-lg font-medium mb-4">Express checkout</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-[#5A31F4] text-white py-3 rounded flex items-center justify-center h-14">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rXk9Dop3EvP3EK4wZLMGkdHCiKEZmg.png"
                    alt="Shop Pay"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </button>
                <button className="bg-black text-white py-3 rounded flex items-center justify-center h-14">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U1rMMKb0H0lddHWniAdHjyNOoQthGU.png"
                    alt="Google Pay"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </button>
              </div>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">OR</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Contact</h2>
                <button className="text-sm text-blue-600 hover:underline">Log in</button>
              </div>
              <div className="space-y-4">
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="newsletter"
                    checked={newsAndOffers}
                    onCheckedChange={(checked) => setNewsAndOffers(checked as boolean)}
                  />
                  <Label htmlFor="newsletter">Email me with news and offers</Label>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-lg font-medium mb-4">Delivery</h2>
              <div className="space-y-4">
                <Select defaultValue="IN">
                  <SelectTrigger>
                    <SelectValue placeholder="Country/Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IN">India</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>

                <Input placeholder="Address" />
                <Input placeholder="Apartment, suite, etc. (optional)" />

                <div className="grid grid-cols-6 gap-4">
                  <Input className="col-span-2" placeholder="City" />
                  <Select defaultValue="MH" className="col-span-2">
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MH">Maharashtra</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input className="col-span-2" placeholder="PIN code" />
                </div>

                <div className="relative">
                  <Input placeholder="Phone (optional)" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Info className="h-4 w-4 text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="text-offers"
                    checked={textOffers}
                    onCheckedChange={(checked) => setTextOffers(checked as boolean)}
                  />
                  <Label htmlFor="text-offers">Text me with news and offers</Label>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-medium mb-4">Payment</h2>
              <div className="border rounded-lg p-4 space-y-4">
                <p className="text-sm text-gray-600">All transactions are secure and encrypted.</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border rounded p-3 bg-white">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" checked className="text-blue-600" />
                      <span>Credit card</span>
                    </div>
                    <div className="flex gap-2">
                      <Image src="/visa.png" alt="Visa" width={32} height={20} />
                      <Image src="/mastercard.png" alt="Mastercard" width={32} height={20} />
                      <Image src="/amex.png" alt="American Express" width={32} height={20} />
                      <Image src="/discover.png" alt="Discover" width={32} height={20} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Input placeholder="Card number" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Expiration date (MM / YY)" />
                      <div className="relative">
                        <Input placeholder="Security code" />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Info className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <Input placeholder="Name on card" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="billing-address"
                      checked={useShippingAsBilling}
                      onCheckedChange={(checked) => setUseShippingAsBilling(checked as boolean)}
                    />
                    <Label htmlFor="billing-address">Use shipping address as billing address</Label>
                  </div>
                </div>

                {/* Alternative Payment Methods */}
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between border rounded p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" className="text-blue-600" />
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rXk9Dop3EvP3EK4wZLMGkdHCiKEZmg.png"
                        alt="Shop Pay"
                        width={100}
                        height={32}
                        className="h-8 w-auto"
                      />
                    </div>
                    <span className="text-sm text-gray-600">Pay in full or in installments</span>
                  </button>

                  <button className="w-full flex items-center justify-between border rounded p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" className="text-blue-600" />
                      <span>Coinbase Commerce</span>
                    </div>
                    <div className="flex gap-2">
                      <Image src="/crypto-icons.png" alt="Crypto payment options" width={100} height={24} />
                    </div>
                  </button>

                  <button className="w-full flex items-center justify-between border rounded p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" className="text-blue-600" />
                      <span>Buy Now, Pay Later with Sezzle</span>
                    </div>
                    <Image src="/sezzle.png" alt="Sezzle" width={24} height={24} />
                  </button>

                  <button className="w-full flex items-center justify-between border rounded p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" className="text-blue-600" />
                      <span>Afterpay</span>
                    </div>
                    <Image src="/afterpay.png" alt="Afterpay" width={64} height={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div>
              <h2 className="text-lg font-medium mb-4">Remember me</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="save-info"
                    checked={saveInformation}
                    onCheckedChange={(checked) => setSaveInformation(checked as boolean)}
                  />
                  <Label htmlFor="save-info">Save my information for a faster checkout with a Shop account</Label>
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
                  <Input className="pl-12" placeholder="Mobile phone number" />
                </div>

                <p className="text-sm text-gray-600">
                  By continuing, you agree to Shop's{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <Button className="w-full bg-[#5A31F4] hover:bg-[#4A21E4] text-white">Pay now</Button>

                <div className="flex justify-center gap-4 text-sm text-gray-600">
                  <Link href="#" className="hover:underline">
                    Refund policy
                  </Link>
                  <Link href="#" className="hover:underline">
                    Shipping policy
                  </Link>
                  <Link href="#" className="hover:underline">
                    Privacy policy
                  </Link>
                  <Link href="#" className="hover:underline">
                    Terms of service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-[380px]">
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                    </div>
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="flex gap-2">
                <Input placeholder="Discount code or gift card" />
                <Button variant="outline">Apply</Button>
              </div>

              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{state.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span>Shipping</span>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                  <span>Enter shipping address</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">INR</span> <span className="text-2xl">₹{state.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

