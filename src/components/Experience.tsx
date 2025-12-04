import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ExperienceItem } from "../../types";

const initialExperience: ExperienceItem[] = [
  {
    id: "3",
    year: "Jan 2022 – Present",
    role: "Freelance MERN Stack Developer",
    company: "Client Projects & Personal Development",
    location: "Remote • 2+ Years",
    description: [
      "Built full-stack applications using MongoDB, Express, React, and Node.js.",
      "Developed authentication systems, dashboards, API integrations, and SaaS-style UIs.",
      "Deployed apps to cloud platforms (Vercel, Render) with a focus on performance.",
      "Delivered clean architecture, reusable components, and optimized user experiences.",
    ],
  },
  {
    id: "4",
    year: "May 2024 – Present",
    role: "UI/UX Designer",
    company: "Freelance & Personal Projects",
    location: "Remote • 1+ Year",
    description: [
      "Designed intuitive interfaces for web and mobile using Figma.",
      "Created wireframes, prototypes, design systems, and reusable UI components.",
      "Applied modern design principles, accessibility, and responsive layout techniques.",
      "Collaborated with developers to turn designs into functional products.",
    ],
  },
  {
    id: "1",
    year: "May 2024 – Nov 2024",
    role: "Software Engineer Intern",
    company: "Octanet Pvt Ltd | Remote",
    location: "Remote • Internship",
    description: [
      "Automated CI/CD testing workflows using Jenkins.",
      "Built responsive dashboards using HTML, CSS, and JavaScript.",
      "Improved code quality through structured reviews and Git-based collaboration.",
      "Worked on real-world tasks focused on performance and reliability.",
    ],
  },
  {
    id: "2",
    year: "Apr 2024 – Oct 2024",
    role: "Java Developer Intern",
    company: "Internship Studio | Remote",
    location: "Remote • Internship",
    description: [
      "Developed modular Java components for backend workflows.",
      "Performed unit testing and debugging to improve system stability.",
      "Applied OOP principles and Java fundamentals in practical project tasks.",
    ],
  },
];

const ExperienceItemComponent: React.FC<{
  exp: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ exp, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-emerald-100 rounded-lg overflow-hidden bg-emerald-50/20">
      <button
        onClick={onToggle}
        className="w-full flex items-start text-left p-4 bg-emerald-100/40 hover:bg-emerald-100/60 transition-colors"
      >
        <div className="bg-white/80 px-2 py-1 rounded text-sm font-bold text-gray-700 mr-4 shadow-sm border border-gray-200">
          {exp.year}
        </div>
        <div className="flex-1">
          <h3 className="text-blue-600 font-semibold text-sm md:text-base">
            {exp.role}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{exp.company}</p>
          <p className="text-[10px] text-gray-400">{exp.location}</p>
        </div>
        <div className="text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height, transition: "max-height 0.5s ease" }}
        className="overflow-hidden bg-emerald-50/20 border-t border-emerald-100"
      >
        <ul className="list-disc list-inside space-y-1 p-4">
          {exp.description.map((item, idx) => (
            <li key={idx} className="text-xs text-gray-600 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-emerald-600 mb-4">
        Work Experience
      </h2>
      <p className="text-gray-600 max-w-3xl mb-12 text-sm">
        I have built real-world experience through internships, freelance work,
        and full-stack projects— developing scalable applications, clean UI
        systems, and reliable backend architectures using the MERN stack, Java,
        and modern design practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initialExperience.map((exp) => (
          <ExperienceItemComponent
            key={exp.id}
            exp={exp}
            isOpen={openId === exp.id}
            onToggle={() => setOpenId(openId === exp.id ? null : exp.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
