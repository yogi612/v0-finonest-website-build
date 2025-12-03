"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react"
import { useParallax } from "./parallax-provider"

export function CTASection() {
  const { setIsHoveringCTA } = useParallax()
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ scale, opacity }}>
        <div className="relative bg-gradient-to-r from-[#0064D6] to-[#002E9C] rounded-3xl overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-[#12D6E7]/20 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Ready to Start Your Financial Journey?
                </motion.h2>
                <motion.p
                  className="text-lg text-white/80 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Get in touch with our experts and find the perfect financial solution tailored to your needs. Quick
                  approvals, best rates, zero hidden charges.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="group bg-white text-[#0064D6] px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setIsHoveringCTA(true)}
                      onMouseLeave={() => setIsHoveringCTA(false)}
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link href="/eligibility">
                    <motion.button
                      className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-white/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Check Eligibility
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Right content - Contact options */}
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {[
                  { icon: Phone, label: "Call Us", value: "1800-123-456", href: "tel:1800123456" },
                  { icon: Mail, label: "Email Us", value: "hello@finonest.com", href: "mailto:hello@finonest.com" },
                  { icon: MessageCircle, label: "Live Chat", value: "Available 24/7", href: "/contact" },
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{contact.label}</div>
                      <div className="text-white font-semibold">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
