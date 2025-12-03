import React from "react";
import { CertificationItem } from "../types";

const certifications: CertificationItem[] = [
  {
    id: "1",
    title: "Tata Group Data Analytics Job Simulation",
    issuer: "Tata Group",
    image: "c1.png",
    date: "Oct 2025",
    subtitle:
      "Data analysis, business insights, dashboard interpretation, Excel-based decision-making.",
  },
  {
    id: "2",
    title: "Deloitte Australia Technology Job Simulation",
    issuer: "Deloitte Australia",
    image: "c2.png",
    date: "Oct 2025",
    subtitle:
      "Technology consulting, solution architecture, client problem-solving, technical strategy.",
  },
  {
    id: "3",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    image: "c3.png",
    date: "Feb 2025",
    subtitle:
      "Data exploration, visualization, KPI reporting, real-world analytics case tasks.",
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Skill Certifications
      </h2>
      <p className="text-gray-600 mb-8 text-sm max-w-3xl">
        Earned industry-recognized certifications from Tata Group and Deloitte
        by completing rigorous, real-world simulations in data analytics,
        technology operations, and strategic problem-solving.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-emerald-50/30 p-4 rounded-lg border border-emerald-100 flex flex-col items-center"
          >
            <div className="w-full aspect-[4/3] bg-white rounded mb-3 overflow-hidden shadow-sm border border-gray-100">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xs font-bold text-center text-gray-800 mb-1">
              {cert.title}
            </h3>
            <p className="text-[10px] text-gray-500 mb-1">{cert.issuer}</p>
            <p className="text-[9px] text-gray-400">{cert.date}</p>
          </div>
        ))}
        -
      </div>
    </section>
  );
};

export default Certifications;
