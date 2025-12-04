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
import WhatsApp from "./assets/whatsapp.svg";
import "./index.css";

// WhatsAppButton component
const WhatsAppButton: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const messages = {
    recruiter:
      "Hello Sufiyan! I came across your portfolio and am impressed by your work. I’d love to connect and discuss potential opportunities or projects with you. Looking forward to your reply soon!",
    client:
      "Hi Sufiyan! I came across your portfolio and would love to connect to discuss potential projects or collaboration opportunities.",
  };

  const handleClick = (type: "recruiter" | "client") => {
    const encodedMessage = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/919226888986?text=${encodedMessage}`, "_blank");
    setOpenMenu(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Main WhatsApp Button */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="w-14 h-14 md:w-12 md:h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      >
        <img
          src={WhatsApp}
          alt="WhatsApp"
          className="w-7 h-7 md:w-6 md:h-6 filter transition-all duration-300 hover:brightness-125"
        />
      </button>

      {/* Popover Menu */}
      {openMenu && (
        <div className="mt-2 flex flex-col bg-white border rounded-lg shadow-lg animate-fade-in">
          <button
            onClick={() => handleClick("recruiter")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-t-lg"
          >
            For Recruiters
          </button>
          <button
            onClick={() => handleClick("client")}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-b-lg"
          >
            For Clients
          </button>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      {loading && (
        <div className={`${fadeOut ? "fade-out" : ""}`}>
          <LoaderAI />
        </div>
      )}

      {!loading && (
        <>
          <div
            id="mouse-glow"
            className="pointer-events-none fixed w-[600px] h-[600px] rounded-full bg-green-400 opacity-10 blur-3xl z-[9999]"
          ></div>

          {/* Single WhatsApp Button */}
          <WhatsAppButton />

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
