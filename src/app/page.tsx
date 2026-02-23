import HeroSection from "@/components/HeroSection";
import ScrollingTextBanner from "@/components/ScrollingTextBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PackageRates from "@/components/PackageRates";
import BrandsCarousel from "@/components/BrandsCarousel";
import IntroOverlay from "@/components/IntroOverlay";
import ReelsSection from "@/components/ReelsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BrandingSection from "@/components/BrandingSection";
import ClientTestimonials from "@/components/ClientTestimonials";
import WorkProcess from "@/components/WorkProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <IntroOverlay />
        <HeroSection />
        <ScrollingTextBanner />
        <AboutSection />
        <ServicesSection />
        <PackageRates />
        <BrandsCarousel />
        <ReelsSection />
        <PortfolioSection />
        <BrandingSection />
        <ClientTestimonials />
        <WorkProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
