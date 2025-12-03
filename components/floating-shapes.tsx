"use client"

import { motion } from "framer-motion"
import { useParallax } from "./parallax-provider"

export function FloatingShapes() {
  const { scrollY } = useParallax()

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient circle - slow parallax */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#12D6E7]/20 to-[#0064D6]/10 rounded-full blur-3xl"
        style={{ y: scrollY * 0.05 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Rupee symbol shape */}
      <motion.div
        className="absolute top-[20%] right-[15%] text-[#0064D6]/10 text-9xl font-bold select-none"
        style={{ y: scrollY * 0.08 }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        ₹
      </motion.div>

      {/* House shape */}
      <motion.svg
        className="absolute top-[40%] left-[8%] w-24 h-24 text-[#008B96]/15"
        style={{ y: scrollY * 0.12 }}
        viewBox="0 0 100 100"
        fill="currentColor"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <path d="M50 10L10 45V90H40V60H60V90H90V45L50 10Z" />
      </motion.svg>

      {/* Credit card shape */}
      <motion.div
        className="absolute top-[60%] right-[10%] w-32 h-20 bg-gradient-to-r from-[#002E9C]/10 to-[#0064D6]/10 rounded-xl"
        style={{ y: scrollY * 0.1 }}
        animate={{
          rotate: [10, 15, 10],
          y: [0, -10, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="absolute top-3 left-3 w-8 h-5 bg-[#12D6E7]/30 rounded" />
        <div className="absolute bottom-3 left-3 right-3 h-2 bg-[#0064D6]/20 rounded" />
      </motion.div>

      {/* Small floating circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-[#12D6E7]/20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
            y: scrollY * (0.05 + i * 0.02),
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, 10 + i * 5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Bottom wave gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0064D6]/5 to-transparent"
        style={{ y: -scrollY * 0.02 }}
      />
    </div>
  )
}
