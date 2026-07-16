"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Copy, Check } from "lucide-react";
import { contactLinks } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-32 sm:px-10 sm:py-40 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-dim">
            Contato
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-balance text-4xl tracking-tight text-paper sm:text-6xl">
            Vamos conversar sobre o próximo projeto.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <button
            onClick={copyEmail}
            className="group flex items-center gap-3 rounded-full border border-line-strong px-6 py-4 text-left transition-colors hover:border-accent-soft"
          >
            <span className="text-base text-paper">{contactLinks.email}</span>
            {copied ? (
              <Check size={16} className="text-accent-soft" />
            ) : (
              <Copy
                size={16}
                className="text-muted-dim transition-colors group-hover:text-accent-soft"
              />
            )}
          </button>

          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-line px-6 py-4 text-paper transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-line px-6 py-4 text-paper transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
