"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Play, Shield, Clock, Percent, CheckCircle2 } from "lucide-react"
import { useParallax } from "./parallax-provider"

const smoothEasing = [0.16, 1, 0.3, 1]

const heroBanners = [
  {
    id: 1,
    badge: "Festive Season Sale",
    title: "Get up to 50% off",
    highlight: "Processing Fees",
    description: "Limited time offer on all loan products. Apply now and save big!",
    cta: "Grab Offer",
    image: "/festive-celebration-finance-gold-coins.jpg",
    gradient: "from-[#0064D6] to-[#002E9C]",
  },
  {
    id: 2,
    badge: "Home Loan Special",
    title: "Dream Home Awaits",
    highlight: "8.25% p.a.",
    description: "Lowest interest rates starting at just 8.25% p.a. for home loans.",
    cta: "Apply Now",
    image: "/modern-dream-home-sunset.jpg",
    gradient: "from-[#12D6E7] to-[#008B96]",
  },
  {
    id: 3,
    badge: "Instant Approval",
    title: "Personal Loan in",
    highlight: "15 Minutes",
    description: "Get approved in 15 minutes, disbursed in 24 hours. No hassle!",
    cta: "Check Eligibility",
    image: "/happy-person-receiving-money-transfer-phone.jpg",
    gradient: "from-[#008B96] to-[#002E9C]",
  },
  {
    id: 4,
    badge: "Business Growth",
    title: "Expand Your Business",
    highlight: "Up to 50L",
    description: "Flexible business loans to fuel your growth with quick disbursals.",
    cta: "Get Started",
    image: "/business-growth-chart-office-success.jpg",
    gradient: "from-[#002E9C] to-[#0064D6]",
  },
]

const trustBadges = [
  { icon: Shield, text: "RBI Registered" },
  { icon: Clock, text: "24hr Approval" },
  { icon: Percent, text: "Lowest Rates" },
  { icon: CheckCircle2, text: "No Hidden Fees" },
]

export function HeroSection() {
  const { setIsHoveringCTA } = useParallax()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeBanner, setActiveBanner] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const nextBanner = useCallback(() => {
    setActiveBanner((prev) => (prev + 1) % heroBanners.length)
  }, [])

  const prevBanner = useCallback(() => {
    setActiveBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextBanner, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextBanner])

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 overflow-hidden bg-white">
      {/* Background Layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0064D6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#12D6E7]/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Banner Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBanner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: smoothEasing }}
              className={`relative h-[500px] sm:h-[550px] lg:h-[600px] bg-gradient-to-br ${heroBanners[activeBanner].gradient}`}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={heroBanners[activeBanner].image || "/placeholder.svg"}
                  alt={heroBanners[activeBanner].title}
                  fill
                  className="object-cover opacity-20"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 max-w-3xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6 w-fit border border-white/20"
                >
                  <span className="w-2 h-2 bg-[#12D6E7] rounded-full animate-pulse" />
                  {heroBanners[activeBanner].badge}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                >
                  {heroBanners[activeBanner].title}{" "}
                  <span className="text-[#12D6E7]">{heroBanners[activeBanner].highlight}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg sm:text-xl text-white/85 mb-8 max-w-xl leading-relaxed"
                >
                  {heroBanners[activeBanner].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/eligibility">
                    <motion.button
                      className="group bg-white text-[#0064D6] px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3"
                      whileHover={{ scale: 1.03, boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      onMouseEnter={() => setIsHoveringCTA(true)}
                      onMouseLeave={() => setIsHoveringCTA(false)}
                    >
                      {heroBanners[activeBanner].cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    className="flex items-center gap-3 px-6 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                    Watch Video
                  </motion.button>
                </motion.div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                  className="h-full bg-[#12D6E7]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  key={activeBanner}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="absolute bottom-8 right-8 flex items-center gap-3 z-20">
            <button
              onClick={prevBanner}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {heroBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBanner(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === activeBanner ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextBanner}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Badges - below banner */}
        <motion.div
          className="mt-10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0064D6]/10 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-[#0064D6]" />
                </div>
                <span className="text-sm font-semibold text-[#111111]">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
