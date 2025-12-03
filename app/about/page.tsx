"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ParallaxCard } from "@/components/parallax-card"
import { Shield, Target, Award, Heart, CheckCircle2, Building2, Globe, Sparkles } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in complete transparency with no hidden charges or surprises.",
    color: "#0064D6",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is centered around our customers' best interests.",
    color: "#12D6E7",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously innovate to make financial services more accessible.",
    color: "#008B96",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction and service we provide.",
    color: "#002E9C",
  },
]

const milestones = [
  { year: "2009", title: "Founded", description: "Started with a vision to democratize finance" },
  { year: "2012", title: "RBI License", description: "Received NBFC license from Reserve Bank of India" },
  { year: "2015", title: "Digital Launch", description: "Launched fully digital loan application platform" },
  { year: "2018", title: "1 Million Users", description: "Crossed 1 million happy customers milestone" },
  { year: "2021", title: "Pan-India", description: "Expanded operations to all states in India" },
  { year: "2024", title: "AI Integration", description: "Launched AI-powered instant loan approvals" },
]

const team = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "/indian-man-ceo-professional-headshot.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Chief Financial Officer",
    image: "/indian-woman-cfo-professional-headshot.jpg",
  },
  {
    name: "Amit Patel",
    role: "Chief Technology Officer",
    image: "/indian-man-cto-professional-headshot.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Head of Operations",
    image: "/indian-woman-executive-professional-headshot.jpg",
  },
]

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={sectionRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section className="relative pt-32 pb-20 overflow-hidden" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f7fa] to-white" />

        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#0064D6]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                About Finonest
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Building India's Most{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0064D6] to-[#12D6E7]">
                  Trusted
                </span>{" "}
                Finance Platform
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Since 2009, Finonest has been on a mission to make financial services accessible, transparent, and
                hassle-free for every Indian. We combine technology with human touch to deliver exceptional financial
                solutions.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                  <span className="text-gray-700">RBI Registered NBFC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                  <span className="text-gray-700">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-3xl p-8 text-white">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl scale-95" />
                <div className="relative grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">500K+</div>
                    <div className="text-white/70 text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">₹10K Cr</div>
                    <div className="text-white/70 text-sm">Loans Disbursed</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">50+</div>
                    <div className="text-white/70 text-sm">Cities Covered</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold mb-1">4.8★</div>
                    <div className="text-white/70 text-sm">Customer Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ParallaxCard glowColor="#0064D6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#0064D6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-[#0064D6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become India's most trusted and accessible financial services platform, empowering every
                    individual and business to achieve their financial goals with confidence and ease.
                  </p>
                </div>
              </div>
            </ParallaxCard>

            <ParallaxCard glowColor="#12D6E7">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#12D6E7]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-[#12D6E7]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize access to financial services through technology, transparency, and customer-centric
                    innovation, making loans and credit solutions simple, fast, and fair for everyone.
                  </p>
                </div>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-[#008B96]/10 rounded-full text-[#008B96] text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#111111] text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              What Drives Us Every Day
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ParallaxCard key={value.title} index={index} glowColor={value.color}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-[#0064D6] to-[#002E9C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              15 years of building trust and delivering excellence
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2" />

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                    <div className="text-2xl font-bold text-[#12D6E7] mb-2">{milestone.year}</div>
                    <div className="text-white font-semibold mb-1">{milestone.title}</div>
                    <div className="text-white/60 text-sm">{milestone.description}</div>
                  </div>
                  {/* Dot on timeline */}
                  <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#12D6E7] rounded-full border-4 border-[#002E9C]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-[#0064D6]/10 rounded-full text-[#0064D6] text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leadership Team
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#111111] text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Meet the People Behind Finonest
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative mb-4 mx-auto w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0064D6] to-[#12D6E7] rounded-full opacity-20 blur-xl" />
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#111111]">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">RBI Registered & Fully Compliant</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Finonest is a registered Non-Banking Financial Company (NBFC) with the Reserve Bank of India. We
                  adhere to all regulatory guidelines and maintain the highest standards of corporate governance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">RBI Registration No: N-13.12345</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">CIN: U65999MH2024PTC123456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">ISO 27001:2013 Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#008B96]" />
                    <span className="text-gray-700">PCI DSS Compliant</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-[#0064D6] mx-auto mb-2" />
                  <span className="text-sm text-gray-500">RBI Registered</span>
                </div>
                <div className="text-center">
                  <Shield className="w-16 h-16 text-[#008B96] mx-auto mb-2" />
                  <span className="text-sm text-gray-500">ISO Certified</span>
                </div>
                <div className="text-center">
                  <Globe className="w-16 h-16 text-[#002E9C] mx-auto mb-2" />
                  <span className="text-sm text-gray-500">Pan India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
