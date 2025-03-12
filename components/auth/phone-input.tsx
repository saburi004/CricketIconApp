"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"

interface PhoneInputProps {
  onSubmit: (phoneNumber: string) => void
}

export function PhoneInput({ onSubmit }: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      onSubmit(phoneNumber)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B7B]"
          />
        </div>
        <p className="text-xs text-gray-500">We'll send you a one-time password to verify your number</p>
      </div>
      <Button
        type="submit"
        className="w-full bg-[#003B7B] hover:bg-[#002B5B] text-white font-semibold py-3 px-4 rounded-md transition duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send OTP"}
      </Button>
    </form>
  )
}

