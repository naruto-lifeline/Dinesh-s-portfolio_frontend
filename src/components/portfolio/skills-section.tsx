import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Layers,
  Settings
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Manipulation & SQL",
      icon: <Server className="h-6 w-6" />,
      skills: ["Excel (Power Query, PivotTables, XLOOKUP)",
"SQL (Joins, CTEs, Window Functions)",
"Query Optimization & Data Extraction",
"Python (Pandas, NumPy)",
"Data Cleaning & Validation"]
    },
    {
      title: "Visualization & BI", 
      icon: <Globe className="h-6 w-6" />,
      skills: ["Power BI (DAX, Data Modeling, Dashboards)",
"Tableau (Calculated Fields, Interactive Dashboards)",
"Excel Dashboards (Charts, Slicers, KPIs)",
"Matplotlib / Plotly (Visualization Libraries)",
"Dashboard UX & Data Storytelling"]
    },
    {
      title: "Statistics & Modeling",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Descriptive & Inferential Statistics",
"Trend & Forecast Modeling",
"Correlation & Regression (Basics)",
"Data Distribution & Sampling Concepts"]
    },
    {
      title: "Tools & Domain Exposure",
      icon: <Layers className="h-6 w-6" />,
      skills: ["MySQL Workbench",
"Jupyter Notebook, VS Code,GitHub",
"Power BI","Tableau Public",
"SAP (Sales & Inventory Exports)",
"Supply Chain Management"]
    }
  ];

  const technicalSkills = [
    { name: "Excel", level: 90 },
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "Python Libraries", level: 80 },
    { name: "Data Visualization & Storytelling", level: 80 },
    { name: "Data Cleaning & Data Validation", level: 80 },
    { name: "ETL / Data Transformation", level: 80 }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and development capabilities
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-professional group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <Card className="card-professional">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};