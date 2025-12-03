"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "How to Apply for Personal Loan",
    duration: "3:45",
    thumbnail: "/personal-loan-application-tutorial.jpg",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Understanding Credit Scores",
    duration: "5:20",
    thumbnail: "/credit-score-explanation-finance.jpg",
    category: "Education",
  },
  {
    id: 3,
    title: "Home Loan Process Explained",
    duration: "4:15",
    thumbnail: "/home-loan-process-steps.jpg",
    category: "Guide",
  },
  {
    id: 4,
    title: "Business Loan Success Stories",
    duration: "6:30",
    thumbnail: "/business-success-entrepreneur.jpg",
    category: "Stories",
  },
  {
    id: 5,
    title: "EMI Calculator Tutorial",
    duration: "2:50",
    thumbnail: "/emi-calculator-finance-app.jpg",
    category: "Tutorial",
  },
  {
    id: 6,
    title: "Financial Planning Tips",
    duration: "7:10",
    thumbnail: "/financial-planning-wealth-management.jpg",
    category: "Tips",
  },
]

export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#12D6E7]/10 text-[#008B96] rounded-full text-sm font-medium mb-4">
            Video Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4 text-balance">
            Learn About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              Smart Financing
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our educational videos to understand loans, credit scores, and financial planning
          </p>
        </motion.div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors duration-300 -ml-4 lg:-ml-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors duration-300 -mr-4 lg:-mr-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Horizontal Scroll Container */}
          <div ref={scrollRef} className="horizontal-scroll gap-6 pb-4 px-2">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="horizontal-scroll-item w-[320px] sm:w-[380px]"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="video-card group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-7 h-7 text-[#0064D6] ml-1" fill="currentColor" />
                      </motion.div>
                    </motion.div>

                    {/* Duration */}
                    <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded">
                      {video.duration}
                    </span>

                    {/* Category */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#0064D6] text-white text-xs font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#0064D6] transition-colors duration-300">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {videos.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-[#0064D6]/20"
              whileHover={{ scale: 1.2, backgroundColor: "#0064D6" }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
