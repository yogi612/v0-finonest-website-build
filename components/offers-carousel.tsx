"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
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
  Copy,
  Check,
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
    savings: "Save up to Rs.25,000",
  },
  {
    id: 2,
    title: "Instant Approval",
    description: "Get loan approval in just 15 minutes with minimal documentation",
    validTill: "Limited Time",
    code: "INSTANT15",
    Icon: Zap,
    gradient: "from-[#12D6E7] to-[#008B96]",
    savings: "Quick & Easy",
  },
  {
    id: 3,
    title: "Cashback Offer",
    description: "Get up to Rs.5,000 cashback on your first loan disbursement",
    validTill: "Jan 15, 2026",
    code: "CASH5K",
    Icon: Star,
    gradient: "from-[#008B96] to-[#002E9C]",
    savings: "Earn Rs.5,000",
  },
  {
    id: 4,
    title: "Low Interest Rate",
    description: "Special rates starting from 8.25% p.a. for home loans",
    validTill: "Dec 25, 2025",
    code: "LOWRATE",
    Icon: TrendingDown,
    gradient: "from-[#002E9C] to-[#0064D6]",
    savings: "Save Lakhs on EMI",
  },
  {
    id: 5,
    title: "Festival Special",
    description: "Exclusive festival offers with extra benefits and rewards",
    validTill: "Festive Season",
    code: "FESTIVE25",
    Icon: Sparkles,
    gradient: "from-[#0064D6] to-[#008B96]",
    savings: "Bonus Rewards",
  },
]

export function OffersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

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
      const scrollAmount = 360
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="relative z-10 py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="mb-6 sm:mb-0">
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
              Exclusive Deals
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
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
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`relative h-[320px] rounded-3xl p-6 bg-gradient-to-br ${offer.gradient} overflow-hidden cursor-pointer shadow-xl`}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <offer.Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                      {offer.savings}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                  <p className="text-white/85 text-sm mb-4 leading-relaxed flex-grow">{offer.description}</p>

                  {/* Code badge with copy */}
                  <button
                    onClick={() => copyCode(offer.code)}
                    className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl mb-4 w-full hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white/70 text-xs">Use Code:</span>
                    <span className="text-white font-bold text-sm tracking-wider flex-grow text-left">
                      {offer.code}
                    </span>
                    {copiedCode === offer.code ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/70" />
                    )}
                  </button>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Valid till {offer.validTill}</span>
                    </div>
                    <Link href="/eligibility">
                      <motion.span
                        className="text-white font-semibold text-sm hover:underline flex items-center gap-1"
                        whileHover={{ x: 3 }}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
