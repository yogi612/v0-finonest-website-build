"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useParallax } from "./parallax-provider"
import {
  ArrowRight,
  Shield,
  Clock,
  Percent,
  CheckCircle2,
  Home,
  Briefcase,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const heroCards = [
  {
    title: "Personal Loans",
    subtitle: "Up to ₹25 Lakhs",
    rate: "10.5%",
    Icon: CreditCard,
    gradient: "bg-gradient-to-br from-[#0064D6] to-[#002E9C]",
    shadowColor: "shadow-[#0064D6]/30",
  },
  {
    title: "Home Loans",
    subtitle: "Dream Home Awaits",
    rate: "8.5%",
    Icon: Home,
    gradient: "bg-gradient-to-br from-[#12D6E7] to-[#008B96]",
    shadowColor: "shadow-[#12D6E7]/30",
  },
  {
    title: "Business Loans",
    subtitle: "Grow Your Business",
    rate: "12%",
    Icon: Briefcase,
    gradient: "bg-gradient-to-br from-[#008B96] to-[#002E9C]",
    shadowColor: "shadow-[#008B96]/30",
  },
]

const heroSlides = [
  {
    badge: "India's Trusted Finance Partner",
    title: "Smart Loans for a",
    highlight: "Brighter Future",
    description:
      "Get instant loan approvals with competitive interest rates. Experience hassle-free financing with complete transparency.",
  },
  {
    badge: "Quick Approval Process",
    title: "Your Dreams,",
    highlight: "Our Priority",
    description:
      "From personal loans to home financing, we offer customized solutions that fit your unique financial journey.",
  },
  {
    badge: "Lowest Interest Rates",
    title: "Finance Made",
    highlight: "Simple & Fast",
    description:
      "Apply online in minutes, get approval in hours. No hidden charges, no lengthy paperwork, just pure simplicity.",
  },
]

const trustBadges = [
  { icon: Shield, text: "RBI Registered" },
  { icon: Clock, text: "24hr Approval" },
  { icon: Percent, text: "Lowest Rates" },
  { icon: CheckCircle2, text: "No Hidden Fees" },
]

const smoothEasing = [0.16, 1, 0.3, 1]

export function HeroSection() {
  const { setIsHoveringCTA } = useParallax()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const cardsScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85])
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % heroCards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] overflow-hidden pt-20">
      {/* Animated background */}
      <motion.div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-white" style={{ y: bgY }} />

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 bg-[#12D6E7]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-[5%] w-96 h-96 bg-[#0064D6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.15, 1, 1.15],
            x: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[30%] w-64 h-64 bg-[#002E9C]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: smoothEasing }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: smoothEasing }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-[#12D6E7] rounded-full animate-pulse" />
                    {heroSlides[activeSlide].badge}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6 text-balance"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: smoothEasing }}
                >
                  {heroSlides[activeSlide].title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                    {heroSlides[activeSlide].highlight}
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: smoothEasing }}
                >
                  {heroSlides[activeSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-[#0064D6]/20 flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6]/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === activeSlide ? "w-8 bg-[#0064D6]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-[#0064D6]/20 flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6]/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: smoothEasing }}
            >
              <Link href="/eligibility">
                <motion.button
                  className="group bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#0064D6]/20 flex items-center gap-2"
                  whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 100, 214, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: smoothEasing }}
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                >
                  Check Eligibility
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  className="px-8 py-4 rounded-full font-semibold text-[#0064D6] border-2 border-[#0064D6]/20 hover:border-[#0064D6]/40 hover:bg-[#0064D6]/5 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Products
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, ease: smoothEasing }}
                >
                  <badge.icon className="w-5 h-5 text-[#008B96]" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - 3D Card Stack */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            style={{
              y: cardsY,
              scale: cardsScale,
              opacity: cardsOpacity,
            }}
          >
            <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
              {heroCards.map((card, index) => {
                const isActive = index === activeCard
                const offset = (index - activeCard + heroCards.length) % heroCards.length

                return (
                  <motion.div
                    key={card.title}
                    className="absolute left-1/2 top-1/2 w-72 sm:w-80"
                    initial={false}
                    animate={{
                      translateX: "-50%",
                      translateY: `calc(-50% + ${offset * 35}px)`,
                      translateZ: isActive ? 100 : 50 - offset * 25,
                      rotateY: offset * -4,
                      rotateX: offset * 2,
                      scale: 1 - offset * 0.07,
                      opacity: 1 - offset * 0.25,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: smoothEasing,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: heroCards.length - offset,
                    }}
                  >
                    <div
                      className={`relative ${card.gradient} rounded-3xl p-8 shadow-2xl ${card.shadowColor} overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10 pointer-events-none" />

                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5">
                          <card.Icon className="w-7 h-7 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                        <p className="text-white/90 mb-6 font-medium">{card.subtitle}</p>

                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-white/70 text-sm block">Starting from</span>
                            <div className="text-4xl font-bold text-white">{card.rate}</div>
                            <span className="text-white/70 text-sm">p.a.</span>
                          </div>
                          <motion.button
                            className="bg-white text-[#0064D6] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Card indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {heroCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeCard ? "w-8 bg-[#0064D6]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#0064D6]/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#0064D6] rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
