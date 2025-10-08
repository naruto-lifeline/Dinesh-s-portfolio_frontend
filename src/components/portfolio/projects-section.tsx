import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Adventure Works",
  description: "The Adventure Works project centered on analyzing large-scale sales data to uncover trends in product performance, customer behavior, and regional sales. Using Excel, SQL, Power BI, Tableau, and Python (Pandas), I cleaned and transformed raw datasets to ensure accuracy and consistency before creating dynamic, interactive dashboards. These dashboards showcased critical insights such as revenue growth, stock movement, and sales distribution patterns. The analysis directly contributed to a 15% improvement in stock turnover and enhanced forecasting and strategic planning for the business.",
  technologies: ["Excel", "Power BI", "Tableau", "SQL"],
  githubUrl: "https://github.com/Dineshkunchi/Adventure-Works",
  highlights: [
    "Sales performance analysis",
    "Interactive dashboards in Power BI and Tableau",
    "15% improvement in stock turnover"]
    },
    {
  title: "Insurance Analytics",
description: "The Insurance Analytics project focused on analyzing policy, budget, and claims data to uncover key patterns in renewals, customer behavior, and revenue trends. Using Excel, SQL, Power BI, and Tableau, I cleaned, validated, and explored large datasets to identify insights that drove better decision-making. Through interactive dashboards, I highlighted customer retention trends, claims behavior, and overall policy performance. These insights helped improve renewal rates by 10% and strengthened the company’s ability to forecast revenue with greater accuracy.",
  technologies: ["Excel", "Power BI", "Tableau", "SQL"],
  githubUrl: "https://github.com/Dineshkunchi/Insurance-Analytics",
  highlights: [
    "Policy and revenue insights",
    "Data cleaning and validation using Excel",
    "10% increase in policy renewals"]
    },
    {
  title: "Superstore USA Analytics Dashboard",
  description:"The Superstore USA Analytics Dashboard is an interactive Tableau project analyzing sales, profit, and customer trends across categories, regions, and segments. It highlights KPIs like sales, profit margin, and return rate through bar, map, and donut charts. With dynamic filters for region and year, the dashboard provides clear visual insights to help businesses identify top-performing products and optimize decision-making using data-driven intelligence",
  technologies: ["Tableau", "Excel", "DAX", "Data Modeling", "Visualization Design"],
  githubUrl: "https://github.com/Dineshkunchi/Super-Store-",
  highlights: [
    "Sales & Profit KPIs",
    "Regional and Segment Analysis",
    "Top Products & Sales Trends"]
    },
    {
       title: "India vs Pakistan Military Power (2025)",
  description: "A Power BI dashboard comparing the military strengths of India and Pakistan across key areas such as weapons, naval assets, aircraft, defense budgets, and active personnel. It features KPI cards, bar and donut charts, and visually engaging comparisons that offer a clear, data-driven snapshot of both nations defense capabilities for 2025.",
  technologies: ["Power BI", "Excel", "Data Modeling", "Visualization Design", "DAX (Basic)"],
  githubUrl: "https://github.com/Dineshkunchi/Ind-vs-Pak-Army-Comparison",
  highlights: ["Comparative military analytics","KPI cards & dynamic visuals","Insightful Power BI storytelling"]
}
    
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A portfolio of my analytics projects, demonstrating proficiency in Excel, SQL, Power BI, and Python for data-driven decision-making.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-professional group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </span>
                    <Code className="h-5 w-5 text-primary" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge 
                          key={highlightIndex} 
                          className="bg-success/10 text-success border-success/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {/* <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://github.com/Dineshkunchi?tab=repositories', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};