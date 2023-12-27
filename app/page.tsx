import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Trade from "@/components/Trade";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Why />
      <Trade />
      <Footer />
    </main>
  );
}
