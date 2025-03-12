"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Bell, Mail, Phone, Shield, Trash2, Globe, CreditCard, Lock, Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfileSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [marketingEmails, setMarketingEmails] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("english")
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
        ></motion.div>
      </motion.div>

      <div className="space-y-8">
        {/* Notifications Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white shadow-sm">
              <Bell className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label
                  htmlFor="email-notifications"
                  className="text-base font-medium text-gray-800 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-amber-500" />
                  Email Notifications
                </Label>
                <p className="text-sm text-gray-500">Receive email updates about your account activity</p>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-yellow-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label
                  htmlFor="sms-notifications"
                  className="text-base font-medium text-gray-800 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-amber-500" />
                  SMS Notifications
                </Label>
                <p className="text-sm text-gray-500">Receive text messages for order updates and promotions</p>
              </div>
              <Switch
                id="sms-notifications"
                checked={smsNotifications}
                onCheckedChange={setSmsNotifications}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-yellow-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label
                  htmlFor="marketing-emails"
                  className="text-base font-medium text-gray-800 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-amber-500" />
                  Marketing Emails
                </Label>
                <p className="text-sm text-gray-500">Receive emails about new products, offers and promotions</p>
              </div>
              <Switch
                id="marketing-emails"
                checked={marketingEmails}
                onCheckedChange={setMarketingEmails}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-yellow-400"
              />
            </div>
          </div>
        </motion.div>

        {/* Preferences Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Preferences</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="dark-mode" className="text-base font-medium text-gray-800">
                  Dark Mode
                </Label>
                <p className="text-sm text-gray-500">Switch between light and dark themes</p>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-yellow-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="language" className="text-base font-medium text-gray-800">
                Language
              </Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full bg-white border-gray-200 rounded-xl focus:border-amber-500 focus:ring-amber-500 transition-all duration-300 shadow-sm">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="tamil">Tamil</SelectItem>
                  <SelectItem value="telugu">Telugu</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white">
              <CreditCard className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Payment Methods</h3>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-4">
            <p className="text-amber-800 text-sm">Your payment information is securely stored and encrypted.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded"></div>
                <div>
                  <p className="font-medium text-gray-800">•••• •••• •••• 4242</p>
                  <p className="text-xs text-gray-500">Expires 12/25</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                  Remove
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-lg border-gray-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300"
            >
              Add New Payment Method
            </Button>
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Security</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="two-factor-auth" className="text-base font-medium text-gray-800">
                  Two-Factor Authentication
                </Label>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <Switch
                id="two-factor-auth"
                checked={twoFactorAuth}
                onCheckedChange={setTwoFactorAuth}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-yellow-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-base font-medium text-gray-800">
                Change Password
              </Label>
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Current password"
                    className="bg-white border-gray-200 rounded-xl focus:border-amber-500 focus:ring-amber-500 transition-all duration-300 shadow-sm pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <Input
                  type="password"
                  placeholder="New password"
                  className="bg-white border-gray-200 rounded-xl focus:border-amber-500 focus:ring-amber-500 transition-all duration-300 shadow-sm"
                />
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  className="bg-white border-gray-200 rounded-xl focus:border-amber-500 focus:ring-amber-500 transition-all duration-300 shadow-sm"
                />
                <Button className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-gray-900 font-medium shadow-sm hover:shadow-md transition-all duration-300">
                  <Lock className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              {!showDeleteConfirm ? (
                <Button
                  variant="outline"
                  className="w-full rounded-lg border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Account
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 p-4 rounded-lg border border-red-200"
                >
                  <p className="text-red-600 font-medium mb-3">Are you sure you want to delete your account?</p>
                  <p className="text-red-500 text-sm mb-4">
                    This action cannot be undone. All your data will be permanently deleted.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 border-gray-200 hover:bg-gray-50 text-gray-700"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">Confirm Delete</Button>
                  </div>
                </motion.div>
              )}
              <p className="text-xs text-gray-500 mt-2 text-center">
                This action cannot be undone. All your data will be permanently deleted.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Save Changes */}
        <motion.div variants={itemVariants} className="flex justify-end">
          <Button
            className="rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-gray-900 font-medium shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Save Changes
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

