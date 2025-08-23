import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Zap, Cpu } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to the Portfolio Multiverse of Tech Innovator 2050";
  const tagline = "Building the future with Java, Web, Spring, Blockchain, and Beyond.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-primary/20 data-stream"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-24 bg-secondary/20 data-stream" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-40 bg-accent/20 data-stream" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 floating opacity-30">
        <Code className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-32 right-32 floating opacity-30" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-40 right-20 floating opacity-30" style={{ animationDelay: '4s' }}>
        <Cpu className="w-10 h-10 text-secondary" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Holographic Avatar Container */}
        <div className="mb-12 relative">
          <div className="holographic rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-card/50 flex items-center justify-center">
                <Code className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full glow-primary opacity-50"></div>
        </div>

        {/* Animated Title */}
        <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6 neon-text min-h-[1.2em]">
          <span className="inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-cyber">
          {tagline}
        </p>

        {/* Holographic Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="glass rounded-lg p-4 pulse-glow">
            <div className="text-2xl font-bold text-primary">2050</div>
            <div className="text-sm text-muted-foreground">Future Ready</div>
          </div>
          <div className="glass rounded-lg p-4 pulse-glow" style={{ animationDelay: '0.5s' }}>
            <div className="text-2xl font-bold text-secondary">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="glass rounded-lg p-4 pulse-glow" style={{ animationDelay: '1s' }}>
            <div className="text-2xl font-bold text-accent">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            Explore Multiverse
            <Zap className="ml-2 w-5 h-5 group-hover:animate-pulse" />
          </Button>
          <Button variant="holographic" size="lg">
            View Projects
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary mx-auto" />
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};