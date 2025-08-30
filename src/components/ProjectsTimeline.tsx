import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Users, Zap } from "lucide-react";
import { ProjectDetailModal } from "./ProjectDetailModal";

interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  category: string;
  status: "completed" | "current" | "future";
  icon: any;
}

const projects: Project[] = [
  {
    id: "1",
    title: "BugZapper Web",
    period: "2023-2024",
    role: "Developer",
    description:
      "Advanced bug tracking and management system with real-time collaboration features.",
    technologies: [
      "Spring Boot",
      "MyBatis",
      "PostgreSQL",
      "Next.js",
      "NextAuth",
      "JsonB",
    ],
    category: "Web Application",
    status: "completed",
    icon: Code,
  },
  {
    id: "2",
    title: "Ownership Web",
    period: "2023-2024",
    role: "Group Leader",
    description:
      "Blockchain-based ownership verification platform using distributed ledger technology.",
    technologies: [
      "Hyperledger Fabric",
      "Golang",
      "Shell Script",
      "Spring Boot",
      "Docker",
      "CouchDB",
    ],
    category: "Blockchain",
    status: "completed",
    icon: Users,
  },
  {
    id: "3",
    title: "E-Library Mobile App",
    period: "2023-2024",
    role: "Backend Developer",
    description:
      "Digital library management system with advanced search and recommendation algorithms.",
    technologies: ["Python (Flask)", "Java (XML)", "SQLite", "Mobile API"],
    category: "Mobile Backend",
    status: "completed",
    icon: Code,
  },
  {
    id: "4",
    title: "FTB Banking System",
    period: "2025-Present",
    role: "Staff Backend Developer",
    description:
      "Next-generation banking infrastructure with microservices architecture and cloud-native design.",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "Spring Cloud",
      "Microservices",
      "Kubernetes",
    ],
    category: "Enterprise Banking",
    status: "current",
    icon: Zap,
  },
  {
    id: "5",
    title: "Krorya",
    period: "2023-2024",
    role: "Backend Developer",
    description:
      "Digital platform dedicated to preserving and promoting authentic Cambodian Khmer cuisine recipes and culinary heritage.",
    technologies: [
      "Spring Data JPA",
      "Next.js",
      "Redux",
      "TypeScript",
      "PostgreSQL",
    ],
    category: "Web Application",
    status: "completed",
    icon: Code,
  },
];

export const ProjectsTimeline = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-bold neon-text mb-4">
            Timeline of Innovations
          </h2>
          <p className="text-xl text-muted-foreground">
            Journey through technological evolution 2023→2050
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-50"></div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = project.icon;

              return (
                <div
                  key={project.id}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                    <div
                      className={`
                      w-16 h-16 rounded-full glass flex items-center justify-center
                      ${
                        project.status === "current"
                          ? "glow-primary pulse-glow"
                          : ""
                      }
                      ${project.status === "completed" ? "glow-secondary" : ""}
                      ${project.status === "future" ? "glow-accent" : ""}
                    `}
                    >
                      <IconComponent
                        className={`
                        w-8 h-8
                        ${project.status === "current" ? "text-primary" : ""}
                        ${
                          project.status === "completed" ? "text-secondary" : ""
                        }
                        ${project.status === "future" ? "text-accent" : ""}
                      `}
                      />
                    </div>
                  </div>
                  {/* Project Card */}
                  <div
                    className={`w-full max-w-md ${
                      isLeft ? "mr-auto pr-4 lg:pr-8" : "ml-auto pl-4 lg:pl-8"
                    }`}
                  >
                    <Card
                      className={`
                      holographic transition-all duration-500 hover:scale-105
                      ${
                        project.status === "current"
                          ? "border-primary/50 glow-primary"
                          : ""
                      }
                    `}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant={
                              project.status === "current"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.period}
                          </Badge>
                          <Badge variant="outline" className="font-cyber">
                            {project.status.toUpperCase()}
                          </Badge>
                        </div>
                        <CardTitle
                          className={`
                          font-cyber text-xl
                          ${project.status === "current" ? "text-primary" : ""}
                          ${
                            project.status === "completed"
                              ? "text-secondary"
                              : ""
                          }
                          ${project.status === "future" ? "text-accent" : ""}
                        `}
                        >
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {project.role} • {project.category}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4 text-muted-foreground">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs font-cyber"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          variant="holographic"
                          size="sm"
                          className="w-full"
                          onClick={() => setSelectedProject(project)}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Connecting Line */}
                  <div
                    className={`
                    absolute top-1/2 w-4 lg:w-8 h-0.5 bg-primary/30 hidden sm:block
                    ${
                      isLeft
                        ? "left-1/2 ml-4 lg:ml-8"
                        : "right-1/2 mr-4 lg:mr-8"
                    }
                  `}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
