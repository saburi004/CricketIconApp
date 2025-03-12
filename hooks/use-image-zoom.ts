"use client"

import { useState, useRef, useCallback } from "react"

interface ZoomPosition {
  x: number
  y: number
}

export function useImageZoom() {
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPosition, setZoomPosition] = useState<ZoomPosition>({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = (event.clientX - left) / width
    const y = (event.clientY - top) / height

    setZoomPosition({ x, y })
  }, [])

  const handleMouseEnter = useCallback(() => setShowZoom(true), [])
  const handleMouseLeave = useCallback(() => setShowZoom(false), [])

  return {
    imageRef,
    showZoom,
    zoomPosition,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  }
}

