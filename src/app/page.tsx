import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PackageRates from "@/components/PackageRates";
import BrandsCarousel from "@/components/BrandsCarousel";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackageRates />
      <BrandsCarousel />
    </main>
  );
}
