import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VideoSection } from "@/components/video-section"
import { CTASection } from "@/components/cta-section"
import { FloatingShapes } from "@/components/floating-shapes"
import { OffersCarousel } from "@/components/offers-carousel"
import { ProductsBanner } from "@/components/products-banner"

export default function HomePage() {
  return (
    <>
      <FloatingShapes />
      <HeroSection />
      <OffersCarousel />
      <ProductsBanner />
      <ProductsSection />
      <VideoSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
