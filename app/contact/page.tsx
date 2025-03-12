"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ShoppingBag,
  Newspaper,
  Headphones,
  Handshake,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState("customer")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section. Alternatively, you can use the tracking number provided in your order confirmation email.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all our products. Items must be in their original condition with tags attached. Please note that customized items cannot be returned unless they are defective.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping times vary depending on the destination. Please check our shipping page for more details on rates and delivery times.",
    },
    {
      question: "How do I care for my cricket figurines?",
      answer:
        "We recommend keeping your figurines away from direct sunlight and dust. Clean them gently with a soft, dry cloth. Avoid using water or cleaning chemicals as they may damage the paint and materials.",
    },
    {
      question: "Are your products officially licensed?",
      answer:
        "Yes, all our cricket merchandise is officially licensed by the respective teams and cricket boards. Each product comes with an authenticity certificate.",
    },
  ]

  // Form components
  const CustomerSupportForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
        >
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
          <p className="text-green-700">Thank you for reaching out. Our support team will get back to you shortly.</p>
        </motion.div>
      ) : (
        <>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Full Name <span className="text-red-300">*</span>
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="John Doe"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email Address <span className="text-red-300">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              How can we help you? <span className="text-red-300">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Describe your issue or question in detail"
              className="min-h-[150px] rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              required
              className="rounded border-white/20 bg-white/10 text-blue-400 focus:ring-blue-400"
            />
            <label htmlFor="privacy" className="text-sm text-white/80">
              I agree to the{" "}
              <Link href="/privacy" className="text-blue-300 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 rounded-lg py-6 text-lg font-medium"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin h-5 w-5 border-2 border-gray-900 border-t-transparent rounded-full"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                <span>Submit Request</span>
              </div>
            )}
          </Button>
        </>
      )}
    </form>
  )

  const MediaFormCard = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
        >
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-2">Media Inquiry Sent!</h3>
          <p className="text-green-700">Thank you for your interest. Our media team will contact you soon.</p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-white">
                First Name <span className="text-red-300">*</span>
              </label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-white">
                Last Name <span className="text-red-300">*</span>
              </label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email <span className="text-red-300">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-white">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="mediaOutlet" className="text-sm font-medium text-white">
              Media Outlet Name <span className="text-red-300">*</span>
            </label>
            <Input
              id="mediaOutlet"
              name="mediaOutlet"
              required
              placeholder="Media Company Name"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-medium text-white">
              Media Outlet Website
            </label>
            <Input
              id="website"
              name="website"
              placeholder="https://www.example.com"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-white">
                City
              </label>
              <Input
                id="city"
                name="city"
                placeholder="Mumbai"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="region" className="text-sm font-medium text-white">
                Region
              </label>
              <Input
                id="region"
                name="region"
                placeholder="Maharashtra"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-white">
              Subject of Inquiry <span className="text-red-300">*</span>
            </label>
            <Textarea
              id="subject"
              name="subject"
              required
              placeholder="Please describe the purpose of your inquiry"
              className="min-h-[150px] rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy-media"
              required
              className="rounded border-white/20 bg-white/10 text-blue-400 focus:ring-blue-400"
            />
            <label htmlFor="privacy-media" className="text-sm text-white/80">
              I agree to the{" "}
              <Link href="/privacy" className="text-blue-300 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 rounded-lg py-6 text-lg font-medium"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin h-5 w-5 border-2 border-gray-900 border-t-transparent rounded-full"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                <span>Submit</span>
              </div>
            )}
          </Button>
        </>
      )}
    </form>
  )

  const RetailersFormCard = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
        >
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-2">Retailer Inquiry Received!</h3>
          <p className="text-green-700">
            Thank you for your interest in stocking Cricket Icons. Our retail team will be in touch soon.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName-retail" className="text-sm font-medium text-white">
                First Name <span className="text-red-300">*</span>
              </label>
              <Input
                id="firstName-retail"
                name="firstName"
                required
                placeholder="John"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName-retail" className="text-sm font-medium text-white">
                Last Name <span className="text-red-300">*</span>
              </label>
              <Input
                id="lastName-retail"
                name="lastName"
                required
                placeholder="Doe"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email-retail" className="text-sm font-medium text-white">
                Email <span className="text-red-300">*</span>
              </label>
              <Input
                id="email-retail"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone-retail" className="text-sm font-medium text-white">
                Phone Number <span className="text-red-300">*</span>
              </label>
              <Input
                id="phone-retail"
                name="phone"
                required
                placeholder="+91 98765 43210"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="businessName" className="text-sm font-medium text-white">
              Business Name <span className="text-red-300">*</span>
            </label>
            <Input
              id="businessName"
              name="businessName"
              required
              placeholder="Your Business Name"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="interest" className="text-sm font-medium text-white">
              Tell us about your interest in Cricket Icons <span className="text-red-300">*</span>
            </label>
            <Textarea
              id="interest"
              name="interest"
              required
              placeholder="Please describe your business and why you're interested in stocking our products"
              className="min-h-[150px] rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy-retail"
              required
              className="rounded border-white/20 bg-white/10 text-blue-400 focus:ring-blue-400"
            />
            <label htmlFor="privacy-retail" className="text-sm text-white/80">
              I agree to the{" "}
              <Link href="/privacy" className="text-blue-300 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 rounded-lg py-6 text-lg font-medium"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin h-5 w-5 border-2 border-gray-900 border-t-transparent rounded-full"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                <span>Submit</span>
              </div>
            )}
          </Button>
        </>
      )}
    </form>
  )

  const PartnershipsFormCard = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
        >
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 mb-2">Partnership Inquiry Received!</h3>
          <p className="text-green-700">
            Thank you for your interest in partnering with Cricket Icons. Our partnerships team will review your
            proposal and contact you soon.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName-partner" className="text-sm font-medium text-white">
                First Name <span className="text-red-300">*</span>
              </label>
              <Input
                id="firstName-partner"
                name="firstName"
                required
                placeholder="John"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName-partner" className="text-sm font-medium text-white">
                Last Name <span className="text-red-300">*</span>
              </label>
              <Input
                id="lastName-partner"
                name="lastName"
                required
                placeholder="Doe"
                className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email-partner" className="text-sm font-medium text-white">
              Email <span className="text-red-300">*</span>
            </label>
            <Input
              id="email-partner"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium text-white">
              Company Name <span className="text-red-300">*</span>
            </label>
            <Input
              id="companyName"
              name="companyName"
              required
              placeholder="Your Company Name"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="jobTitle" className="text-sm font-medium text-white">
              Job Title <span className="text-red-300">*</span>
            </label>
            <Input
              id="jobTitle"
              name="jobTitle"
              required
              placeholder="Your Position"
              className="rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="partnershipIdea" className="text-sm font-medium text-white">
              Tell us about your partnership idea <span className="text-red-300">*</span>
            </label>
            <Textarea
              id="partnershipIdea"
              name="partnershipIdea"
              required
              placeholder="Please describe your partnership proposal in detail"
              className="min-h-[150px] rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy-partner"
              required
              className="rounded border-white/20 bg-white/10 text-blue-400 focus:ring-blue-400"
            />
            <label htmlFor="privacy-partner" className="text-sm text-white/80">
              I agree to the{" "}
              <Link href="/privacy" className="text-blue-300 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 rounded-lg py-6 text-lg font-medium"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin h-5 w-5 border-2 border-gray-900 border-t-transparent rounded-full"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                <span>Submit</span>
              </div>
            )}
          </Button>
        </>
      )}
    </form>
  )

  const renderActiveForm = () => {
    switch (activeForm) {
      case "customer":
        return <CustomerSupportForm />
      case "media":
        return <MediaFormCard />
      case "retailers":
        return <RetailersFormCard />
      case "partnerships":
        return <PartnershipsFormCard />
      default:
        return <CustomerSupportForm />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#020B2D] via-[#0C1B4D] to-[#1E2761] text-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl"></div>

          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] animate-[pulse_15s_linear_infinite]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-1 w-20 mx-auto mb-4 rounded-full"></div>
              <span className="text-amber-400 font-medium">Get in Touch</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text"
            >
              We'd Love to Hear From You
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions about our products, need assistance with an order, or want to share your feedback? Our team
              is here to help!
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <Link href="#contact-form">
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium">
                  Send a Message
                </Button>
              </Link>
              <Link href="#faq">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-500/10 transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium"
                >
                  View FAQs
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 1234 567 890",
                subContent: "Mon-Fri, 9am-6pm IST",
                color: "blue",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "support@cricketicons.com",
                subContent: "We'll respond within 24 hours",
                color: "amber",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "Cricket Icons HQ",
                subContent: "Mumbai, Maharashtra, India",
                color: "green",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 59, 123, 0.15)" }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#003B7B]/10 to-[#0078FF]/5 rounded-bl-3xl"></div>

                <div className="relative z-10">
                  <div
                    className={`p-4 rounded-full bg-${item.color}-100 text-${item.color}-600 inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#003B7B] mb-2">{item.title}</h3>
                  <p className="text-lg font-medium text-gray-800 mb-1">{item.content}</p>
                  <p className="text-sm text-gray-500">{item.subContent}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Tabs and Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-[#020B2D] via-[#0C1B4D] to-[#1E2761]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-blue-200">Select the appropriate form for your inquiry</p>
            </motion.div>

            {/* Form Tabs */}
            <motion.div variants={itemVariants} className="bg-[#0A1E4B] rounded-t-xl p-2 grid grid-cols-4 gap-2 mb-0">
              <button
                onClick={() => setActiveForm("customer")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex flex-col items-center gap-2 ${
                  activeForm === "customer"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900"
                    : "bg-[#1A2E5B] text-white hover:bg-[#2A3E6B]"
                }`}
              >
                <Headphones className="h-5 w-5" />
                <span>Support</span>
              </button>
              <button
                onClick={() => setActiveForm("media")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex flex-col items-center gap-2 ${
                  activeForm === "media"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900"
                    : "bg-[#1A2E5B] text-white hover:bg-[#2A3E6B]"
                }`}
              >
                <Newspaper className="h-5 w-5" />
                <span>Media</span>
              </button>
              <button
                onClick={() => setActiveForm("retailers")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex flex-col items-center gap-2 ${
                  activeForm === "retailers"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900"
                    : "bg-[#1A2E5B] text-white hover:bg-[#2A3E6B]"
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Retailers</span>
              </button>
              <button
                onClick={() => setActiveForm("partnerships")}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex flex-col items-center gap-2 ${
                  activeForm === "partnerships"
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900"
                    : "bg-[#1A2E5B] text-white hover:bg-[#2A3E6B]"
                }`}
              >
                <Handshake className="h-5 w-5" />
                <span>Partners</span>
              </button>
            </motion.div>

            {/* Form Container */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0A1E4B] rounded-b-xl shadow-2xl border border-[#1A2E5B] overflow-hidden"
            >
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeForm}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Form Description */}
                    <div className="mb-6 text-center">
                      {activeForm === "customer" && (
                        <>
                          <h3 className="text-xl font-bold text-amber-400 mb-2">Customer Support</h3>
                          <p className="text-blue-200">
                            Need help with your Cricket Icon product? We're here to assist you.
                          </p>
                        </>
                      )}
                      {activeForm === "media" && (
                        <>
                          <h3 className="text-xl font-bold text-amber-400 mb-2">Media Inquiries</h3>
                          <p className="text-blue-200">Covering a story? We'd be happy to contribute or talk to you.</p>
                        </>
                      )}
                      {activeForm === "retailers" && (
                        <>
                          <h3 className="text-xl font-bold text-amber-400 mb-2">Retailers</h3>
                          <p className="text-blue-200">Are you looking to stock Cricket Icons products?</p>
                        </>
                      )}
                      {activeForm === "partnerships" && (
                        <>
                          <h3 className="text-xl font-bold text-amber-400 mb-2">Partnerships</h3>
                          <p className="text-blue-200">Interested in partnering with Cricket Icons?</p>
                        </>
                      )}
                    </div>

                    {renderActiveForm()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map and Business Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 h-[400px] relative"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dvDgnhENs1970ey6ClW16kPHRvmjAY.png"
                alt="Cricket Icons Office Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003B7B]/80 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Cricket Icons Headquarters</h3>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-300" />
                    <span>123 Cricket Lane, Mumbai, Maharashtra, India</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 mb-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-blue-100 text-[#003B7B]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003B7B]">Business Hours</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="font-medium text-gray-800">{item.day}</span>
                      <span className={`${item.hours === "Closed" ? "text-red-500" : "text-blue-600"} font-medium`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
                <h3 className="text-xl font-bold text-[#003B7B] mb-6">Connect With Us</h3>

                <div className="flex flex-wrap gap-4 justify-center">
                  {[
                    { icon: Facebook, color: "bg-[#1877F2]", name: "Facebook" },
                    { icon: Twitter, color: "bg-[#1DA1F2]", name: "Twitter" },
                    {
                      icon: Instagram,
                      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
                      name: "Instagram",
                    },
                    { icon: Youtube, color: "bg-[#FF0000]", name: "YouTube" },
                    { icon: Linkedin, color: "bg-[#0A66C2]", name: "LinkedIn" },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${item.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                      title={`Follow us on ${item.name}`}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-[#020B2D] via-[#0C1B4D] to-[#1E2761] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-1 w-20 mx-auto mb-4 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-blue-200">Find answers to common questions about our products and services</p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0A1E4B] rounded-xl shadow-md border border-[#1A2E5B] overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  >
                    <h3 className="font-semibold text-lg text-amber-400">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-amber-400 transition-transform duration-300 ${activeAccordion === index ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeAccordion === index ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-blue-200">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="mt-12 text-center bg-[#0A1E4B] rounded-2xl p-8 border border-[#1A2E5B]"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4">Still Have Questions?</h3>
              <p className="text-blue-200 mb-6">Our team is here to help with any other questions you might have</p>
              <Link href="#contact-form">
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 rounded-full px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

