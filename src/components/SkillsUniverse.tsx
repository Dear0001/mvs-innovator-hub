import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  category: string;
  level: number;
  subSkills: string[];
  color: 'primary' | 'secondary' | 'accent';
}

const skills: Skill[] = [
  {
    name: "Java Universe",
    category: "Backend",
    level: 95,
    subSkills: ["J2SE", "J2EE", "Maven", "MVC Pattern", "Spring Framework"],
    color: "primary"
  },
  {
    name: "Web Galaxy",
    category: "Frontend",
    level: 90,
    subSkills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "secondary"
  },
  {
    name: "Spring Constellation",
    category: "Framework",
    level: 92,
    subSkills: ["Spring Boot", "Spring JPA", "MyBatis", "REST APIs", "Spring Security", "JWT", "Spring Cloud"],
    color: "accent"
  },
  {
    name: "Database Nebula",
    category: "Data",
    level: 88,
    subSkills: ["Oracle", "PostgreSQL", "MySQL", "CouchDB", "SQLite"],
    color: "primary"
  },
  {
    name: "DevOps Solar System",
    category: "Tools",
    level: 85,
    subSkills: ["Linux", "Docker", "GitHub", "Shell Script", "CI/CD"],
    color: "secondary"
  },
  {
    name: "Blockchain Dimension",
    category: "Emerging",
    level: 80,
    subSkills: ["Hyperledger Fabric", "Smart Contracts", "Golang", "Web3"],
    color: "accent"
  }
];

export const SkillsUniverse = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-bold neon-text mb-4">
            Skills Universe
          </h2>
          <p className="text-xl text-muted-foreground">
            Navigate through the cosmic expanse of technologies
          </p>
        </div>

        {/* Galaxy Map */}
        <div className="relative h-[600px] mx-auto max-w-4xl">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-hero glow-primary pulse-glow"></div>
          </div>

          {/* Skill Planets */}
          {skills.map((skill, index) => {
            const angle = (index * 60) * (Math.PI / 180);
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-110"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
              >
                <div className={`
                  w-20 h-20 rounded-full glass flex items-center justify-center
                  ${skill.color === 'primary' ? 'glow-primary' : ''}
                  ${skill.color === 'secondary' ? 'glow-secondary' : ''}
                  ${skill.color === 'accent' ? 'glow-accent' : ''}
                  ${selectedSkill?.name === skill.name ? 'scale-150' : ''}
                `}>
                  <div className={`
                    w-12 h-12 rounded-full
                    ${skill.color === 'primary' ? 'bg-primary' : ''}
                    ${skill.color === 'secondary' ? 'bg-secondary' : ''}
                    ${skill.color === 'accent' ? 'bg-accent' : ''}
                    pulse-glow
                  `}></div>
                </div>
                
                {/* Skill Name */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-sm font-cyber text-foreground whitespace-nowrap">
                    {skill.name.split(' ')[0]}
                  </p>
                </div>

                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-1/2 w-0.5 bg-primary/30 origin-left"
                     style={{
                       height: '2px',
                       width: `${radius}px`,
                       transform: `translate(-50%, -50%) rotate(${180 + angle * (180/Math.PI)}deg)`,
                       transformOrigin: 'left center'
                     }}>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Detail Panel */}
        {selectedSkill && (
          <Card className="mt-12 holographic max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className={`
                  text-2xl font-cyber font-bold mb-2
                  ${selectedSkill.color === 'primary' ? 'text-primary' : ''}
                  ${selectedSkill.color === 'secondary' ? 'text-secondary' : ''}
                  ${selectedSkill.color === 'accent' ? 'text-accent' : ''}
                `}>
                  {selectedSkill.name}
                </h3>
                <Badge variant="secondary">{selectedSkill.category}</Badge>
              </div>

              {/* Skill Level */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-cyber">Mastery Level</span>
                  <span className="text-sm font-cyber">{selectedSkill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`
                      h-2 rounded-full transition-all duration-1000
                      ${selectedSkill.color === 'primary' ? 'bg-primary' : ''}
                      ${selectedSkill.color === 'secondary' ? 'bg-secondary' : ''}
                      ${selectedSkill.color === 'accent' ? 'bg-accent' : ''}
                    `}
                    style={{ width: `${selectedSkill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Sub Skills */}
              <div>
                <h4 className="text-lg font-cyber mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.subSkills.map((subSkill) => (
                    <Badge 
                      key={subSkill} 
                      variant="outline" 
                      className="font-cyber text-xs"
                    >
                      {subSkill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};