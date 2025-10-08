import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a mock resume download - replace with actual resume link
    const link = document.createElement('a');
    link.href = '/Dinesh-Resume.pdf'; // Make sure this matches the file in public/
    link.download = 'Dinesh-Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg md:text-xl mb-4">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1
            className="font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            style={{ fontSize: "3.37rem" }}
          >
            Dinesh Kunchi
          </h1>
          
          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Data Analyst
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Data Analyst transforming raw data into clear, actionable insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleDownloadResume}
              className="btn-hero group"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/Dineshkunchi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/dineshkunchi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};