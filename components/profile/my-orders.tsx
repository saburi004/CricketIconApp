"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Download, Package, Truck, CheckCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const orders = [
  {
    id: "ORD001",
    date: "2024-02-15",
    total: "₹2,500",
    status: "Delivered",
    statusColor: "bg-green-500",
    statusIcon: CheckCircle,
    items: "Rohit Sharma Figurine, Mumbai Indians Cap",
    tracking: "DELHIVERY1234567890",
  },
  {
    id: "ORD002",
    date: "2024-02-10",
    total: "₹1,800",
    status: "Shipped",
    statusColor: "bg-blue-500",
    statusIcon: Truck,
    items: "Virat Kohli Figurine",
    tracking: "DELHIVERY9876543210",
  },
  {
    id: "ORD003",
    date: "2024-02-05",
    total: "₹3,200",
    status: "Processing",
    statusColor: "bg-amber-500",
    statusIcon: Package,
    items: "MS Dhoni Figurine, Chennai Super Kings Jersey",
    tracking: null,
  },
  {
    id: "ORD004",
    date: "2024-01-28",
    total: "₹1,200",
    status: "Pending",
    statusColor: "bg-gray-400",
    statusIcon: Clock,
    items: "IPL 2024 Calendar, Team Stickers Pack",
    tracking: null,
  },
]

export default function MyOrders() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
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

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
        ></motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100">
              <TableHead className="font-semibold text-gray-700">Order ID</TableHead>
              <TableHead className="font-semibold text-gray-700">Date</TableHead>
              <TableHead className="font-semibold text-gray-700">Total</TableHead>
              <TableHead className="font-semibold text-gray-700">Status</TableHead>
              <TableHead className="font-semibold text-gray-700">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <motion.tr
                key={order.id}
                className={`hover:bg-gray-50 transition-colors duration-300 cursor-pointer ${expandedOrder === order.id ? "bg-amber-50" : ""}`}
                onClick={() => toggleOrderDetails(order.id)}
                whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                variants={itemVariants}
              >
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="font-semibold text-amber-600">{order.total}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${order.statusColor} animate-pulse`}></span>
                    <span className="flex items-center gap-1">
                      <order.statusIcon className="h-4 w-4 text-gray-500" />
                      {order.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg border-gray-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleOrderDetails(order.id)
                      }}
                    >
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-lg text-gray-500 hover:text-gray-700 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {expandedOrder && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md p-6"
        >
          {orders
            .filter((order) => order.id === expandedOrder)
            .map((order) => (
              <div key={`details-${order.id}`} className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Order Details</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Processing"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Order ID</p>
                    <p className="font-medium">{order.id}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Order Date</p>
                    <p className="font-medium">{order.date}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                    <p className="font-medium text-amber-600">{order.total}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Items</p>
                  <p className="font-medium">{order.items}</p>
                </div>

                {order.tracking && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Tracking Number</p>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{order.tracking}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg border-gray-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300"
                      >
                        Track Order
                      </Button>
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-gray-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300"
                  >
                    Download Invoice
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-lg text-gray-500 hover:text-gray-700 transition-all duration-300"
                  >
                    Need Help?
                  </Button>
                </div>
              </div>
            ))}
        </motion.div>
      )}

      <motion.div variants={itemVariants} className="mt-8 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Need help with an order?{" "}
          <a href="#" className="text-amber-600 hover:underline font-medium">
            Contact our support team
          </a>
        </p>
        <div className="inline-flex items-center justify-center">
          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
            Free shipping on orders above ₹1,500
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

