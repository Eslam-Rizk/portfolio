"use client";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-dark) 100%)",
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center">
          {/* Main Title with Gradient Animation */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-dark via-web-accent to-embedded-accent bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient 3s ease-in-out infinite alternate",
            }}
          >
            Eslam Rizk
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-text-gray-dark max-w-3xl mx-auto mb-8 leading-relaxed">
            Versatile Engineer bridging the gap between hardware and software.
            From embedded systems and IoT solutions to full-stack web
            applications, I bring innovative ideas to life through code and
            circuits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("expertise")}
              className="group px-8 py-4 bg-gradient-to-r from-accent-dark to-web-accent text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-dark/30 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              View My Skills
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 flex items-center gap-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
