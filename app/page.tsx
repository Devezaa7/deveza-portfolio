import { Hero } from "@/components/hero";
import { SelectedProjects } from "@/components/selected-projects";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-grain">
      <Hero />
      <SelectedProjects />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
