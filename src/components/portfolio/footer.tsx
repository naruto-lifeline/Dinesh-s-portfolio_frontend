import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dinesh Kunchi
              </h3>
              <p className="text-muted-foreground mb-4">
                Data Analyst passionate about transforming raw data into actionable insights and building impactful dashboards that drive smarter business decisions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Dineshkunchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/dineshkunchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="mailto:dineshkunchi2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        const element = document.querySelector(
                          `#${item.toLowerCase()}`
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  )
                )}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>dineshkunchi2002@gmail.com</p>
                <p>+91 7032684006</p>
                <p>Hyderabad</p>
              </div>
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="mt-4 hover:bg-primary hover:text-primary-foreground"
              >
                Back to Top
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <footer className="mt-auto pt-8 border-t border-border flex flex-col items-center justify-center text-muted-foreground">
            <p className="text-sm sm:text-base font-medium text-center">
              © {currentYear} Dinesh — Data Analyst. Made with{" "}<Heart className="inline-block h-4 w-4 text-red-500 mb-1" />{" "}
              by Dinesh Kunchi
            </p>
            <p className="mt-2 text-xs sm:text-sm text-center text-muted-foreground">
              Building smarter decisions with data-driven insights.
            </p>
          </footer>
        </div>
      </div>
    </footer>
  );
};
