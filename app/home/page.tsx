import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PricingSection from "@/components/home/PricingSection";
import CallToActionSection from "@/components/home/CallToActionSection";

export default function LowPerryCommunityHub() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-green-400">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProjectsSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
