import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = {
  "Frontend": [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"
  ],
  "Backend": [
    "Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"
  ],
  "DevOps & Tools": [
    "Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"
  ],
  "Soft Skills": [
    "Problem Solving", "Team Leadership", "Communication", "Agile Methodology"
  ]
};

export default function SkillsPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
      
      <div className="grid gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}