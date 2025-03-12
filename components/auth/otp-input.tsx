"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { KeyRound } from "lucide-react"

interface OtpInputProps {
  onSubmit: (otp: string) => void
}

export function OtpInput({ onSubmit }: OtpInputProps) {
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Focus the input field when component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Countdown timer
    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearInterval(timer as NodeJS.Timeout)
  }, [timeLeft])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      onSubmit(otp)
      setIsLoading(false)
    }, 1000)
  }

  const handleResendOtp = () => {
    setTimeLeft(30)
    // TODO: Implement resend OTP logic
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
          One-Time Password
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <KeyRound className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="otp"
            ref={inputRef}
            type="text"
            placeholder="Enter the 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            maxLength={6}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B7B] text-center tracking-widest text-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">OTP sent to your mobile number</p>
          {timeLeft > 0 ? (
            <p className="text-xs text-gray-500">Resend in {timeLeft}s</p>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className="text-xs text-[#003B7B] font-medium hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-[#003B7B] hover:bg-[#002B5B] text-white font-semibold py-3 px-4 rounded-md transition duration-300"
        disabled={isLoading || otp.length < 6}
      >
        {isLoading ? "Verifying..." : "Verify OTP"}
      </Button>
    </form>
  )
}

