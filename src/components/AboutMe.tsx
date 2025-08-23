import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code2, Database, Globe, ArrowRight } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface Skill {
  name: string;
  category: string;
  icon: any;
  description: string;
}

const currentSkills: Skill[] = [
  {
    name: "Frontend Development",
    category: "Client-Side",
    icon: Globe,
    description: "React, Next.js, Modern UI/UX"
  },
  {
    name: "Backend Engineering", 
    category: "Server-Side",
    icon: Code2,
    description: "Java Spring, REST APIs, Microservices"
  },
  {
    name: "Database Systems",
    category: "Data Layer",
    icon: Database,
    description: "MySQL, PostgreSQL, Data Architecture"
  }
];

export const AboutMe = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-bold neon-text mb-4">
            About the Innovator
          </h2>
          <p className="text-xl text-muted-foreground">
            Crafting tomorrow's technology today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left">
            {/* Profile Avatar */}
            <div className="relative mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden glass glow-primary">
                  <img 
                    src={profileAvatar} 
                    alt="Tech Innovator Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Holographic Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                <div className="absolute inset-4 rounded-full border border-secondary/20"></div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <h3 className="text-2xl font-cyber font-bold text-primary mb-4">
                Mission Statement
              </h3>
              
              <p className="text-foreground leading-relaxed">
                I am currently pursuing a bachelor's degree in{" "}
                <span className="text-primary font-cyber">Information Technology Engineering</span> at{" "}
                <span className="text-secondary font-cyber">Royal Phnom Penh University</span>, 
                where I'm building a strong foundation in advanced computing systems and software architecture.
              </p>

              <p className="text-foreground leading-relaxed">
                Simultaneously, I'm enrolled in a comprehensive{" "}
                <span className="text-accent font-cyber">Full-Stack Web Development program</span> at{" "}
                <span className="text-secondary font-cyber">HRD Center</span>, gaining hands-on experience 
                in cutting-edge technologies that power the modern web.
              </p>

              <p className="text-foreground leading-relaxed">
                I am eager to apply my academic knowledge and practical skills to contribute to 
                innovative projects and make a meaningful impact in the tech industry, driving 
                digital transformation and creating solutions for tomorrow's challenges.
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="default" className="font-cyber">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  IT Engineering Student
                </Badge>
                <Badge variant="secondary" className="font-cyber">
                  Full-Stack Developer
                </Badge>
                <Badge variant="outline" className="font-cyber">
                  Future Tech Leader
                </Badge>
              </div>
            </div>
          </div>

          {/* Current Focus Areas */}
          <div className="space-y-6">
            <h3 className="text-2xl font-cyber font-bold text-secondary mb-6 text-center lg:text-left">
              Current Focus Areas
            </h3>
            
            {currentSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              
              return (
                <Card key={skill.name} className="holographic transition-all duration-500 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary glow-primary flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-cyber font-bold text-foreground">
                            {skill.name}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Call to Action */}
            <div className="pt-6">
              <Button variant="hero" className="w-full group">
                Connect & Collaborate
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Education Institutions Showcase */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="holographic">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary glow-primary flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-cyber font-bold text-primary mb-2">
                Royal Phnom Penh University
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Information Technology Engineering
              </p>
              <Badge variant="secondary">Academic Excellence</Badge>
            </CardContent>
          </Card>

          <Card className="holographic">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-card glow-secondary flex items-center justify-center">
                <Code2 className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-cyber font-bold text-secondary mb-2">
                HRD Center
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Full-Stack Web Development
              </p>
              <Badge variant="outline">Practical Skills</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};