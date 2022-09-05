import { useState, useEffect } from "react";

// Import aos
import Aos from "aos";
import "aos/dist/aos.css";

// Import Components
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  // aos init
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      {/* Mobile NavBar */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
