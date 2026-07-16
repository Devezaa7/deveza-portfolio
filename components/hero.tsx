"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-[140px]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.35em] text-muted"
        >
          Guilhermy Deveza — Full Stack Web Developer
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-6 text-balance text-[clamp(3.2rem,12vw,9rem)] font-medium leading-[0.92] tracking-tight text-paper"
        >
          Deveza
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-balance text-lg text-muted sm:text-xl"
        >
          Desenvolvedor Full Stack. Transformando ideias em aplicações web modernas com foco em código limpo, performance e atenção aos detalhes.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild={false} onClick={() => scrollToId("projects")}>
            Ver projetos
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToId("contact")}
          >
            Contato
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        onClick={() => scrollToId("projects")}
        aria-label="Rolar para projetos"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent-soft"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}