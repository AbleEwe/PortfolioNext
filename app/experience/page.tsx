"use client";

import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};


export default function ExperiencePage() {
  const t = useTranslations("Experience")
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Lola Sux",
      period: "2024 - present",
      description: t('exp1'),
      technologies: ["Next.js", "AWS", "MongoDb", "Liquid", "Shopify"]
    },
    {
      title: "Freelance Developer",
      company: "Freelance",
      period: "2023 - 2024",
      description: t('exp2'),
      technologies: ["JavaScript", "HTML", "CSS", "WordPress"]
    }
  ];
  
  return (
    <div className="container p-8 md:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <AnimatedTitle className="text-4xl font-bold mb-8" typing>{t("title")}</AnimatedTitle>
        </motion.div>
        
        <motion.div className="grid gap-6" variants={containerVariants}>
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6">
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}