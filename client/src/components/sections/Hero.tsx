import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Section, FadeIn } from "../ui/motion-wrapper";
import avatarImage from "@assets/stock_images/professional_minimal_f53bb200.jpg";

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Open to Internships & Entry-Level Roles
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-gradient-primary">Rupesh Katariya</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-2 md:gap-3 text-xl md:text-2xl font-light max-w-lg">
              <span className="text-foreground">Designer</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary">Developer</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground">Problem Solver</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-sm md:text-base text-muted-foreground max-w-lg">
              3rd-Year Data Science Undergraduate | Java • Full-Stack • AWS
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex gap-4">
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Projects
            </a>
          </FadeIn>
          
          <FadeIn delay={0.5} className="flex gap-6 pt-4">
             <a href="https://github.com/rupesh1787" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
               <Github className="h-6 w-6" />
             </a>
             <a href="https://www.linkedin.com/in/rupeshh1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
               <Linkedin className="h-6 w-6" />
             </a>
             <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
               <Mail className="h-6 w-6" />
             </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl ring-1 ring-white/5">
              <img 
                src={avatarImage} 
                alt="Rupesh Katariya" 
                className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
