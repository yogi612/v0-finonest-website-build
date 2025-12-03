"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ParallaxCard } from "./parallax-card"
import {
  ArrowRight,
  Home,
  User,
  Briefcase,
  CreditCard,
  Car,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react"
import { useParallax } from "./parallax-provider"

const products = [
  {
    icon: User,
    title: "Personal Loans",
    description: "Quick personal loans for all your needs with minimal documentation.",
    rate: "10.5%",
    maxAmount: "Rs.25 Lakhs",
    tenure: "5 Years",
    color: "#0064D6",
    href: "/products#personal",
    features: ["Instant approval", "Flexible tenure", "No collateral"],
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable home loans.",
    rate: "8.5%",
    maxAmount: "Rs.5 Crores",
    tenure: "30 Years",
    color: "#12D6E7",
    href: "/products#home",
    features: ["Lowest rates", "Long tenure", "Tax benefits"],
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with flexible business financing.",
    rate: "12%",
    maxAmount: "Rs.50 Lakhs",
    tenure: "7 Years",
    color: "#008B96",
    href: "/products#business",
    features: ["Quick disbursal", "Flexible EMI", "No security"],
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Premium credit cards with exclusive rewards and benefits.",
    rate: "0%",
    maxAmount: "Rs.10 Lakhs",
    tenure: "Lifetime",
    color: "#002E9C",
    href: "/products#credit",
    features: ["Cashback offers", "Reward points", "Free for life"],
  },
  {
    icon: Car,
    title: "Vehicle Loans",
    description: "Drive your dream car home with our easy vehicle loans.",
    rate: "9.5%",
    maxAmount: "Rs.1 Crore",
    tenure: "7 Years",
    color: "#0064D6",
    href: "/products#vehicle",
    features: ["100% financing", "Quick process", "Low EMI"],
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with our education financing options.",
    rate: "7.5%",
    maxAmount: "Rs.75 Lakhs",
    tenure: "15 Years",
    color: "#12D6E7",
    href: "/products#education",
    features: ["Moratorium period", "Cover all costs", "Easy repayment"],
  },
]

export function ProductsSection() {
  const { setIsHoveringCTA } = useParallax()
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [80, 0])

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
      const scrollAmount = 380
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ opacity, y }}>
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <motion.span
              className="inline-block px-4 py-2 bg-[#12D6E7]/10 rounded-full text-[#008B96] text-sm font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Products
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Financial Solutions
            </motion.h2>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-end">
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

        {/* Products Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory scroll-smooth -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ParallaxCard index={index} glowColor={product.color}>
                <div className="relative p-2">
                  {/* Icon and Rate badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <product.icon className="w-7 h-7" style={{ color: product.color }} />
                    </div>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: product.color }}
                    >
                      From {product.rate} p.a.
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#111111] mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4" style={{ color: product.color }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-5 p-4 bg-[#f8fafc] rounded-xl">
                    <div>
                      <div className="text-lg font-bold text-[#111111]">{product.maxAmount}</div>
                      <div className="text-xs text-gray-500">Max Amount</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#111111]">{product.tenure}</div>
                      <div className="text-xs text-gray-500">Max Tenure</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={product.href}>
                    <motion.button
                      className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white transition-all"
                      style={{ backgroundColor: product.color }}
                      whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setIsHoveringCTA(true)}
                      onMouseLeave={() => setIsHoveringCTA(false)}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/products">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full font-semibold shadow-lg shadow-[#0064D6]/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHoveringCTA(true)}
              onMouseLeave={() => setIsHoveringCTA(false)}
            >
              Explore All Products
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
