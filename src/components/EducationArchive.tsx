import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Cpu } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  period: string;
  status: string;
  specialization?: string;
  achievements: string[];
  icon: any;
}

const education: Education[] = [
  {
    institution: "Royal University of Phnom Penh",
    degree: "IT Engineering",
    period: "2021-2025",
    status: "Graduate",
    achievements: ["Software Engineering Focus", "Database Systems", "Network Architecture", "AI & Machine Learning"],
    icon: GraduationCap
  },
  {
    institution: "HRD Center",
    degree: "Full-Stack Web Development",
    period: "2024-2025",
    status: "Advanced Certificate",
    specialization: "Modern Web Technologies",
    achievements: ["React & Next.js Mastery", "Cloud Architecture", "DevOps Practices", "API Design"],
    icon: Award
  },
  {
    institution: "Blockchain Academy",
    degree: "Blockchain Specialization",
    period: "2024",
    status: "Certified",
    specialization: "Distributed Systems",
    achievements: ["Hyperledger Fabric", "Smart Contracts", "DeFi Protocols", "Crypto Economics"],
    icon: Cpu
  }
];

export const EducationArchive = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-bold neon-text mb-4">
            Knowledge Archive
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic foundations for future innovation
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            
            return (
              <Card key={edu.institution} className="holographic floating" style={{ animationDelay: `${index * 0.5}s` }}>
                <CardContent className="p-6">
                  {/* Holographic Seal */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-primary glow-primary flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                    </div>
                  </div>

                  {/* Institution */}
                  <h3 className="font-cyber text-lg font-bold text-primary mb-2 text-center">
                    {edu.institution}
                  </h3>

                  {/* Degree */}
                  <h4 className="font-cyber text-foreground mb-2 text-center">
                    {edu.degree}
                  </h4>

                  {/* Period & Status */}
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge variant="secondary">{edu.period}</Badge>
                    <Badge variant="outline">{edu.status}</Badge>
                  </div>

                  {/* Specialization */}
                  {edu.specialization && (
                    <div className="text-center mb-4">
                      <span className="text-sm text-accent font-cyber">
                        {edu.specialization}
                      </span>
                    </div>
                  )}

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-cyber text-muted-foreground mb-3 text-center">
                      Key Learnings
                    </h5>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Floating Certification Seals */}
        <div className="relative mt-16 h-32">
          <div className="absolute top-0 left-1/4 floating opacity-30">
            <div className="w-16 h-16 rounded-full glass glow-secondary flex items-center justify-center">
              <span className="text-xs font-cyber text-secondary">2025</span>
            </div>
          </div>
          <div className="absolute top-8 right-1/4 floating opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-12 h-12 rounded-full glass glow-accent flex items-center justify-center">
              <span className="text-xs font-cyber text-accent">CERT</span>
            </div>
          </div>
          <div className="absolute top-4 left-1/2 floating opacity-30" style={{ animationDelay: '4s' }}>
            <div className="w-20 h-20 rounded-full glass glow-primary flex items-center justify-center">
              <span className="text-xs font-cyber text-primary">HONOR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};