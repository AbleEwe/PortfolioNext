import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack Movie Streaming Platform",
    description: "Developed a full-stack movie streaming platform from scratch, implementing user authentication, a seamless Stripe checkout flow, and secure media storage via AWS S3.",
    image: "/mqx.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "MongoDB", "Express"],
    demo: "https://mqx.mx/"
  },
  {
    title: "E-Commerce Platform Migration & Performance Overhaul",
    description: "I spearheaded the modernization of a legacy e-commerce platform, collaborating with backend and cloud teams to refactor inefficient code, migrate to a scalable architecture, and implement advanced caching.",
    image: "/aida.png",
    technologies: ["Next.js", "Typescript", "Google Cloud", "Node.js"],
    demo: "https://soyaida.com/"
  },
  {
    title: "High-Traffic Shopify Store",
    description: "Launched a custom Shopify store for a high-growth brand, delivering the project under a tight deadline. The store scaled to over 28,000 registered users with active sales, and through strategic UX refinements",
    image: "entredijes.png",
    technologies: ["Shopify", "Liquid"],
    demo: "https://entredijes.mx/"
  },
  {
    title: "Todo App",
    description: "A Todo list App implementing drag an drop, chatGPT and Zustand functionalities.",
    image: "/todoapp.png",
    technologies: ["Next.js", "Typescript", "Tailwind", "Zustand"],
    github: "https://github.com/AbleEwe/toDoApp",
    demo: "https://to-do-sm-ds.vercel.app/"
  },
  {
    title: "Weather app",
    description: "Website that works as weather app created with React, Typescript and an open weather API",
    image: "/weather.webp",
    technologies: ["React", "CSS3", "Typescript"],
    github: "https://github.com/AbleEwe/WeatherApp2",
    demo: "https://weatherappdsm.netlify.app/"
  },
  {
    title: "React Landing page",
    description: "A Web App developed for a real client attending his needs and objectives using React",
    image: "/landing.webp",
    technologies: ["React", "CSS3", "Typescript"],
    github: "https://github.com/AbleEwe/FrancescaSantosPortfolio",
    demo: "https://francesca-santos.web.app/"
  },
];

export default function ProjectsPage() {
  return (
    <div className="container p-8 md:p-12">
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
                {project.github ? ( 
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                ): (
                  <></>
                )}
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