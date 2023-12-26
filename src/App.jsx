import { Features } from "./components/Features";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Trade from "./components/Trade";
import Why from "./components/Why";

function App() {
  return (
    <div className="bg-[#010101] relative aspekta-regular">
      <Navbar />
      <HeroSection />
      <Features />
      <Why />
      <Trade />
      <Footer />
    </div>
  );
}

export default App;
