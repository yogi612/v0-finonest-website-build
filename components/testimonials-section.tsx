"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Small Business Owner",
    location: "Mumbai",
    image: "/indian-man-headshot.png",
    rating: 5,
    text: "Finonest made my business loan process incredibly smooth. Got approved in just 24 hours with the best rates in the market!",
  },
  {
    name: "Priya Patel",
    role: "IT Professional",
    location: "Bangalore",
    image: "/indian-woman-professional-headshot.png",
    rating: 5,
    text: "The home loan process was transparent from start to finish. Their team guided me through every step. Highly recommended!",
  },
  {
    name: "Amit Kumar",
    role: "Doctor",
    location: "Delhi",
    image: "/indian-man-doctor-headshot.jpg",
    rating: 5,
    text: "Excellent customer service and quick disbursement. The interest rates are competitive and there are no hidden charges.",
  },
  {
    name: "Sneha Reddy",
    role: "Teacher",
    location: "Hyderabad",
    image: "/indian-woman-teacher-headshot.jpg",
    rating: 5,
    text: "Got my personal loan within 48 hours. The entire process was digital and hassle-free. Thank you Finonest!",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    location: "Pune",
    image: "/indian-man-entrepreneur-headshot.jpg",
    rating: 5,
    text: "The business loan helped me expand my startup. Finonest truly understands the needs of growing businesses.",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [100, -100])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-[#f4f7fa]">
      {/* Background decoration */}
      <motion.div className="absolute top-20 left-10 w-64 h-64 bg-[#0064D6]/5 rounded-full blur-3xl" style={{ x }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-[#008B96]/10 rounded-full text-[#008B96] text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
              Customers Say
            </span>
          </motion.h2>
        </div>

        {/* Testimonials slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div
            key={activeIndex}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r from-[#0064D6] to-[#12D6E7] rounded-full flex items-center justify-center">
              <Quote className="w-5 h-5 text-white" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#0064D6]/10">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-lg font-bold text-[#111111]">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-[#0064D6]" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0064D6] hover:bg-[#0064D6] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
