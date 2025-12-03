import React from "react";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
          Have an opportunity, idea, or project in mind? Let’s talk. I’m open to
          full-time roles and collaborations where I can build, design, and
          deliver meaningful digital experiences.
        </p>

        <a
          href="mailto:suzkhan135@gmail.com"
          className="inline-block bg-white border border-gray-800 text-gray-800 px-8 py-2 rounded text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all mb-12"
        >
          Say Hello
        </a>

        <div className="flex justify-center space-x-2 mb-16">
          {/* Email */}
          <a
            href="mailto:suzkhan135@gmail.com"
            className="p-2 bg-emerald-50 rounded text-emerald-600 hover:bg-emerald-100 transition-colors"
          >
            <Mail size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SufyTech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-50 rounded text-emerald-600 hover:bg-emerald-100 transition-colors"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sufiyan-khan-a86521301"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-50 rounded text-emerald-600 hover:bg-emerald-100 transition-colors"
          >
            <Linkedin size={18} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/@sk_beater"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-50 rounded text-emerald-600 hover:bg-emerald-100 transition-colors"
          >
            <Twitter size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/heart_beater_sk?igsh=c2w5Z2N6c3I4Mnk3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-50 rounded text-emerald-600 hover:bg-emerald-100 transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        <div className="text-[10px] text-gray-400">
          Designed and Developed by{" "}
          <span className="text-emerald-600 font-semibold">Sufiyan Khan</span>.
          Built with React, Tailwind CSS, and Framer Motion.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
