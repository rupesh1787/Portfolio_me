import { Section, FadeIn } from "../ui/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
            About Me
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <Card className="bg-card/50 border-white/5 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a 3rd-year Data Science undergraduate who enjoys building clean, scalable software and solving problems from first principles. I focus on Java-based data structures and algorithms, full-stack development, and cloud fundamentals.
              </p>
              <p>
                I actively work on real-world projects to strengthen my understanding of backend architecture, APIs, databases, and deployment. Alongside technical skills, I value clear communication and product thinking, and I regularly write to document my learning and simplify complex concepts.
              </p>
              <p>
                I'm continuously learning and improving, with the goal of becoming a well-rounded engineer who builds reliable and thoughtful software.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
