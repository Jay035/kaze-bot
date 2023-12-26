import { useEffect, useState } from "react";
import { Features } from "./components/Features";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Trade from "./components/Trade";
import Why from "./components/Why";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => setPageLoaded(true), 2000);
    });
    AOS.init({
      duration: 1100,
      easing: "ease-in",
    });
  }, []);

  return (
    <div className="bg-[#010101] relative aspekta-regular">
      {pageLoaded ? (
        <>
          {" "}
          <Navbar />
          <HeroSection />
          <Features />
          <Why />
          <Trade />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
