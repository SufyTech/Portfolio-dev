import React, { useState, useRef, useEffect } from "react";
import WhatsApp from "../assets/whatsapp.svg";

const WhatsAppButton: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openMenu]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end"
    >
      {/* Main Button */}
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
        <div className="mt-2 flex flex-col bg-white border rounded-lg shadow-xl animate-slide-in-right">
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

export default WhatsAppButton;
