"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Gift, Zap, Star, TrendingDown, Clock, Sparkles } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Zero Processing Fee",
    description: "Apply for any loan this month and pay no processing charges",
    validTill: "Dec 31, 2025",
    code: "ZEROFEE25",
    Icon: Gift,
    gradient: "from-[#0064D6] to-[#12D6E7]",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
  {
    id: 2,
    title: "Instant Approval",
    description: "Get loan approval in just 15 minutes with minimal documentation",
    validTill: "Limited Time",
    code: "INSTANT15",
    Icon: Zap,
    gradient: "from-[#12D6E7] to-[#008B96]",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
  {
    id: 3,
    title: "Cashback Offer",
    description: "Get up to Rs.5,000 cashback on your first loan disbursement",
    validTill: "Jan 15, 2026",
    code: "CASH5K",
    Icon: Star,
    gradient: "from-[#008B96] to-[#002E9C]",
    bgPattern: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
  {
    id: 4,
    title: "Low Interest Rate",
    description: "Special rates starting from 8.25% p.a. for home loans",
    validTill: "Dec 25, 2025",
    code: "LOWRATE",
    Icon: TrendingDown,
    gradient: "from-[#002E9C] to-[#0064D6]",
    bgPattern: "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
  {
    id: 5,
    title: "Festival Special",
    description: "Exclusive festival offers with extra benefits and rewards",
    validTill: "Festive Season",
    code: "FESTIVE25",
    Icon: Sparkles,
    gradient: "from-[#0064D6] to-[#008B96]",
    bgPattern: "radial-gradient(circle at 0% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
]

export function OffersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  // Auto-scroll every 5 seconds
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

  return (
    <section className="py-16 bg-gradient-to-b from-[#f4f7fa] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <motion.span
              className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Special Offers
            </motion.span>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111]"
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
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`relative h-full rounded-3xl p-6 bg-gradient-to-br ${offer.gradient} overflow-hidden cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundImage: offer.bgPattern }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <offer.Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{offer.description}</p>

                  {/* Code badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <span className="text-white/70 text-xs">Use Code:</span>
                    <span className="text-white font-bold text-sm">{offer.code}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Valid till {offer.validTill}</span>
                    </div>
                    <motion.button className="text-white font-semibold text-sm hover:underline" whileHover={{ x: 3 }}>
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {offers.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-[#0064D6]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
