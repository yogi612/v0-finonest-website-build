"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    submenu: [
      { href: "/products#personal-loan", label: "Personal Loan" },
      { href: "/products#home-loan", label: "Home Loan" },
      { href: "/products#business-loan", label: "Business Loan" },
      { href: "/products#credit-cards", label: "Credit Cards" },
    ],
  },
  { href: "/eligibility", label: "Check Eligibility" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="hidden lg:block bg-gradient-to-r from-[#002E9C] to-[#0064D6] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:1800-123-4567" className="flex items-center gap-2 hover:text-[#12D6E7] transition-colors">
              <Phone className="w-4 h-4" />
              <span>1800-123-4567 (Toll Free)</span>
            </a>
            <a
              href="mailto:support@finonest.com"
              className="flex items-center gap-2 hover:text-[#12D6E7] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>support@finonest.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/eligibility" className="hover:text-[#12D6E7] transition-colors">
              Check Eligibility
            </Link>
            <span className="w-px h-4 bg-white/30" />
            <Link href="/contact" className="hover:text-[#12D6E7] transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <motion.header
        className={cn(
          "sticky top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-out",
          isScrolled ? "bg-white shadow-lg shadow-black/[0.05]" : "bg-white/95 backdrop-blur-xl",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src="/logo.png" alt="Finonest" width={50} height={50} className="object-contain" priority />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#0064D6] to-[#002E9C] bg-clip-text text-transparent">
                  Finonest
                </span>
                <span className="text-[10px] text-[#008B96] font-medium -mt-0.5 tracking-wider">SMART FINANCE</span>
              </div>
            </Link>

            {/* Desktop Navigation with dropdown */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1",
                      pathname === item.href
                        ? "text-[#0064D6]"
                        : "text-gray-700 hover:text-[#0064D6] hover:bg-[#0064D6]/5",
                    )}
                  >
                    {pathname === item.href && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#12D6E7] to-[#0064D6] rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeSubmenu === item.label && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#0064D6]/5 hover:to-transparent hover:text-[#0064D6] transition-all duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-lg shadow-[#0064D6]/25 hover:shadow-xl hover:shadow-[#0064D6]/30 transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
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
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-300",
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
                      Apply Now
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
