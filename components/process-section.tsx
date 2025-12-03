"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FileText, Search, CheckCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply Online",
    description: "Fill out our simple online application form in just 5 minutes.",
    color: "#0064D6",
  },
  {
    icon: Search,
    number: "02",
    title: "Quick Verification",
    description: "Our team verifies your documents within hours, not days.",
    color: "#12D6E7",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get Approved",
    description: "Receive instant approval with the best interest rates.",
    color: "#008B96",
  },
  {
    icon: Banknote,
    number: "04",
    title: "Receive Funds",
    description: "Money transferred directly to your bank account.",
    color: "#002E9C",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get Your Loan in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              4 Simple Steps
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0064D6] via-[#12D6E7] to-[#002E9C] origin-left"
              style={{ scaleX: lineProgress }}
            />
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Step card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-shadow">
                  {/* Number badge */}
                  <div
                    className="absolute -top-4 left-6 px-3 py-1 rounded-full text-white text-sm font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mt-2"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector arrow - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <motion.div
                      className="w-4 h-4 border-t-2 border-r-2 border-[#0064D6]/30 rotate-45"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
