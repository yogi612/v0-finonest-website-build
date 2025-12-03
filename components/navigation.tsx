"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/eligibility", label: "Eligibility Check" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-black/5" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div className="relative w-10 h-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-xl rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#12D6E7] to-[#008B96] rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#002E9C]">Finonest</span>
                <span className="text-[10px] text-[#0064D6] font-medium -mt-1 tracking-wider">SMART FINANCE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    pathname === item.href ? "text-[#0064D6]" : "text-gray-600 hover:text-[#0064D6]",
                  )}
                >
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#0064D6]/10 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-[#0064D6]/25 hover:shadow-xl hover:shadow-[#0064D6]/30 transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl transition-colors",
                        pathname === item.href ? "bg-[#0064D6]/10 text-[#0064D6]" : "text-gray-700 hover:bg-gray-50",
                      )}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                      Get Started
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
