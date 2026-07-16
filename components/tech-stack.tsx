"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="px-6 py-32 sm:px-10 sm:py-40 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-muted-dim"
        >
          Stack
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display mt-4 max-w-2xl text-3xl tracking-tight text-paper sm:text-4xl"
        >
          Ferramentas que uso no dia a dia.
        </motion.h2>

        <div className="mt-14 border-t border-line">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group flex items-center justify-between border-b border-line py-6 transition-colors hover:border-accent-dim"
            >
              <span className="font-display text-2xl text-muted transition-colors duration-300 group-hover:text-paper sm:text-3xl">
                {tech}
              </span>
              <span className="font-mono text-xs text-muted-dim transition-colors duration-300 group-hover:text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
