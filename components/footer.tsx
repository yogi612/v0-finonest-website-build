"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

const footerLinks = {
  products: [
    { label: "Personal Loans", href: "/products#personal" },
    { label: "Home Loans", href: "/products#home" },
    { label: "Business Loans", href: "/products#business" },
    { label: "Credit Cards", href: "/products#credit" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Press", href: "/about#press" },
    { label: "Partners", href: "/about#partners" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "EMI Calculator", href: "/eligibility" },
    { label: "FAQs", href: "/about#faq" },
    { label: "Support", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-[#f4f7fa] pt-20 pb-8 overflow-hidden">
      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[#12D6E7]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-[#0064D6]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0064D6] to-[#002E9C] rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#12D6E7] to-[#008B96] rounded-xl -rotate-6 opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#002E9C]">Finonest</span>
                <span className="block text-xs text-[#0064D6] font-medium tracking-wider">SMART FINANCE</span>
              </div>
            </Link>

            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for smart financial solutions. We make loans and credit accessible, transparent, and
              hassle-free.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@finonest.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#0064D6] transition-colors"
              >
                <div className="w-10 h-10 bg-[#0064D6]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#0064D6]" />
                </div>
                <span className="text-sm">hello@finonest.com</span>
              </a>
              <a
                href="tel:+911800123456"
                className="flex items-center gap-3 text-gray-600 hover:text-[#0064D6] transition-colors"
              >
                <div className="w-10 h-10 bg-[#0064D6]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#0064D6]" />
                </div>
                <span className="text-sm">1800-123-456</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-[#0064D6]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#0064D6]" />
                </div>
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0064D6] transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#002E9C] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0064D6] transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#002E9C] mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#0064D6] transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#002E9C]/5 hover:bg-[#0064D6] rounded-full flex items-center justify-center text-[#002E9C] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-64 px-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20"
                />
              </div>
              <motion.button
                className="bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white px-6 py-2.5 rounded-full font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Finonest. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-[#0064D6] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RBI Compliance */}
          <div className="mt-6 p-4 bg-[#f4f7fa] rounded-xl">
            <p className="text-xs text-gray-500 text-center">
              Finonest is a registered NBFC with RBI. CIN: U65999MH2024PTC123456 | RBI Reg No: N-13.12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
