import HeroSection from "@/components/HeroSection";
import ScrollingTextBanner from "@/components/ScrollingTextBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PackageRates from "@/components/PackageRates";
import BrandsCarousel from "@/components/BrandsCarousel";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollingTextBanner />
      <AboutSection />
      <ServicesSection />
      <PackageRates />
      <BrandsCarousel />
    </main>
  );
}
