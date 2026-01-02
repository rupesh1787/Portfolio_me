import { Section, FadeIn } from "../ui/motion-wrapper";
import {
  Code,
  Database,
  Layout,
  GitBranch,
  Cloud,
  Terminal,
  Cpu,
} from "lucide-react";

const skills = [
  { name: "DSA & Problem Solving", icon: Cpu, level: 60, description: "Solved 200+ problems in Java across arrays, recursion, trees, and DP" },
  { name: "JavaScript", icon: Code, level: 55, description: "Used in real-world projects with clean, modular code" },
  { name: "MongoDB & SQL", icon: Database, level: 50, description: "Designed schemas, CRUD APIs, and relational queries" },
  { name: "HTML & CSS", icon: Layout, level: 65, description: "Responsive layouts, animations, and accessibility-first design" },
  { name: "Git & GitHub", icon: GitBranch, level: 60, description: "Version control, clean commits, project documentation" },
  { name: "System Design", icon: Terminal, level: 40, description: "Learning basics (in progress)" },
  { name: "Cloud (AWS)", icon: Cloud, level: 35, description: "Learning" },
];

export function Skills() {
  return (
    <Section id="skills" className="pt-16 md:pt-24 pb-14 md:pb-20">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Technical Skills
        </h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <FadeIn key={skill.name} delay={index * 0.1}>
            <div
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-[320ms] hover:-translate-y-0.5 flex flex-col gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              tabIndex={0}
              role="button"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 group-focus-visible:translate-x-1">
                  <skill.icon size={26} strokeWidth={1.4} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-muted/40 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary/70 via-primary to-primary/60 origin-left scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-[360ms]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.8}>
        <div className="text-center mt-14 max-w-2xl mx-auto space-y-6">
          <div className="h-px w-28 mx-auto bg-muted/50" />
          <blockquote className="text-lg md:text-xl text-muted-foreground/70 leading-[1.6] tracking-[0.02em] px-6">
            The only time we truly fail is when we decide to give up.
          </blockquote>
        </div>
      </FadeIn>
    </Section>
  );
}
