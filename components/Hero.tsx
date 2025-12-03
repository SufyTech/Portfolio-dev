import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 md:order-1 space-y-6">
          <p className="text-emerald-600 font-medium">Hi — I'm Sufiyan Khan</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            MERN Stack Developer <br />
            <span className="text-blue-600">AI-Driven • UI/UX Focused</span>
          </h1>

          <p className="text-sm font-semibold text-gray-500">
            I build scalable SaaS apps, intelligent tools, and modern interfaces
            powered by MERN + AI.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I develop fast and production-ready applications using
            <span className="font-semibold">
              {" "}
              React, Node.js, Express, MongoDB
            </span>
            along with modern UI engineering using
            <span className="font-semibold">
              {" "}
              Tailwind, GSAP, and Framer Motion.
            </span>
            <br />
            <br />
            Experienced in API development, debugging, testing, and integrating
            AI/LLM features using Gemini and prompt engineering.
            <br />
            <br />
            Currently seeking a full-time role as a
            <span className="font-semibold"> Full Stack Developer</span> — ready
            to deliver clean code, strong UI/UX, and real business impact from
            day one.
          </p>

          <a
            href="mailto:Suzkhan135@gmail.com"
            className="inline-block border border-blue-600 text-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-md transition-all hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg"
          >
            Let’s Build Together
          </a>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-72 h-80 md:w-80 md:h-96">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-emerald-100 rounded-tr-[4rem] rounded-bl-[4rem] transform translate-x-4 translate-y-4"></div>

            {/* Image Container */}
            <div className="absolute inset-0 bg-blue-900 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/Main.jpeg"
                alt="Sufiyan Khan"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />

              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded text-xs font-bold text-blue-900 shadow-sm">
                MERN Stack
                <br />
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
