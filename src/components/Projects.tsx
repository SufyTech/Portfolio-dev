import React from "react";
import { ProjectItem } from "../../types";

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "CodeMind AI",
    category: "AI • SaaS • Full Stack",
    image: "../images/p1.png",
    link: "https://codemind-ai-eight.vercel.app/",
  },
  {
    id: "2",
    title: "K72 Creatives Website",
    category: "Web • UI/UX • Animations",
    image: "../images/p2.png",
    link: "https://k72-creatives.vercel.app/",
  },
  {
    id: "3",
    title: "Go3D Interactive Website",
    category: "3D • Spline • React",
    image: "../images/p3.png",
    link: "https://go3d.vercel.app/",
  },
  {
    id: "4",
    title: "Award-Winning Gaming Website",
    category: "GSAP • UI Engineering",
    image: "../images/p4.png",
    link: "https://vercel-gaming-showcase.vercel.app/",
  },
  {
    id: "5",
    title: "MotionRefokus Website",
    category: "Micro-Interactions • UI",
    image: "../images/p5.png",
    link: "https://motion-refokus.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-emerald-600 mb-4">
        Projects & Work
      </h2>

      <p className="text-gray-600 max-w-4xl mb-12 text-sm md:text-base leading-relaxed">
        I build scalable web apps, interactive UIs, and AI-powered tools using
        the MERN stack, modern animations, and 3D experiences. Here are some of
        my best projects—SaaS platforms, creative websites, and production-ready
        applications designed with performance, clean architecture, and
        real-world usability in mind.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-3">
              <h3 className="text-xs font-bold text-gray-900 truncate">
                {project.title}
              </h3>
              <p className="text-[10px] text-gray-600">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
