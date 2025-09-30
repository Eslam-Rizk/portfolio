"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechnicalExpertise from "./components/TechnicalExpertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export interface Project {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
  github?: string;
  tech?: string[];
}

export default function PortfolioClient({
  webProjects,
  embeddedProjects,
}: {
  webProjects: Project[];
  embeddedProjects: Project[];
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
    }
  };

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: "var(--primary-dark)",
        color: "var(--text-dark)",
      }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <TechnicalExpertise
        webProjects={webProjects}
        embeddedProjects={embeddedProjects}
      />
      <Contact />
      <Footer />
    </div>
  );
}
