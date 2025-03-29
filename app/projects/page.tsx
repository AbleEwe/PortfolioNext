import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/johndoe/taskmanager",
    demo: "https://taskmanager-demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with interactive maps and detailed forecasts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Vue.js", "OpenWeather API", "D3.js"],
    github: "https://github.com/johndoe/weather",
    demo: "https://weather-demo.com"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}