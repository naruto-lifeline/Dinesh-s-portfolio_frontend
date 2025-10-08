import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { contactApi } from "@/services/api";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  message: string;
  status?: "success" | "warning" | "error";
}

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "All fields are required!",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result: ContactResponse = await contactApi.submitContactForm(formData);

      toast({
        title: "Message Sent Successfully!",
        description: result.message || "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "dineshkunchi2002@gmail.com", href: "mailto:dineshkunchi2002@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91 7032684006", href: "tel:+917032684006" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Hyderabad", href: "#" },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/Dineshkunchi", username: "@Dineshkunchi" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/dineshkunchi/", username: "dineshkunchi" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss opportunities or collaborate on projects? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-hero"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-primary mr-4">{item.icon}</div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        {item.href !== "#" ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Professional Profiles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform mr-4">{social.icon}</div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Response Note */}
              <Card className="card-professional bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Quick Response Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to all inquiries within 24 hours. Looking forward to connecting!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
