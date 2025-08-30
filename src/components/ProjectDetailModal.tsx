import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  User, 
  Code, 
  Database, 
  Server,
  Globe,
  Shield,
  Zap
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  category: string;
  status: 'completed' | 'current' | 'future';
  icon: any;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Extended project details
const projectDetails: { [key: string]: any } = {
  "1": {
    fullDescription: "BugZapper Web is a comprehensive bug tracking and project management platform designed for modern development teams. Built with a microservices architecture, it provides real-time collaboration features, advanced reporting, and seamless integration with popular development tools.",
    achievements: [
      "Reduced bug resolution time by 40%",
      "Implemented real-time notifications system",
      "Designed responsive UI/UX for optimal user experience",
      "Integrated with CI/CD pipelines for automated testing"
    ],
    features: [
      "Real-time bug tracking and assignment",
      "Advanced filtering and search capabilities", 
      "Team collaboration and communication tools",
      "Comprehensive reporting and analytics",
      "REST API for third-party integrations"
    ],
    challenges: [
      "Implementing real-time updates across multiple users",
      "Optimizing database queries for large datasets",
      "Ensuring data consistency in distributed environment"
    ]
  },
  "2": {
    fullDescription: "Ownership Web leverages blockchain technology to create a transparent and immutable system for ownership verification. Built on Hyperledger Fabric, it provides a secure platform for digital asset management and ownership transfers.",
    achievements: [
      "Successfully led a team of 5 developers",
      "Implemented blockchain-based ownership verification",
      "Reduced verification time from days to minutes",
      "Achieved 99.9% uptime with containerized deployment"
    ],
    features: [
      "Blockchain-based ownership records",
      "Smart contract automation",
      "Multi-signature verification system",
      "Decentralized identity management",
      "Audit trail and compliance reporting"
    ],
    challenges: [
      "Understanding and implementing blockchain concepts",
      "Managing team coordination and project timelines",
      "Ensuring scalability of blockchain network"
    ]
  },
  "3": {
    fullDescription: "E-Library Mobile App is a digital library management system that revolutionizes how users discover, access, and manage digital content. Features advanced search algorithms and personalized recommendations.",
    achievements: [
      "Implemented efficient search algorithms",
      "Designed scalable backend architecture",
      "Integrated multiple content formats support",
      "Achieved 95% user satisfaction rating"
    ],
    features: [
      "Advanced search and filtering",
      "Personalized book recommendations",
      "Offline reading capabilities",
      "User progress tracking",
      "Multi-format content support"
    ],
    challenges: [
      "Optimizing mobile app performance",
      "Implementing offline functionality",
      "Managing large content databases"
    ]
  },
  "4": {
    fullDescription: "FTB Banking System represents the next generation of financial technology, built with cloud-native microservices architecture. This enterprise-grade system handles millions of transactions while maintaining the highest security standards.",
    achievements: [
      "Processing 1M+ transactions daily",
      "Achieved PCI DSS compliance",
      "Implemented zero-downtime deployments",
      "Reduced system response time by 60%"
    ],
    features: [
      "Cloud-native microservices architecture",
      "Real-time transaction processing",
      "Advanced fraud detection system",
      "Multi-currency support",
      "Comprehensive audit and compliance tools"
    ],
    challenges: [
      "Ensuring financial data security",
      "Implementing real-time processing at scale",
      "Meeting strict regulatory requirements"
    ]
  },
  "5": {
    fullDescription: "Cambodia's Khmer cuisine is diverse, unique, and deeply integrated with the cultures of Cambodia. Unfortunately, even the most devoted food lovers find it extremely difficult to locate authentic Khmer recipes online. Even with the existence of global culinary platforms, many do not have a specific section for Khmer foods, making it impossible for customers to access authentic recipes. This gap in digital culinary resources created the need of an application solely dedicated to the preservation and promotion of traditional Cambodian cuisines.",
    achievements: [
      "Preserved traditional Cambodian recipes digitally",
      "Created comprehensive recipe database",
      "Implemented advanced search and filtering",
      "Built user-friendly recipe sharing platform"
    ],
    features: [
      "Authentic Khmer recipe collection",
      "Advanced recipe search and filtering",
      "User recipe sharing and rating system",
      "Cultural context and cooking tips",
      "Ingredient substitution recommendations"
    ],
    challenges: [
      "Researching and validating authentic recipes",
      "Building scalable backend architecture",
      "Implementing complex search algorithms"
    ]
  }
};

export const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  const details = projectDetails[project.id] || {};
  const IconComponent = project.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto holographic">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-cyber">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center
              ${project.status === 'current' ? 'bg-primary glow-primary' : ''}
              ${project.status === 'completed' ? 'bg-secondary glow-secondary' : ''}
              ${project.status === 'future' ? 'bg-accent glow-accent' : ''}
            `}>
              <IconComponent className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className={`
                ${project.status === 'current' ? 'text-primary' : ''}
                ${project.status === 'completed' ? 'text-secondary' : ''}
                ${project.status === 'future' ? 'text-accent' : ''}
              `}>
                {project.title}
              </div>
              <div className="text-sm text-muted-foreground font-normal">
                {project.category} • {project.role}
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-cyber">Timeline</div>
                <div className="text-xs text-muted-foreground">{project.period}</div>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <User className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="text-sm font-cyber">Role</div>
                <div className="text-xs text-muted-foreground">{project.role}</div>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <Badge variant={project.status === 'current' ? 'default' : 'secondary'} className="w-full">
                  {project.status.toUpperCase()}
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-cyber font-bold mb-3 text-primary">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {details.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-cyber font-bold mb-3 text-secondary">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="font-cyber">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {details.features && (
            <div>
              <h3 className="text-lg font-cyber font-bold mb-3 text-accent">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {details.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {details.achievements && (
            <div>
              <h3 className="text-lg font-cyber font-bold mb-3 text-primary">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {details.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {details.challenges && (
            <div>
              <h3 className="text-lg font-cyber font-bold mb-3 text-secondary">Technical Challenges</h3>
              <div className="space-y-2">
                {details.challenges.map((challenge: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <Code className="w-4 h-4 text-secondary mt-0.5" />
                    <span className="text-sm text-muted-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
            <Button variant="hero" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              View Source Code
            </Button>
            <Button variant="holographic" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};