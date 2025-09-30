"use client";
import { useState, useEffect } from "react";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Theme-based nav link styles
  const navLinkBase =
    "font-medium transition-all duration-300 px-4 py-2 rounded-full";
  const navLinkLight =
    "text-black hover:bg-accent-dark/10 hover:text-accent-dark";
  const navLinkDark =
    "text-white hover:bg-accent-dark/20 hover:text-accent-dark";

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 border-b ${
        theme === "light"
          ? `${isScrolled ? "bg-white/98" : "bg-white/95"} border-black/10`
          : `${isScrolled ? "bg-primary-dark/98" : "bg-primary-dark/95"} border-white/10`
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-accent-dark to-web-accent bg-clip-text text-transparent">
            Eslam Rizk
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={`${navLinkBase} ${
                  theme === "light" ? navLinkLight : navLinkDark
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("expertise")}
                className={`${navLinkBase} ${
                  theme === "light" ? navLinkLight : navLinkDark
                }`}
              >
                Expertise
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${navLinkBase} ${
                  theme === "light" ? navLinkLight : navLinkDark
                }`}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full border-2 ${theme === "light" ? "border-black/20" : "border-white/20"} hover:border-accent-dark hover:scale-110 transition-all duration-300`}
          >
            {theme === "light" ? (
              <svg className="w-5 h-5" fill="dark" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
