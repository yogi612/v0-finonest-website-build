"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUpRight,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react"

const footerLinks = {
  products: [
    { label: "Personal Loans", href: "/products#personal" },
    { label: "Home Loans", href: "/products#home" },
    { label: "Business Loans", href: "/products#business" },
    { label: "Credit Cards", href: "/products#credit" },
    { label: "Car Loans", href: "/products#car" },
    { label: "Education Loans", href: "/products#education" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Press & Media", href: "/about#press" },
    { label: "Partners", href: "/about#partners" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "EMI Calculator", href: "/eligibility" },
    { label: "Check Eligibility", href: "/eligibility" },
    { label: "FAQs", href: "/about#faq" },
    { label: "Customer Support", href: "/contact" },
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
  { icon: Youtube, href: "#", label: "YouTube" },
]

const trustBadges = [
  { icon: Shield, label: "RBI Registered" },
  { icon: Award, label: "ISO Certified" },
  { icon: CheckCircle, label: "100% Secure" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-r from-[#0064D6] to-[#002E9C] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-white/80">Apply now and get instant approval on your loan application</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/eligibility">
                <motion.button
                  className="bg-white text-[#0064D6] px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Check Eligibility
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-[#12D6E7] text-[#002E9C] px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Finonest" width={50} height={50} className="object-contain" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#0064D6] to-[#002E9C] bg-clip-text text-transparent">
                  Finonest
                </span>
                <span className="block text-xs text-[#008B96] font-medium tracking-wider">SMART FINANCE</span>
              </div>
            </Link>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for smart financial solutions. We make loans and credit accessible, transparent, and
              hassle-free for everyone.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:1800-123-4567"
                className="flex items-center gap-3 text-gray-600 hover:text-[#0064D6] transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#0064D6]" />
                </div>
                <div>
                  <span className="text-sm font-medium block">1800-123-4567</span>
                  <span className="text-xs text-gray-400">Toll Free</span>
                </div>
              </a>
              <a
                href="mailto:support@finonest.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#0064D6] transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#0064D6]" />
                </div>
                <span className="text-sm">support@finonest.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#0064D6]" />
                </div>
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-5 text-sm uppercase tracking-wider">Products</h4>
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

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-5 text-sm uppercase tracking-wider">Company</h4>
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

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-5 text-sm uppercase tracking-wider">Resources</h4>
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

          {/* App Download & Social */}
          <div>
            <h4 className="font-semibold text-[#002E9C] mb-5 text-sm uppercase tracking-wider">Download App</h4>
            <div className="space-y-3 mb-6">
              <a href="#" className="block">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div>
                    <span className="text-[10px] block opacity-70">Download on the</span>
                    <span className="text-sm font-medium">App Store</span>
                  </div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div>
                    <span className="text-[10px] block opacity-70">Get it on</span>
                    <span className="text-sm font-medium">Google Play</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <h4 className="font-semibold text-[#002E9C] mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 hover:from-[#0064D6] hover:to-[#002E9C] rounded-lg flex items-center justify-center text-[#0064D6] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-gray-600">
                <badge.icon className="w-5 h-5 text-[#008B96]" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Finonest Financial Services Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
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

          {/* RBI Compliance Notice */}
          <div className="bg-gradient-to-r from-[#0064D6]/5 to-[#12D6E7]/5 rounded-xl p-4 border border-[#0064D6]/10">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              <strong className="text-[#002E9C]">Finonest Financial Services Pvt. Ltd.</strong> is a Non-Banking
              Financial Company (NBFC) registered with the Reserve Bank of India (RBI).
              <br />
              CIN: U65999MH2024PTC123456 | RBI Registration No: N-13.12345 | GSTIN: 27AABCF1234A1ZK
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
