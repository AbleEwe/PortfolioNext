"use client";

import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, FileDown } from "lucide-react";
import Image from "next/image";
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

export default function Home() {
  const t = useTranslations("HomePage")

  return (
    <div className="container p-8 md:p-12">
      <motion.div 
        className="grid gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="flex flex-col md:flex-row-reverse gap-8 md:items-start items-center"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-shrink-0"
            variants={itemVariants}
          >
            <Image 
              src="/fotomia.jpg" 
              alt="Diego Suárez" 
              width={200} 
              height={200} 
              className="rounded-full object-cover aspect-square shadow-md"
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 flex flex-col gap-4"
            variants={itemVariants}
          >
            <AnimatedTitle className="text-4xl font-bold" typing>
              Diego Suárez
            </AnimatedTitle>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={itemVariants}
            >
              {t("subitle")}
            </motion.p>
            <motion.p 
              className="text-lg"
              variants={itemVariants}
            >
              {t("text1")}
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-primary text-white border-none"
                aria-label="GitHub profile"
              >
                <GithubIcon className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-primary text-white border-none"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <a 
                href="/Cv.pdf" 
                target="_blank" 
                className="bg-primary text-white border-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10"
                aria-label="Download CV"
                download="YourName-CV.pdf"
              >
                <FileDown />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="prose dark:prose-invert max-w-none rounded-[.75rem] p-4 border shadow-md"
          variants={itemVariants}
        >          
          <h2 className="text-lg text-accent mb-2 font-semibold">{t("Title1")}</h2>
          <p>
            {t("description1")}
          </p>
        </motion.div>
        
        <motion.div 
          className="prose dark:prose-invert max-w-none rounded-[.75rem] p-4 border shadow-md"
          variants={itemVariants}
        >
          <h2 className="text-lg text-accent mb-2 font-semibold">{t("Title2")}</h2>
          <p>
            {t("description2")}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}