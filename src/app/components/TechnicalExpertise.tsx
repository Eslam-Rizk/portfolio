"use client";
import { useState } from "react";
import EmbeddedSection from "./EmbeddedSection";
import WebSection from "./WebSection";

interface Project {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
  github?: string;
  tech?: string[];
}

interface TechnicalExpertiseProps {
  webProjects: Project[];
  embeddedProjects: Project[];
}

export default function TechnicalExpertise({
  webProjects,
  embeddedProjects,
}: TechnicalExpertiseProps) {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Technical Expertise
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent-dark to-web-accent rounded-full" />
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center gap-8 mb-12">
          {/*web tab*/}
          <button
            onClick={() => setActiveTab("web")}
            className={`group relative px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all duration-500 min-w-[200px] flex items-center justify-center gap-3 overflow-hidden ${
              activeTab === "web"
                ? "border-web-accent bg-gradient-to-r from-web-accent/10 to-web-accent/5 text-web-accent transform -translate-y-1 scale-105 shadow-xl shadow-web-accent/30"
                : "border-white/20 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1"
            }`}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-full" />

            <svg
              className="w-6 h-6 relative z-10"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="relative z-10">Web Development</span>
          </button>

          {/*embedded tab*/}
          <button
            onClick={() => setActiveTab("embedded")}
            className={`group relative px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all duration-500 min-w-[200px] flex items-center justify-center gap-3 overflow-hidden ${
              activeTab === "embedded"
                ? "border-embedded-accent bg-gradient-to-r from-embedded-accent/10 to-embedded-accent/5 text-embedded-accent transform -translate-y-1 scale-105 shadow-xl shadow-embedded-accent/30"
                : "border-white/20 hover:border-white/40 hover:bg-white/5 hover:-translate-y-1"
            }`}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-full" />

            <svg
              className="w-6 h-6 relative z-10"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="relative z-10">Embedded Systems</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[800px]">
          <div
            className={`transition-all duration-600 ${
              activeTab === "embedded"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            <EmbeddedSection projects={embeddedProjects} />
          </div>

          <div
            className={`transition-all duration-600 ${
              activeTab === "web"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            <WebSection projects={webProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
