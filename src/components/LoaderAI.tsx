import React from "react";

const LoaderAI: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/90 z-[9999]">
      {/* 3D Cube Spinner */}
      <div className="spinner w-16 h-16 relative mb-8">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Branding / Name */}
      <h1 className="text-black text-2xl font-semibold tracking-widest drop-shadow-lg">
        SUFIYAN.DEV
      </h1>

      {/* Optional Subtitle */}
      <p className="mt-2 text-black-300 text-sm font-medium opacity-80">
        Loading portfolio...
      </p>
    </div>
  );
};

export default LoaderAI;
