"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  Zap,
  Star,
  TrendingDown,
  Sparkles,
  Clock,
  ArrowRight,
  BadgePercent,
  Wallet,
} from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Zero Processing Fee",
    description: "Apply for any loan this month and pay no processing charges",
    validTill: "Dec 31, 2025",
    code: "ZEROFEE25",
    Icon: Gift,
    gradient: "from-[#0064D6] to-[#12D6E7]",
  },
  {
    id: 2,
    title: "Instant Approval",
    description: "Get loan approval in just 15 minutes with minimal documentation",
    validTill: "Limited Time",
    code: "INSTANT15",
    Icon: Zap,
    gradient: "from-[#12D6E7] to-[#008B96]",
  },
  {
    id: 3,
    title: "Cashback Offer",
    description: "Get up to Rs.5,000 cashback on your first loan disbursement",
    validTill: "Jan 15, 2026",
    code: "CASH5K",
    Icon: Star,
    gradient: "from-[#008B96] to-[#002E9C]",
  },
  {
    id: 4,
    title: "Low Interest Rate",
    description: "Special rates starting from 8.25% p.a. for home loans",
    validTill: "Dec 25, 2025",
    code: "LOWRATE",
    Icon: TrendingDown,
    gradient: "from-[#002E9C] to-[#0064D6]",
  },
  {
    id: 5,
    title: "Festival Special",
    description: "Exclusive festival offers with extra benefits and rewards",
    validTill: "Festive Season",
    code: "FESTIVE25",
    Icon: Sparkles,
    gradient: "from-[#0064D6] to-[#008B96]",
  },
]

const promoBanners = [
  {
    id: 1,
    title: "New Year Special",
    subtitle: "Start 2026 with zero processing fees on all loans",
    discount: "100% OFF",
    validTill: "Jan 31, 2026",
    gradient: "from-[#0064D6] to-[#12D6E7]",
    Icon: Gift,
  },
  {
    id: 2,
    title: "Credit Score Boost",
    subtitle: "Free credit score check and personalized improvement tips",
    discount: "FREE",
    validTill: "Always",
    gradient: "from-[#12D6E7] to-[#008B96]",
    Icon: TrendingDown,
  },
  {
    id: 3,
    title: "Refer & Earn",
    subtitle: "Earn Rs.2,000 for every successful referral",
    discount: "Rs.2,000",
    validTill: "Ongoing",
    gradient: "from-[#008B96] to-[#002E9C]",
    Icon: Wallet,
  },
]

export function OffersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeBanner, setActiveBanner] = useState(0)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollButtons)
      return () => carousel.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scroll("right")
        }
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % promoBanners.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBanner}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-[180px] sm:h-[200px] bg-gradient-to-r ${promoBanners[activeBanner].gradient} p-8 sm:p-10`}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2" />

                {/* Floating icon */}
                <motion.div
                  className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block"
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = promoBanners[activeBanner].Icon
                      return <IconComponent className="w-12 h-12 text-white" />
                    })()}
                  </div>
                </motion.div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between h-full">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3"
                    >
                      <BadgePercent className="w-4 h-4" />
                      {promoBanners[activeBanner].discount}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl sm:text-3xl font-bold text-white mb-2"
                    >
                      {promoBanners[activeBanner].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/90 text-base sm:text-lg max-w-md"
                    >
                      {promoBanners[activeBanner].subtitle}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 sm:mt-0"
                  >
                    <Link href="/eligibility">
                      <motion.button
                        className="group bg-white text-[#0064D6] px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Claim Offer
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Banner dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {promoBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBanner(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeBanner ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.span
              className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Special Offers
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Exclusive Deals{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                Just For You
              </span>
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Limited-time offers designed to help you save more on your financial journey
            </motion.p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-[#0064D6] text-[#0064D6] hover:bg-[#0064D6] hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              whileHover={canScrollLeft ? { scale: 1.05 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-[#0064D6] text-[#0064D6] hover:bg-[#0064D6] hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              whileHover={canScrollRight ? { scale: 1.05 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`relative h-[280px] rounded-3xl p-6 bg-gradient-to-br ${offer.gradient} overflow-hidden cursor-pointer shadow-xl`}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <offer.Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed flex-grow">{offer.description}</p>

                  {/* Code badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 w-fit">
                    <span className="text-white/80 text-xs">Use Code:</span>
                    <span className="text-white font-bold text-sm tracking-wide">{offer.code}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center gap-1.5 text-white/80 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Valid till {offer.validTill}</span>
                    </div>
                    <motion.button
                      className="text-white font-semibold text-sm hover:underline flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      Apply Now
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile dots indicator */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {offers.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
    </section>
  )
}
