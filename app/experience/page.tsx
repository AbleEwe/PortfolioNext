import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Lola Sux",
    period: "2024 - present",
    description: "Optimized e-commerce platforms (React, Next.js, Shopify) by reducing load times by 25–30%, resolving legacy code, and implementing caching strategies; migrated to Next.js for 40% higher SEO traffic, built full-stack apps (AWS, MongoDB) with 99.9% uptime, and delivered high-impact Shopify themes/extensions to boost UX and conversions—all under tight deadlines.",
    technologies: ["Next.js", "AWS", "MongoDb", "Liquid", "Shopify"]
  },
  {
    title: "Freelance Developer",
    company: "Freelance",
    period: "2023 - 2024",
    description: "Delivered responsive web apps and e-commerce solutions for clients, optimizing site performance by 20%+ through code refinements and Lighthouse audits. Assisted in app integrations to enhance UX, while meeting tight project deadlines with scalable results.",
    technologies: ["JavaScript", "HTML", "CSS", "WordPress"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="container p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-accent">{experience.title}</h2>
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