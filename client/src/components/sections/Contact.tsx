import { Section, FadeIn } from "../ui/motion-wrapper";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pt-12 md:pt-16 pb-12 md:pb-16 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center pb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">
            Let's work together.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Open to opportunities, learning, and collaboration.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
           <a 
             href="mailto:rupeshkatariya1787@gmail.com"
             className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all w-full md:w-auto min-w-[250px] group"
           >
             <div className="p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
               <Mail size={24} />
             </div>
             <div className="text-left">
               <div className="text-sm text-muted-foreground">Email Me</div>
               <div className="font-medium text-foreground">rupeshkatariya1787@gmail.com</div>
             </div>
             <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
           </a>
        </FadeIn>

        <FadeIn delay={0.28} className="border-t border-border/70 pt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <p className="text-sm text-muted-foreground/80">
            Built with React, TypeScript, and curiosity.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/rupesh1787" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rupeshh1" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://medium.com/@rupeshkatariya1787" className="text-muted-foreground hover:text-foreground transition-colors">
              Medium
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
