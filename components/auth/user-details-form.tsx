"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { User, Mail } from "lucide-react"

interface UserDetails {
  firstName: string
  lastName: string
  email: string
}

interface UserDetailsFormProps {
  onSubmit: (userDetails: UserDetails) => void
}

export function UserDetailsForm({ onSubmit }: UserDetailsFormProps) {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      onSubmit(userDetails)
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
          First Name
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={userDetails.firstName}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B7B]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
          Last Name
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={userDetails.lastName}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B7B]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={userDetails.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B7B]"
          />
        </div>
      </div>
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-[#003B7B] hover:bg-[#002B5B] text-white font-semibold py-3 px-4 rounded-md transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Complete Sign Up"}
        </Button>
      </div>
    </form>
  )
}

