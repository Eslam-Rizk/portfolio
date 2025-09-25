"use client";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
  github?: string;
  tech?: string[];
}

interface EmbeddedSectionProps {
  projects: Project[];
}

const embeddedSkills = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "C", icon: "fab fa-cuttlefish" },
      { name: "C++17", icon: "fab fa-cuttlefish" },
      { name: "Python", icon: "fab fa-python" },
      { name: "RTOS", icon: "fas fa-brain" },
      { name: "FreeRTOS", icon: "fas fa-tasks" },
      { name: "Data Structures", icon: "fas fa-sitemap" },
    ],
  },
  {
    category: "Microcontrollers",
    icon: "microchip",
    skills: [
      { name: "Raspberry Pi", icon: "fab fa-raspberry-pi" },
      { name: "STM32", icon: "fas fa-microchip" },
      { name: "TivaC", icon: "fas fa-microchip" },
      { name: "AVR", icon: "fas fa-microchip" },
      { name: "ESP8266", icon: "fab fa-wifi" },
    ],
  },
  {
    category: "Communication",
    icon: "exchange-alt",
    skills: [
      { name: "CAN", icon: "fas fa-car" },
      { name: "Ethernet", icon: "fas fa-ethernet" },
      { name: "MQTT", icon: "fas fa-wifi" },
      { name: "UART", icon: "fas fa-sync" },
      { name: "SPI", icon: "fas fa-exchange-alt" },
      { name: "I²C", icon: "fas fa-plug" },
    ],
  },
  {
    category: "Embedded Linux",
    icon: "linux",
    skills: [
      { name: "Linux Admin", icon: "fab fa-linux" },
      { name: "U-boot", icon: "fas fa-boot" },
      { name: "Ubuntu", icon: "fab fa-ubuntu" },
      { name: "Customization", icon: "fas fa-cog" },
    ],
  },
  {
    category: "Hardware & Tools",
    icon: "tools",
    skills: [
      { name: "PCB Design", icon: "fas fa-circuit-board" },
      { name: "Oscilloscopes", icon: "fas fa-wave-square" },
      { name: "Logic Analyzers", icon: "fas fa-search" },
      { name: "STM32CubeIDE", icon: "fas fa-cube" },
      { name: "Proteus", icon: "fas fa-atom" },
    ],
  },
];

const defaultEmbeddedProjects = [
  {
    title: "Linux-Based Smart Home System",
    description:
      "Comprehensive smart home solution featuring React web application, C++ backend, and custom Linux image with device drivers.",
    tech: ["React", "C++", "Linux", "Device Drivers"],
    image: "fas fa-home",
    link: "#",
    github: "#",
  },
  {
    title: "Advanced Driver Assistance System",
    description:
      "STM32 and Raspberry Pi-based ADAS with RTOS, FOTA capabilities, and Bluetooth connectivity, reducing update time by 30%.",
    tech: ["STM32", "Raspberry Pi", "RTOS", "FOTA"],
    image: "fas fa-car",
    link: "#",
    github: "#",
  },
  {
    title: "IoT Smart Home System",
    description:
      "Temperature monitoring and appliance control system using ESP8266 and ATmega328, achieving 25% energy savings.",
    tech: ["ESP8266", "ATmega328", "IoT", "Sensors"],
    image: "fas fa-thermometer-half",
    link: "#",
    github: "#",
  },
];

export default function EmbeddedSection({ projects }: EmbeddedSectionProps) {
  const displayProjects =
    projects.length > 0 ? projects : defaultEmbeddedProjects;

  return (
    <div
      className="p-8 rounded-2xl border relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1419, #1a2332)",
        borderColor: "rgba(0, 255, 136, 0.3)",
      }}
    >
      {/* PCB Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px),
            linear-gradient(45deg, rgba(0, 255, 136, 0.1) 2px, transparent 2px),
            linear-gradient(-45deg, rgba(0, 255, 136, 0.1) 2px, transparent 2px)
          `,
          backgroundSize:
            "40px 40px, 40px 40px, 10px 10px, 10px 10px, 80px 80px, 80px 80px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0, 20px 20px, 20px 20px",
        }}
      />

      {/* Circuit connection points */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(0, 255, 136, 0.6) 2px, transparent 2px),
            radial-gradient(circle at 60px 60px, rgba(0, 255, 136, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 100px 40px, rgba(0, 255, 136, 0.5) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "80px 80px, 120px 120px, 160px 160px",
          backgroundPosition: "0 0, 40px 40px, 80px 20px",
        }}
      />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-embedded-accent flex items-center justify-center gap-4">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          Embedded Systems Engineering
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Specialized in designing and programming embedded systems, from
          microcontrollers to complex IoT solutions. Experienced in real-time
          systems, hardware interfaces, and low-level programming.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
        {embeddedSkills.map((category, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-2xl border border-embedded-accent/20 transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-4 text-embedded-accent flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 transition-all duration-300 hover:bg-embedded-accent/20 hover:border-embedded-accent hover:scale-105"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center mb-8 text-embedded-accent flex items-center justify-center gap-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
          Key Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} project={project} theme="embedded" />
          ))}
        </div>
      </div>
    </div>
  );
}
