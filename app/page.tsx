import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { FloatingShapes } from "@/components/floating-shapes"

export default function HomePage() {
  return (
    <>
      <FloatingShapes />
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
