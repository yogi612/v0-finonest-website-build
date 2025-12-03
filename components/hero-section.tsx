"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useParallax } from "./parallax-provider"
import { ArrowRight, Shield, Clock, Percent, CheckCircle2 } from "lucide-react"

const heroCards = [
  {
    title: "Personal Loans",
    subtitle: "Up to ₹25 Lakhs",
    rate: "10.5%",
    icon: "💳",
    color: "from-[#0064D6] to-[#002E9C]",
  },
  {
    title: "Home Loans",
    subtitle: "Dream Home Awaits",
    rate: "8.5%",
    icon: "🏠",
    color: "from-[#12D6E7] to-[#008B96]",
  },
  {
    title: "Business Loans",
    subtitle: "Grow Your Business",
    rate: "12%",
    icon: "📈",
    color: "from-[#008B96] to-[#002E9C]",
  },
]

const trustBadges = [
  { icon: Shield, text: "RBI Registered" },
  { icon: Clock, text: "24hr Approval" },
  { icon: Percent, text: "Lowest Rates" },
  { icon: CheckCircle2, text: "No Hidden Fees" },
]

export function HeroSection() {
  const { setIsHoveringCTA, scrollY } = useParallax()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms for hero cards
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const cardsScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % heroCards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] overflow-hidden pt-20">
      {/* Animated background */}
      <motion.div className="absolute inset-0 bg-gradient-to-b from-[#f4f7fa] via-white to-white" style={{ y: bgY }} />

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 bg-[#12D6E7]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-[5%] w-96 h-96 bg-[#0064D6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#12D6E7] rounded-full animate-pulse" />
                India's Trusted Finance Partner
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Smart Loans for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                Brighter Future
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get instant loan approvals with competitive interest rates. Experience hassle-free financing with complete
              transparency.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/eligibility">
                <motion.button
                  className="group bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#0064D6]/25 flex items-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 100, 214, 0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                >
                  Check Eligibility
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  className="px-8 py-4 rounded-full font-semibold text-[#0064D6] border-2 border-[#0064D6]/20 hover:border-[#0064D6]/40 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <badge.icon className="w-5 h-5 text-[#008B96]" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Floating cards */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            style={{
              y: cardsY,
              scale: cardsScale,
              opacity: cardsOpacity,
            }}
          >
            <div className="relative w-full h-full perspective-1000">
              {heroCards.map((card, index) => {
                const isActive = index === activeCard
                const offset = (index - activeCard + heroCards.length) % heroCards.length

                return (
                  <motion.div
                    key={card.title}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80"
                    initial={false}
                    animate={{
                      z: isActive ? 100 : 50 - offset * 25,
                      y: offset * 40,
                      x: offset * 20,
                      rotateY: offset * -5,
                      rotateX: offset * 3,
                      scale: 1 - offset * 0.08,
                      opacity: 1 - offset * 0.3,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className={`bg-gradient-to-br ${card.color} rounded-3xl p-8 shadow-2xl text-white`}>
                      {/* Card glow */}
                      <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl scale-90 opacity-50" />

                      <div className="relative">
                        <div className="text-5xl mb-4">{card.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                        <p className="text-white/80 mb-6">{card.subtitle}</p>

                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-white/60 text-sm">Starting from</span>
                            <div className="text-3xl font-bold">{card.rate}</div>
                            <span className="text-white/60 text-sm">p.a.</span>
                          </div>
                          <motion.button
                            className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
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
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeCard ? "w-8 bg-[#0064D6]" : "bg-gray-300 hover:bg-gray-400"
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
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#0064D6]/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#0064D6] rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
