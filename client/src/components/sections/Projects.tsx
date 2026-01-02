import { useEffect, useState } from "react";
import { Section, FadeIn } from "../ui/motion-wrapper";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "Finance Buddy – Personal Finance Manager",
    description: "A full-stack personal finance web application built to help users track income, expenses, budgets, and money flow in one place. Designed with a strong focus on real-world financial workflows, clean UI, and scalable backend architecture.",
    tags: ["Node.js", "Express", "MongoDB", "React", "TypeScript"],
    status: "Completed",
    link: "https://finance-buddy-ujvf.onrender.com/auth",
    github: "https://github.com/rupesh1787/Finance_Buddy",
    caseStudy: {
      problem:
        "Managing personal finances across multiple apps or manually is error-prone and hard to maintain. Users struggle to track expenses, monitor budgets, manage dues, and understand whether financial decisions like loans are actually affordable.",
      solution:
        "Built Finance Buddy, a full-stack personal finance application that centralizes expense tracking, budgeting, money flow, and financial decision-making. The system combines a clean, intuitive UI with a backend-first architecture and intelligent insights to support real-world financial behavior.",
      keyFeatures: [
        "Secure user authentication and session handling",
        "Income and expense tracking with categories",
        "Monthly budgets and spending limits",
        "Money owed / money to receive tracking",
        "Loan & investment decision helper with affordability insights",
        "Responsive, mobile-friendly interface",
        "Clean REST API design",
      ],
      problemsFaced: [
        "Designing reliable authentication and session management",
        "Structuring financial data for flexibility and clarity",
        "Handling edge cases in money flow and budgeting logic",
        "Creating financial insights without overwhelming the user",
        "Maintaining clean UX while adding advanced features",
      ],
      techStack: ["Node.js", "Express", "TypeScript", "React", "Tailwind CSS", "Zustand", "REST APIs"],
      learnings: [
        "Backend-first application design",
        "Authentication and session stability",
        "Translating financial rules into usable UI",
        "Designing calm, trust-focused financial interfaces",
        "Building production-ready full-stack systems",
      ],
    }
  },
  {
    title: "Developer Portfolio",
    description: "Modern, product-focused personal portfolio website showcasing projects, skills, and learning journey. Built with React, TypeScript, and Tailwind CSS with smooth animations and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    link: "https://portfolio-canvas-psi.vercel.app",
    github: "https://github.com/rupesh1787/Portfolio_me",
    caseStudy: {
      problem:
        "Lack of a professional and structured way to present projects, skills, and learning journey to recruiters and potential employers.",
      solution:
        "Built a modern, product-focused portfolio emphasizing clarity, storytelling, and user experience, using case studies instead of static descriptions.",
      keyHighlights: [
        "Clean dark UI with consistent visual language",
        "Case-study-driven project presentation",
        "Responsive across devices",
        "Smooth, minimal animations",
      ],
      problemsFaced: [
        "Maintaining design consistency across sections",
        "Balancing animations without hurting performance",
        "Structuring content for recruiter readability",
        "Managing component reusability in React",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      learnings: [
        "Product-oriented thinking",
        "UI/UX consistency",
        "Communicating work through storytelling",
      ],
    }
  }
];

function ProjectCard({ project, index, onOpen }: { project: (typeof projects)[number]; index: number; onOpen: () => void }) {
  return (
    <FadeIn delay={index * 0.15}>
      <Card className="h-full min-h-[380px] flex flex-col bg-card/70 border-border/70 hover:border-primary/30 transition-all duration-300 group">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-3">
            <Badge variant={project.status === "In Progress" ? "secondary" : "default"} className="mb-2">
              {project.status}
            </Badge>
            <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <a href={project.github} className="hover:text-primary" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={project.link} className="hover:text-primary" aria-label="Live link">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow text-base">
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" className="w-full" onClick={onOpen}>
            View Case Study
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (activeProject) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeProject]);

  return (
    <Section id="projects" className="bg-muted/30">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Projects
        </h2>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpen={() => setActiveProject(project)}
          />
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-10 max-w-4xl mx-auto">
        <Card className="bg-card/40 border-border/60 transition-all duration-300 text-center px-6 py-8">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Badge variant="outline" className="border-primary/50 text-primary">
                In Development
              </Badge>
              <span className="text-primary/70 text-lg">⚙️</span>
            </div>
            <CardTitle className="text-xl font-heading text-foreground">
              🚧 Under Active Development
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Currently building and refining new full-stack projects focused on scalability, clean APIs, and real-world use cases.
            </p>
          </CardContent>
          <CardFooter className="pt-2">
            <p className="text-xs text-muted-foreground">More projects coming soon</p>
          </CardFooter>
        </Card>
      </FadeIn>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-background/75 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            />
            <motion.div
              className="relative w-full max-w-4xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-primary/40 text-primary">
                    Case Study
                  </Badge>
                  <span className="text-sm text-muted-foreground">{activeProject.title}</span>
                </div>
                <button
                  className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  onClick={() => setActiveProject(null)}
                >
                  <ArrowLeft size={14} /> Back
                </button>
              </div>

              <div className="px-6 py-6 space-y-5 text-sm text-muted-foreground leading-relaxed max-h-[90vh] overflow-y-auto scroll-smooth">
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">Problem</h4>
                  <p>{activeProject.caseStudy.problem}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">Solution</h4>
                  <p>{activeProject.caseStudy.solution}</p>
                </div>
                {activeProject.caseStudy.keyFeatures && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground/90">
                      {activeProject.caseStudy.keyFeatures.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeProject.caseStudy.keyHighlights && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Highlights</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground/90">
                      {activeProject.caseStudy.keyHighlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeProject.caseStudy.problemsFaced && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Problems I Faced</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground/90">
                      {activeProject.caseStudy.problemsFaced.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {activeProject.caseStudy.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[11px] px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {activeProject.caseStudy.learnings && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Learnings</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground/90">
                      {activeProject.caseStudy.learnings.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
