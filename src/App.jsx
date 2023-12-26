import { useState } from "react";
import { Features } from "./components/Features";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Trade from "./components/Trade";
import Why from "./components/Why";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  window.addEventListener("load", () => {
    setTimeout(() => setPageLoaded(true), 2000);
  });
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
