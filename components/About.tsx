import React from "react";
import { MessageCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
            About Me
          </h2>

          <div className="space-y-5 text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            <p>
              I’m{" "}
              <span className="font-semibold text-gray-900">Sufiyan Khan</span>,
              a<span className="font-semibold"> MERN Stack Developer</span> who
              builds fast, scalable, and modern web applications. I focus on
              clean UI engineering, smooth user experiences, and
              high-performance architecture.
            </p>

            <p>
              I work with React, Node.js, Express, MongoDB, Tailwind, GSAP, and
              3D Web technologies — while also integrating AI features using
              Gemini, LLM workflows, and prompt engineering.
            </p>

            <p>
              With hands-on experience at Octanet and Internship Studio, I’ve
              delivered SaaS platforms, dashboards, automation tools, and
              immersive websites that solve real problems and provide measurable
              impact.
            </p>
          </div>

          <a
            href="https://wa.me/9226888986"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 border border-gray-800 px-5 py-2.5 text-sm md:text-base text-black font-medium rounded hover:bg-gray-900 hover:text-white transition-colors"
          >
            WhatsApp Me
            <MessageCircle size={18} className="text-green-600" />
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm h-96 overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Main1.jpeg"
              alt="Sufiyan Khan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
