"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Home, CreditCard, Briefcase, Car, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"

const productBanners = [
  {
    id: 1,
    title: "Home Loan",
    tagline: "Make Your Dream Home a Reality",
    features: ["Up to Rs.5 Crore", "8.25% p.a. onwards", "30-year tenure"],
    image: "/modern-luxury-interior.png",
    Icon: Home,
    gradient: "from-[#0064D6] to-[#002E9C]",
    link: "/products#home-loan",
  },
  {
    id: 2,
    title: "Personal Loan",
    tagline: "Quick Cash for Your Personal Needs",
    features: ["Up to Rs.25 Lakhs", "10.5% p.a. onwards", "Instant approval"],
    image: "/happy-person-celebrating-financial-freedom.jpg",
    Icon: CreditCard,
    gradient: "from-[#12D6E7] to-[#008B96]",
    link: "/products#personal-loan",
  },
  {
    id: 3,
    title: "Business Loan",
    tagline: "Fuel Your Business Growth",
    features: ["Up to Rs.50 Lakhs", "12% p.a. onwards", "Flexible EMI"],
    image: "/successful-business-office-meeting.jpg",
    Icon: Briefcase,
    gradient: "from-[#008B96] to-[#002E9C]",
    link: "/products#business-loan",
  },
  {
    id: 4,
    title: "Car Loan",
    tagline: "Drive Your Dream Car Today",
    features: ["Up to Rs.1 Crore", "8.5% p.a. onwards", "100% on-road funding"],
    image: "/luxury-car-showroom.png",
    Icon: Car,
    gradient: "from-[#002E9C] to-[#0064D6]",
    link: "/products#car-loan",
  },
  {
    id: 5,
    title: "Education Loan",
    tagline: "Invest in Your Future",
    features: ["Up to Rs.75 Lakhs", "9% p.a. onwards", "Moratorium period"],
    image: "/students-graduation-university.jpg",
    Icon: GraduationCap,
    gradient: "from-[#0064D6] to-[#12D6E7]",
    link: "/products#education-loan",
  },
]

export function ProductsBanner() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productBanners.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % productBanners.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + productBanners.length) % productBanners.length)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Products
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Financial Solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              For Everyone
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <div
                className={`relative h-[400px] sm:h-[450px] bg-gradient-to-r ${productBanners[activeIndex].gradient}`}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={productBanners[activeIndex].image || "/placeholder.svg"}
                    alt={productBanners[activeIndex].title}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                {/* Floating icon */}
                <motion.div
                  className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
                    {(() => {
                      const IconComponent = productBanners[activeIndex].Icon
                      return <IconComponent className="w-16 h-16 text-white" />
                    })()}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 lg:hidden"
                  >
                    {(() => {
                      const IconComponent = productBanners[activeIndex].Icon
                      return <IconComponent className="w-8 h-8 text-white" />
                    })()}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                  >
                    {productBanners[activeIndex].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl sm:text-2xl text-white/90 mb-8"
                  >
                    {productBanners[activeIndex].tagline}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-3 mb-8"
                  >
                    {productBanners[activeIndex].features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link href={productBanners[activeIndex].link}>
                      <motion.button
                        className="group bg-white text-[#0064D6] px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-2"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#0064D6] text-[#0064D6] flex items-center justify-center hover:bg-[#0064D6] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {productBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === activeIndex ? "w-10 bg-[#0064D6]" : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-[#0064D6] text-[#0064D6] flex items-center justify-center hover:bg-[#0064D6] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
