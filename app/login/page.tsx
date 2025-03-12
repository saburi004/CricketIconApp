"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneInput } from "@/components/auth/phone-input"
import { OtpInput } from "@/components/auth/otp-input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

enum LoginStep {
  PHONE = 0,
  OTP = 1,
}

export default function LoginPage() {
  const [step, setStep] = useState<LoginStep>(LoginStep.PHONE)
  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone)
    // TODO: Implement OTP sending logic here
    setStep(LoginStep.OTP)
  }

  const handleOtpSubmit = (otp: string) => {
    // TODO: Implement OTP verification and login logic here
    console.log("User logged in:", { phoneNumber, otp })
    // Redirect to dashboard or home page
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12 mt-20">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WFFpUBMZlfXXLIr8sXNopmdxiWm7JV.png"
                alt="Cricket player"
                fill
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003B7B] to-transparent opacity-70"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                <p className="text-lg">Log in to access your Cricket Icons account</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#003B7B] mb-2">Login</h2>
                <p className="text-sm text-gray-600">Enter your phone number to log in</p>
              </div>
              <div>
                {step === LoginStep.PHONE && <PhoneInput onSubmit={handlePhoneSubmit} />}
                {step === LoginStep.OTP && <OtpInput onSubmit={handleOtpSubmit} />}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-[#003B7B] font-semibold hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

