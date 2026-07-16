"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="px-6 py-32 sm:px-10 sm:py-40 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/images/deveza.jpg"
              alt="Guilhermy Deveza"
              fill
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-muted-dim">
            Sobre
          </span>
          <h2 className="font-display mt-4 text-3xl tracking-tight text-paper sm:text-4xl">
            Guilhermy Deveza
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Sou Desenvolvedor Full Stack e estudante de Gestão da Tecnologia da Informação, com foco no desenvolvimento de aplicações web modernas e escaláveis. Desenvolvo aplicações completas, desde interfaces responsivas em React até APIs REST e integrações com bancos de dados utilizando TypeScript, Node.js e PostgreSQL. Busco escrever código limpo, criar soluções de qualidade e evoluir continuamente como desenvolvedor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}