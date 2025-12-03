import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import LoaderAI from "./components/LoaderAI";
import WhatsApp from './assets/whatsapp.svg';
import "./index.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start loader fade-out
      setTimeout(() => setLoading(false), 600); // remove loader after fade
    }, 2000); // loader visible duration

    return () => clearTimeout(timer);
  }, []);

  // Mouse glow effect only for portfolio
  useEffect(() => {
    if (!loading) {
      const glow = document.getElementById("mouse-glow");
      const handleMouseMove = (e: MouseEvent) => {
        if (glow) {
          glow.style.left = `${e.clientX - 300}px`;
          glow.style.top = `${e.clientY - 300}px`;
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [loading]);

  return (
    <ThemeProvider>
      {/* Loader */}
      {loading && (
        <div className={`${fadeOut ? "fade-out" : ""}`}>
          <LoaderAI />
        </div>
      )}

      {/* Portfolio Content */}
      {!loading && (
        <>
          {/* Global Cursor Glow */}
          <div
            id="mouse-glow"
            className="pointer-events-none fixed w-[600px] h-[600px] rounded-full 
                       bg-green-400 opacity-10 blur-3xl z-[9999]"
          ></div>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919226888986" // <-- replace with your mobile number including country code
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float fixed bottom-6 right-6 w-14 h-14 md:w-12 md:h-12 
                       bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center 
                       shadow-lg z-[9999] transition-all duration-300 md:bottom-4 md:right-4"
          >
            <img
              src={WhatsApp}
              alt="WhatsApp"
              className="w-7 h-7 md:w-6 md:h-6 filter transition-all duration-300 hover:brightness-125"
            />
          </a>

          <div className="portfolio-fade-in">
            <Navbar />
            <main>
              <Hero />
              <Services />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Experience />
            </main>
            <Contact />
          </div>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
