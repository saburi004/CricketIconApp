"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneInput } from "@/components/auth/phone-input"
import { OtpInput } from "@/components/auth/otp-input"
import { UserDetailsForm } from "@/components/auth/user-details-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

enum SignUpStep {
  PHONE = 0,
  OTP = 1,
  USER_DETAILS = 2,
}

export default function SignUpPage() {
  const [step, setStep] = useState<SignUpStep>(SignUpStep.PHONE)
  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone)
    // TODO: Implement OTP sending logic here
    setStep(SignUpStep.OTP)
  }

  const handleOtpSubmit = (otp: string) => {
    // TODO: Implement OTP verification logic here
    setStep(SignUpStep.USER_DETAILS)
  }

  const handleUserDetailsSubmit = (userDetails: { firstName: string; lastName: string; email: string }) => {
    // TODO: Implement user registration logic here
    console.log("User registered:", { phoneNumber, ...userDetails })
    // Redirect to login or dashboard
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12 mt-20">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-[300px] md:h-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pOvxeh6YvCWYFCwpHXeEtvez8BDrV4.png"
                alt="Cricket stadium"
                fill
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003B7B] to-transparent opacity-70"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Join the Cricket Icons Community</h2>
                <p className="text-lg">Get access to exclusive content and offers</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#003B7B] mb-2">Sign Up</h2>
                <p className="text-sm text-gray-600">Create your account to get started</p>
              </div>
              <div>
                {step === SignUpStep.PHONE && <PhoneInput onSubmit={handlePhoneSubmit} />}
                {step === SignUpStep.OTP && <OtpInput onSubmit={handleOtpSubmit} />}
                {step === SignUpStep.USER_DETAILS && <UserDetailsForm onSubmit={handleUserDetailsSubmit} />}
              </div>
              {step !== SignUpStep.USER_DETAILS && (
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#003B7B] font-semibold hover:underline">
                      Log in
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

