import React from "react";
import { Code2, PenTool, Smartphone, Layers } from "lucide-react";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    icon: <Code2 className="w-8 h-8 text-emerald-500" />,
    title: "Full Stack Web Development (MERN)",
    description:
      "I build production-ready, scalable SaaS applications using the MERN stack — React, Node.js, Express, and MongoDB. Focused on clean architecture, secure APIs, modular code, and performance-optimized development.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-emerald-500" />,
    title: "UI/UX Design & Product Styling",
    description:
      "I design modern, intuitive, and conversion-focused interfaces using Figma. This includes wireframes, prototypes, user flows, accessibility standards, and polished visual systems for web & mobile products.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-emerald-500" />,
    title: "Mobile App UI & Cross-Platform Development",
    description:
      "I design clean and interactive mobile interfaces and develop cross-platform applications using React Native, ensuring fast performance and a seamless experience across all devices.",
  },
  {
    icon: <Layers className="w-8 h-8 text-emerald-500" />,
    title: "Frontend Architecture & Scalable Component Systems",
    description:
      "I create reusable UI components, scalable design systems, and structured frontend architecture — ensuring faster development, maintainability, and long-term scalability.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-emerald-500" />,
    title: "AI Integration & LLM-Powered Features",
    description:
      "I integrate AI tools like Gemini, LLM workflows, prompt engineering, and RAG basics to build smart features such as automated analysis, content generation, and intelligent user interactions.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-500" />,
    title: "Animations, GSAP, & Interactive Experience",
    description:
      "I build smooth, interactive front-end experiences with GSAP, Locomotive Scroll, and micro-interactions — giving websites a high-end, premium feel with world-class motion design.",
  },
  {
    icon: <Layers className="w-8 h-8 text-emerald-500" />,
    title: "API Development, Testing & DevOps Basics",
    description:
      "Experienced in building REST APIs, debugging, unit testing (Jest, Cypress), and working with CI/CD tools like Jenkins for automated builds, testing, and deployment.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-500" />,
    title: "3D & Immersive Web Experiences",
    description:
      "I create immersive interactive websites using Spline and WebGL integrations — delivering next-generation product experiences for modern startups and creative brands.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Services I Provide
        </h2>
        <p className="text-gray-600 max-w-3xl text-base md:text-lg leading-relaxed">
          As a Full Stack Developer and UI/UX Designer, I create modern web and
          mobile experiences. My work includes frontend design, backend
          development, application architecture, and crafting clean and
          professional UI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-emerald-50/50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-emerald-100/50 flex flex-col items-center text-center"
          >
            <div className="mb-5 p-4 bg-white rounded-full shadow-md">
              {service.icon}
            </div>

            <h3 className="text-base md:text-lg font-semibold text-emerald-700 mb-4 min-h-[48px] flex items-center justify-center">
              {service.title}
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
