"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card = ({ className, children }: CardProps) => {
  return <div className={cn("bg-white rounded-lg shadow-md", className)}>{children}</div>
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export const CardContent = ({ className, children }: CardContentProps) => {
  return <div className={cn("p-4", className)}>{children}</div>
}

interface ButtonProps {
  className?: string
  variant?: "ghost" | "default"
  size?: "icon" | "sm" | "md" | "lg"
  onClick?: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

export const Button = ({ className, variant = "default", size = "md", onClick, children, style }: ButtonProps) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    variant === "ghost" ? "bg-transparent text-gray-700 hover:bg-gray-100" : "bg-blue-500 text-white hover:bg-blue-600",
    size === "icon" ? "p-2" : "",
    className,
  )

  return (
    <button type="button" onClick={onClick} className={buttonClasses} style={style}>
      {children}
    </button>
  )
}

