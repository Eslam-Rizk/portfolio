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

interface WebSectionProps {
  projects: Project[];
}

const webSkills = [
  {
    category: "Frontend",
    icon: "paint-brush",
    skills: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "React", icon: "fab fa-react" },
      { name: "Next.js", icon: "fas fa-bolt" },
      { name: "Tailwind", icon: "fab fa-bootstrap" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fas fa-rocket" },
      { name: "RESTful APIs", icon: "fas fa-api" },
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "JWT", icon: "fas fa-shield-alt" },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", icon: "fas fa-leaf" },
      { name: "PostgreSQL", icon: "fas fa-elephant" },
      { name: "SQLite", icon: "fas fa-database" },
      { name: "Prisma", icon: "fas fa-prism-alt" },
    ],
  },
  {
    category: "Development Tools",
    icon: "tools",
    skills: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "Version Control", icon: "fas fa-code-branch" },
      { name: "Agile/Jira", icon: "fas fa-tasks" },
    ],
  },
];

const defaultWebProjects = [
  {
    title: "Sahla LMS Platform",
    description:
      "Multi-tenant Learning Management System with AI quiz generation, student dashboard, and interactive coding lessons with integrated playground.",
    tech: ["Next.js", "Prisma", "Stripe", "AI Integration"],
    image: "fas fa-graduation-cap",
    link: "#",
    github: "#",
  },
  {
    title: "Game Haven E-commerce",
    description:
      "Full-stack e-commerce platform for video game sales with secure authentication, shopping cart, and admin dashboard for inventory management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    image: "fas fa-gamepad",
    link: "#",
    github: "#",
  },
  {
    title: "Readit Social Platform",
    description:
      "Social media platform featuring user profiles, posts, comments, friend/follow system with advanced post management capabilities.",
    tech: ["MongoDB", "Express.js", "React", "JWT"],
    image: "fas fa-users",
    link: "#",
    github: "#",
  },
  {
    title: "Clinic Management System",
    description:
      "Comprehensive clinic management solution with appointment scheduling, patient history, prescriptions tracking, and financial dashboard.",
    tech: ["React.js", "Node.js", "SQLite", "Express.js"],
    image: "fas fa-clinic-medical",
    link: "#",
    github: "#",
  },
];

export default function WebSection({ projects }: WebSectionProps) {
  const displayProjects = projects.length > 0 ? projects : defaultWebProjects;

  return (
    <div
      className="p-8 rounded-2xl border relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0c0c0c, #1e1e1e)",
        borderColor: "rgba(168, 85, 247, 0.3)",
      }}
    >
      {/* Web Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            linear-gradient(45deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px, 30px 30px, 60px 60px",
        }}
      />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-web-accent flex items-center justify-center gap-4">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Web Development
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Full-stack developer proficient in modern web technologies.
          Experienced in building scalable applications using React, Node.js,
          and various databases with a focus on user experience and performance.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
        {webSkills.map((category, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-2xl border border-web-accent/20 transition-transform duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-4 text-web-accent flex items-center gap-3">
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
                  className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 transition-all duration-300 hover:bg-web-accent/20 hover:border-web-accent hover:scale-105"
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
        <h3 className="text-3xl font-bold text-center mb-8 text-web-accent flex items-center justify-center gap-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} project={project} theme="web" />
          ))}
        </div>
      </div>
    </div>
  );
}
