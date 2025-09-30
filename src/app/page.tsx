import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PortfolioClient from "./portfolio-client";
import { Project } from "./portfolio-client";
import type { Metadata } from "next";

//set metadata
export const metadata: Metadata = {
  title: "Eslam Rizk",
  description:
    "Software Engineer with a passion for creating innovative solutions",
  keywords: ["portfolio", "projects", "web", "embedded"],
};

function loadProjects(dir: string) {
  const fullDir = path.join(process.cwd(), "projects", dir);

  // Check if directory exists
  if (!fs.existsSync(fullDir)) {
    return [];
  }

  const filenames = fs.readdirSync(fullDir);
  return filenames.map((filename) => {
    const filePath = path.join(fullDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { ...data };
  });
}

export default function Page() {
  const webProjects: Project[] = loadProjects("web").filter(
    (data): data is Project =>
      typeof data.title === "string" &&
      typeof data.description === "string" &&
      typeof data.date === "string",
  );
  const embeddedProjects: Project[] = loadProjects("embedded").filter(
    (data): data is Project =>
      typeof data.title === "string" &&
      typeof data.description === "string" &&
      typeof data.date === "string",
  );

  return (
    <PortfolioClient
      webProjects={webProjects}
      embeddedProjects={embeddedProjects}
    />
  );
}
