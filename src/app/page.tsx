import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PortfolioClient from "./portfolio-client";

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
  const webProjects = loadProjects("web");
  const embeddedProjects = loadProjects("embedded");

  return (
    <PortfolioClient
      webProjects={webProjects}
      embeddedProjects={embeddedProjects}
    />
  );
}
