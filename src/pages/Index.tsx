import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { SkillsUniverse } from "@/components/SkillsUniverse";
import { ProjectsTimeline } from "@/components/ProjectsTimeline";
import { EducationArchive } from "@/components/EducationArchive";
import { ContactConsole } from "@/components/ContactConsole";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutMe />
      <SkillsUniverse />
      <ProjectsTimeline />
      <EducationArchive />
      <ContactConsole />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-cyber text-muted-foreground">
            © 2050 Tech Innovator Portfolio • Multiverse Virtual Space
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <div className="w-1 h-1 bg-primary rounded-full pulse-glow"></div>
            <div className="w-1 h-1 bg-secondary rounded-full pulse-glow" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1 h-1 bg-accent rounded-full pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
