"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Gift, Award, ShoppingBag, MessageSquare, Users, ChevronRight, Star, Calendar, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MyRewards() {
  const rewardPoints = 750
  const nextTier = 1000
  const percentage = (rewardPoints / nextTier) * 100
  const [isHovering, setIsHovering] = useState(false)

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

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="p-6">
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Rewards</h2>
      </motion.div>

      {/* Hero Rewards Card */}
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-[#020B2D] via-[#0C1B4D] to-[#1E2761] rounded-xl overflow-hidden shadow-xl">
          <div className="relative p-8">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Reward Points</h3>
                <motion.div
                  className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text"
                  animate={{ scale: isHovering ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {rewardPoints} points
                </motion.div>
                <p className="text-gray-300">
                  Earn <span className="font-semibold text-amber-400">{nextTier - rewardPoints}</span> more points to
                  reach Gold tier!
                </p>
              </div>

              <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="text-center mb-4">
                  <motion.span
                    className="inline-block p-3 rounded-full bg-amber-400/20 text-amber-400 mb-2"
                    animate={{
                      rotate: isHovering ? [0, 10, -10, 10, 0] : 0,
                      scale: isHovering ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="h-6 w-6" />
                  </motion.span>
                  <h4 className="font-semibold text-white">Silver Member</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Progress to Gold</span>
                      <span className="font-medium text-white">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* How to Earn More Points */}
      <motion.div variants={itemVariants} className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">How to Earn More Points</h3>
          <div className="h-1 w-10 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: ShoppingBag,
              title: "Make a purchase",
              description: "Earn 1 point for every ₹100 spent",
              color: "amber",
            },
            {
              icon: MessageSquare,
              title: "Write a review",
              description: "Earn 50 points for each product review",
              color: "blue",
            },
            {
              icon: Users,
              title: "Refer a friend",
              description: "Earn 200 points when your friend makes their first purchase",
              color: "green",
            },
            {
              icon: Gift,
              title: "Participate in quizzes",
              description: "Earn up to 100 points for each quiz you complete",
              color: "purple",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-md flex items-start gap-4 transition-all duration-300 hover:border-amber-200 group cursor-pointer"
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-[#020B2D] to-[#1E2761] text-amber-400 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                <item.icon className="h-6 w-6" />
              </motion.div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rewards History */}
      <motion.div variants={itemVariants} className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Rewards History</h3>
          <Button variant="outline" className="text-sm border-amber-500 text-amber-600">
            View All
          </Button>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { activity: "Purchase", date: "Feb 15, 2024", points: "+120", status: "Credited" },
                  { activity: "Product Review", date: "Feb 10, 2024", points: "+50", status: "Credited" },
                  { activity: "Referral Bonus", date: "Jan 28, 2024", points: "+200", status: "Credited" },
                  { activity: "Welcome Bonus", date: "Jan 15, 2024", points: "+100", status: "Credited" },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#020B2D] to-[#1E2761]">
                          {item.activity === "Purchase" && <ShoppingBag className="h-5 w-5 text-amber-400" />}
                          {item.activity === "Product Review" && <Star className="h-5 w-5 text-amber-400" />}
                          {item.activity === "Referral Bonus" && <Users className="h-5 w-5 text-amber-400" />}
                          {item.activity === "Welcome Bonus" && <Trophy className="h-5 w-5 text-amber-400" />}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.activity}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-500">{item.date}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">{item.points}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Membership Tiers */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-[#020B2D] via-[#0C1B4D] to-[#1E2761] p-8 rounded-xl border border-blue-900 shadow-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Membership Tiers</h3>
          <div className="h-1 w-10 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tier: "Silver",
              points: "0-999",
              current: true,
              benefits: ["5% discount on all purchases", "Early access to sales", "Birthday rewards"],
            },
            {
              tier: "Gold",
              points: "1,000-2,499",
              current: false,
              benefits: [
                "10% discount on all purchases",
                "Free shipping on orders above ₹1,000",
                "Exclusive member events",
                "Double points on your birthday",
              ],
            },
            {
              tier: "Platinum",
              points: "2,500+",
              current: false,
              benefits: [
                "15% discount on all purchases",
                "Free shipping on all orders",
                "Priority customer service",
                "Exclusive limited edition products",
                "Triple points on your birthday",
              ],
            },
          ].map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                tier.current ? "border-2 border-amber-500 shadow-lg shadow-amber-500/20" : "border border-blue-800"
              }`}
            >
              <div
                className={`p-6 ${
                  tier.current ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900" : "bg-white/5 text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold">{tier.tier}</h4>
                  {tier.current && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-80">{tier.points} points</p>
              </div>

              <div className={`p-6 ${tier.current ? "bg-white" : "bg-white/5"}`}>
                <h5 className={`text-sm font-semibold mb-3 ${tier.current ? "text-gray-900" : "text-white"}`}>
                  Benefits:
                </h5>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${tier.current ? "text-gray-700" : "text-gray-300"}`}
                    >
                      <div className={`mt-1 h-2 w-2 rounded-full ${tier.current ? "bg-amber-500" : "bg-blue-400"}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

