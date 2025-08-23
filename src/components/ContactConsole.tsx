import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, Terminal } from "lucide-react";

export const ContactConsole = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [consoleOutput, setConsoleOutput] = useState([
    "> MVSI Communication Protocol Initialized",
    "> Ready to establish connection...",
    "> Type your message and press SEND to transmit"
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setConsoleOutput(prev => [
      ...prev,
      `> Transmitting message from ${formData.name}...`,
      `> Email: ${formData.email}`,
      `> Status: SENT TO MULTIVERSE`,
      `> Response expected within 24 Earth hours`,
      "> Connection terminated successfully"
    ]);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-cyber font-bold neon-text mb-4">
            Futuristic Console
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's co-create the future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="holographic">
            <CardHeader>
              <CardTitle className="font-cyber text-primary flex items-center">
                <Terminal className="w-5 h-5 mr-2" />
                Transmission Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-cyber text-muted-foreground mb-2">
                    Identity_Name:
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your designation..."
                    className="glass font-cyber"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-cyber text-muted-foreground mb-2">
                    Contact_Protocol:
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@domain.verse"
                    className="glass font-cyber"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-cyber text-muted-foreground mb-2">
                    Message_Payload:
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your vision for collaborative innovation..."
                    className="glass font-cyber min-h-32"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Transmit to Multiverse
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Console Output */}
          <div className="space-y-6">
            {/* Terminal Output */}
            <Card className="holographic">
              <CardHeader>
                <CardTitle className="font-cyber text-secondary flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Console Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-card/50 rounded-lg p-4 font-cyber text-sm min-h-48 max-h-48 overflow-y-auto">
                  {consoleOutput.map((line, index) => (
                    <div key={index} className="text-green-400 mb-1">
                      {line}
                    </div>
                  ))}
                  <div className="text-primary animate-pulse">█</div>
                </div>
              </CardContent>
            </Card>

            {/* Communication Channels */}
            <Card className="holographic">
              <CardHeader>
                <CardTitle className="font-cyber text-accent">
                  Direct Channels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="holographic" className="w-full justify-start" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      <span className="font-cyber">GitHub Repository</span>
                    </a>
                  </Button>
                  
                  <Button variant="holographic" className="w-full justify-start" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3" />
                      <span className="font-cyber">LinkedIn Network</span>
                    </a>
                  </Button>
                  
                  <Button variant="holographic" className="w-full justify-start" asChild>
                    <a href="mailto:contact@mvs-innovator.dev">
                      <Mail className="w-5 h-5 mr-3" />
                      <span className="font-cyber">Direct Email Link</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating Data Particles */}
        <div className="relative mt-16 h-32 overflow-hidden">
          <div className="absolute top-4 left-8 floating opacity-50">
            <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
          </div>
          <div className="absolute top-12 left-1/3 floating opacity-50" style={{ animationDelay: '1s' }}>
            <div className="w-1 h-1 bg-secondary rounded-full pulse-glow"></div>
          </div>
          <div className="absolute top-8 right-1/4 floating opacity-50" style={{ animationDelay: '2s' }}>
            <div className="w-3 h-3 bg-accent rounded-full pulse-glow"></div>
          </div>
          <div className="absolute top-16 right-8 floating opacity-50" style={{ animationDelay: '3s' }}>
            <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};