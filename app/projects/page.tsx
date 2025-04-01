"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  const t = useTranslations('Projects');

  const projects = [
    {
      title: t('projects.moviePlatform.title'),
      description: t('projects.moviePlatform.description'),
      image: "/mqx.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "MongoDB", "Express"],
      demo: "https://mqx.mx/"
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      image: "/aida.png",
      technologies: ["Next.js", "Typescript", "Google Cloud", "Node.js"],
      demo: "https://soyaida.com/"
    },
    {
      title: t('projects.shopify.title'),
      description: t('projects.shopify.description'),
      image: "entredijes.png",
      technologies: ["Shopify", "Liquid"],
      demo: "https://entredijes.mx/"
    },
    {
      title: t('projects.todoApp.title'),
      description: t('projects.todoApp.description'),
      image: "/todoapp.png",
      technologies: ["Next.js", "Typescript", "Tailwind", "Zustand"],
      github: "https://github.com/AbleEwe/toDoApp",
      demo: "https://to-do-sm-ds.vercel.app/"
    },
    {
      title: "Corey Solar",
      description: t('projects.coreySolar.description'),
      image: "/coreysolar.png",
      technologies: ["Shopify", "CSS3", "Liquid"],
      demo: "https://coreysolar.com/"
    },
    {
      title: t('projects.landingPage.title'),
      description: t('projects.landingPage.description'),
      image: "/landing.webp",
      technologies: ["React", "CSS3", "Typescript"],
      github: "https://github.com/AbleEwe/FrancescaSantosPortfolio",
      demo: "https://francesca-santos.web.app/"
    },
  ];

  return (
    <div className="container p-8 md:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <AnimatedTitle className="text-4xl font-bold mb-8" typing>
            {t('title')}
          </AnimatedTitle>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full">
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
                          {t('codeButton')}
                        </a>
                      </Button>
                    ) : null}
                    <Button asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('demoButton')}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}