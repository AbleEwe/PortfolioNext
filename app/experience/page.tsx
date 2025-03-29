import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of enterprise applications using React, Node.js, and AWS. Managed a team of 5 developers and improved deployment efficiency by 40%.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and reduced deployment time by 60%.",
    technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"]
  },
  {
    title: "Frontend Developer",
    company: "Web Studio",
    period: "2017 - 2019",
    description: "Created responsive web applications and improved site performance across all client projects.",
    technologies: ["JavaScript", "HTML", "CSS", "jQuery"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">{experience.title}</h2>
                <p className="text-muted-foreground">{experience.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </div>
            <p className="mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}