"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ParallaxCard } from "./parallax-card"
import { ArrowRight, Home, User, Briefcase, CreditCard, Car, GraduationCap } from "lucide-react"
import { useParallax } from "./parallax-provider"

const products = [
  {
    icon: User,
    title: "Personal Loans",
    description: "Quick personal loans for all your needs with minimal documentation.",
    rate: "10.5%",
    maxAmount: "₹25 Lakhs",
    tenure: "5 Years",
    color: "#0064D6",
    href: "/products#personal",
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable home loans.",
    rate: "8.5%",
    maxAmount: "₹5 Crores",
    tenure: "30 Years",
    color: "#12D6E7",
    href: "/products#home",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with flexible business financing.",
    rate: "12%",
    maxAmount: "₹50 Lakhs",
    tenure: "7 Years",
    color: "#008B96",
    href: "/products#business",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Premium credit cards with exclusive rewards and benefits.",
    rate: "0%",
    maxAmount: "₹10 Lakhs",
    tenure: "Lifetime",
    color: "#002E9C",
    href: "/products#credit",
  },
  {
    icon: Car,
    title: "Vehicle Loans",
    description: "Drive your dream car home with our easy vehicle loans.",
    rate: "9.5%",
    maxAmount: "₹1 Crore",
    tenure: "7 Years",
    color: "#0064D6",
    href: "/products#vehicle",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with our education financing options.",
    rate: "7.5%",
    maxAmount: "₹75 Lakhs",
    tenure: "15 Years",
    color: "#12D6E7",
    href: "/products#education",
  },
]

export function ProductsSection() {
  const { setIsHoveringCTA } = useParallax()
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f4f7fa] to-white" />

      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ opacity, y }}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-[#12D6E7]/10 rounded-full text-[#008B96] text-sm font-medium mb-4"
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
            Financial Solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              For Everyone
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose from our wide range of financial products designed to meet your unique needs.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ParallaxCard key={product.title} index={index} glowColor={product.color}>
              <div className="relative">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <product.icon className="w-7 h-7" style={{ color: product.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#111111] mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-[#f4f7fa] rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: product.color }}>
                      {product.rate}
                    </div>
                    <div className="text-xs text-gray-500">Interest</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-lg font-bold text-[#111111]">{product.maxAmount}</div>
                    <div className="text-xs text-gray-500">Max Amount</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#111111]">{product.tenure}</div>
                    <div className="text-xs text-gray-500">Tenure</div>
                  </div>
                </div>

                {/* CTA */}
                <Link href={product.href}>
                  <motion.button
                    className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                    style={{
                      backgroundColor: `${product.color}10`,
                      color: product.color,
                    }}
                    whileHover={{ backgroundColor: `${product.color}20` }}
                    onMouseEnter={() => setIsHoveringCTA(true)}
                    onMouseLeave={() => setIsHoveringCTA(false)}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </ParallaxCard>
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
