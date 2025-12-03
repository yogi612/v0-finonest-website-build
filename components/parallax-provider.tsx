"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react"

interface ParallaxContextType {
  scrollY: number
  scrollProgress: number
  currentSection: string
  setCurrentSection: (section: string) => void
  viewportHeight: number
  isHoveringCTA: boolean
  setIsHoveringCTA: (hovering: boolean) => void
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  scrollProgress: 0,
  currentSection: "hero",
  setCurrentSection: () => {},
  viewportHeight: 0,
  isHoveringCTA: false,
  setIsHoveringCTA: () => {},
})

export function useParallax() {
  return useContext(ParallaxContext)
}

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState("hero")
  const [viewportHeight, setViewportHeight] = useState(0)
  const [isHoveringCTA, setIsHoveringCTA] = useState(false)
  const rafRef = useRef<number>()

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0

      setScrollY(scrollTop)
      setScrollProgress(progress)
    })
  }, [])

  useEffect(() => {
    setViewportHeight(window.innerHeight)

    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  return (
    <ParallaxContext.Provider
      value={{
        scrollY,
        scrollProgress,
        currentSection,
        setCurrentSection,
        viewportHeight,
        isHoveringCTA,
        setIsHoveringCTA,
      }}
    >
      {children}
    </ParallaxContext.Provider>
  )
}
