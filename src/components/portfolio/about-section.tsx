import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and professional
              journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personal Info */}
            <Card className="card-professional lg:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Personal Info</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  
                </p>
                <br />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I’m a curious, detail-driven Data Analyst with a B.Tech in Information Technology from GMR Institute of Technology (2020–2024). I love transforming raw, messy data into meaningful insights and creating dashboards that actually tell a story. Over the past year, I’ve automated repetitive reports, improved data accuracy, and cut down manual work for stakeholders by more than 20%.

What excites me most is using modern data practices—cleaning, exploration, statistical testing, and visualization—to solve real business problems. I’m always eager to learn new tools and techniques, and I approach every project with both analytical precision and creative problem-solving. My goal is simple: deliver clear, actionable insights that help people make better decisions.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
                
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Certificates</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Education */}
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">
                      Bachelor of Information Technology
                    </h4>
                    <p className="text-muted-foreground font-medium">
                      GMR Institute of Technology{" "}
                    </p>
                    <p className="text-sm text-muted-foreground">2020 - 2024</p>
                    <p className="text-muted-foreground mt-2">
                      Graduated with Information Technology Background, I’ve transitioned my focus toward data analytics—specializing in cleaning, modeling, and visualizing data to transform raw information into clear, decision-ready insights.                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">
                      Granules Pvt Ltd - Data Analyst
                    </h4>
                    <p className="text-muted-foreground font-medium">
                      Full Time
                    </p>
                    <p className="text-sm text-muted-foreground">
                      July 2025 - October 2025
                    </p>
                    <p className="text-muted-foreground mt-2">
                      I support the Planning and Sales teams by delivering accurate and consistent MIS reports that drive informed decisions. My work involves automating Excel-based reports, standardizing KPIs, and ensuring SAP exports remain clean and reliable for analysis.

I’ve automated daily, weekly, and monthly MIS reports—covering Sales, Demand vs Supply, and Inventory—using SAP data, reducing manual effort by around 20% and improving overall accuracy. I take ownership of the Sales Register and Dispatch Plans, track variances, and document root causes to maintain transparency across each sales cycle.

By cleaning and validating SAP data through format checks and lookups, I’ve consistently delivered 100% error-free reports for planning and analysis.  

Tools: Excel (Power Query, Pivot Tables), SAP Exports
Focus Areas: MIS Reporting, KPI Standardization, Data Quality, Visualization & Charts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
