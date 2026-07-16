"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { projects } from "@/lib/data";

export function SelectedProjects() {
  return (
    <section id="projects" className="px-6 py-32 sm:px-10 sm:py-40 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading />

        <div className="mt-20 flex flex-col gap-28 sm:gap-36">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-baseline justify-between gap-6 border-b border-line pb-6"
    >
      <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
        Projetos selecionados
      </h2>
      <span className="font-mono text-xs text-muted-dim">
        {String(projects.length).padStart(2, "0")} no total
      </span>
    </motion.div>
  );
}

function ProjectRow({
  project,
  reversed,
}: {
  project: (typeof projects)[number];
  reversed: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface lg:col-span-7">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>

      <div className="lg:col-span-5">
        <span className="font-mono text-sm text-accent-soft">{project.index}</span>
        <h3 className="font-display mt-3 text-3xl tracking-tight text-paper sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>
        {project.role && (
          <p className="mt-3 text-[13px] text-muted-dim">{project.role}</p>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline flex items-center gap-2 text-sm text-paper"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline flex items-center gap-2 text-sm text-paper"
            >
              <ExternalLink size={15} />
              Demo
            </a>
          )}
          {project.note && (
            <span className="flex items-center gap-2 text-sm text-muted-dim">
              <Lock size={14} />
              {project.note}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
