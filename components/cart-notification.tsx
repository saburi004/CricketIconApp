"use client"

import type React from "react"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartNotificationProps {
  isVisible: boolean
  onClose: () => void
  productName: string
}

const CartNotification: React.FC<CartNotificationProps> = ({ isVisible, onClose, productName }) => {
  useEffect(() => {
    if (isVisible) {
      // Prevent scrolling when the notification is visible
      document.body.style.overflow = "hidden"
    } else {
      // Re-enable scrolling when the notification is hidden
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold">Added to Cart</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-gray-600 mb-4">{productName} has been added to your cart successfully.</p>
            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Continue Shopping
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CartNotification

