import React from "react";
import { SkillCategory } from "../types";

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      "REACTJS",
      "NEXT.JS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "GSAP ANIMATIONS",
      "STATE MANAGEMENT",
      "ACCESSIBILITY",
      "FIGMA TO CODE",
      "UI ENGINEERING",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "NODE.JS",
      "EXPRESS.JS",
      "REST API ARCHITECTURE",
      "MONGODB",
      "POSTGRESQL / MYSQL",
      "AUTH (JWT / OAUTH)",
      "DATABASE MODELING",
      "API SECURITY & VALIDATION",
    ],
  },
  {
    title: "Cloud, DevOps & Deployment",
    skills: [
      "AWS BASICS",
      "DOCKER",
      "GITHUB ACTIONS",
      "CI/CD PIPELINES",
      "VERCEL / RENDER DEPLOYMENT",
      "SERVERLESS FUNCTIONS",
      "VPS MANAGEMENT",
    ],
  },
  {
    title: "AI Tools & Integrations",
    skills: [
      "GEMINI API",
      "LLM WORKFLOWS",
      "PROMPT ENGINEERING",
      "AI FEATURE DEVELOPMENT",
      "RAG BASICS",
    ],
  },
  {
    title: "Testing & Performance",
    skills: [
      "JEST",
      "CYPRESS",
      "UNIT & INTEGRATION TESTING",
      "DEBUGGING",
      "PERFORMANCE OPTIMIZATION",
      "CHROME DEVTOOLS",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["JAVASCRIPT", "TYPESCRIPT", "PYTHON", "JAVA",],
  },
  {
    title: "UI/UX & Product Thinking",
    skills: [
      "UI/UX DESIGN",
      "PRODUCT DESIGN",
      "WIREFRAMING",
      "MICRO-INTERACTIONS",
      "USER FLOWS & EXPERIENCE STRATEGY",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <div className="border-2 border-gray-800 px-10 py-3 text-base md:text-lg font-bold text-gray-900 tracking-widest bg-white rounded">
          TECH STACK & SKILLS
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>
        <div className="hidden md:block w-[80%] border-t-2 border-gray-400 h-8"></div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>

              <div className="flex flex-col gap-4 w-full px-3">
                <h4 className="text-center font-bold text-emerald-600 text-base tracking-wide">
                  {category.title}
                </h4>

                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-indigo-100/70 text-indigo-900 px-3 py-1 text-[11px] md:text-xs font-semibold rounded-sm uppercase tracking-wide hover:bg-indigo-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
