"use client";

import { motion } from "framer-motion";
import { tree } from "next/dist/build/templates/app-page";
import Typewriter from "typewriter-effect";

interface AnimatedTitleProps {
  children: string;
  className?: string;
  typing?: boolean;
}

export function AnimatedTitle({ children, className = "", typing = false }: AnimatedTitleProps) {
  if (typing) {
    return (
      <h1 className={className}>
        <Typewriter
          options={{
            strings: [children],
            autoStart: true,
            loop: true, 
            cursor: "▏",   
            delay: 40,
            deleteSpeed: 99999999
          }}
        />
      </h1>
    );
  }

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}