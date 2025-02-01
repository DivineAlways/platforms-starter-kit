import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PricingSection from "@/components/home/PricingSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import Link from "next/link";
import { Rocket } from "lucide-react";

export default function LowPerryCommunityHub() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-green-400">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-green-700">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6" />
          <span className="ml-2 font-mono text-lg">Low Perry Community Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-mono hover:text-green-300 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-mono hover:text-green-300 transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-mono hover:text-green-300 transition-colors" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProjectsSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-green-700">
        <p className="text-xs text-green-400 font-mono">© 2024 Low Perry Community Hub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-green-300 transition-colors font-mono" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-green-300 transition-colors font-mono" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
