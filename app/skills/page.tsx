"use client";

import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Badge } from "@/components/ui/badge";
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

const skills = {
  "Frontend": [
    "React", "Next.js", "TypeScript", "Liquid", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"
  ],
  "Backend": [
    "Node.js", "Express", "MongoDB",
  ],
  "Tools": [
    "Git", "AWS", "Webpack", "Shopify", "WordPress"
  ],
  "Soft Skills": [
    "Problem Solving", "Teamwork", "Communication", "Agile Methodology"
  ]
};

export default function SkillsPage() {

  const t = useTranslations("Skills")

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
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-accent">{category}</h2>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {skillList.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}