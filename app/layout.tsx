import type React from "react"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { WishlistProvider } from "@/lib/wishlist-context"
import TopNavigation from "@/components/top-navigation"
import BottomNavigation from "@/components/bottom-navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#020B2D] to-[#0C1B4D] min-h-screen">
        <CartProvider>
          <WishlistProvider>
            <TopNavigation />
            <div className="pb-20">{children}</div>
            <BottomNavigation />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
