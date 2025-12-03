import React, { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Open to Work */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="font-sufiyan font-bold text-xl tracking-wider text-emerald-600 hover:text-emerald-400 transition-colors duration-300">
              {`{ SUFIYAN.DEV }`}
            </span>

            <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-xs font-semibold hidden md:inline">
              Open to Work
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Resume */}
            <a
              href="/Sufiyan_KhanResume.pdf"
              className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-emerald-600"
            >
              <FileText size={18} />
              <span>RESUME</span>
            </a>

            {/* Book Free Meeting */}
            <a
              href="https://calendar.app.google/6r7C48QaKz4n26fu7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              BOOK FREE MEETING
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="Sufiyan_KhanResume.pdf"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Resume
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Projects
            </a>
            <a
              href="YOUR_GOOGLE_CALENDAR_LINK"
              className="w-full mt-2 block text-left px-3 py-2 rounded-md text-base font-medium bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors duration-300"
            >
              Book Free Meeting
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
